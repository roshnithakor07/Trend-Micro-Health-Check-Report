
const ReportModel = require('../Models/reportModel')
const moment = require('moment')


let tab1 = "images/tab1.png";
const apex41pdf = async (req, res) => {
    const Report = await ReportModel.find({}).sort({ _id: -1 }).limit(1);

    let ASU = ""

    if (Report[0].agent_scheduled_updates === 'Enabled') {
        if (Report[0].agent_scheduled_updates_daily === "00:00") {
            if (Report[0].timePeriod === "00" || Report[0].timePeriod === "") {
                ASU = {
                    text: `${Report[0].agent_scheduled_updates}- ${Report[0].agent_scheduled_updates_option}`
                };
            } else {
                ASU = {
                    text: `${Report[0].agent_scheduled_updates}- ${Report[0].agent_scheduled_updates_option} Time Period: ${Report[0].timePeriod} hr`
                };
            }
        } else {
            if (Report[0].timePeriod === "00" || Report[0].timePeriod === "") {
                ASU = {
                    text: `${Report[0].agent_scheduled_updates}- ${Report[0].agent_scheduled_updates_option} ${Report[0].agent_scheduled_updates_daily}`
                };
            } else {

                ASU = {
                    text: `${Report[0].agent_scheduled_updates}- ${Report[0].agent_scheduled_updates_option} ${Report[0].agent_scheduled_updates_daily} Time Period: ${Report[0].timePeriod} hr`
                };
            }
        }

    } else {
        ASU = { text: `${Report[0].agent_scheduled_updates}` };
    }

    const preReport = [];
    let global_agents_settings = [
        [{ text: 'Global Agents Settings', rowSpan: 2, margin: [0, 30, 0, 0] }, 'Enable Clean / Delete Infected Files within Compressed Files', { text: `${Report[0].global_agents_settings1}` }, { image: `${Report[0].apeximgglobal_agents_settings1}`, style: "imgStyle", width: 15 }],
        ['', 'Enable resume schedule scan options under global agent settings', `Resume an Interrupted Scheduled Scan- ${Report[0].global_agents_settings2} & Resume a missed Scheduled Scan at the same time the next day- ${Report[0].global_agents_settings3}`, { image: `${Report[0].apeximgglobal_agents_settings2}`, style: "imgStyle", width: 15 }]
    ];

    let Apex41Para = {
        style: "common",
        alignment: 'justify',
        text: [
            {
                text: `Trend Micro Apex One protects enterprise networks from malware, network viruses, web-based threats, spyware, and mixed threat attacks. Apex One Server consists of Apex One agent program that resides at the endpoint OS and a server OS. The Apex One Security agent guards the endpoint and reports its security status to the server. Through the web-based management console, the Apex One server makes it easy to set coordinated security policies and deploy updates to every agent.
        \nTrend Micro Apex Central™ is a web-based console that provides centralized management for Trend Micro products and services at the gateway, mail server, file server, and corporate desktop levels. Administrators can use the policy management feature to configure and deploy product settings to managed products and endpoints. The Apex Central web-based management console provides a single monitoring point for antivirus and content security products and services throughout the network.`, lineHeight: 1.5,
            },
            { text: `\nApex one SaaS provisioned ${Report[0].cName} to manage a total of ${Report[0].total_service} clients.`, lineHeight: 1.5 }
        ]
    };

    if (Report[0].report_type === "On-Premises") {

        global_agents_settings = [];

        Apex41Para =
        {
            style: "common",
            alignment: 'justify',
            text: [
                {
                    text: `Trend Micro Apex One protects enterprise networks from malware, network viruses, web-based threats, spyware, and mixed threat attacks. Apex One Server consists of Apex One agent program that resides at the endpoint OS and a server OS. The Apex One Security agent guards the endpoint and reports its security status to the server. Through the web-based management console, the Apex One server makes it easy to set coordinated security policies and deploy updates to every agent.
                \nTrend Micro Apex Central™ is a web-based console that provides centralized management for Trend Micro products and services at the gateway, mail server, file server, and corporate desktop levels. Administrators can use the policy management feature to configure and deploy product settings to managed products and endpoints. The Apex Central web-based management console provides a single monitoring point for antivirus and content security products and services throughout the network.`
                }
            ]
        };

        preReport.push(
            ['System Health-Overview', 'Minimum Requirements', { text: " " }, ''],
            [{ text: 'Memory', margin: [0, 20, 0, 0] }, `${Report[0].memory1} GB (This would depend on the number of agents customer deployed. Please refer sizing guide)`, { text: `${Report[0].memory2}` }, { image: `${Report[0].apexmemory}`, margin: [0, 16, 0, 0], alignment: 'center', width: 15 }],
            ['Operating System', 'Supported OS', { text: `${Report[0].sos1}` }, { image: `${Report[0].apeximgsos}`, style: "imgStyle", width: 15 }],
            ['CPU', `${Report[0].cpu1} cores`, { text: `${Report[0].cpu2} cores` }, { image: `${tab1}`, style: "imgStyle", width: 15 }],
            ['Hostname / IP', '', { text: `${Report[0].ip1}` }, { image: tab1, style: "imgStyle", width: 15 }],
            ['Apex One Build Version', `${Report[0].version1}`, { text: `${Report[0].version2}` }, { image: `${Report[0].apeximgversions}`, style: "imgStyle", width: 15 }],
            ['Agent Management tree', 'AD / Custom / NetBIOS grouping', { text: `${Report[0].agent_management_tree}` }, { image: tab1, style: "imgStyle", width: 15 }]
        );

        global_agents_settings.push(
            [{ text: 'Global Agents Settings', rowSpan: 3 }, 'Enable Clean / Delete Infected Files within Compressed Files', { text: `${Report[0].global_agents_settings1}` }, { image: `${Report[0].apeximgglobal_agents_settings1}`, style: "imgStyle", width: 15 }],
            ['', 'Enable resume schedule scan options under global agent settings', `Resume an Interrupted Scheduled Scan- ${Report[0].global_agents_settings2} & Resume a missed Scheduled Scan at the same time the next day- ${Report[0].global_agents_settings3}`, { image: `${Report[0].apeximgglobal_agents_settings2}`, style: "imgStyle", width: 15 }],
            ['', 'Enable Smart Protection Service Proxy', `${Report[0].global_agents_settings4}`, { image: `${Report[0].apeximgglobal_agents_settings3}`, style: "imgStyle", width: 15 }],
        )
    }


    try {


        let content = [

            {
                pageBreak: "before",
                text: '4 Product Architecture',
                tocItem: ['subToc'],
                style: 'heading',

                tocMargin: [0, 5, 0, 0],
                tocStyle: { bold: true }
            },
            {
                image: Report[0].productArchitecture,
                style: "chartImage",
                width: 400,
                height: 290
            },
            //5 Apex One & Apex Central
            {
                text: '5 Apex One & Apex Central',
                tocItem: ['subToc'],
                style: ['heading', 'commonGap'],
                margin: [0, 20, 0, 0],
                tocMargin: [0, 5, 0, 0],
                tocStyle: { bold: true },
            },

            Apex41Para,

            {
                pageBreak: "before",
                text: '5.1 Apex One Configuration Overview',
                tocItem: ['subToc'],
                style: 'heading',
                tocStyle: { italics: true },
                tocMargin: [20, 5, 0, 0],
            },
            {
                fontSize: 11,
                margin: [0, 11, 0, 0],
                lineHeight: 1.5,
                table: {
                    dontBreakRows: true,
                    heights: ['*', 30],
                    body: [
                        [{ text: 'Component', style: "apexone41" }, { text: 'Trend Recommended', style: "apexone41" }, { text: 'Deployed', style: "apexone41" }, { text: 'Status', style: "apexone41" }],
                        [{ text: 'Apex one Administration Configuration Health-Overview', bold: true, colSpan: 2, fillColor: 'lightblue', }, {}, '', ''],
                        
                        ...preReport,

                        ['License', 'Within Term', { text: `${moment(Report[0].license_date1).format('DD/MM/YYYY')}` }, { image: `${Report[0].apeximglicense_date}`, style: "imgStyle", width: 15 }],
                        ['Deployed Agents', `Total Purchased Licensed Seat is ${Report[0].total_purchased_licensed}`, `${Report[0].total_deployed_licensed}`, { image: `${Report[0].apeximgDeployed_Agents}`, style: "imgStyle", width: 15 }],
                        ['Certified Safe Software Service', 'Enable Certified Safe Software Service', { text: `${Report[0].certified_safe_software_service}` }, { image: `${Report[0].apeximgCertified_Safe_Software_Service}`, style: "imgStyle", width: 15 }],
                        ['Patterns Update Status', 'Up to Date', `Up to Date- ${Report[0].patterns_update_status_uptodate} Outdated- ${Report[0].outdated}`, { image: `${Report[0].apeximgsuperman}`, style: "imgStyle", width: 15 }],

                        ['Apex Central Integration', 'Register Apex One to Apex Central', { text: `${Report[0].apex_central_integration}` }, { image: `${Report[0].apeximgapex_central_integration}`, style: "imgStyle", width: 15 }],

                        ...global_agents_settings,

                        ['Agent scheduled updates', 'Enabled', ASU, { image: `${Report[0].apeximgagent_scheduled_updates}`, style: "imgStyle", width: 15 }],

                        ['Smart Protection Server', 'Integrated/Standalone SPS Server/Global SPS', { text: `${Report[0].smart_portection_server}` }, { image: tab1, style: "imgStyle", width: 15 }],

                        ['Notification', 'Enabled', { text: `${Report[0].notification}` }, { image: `${Report[0].apeximgnotification}`, style: "imgStyle", width: 15 }],

                    ]
                }
            },

        ]


        return content;

    } catch (error) {
        console.log("Apex-41 - error")
    }

}



module.exports = { apex41pdf }


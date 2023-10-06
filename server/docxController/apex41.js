
const {ReportModel} = require('../Models/reportModel')
const moment = require('moment')
const Jimp = require("jimp");
const fs = require('fs');
const { ImageRun, HeadingLevel, Paragraph, TextRun, AlignmentType,
    Table, TableRow, TableCell, WidthType, VerticalAlign } = require("docx");

let tab1 = "images/tab1.png";

const transformation = {
    width: 20,
    height: 20
};

const apex41pdf = async (req, res) => {

    const Report = await ReportModel.find({}).sort({ _id: -1 }).limit(1);

    const firstImagePath = './images/productArchitecture.png';
    const secondImagePath = './images/PA.png';

    let imagePath;

    if (fs.existsSync(firstImagePath)) {
        imagePath = firstImagePath;
    } else {
        imagePath = secondImagePath;
    }

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
        new TableRow({
            children: [
                new TableCell({
                    verticalAlign: VerticalAlign.CENTER,
                    rowSpan: 2,
                    children: [new Paragraph({
                        alignment: AlignmentType.CENTER,
                        text: "Global Agents Settings"
                    })]
                }),
                new TableCell({ children: [new Paragraph("Enable Clean / Delete Infected Files within Compressed Files")] }),
                new TableCell({ children: [new Paragraph(Report[0].global_agents_settings1)] }),
                new TableCell({
                    verticalAlign: VerticalAlign.CENTER,
                    children: [
                        new Paragraph({
                            alignment: AlignmentType.CENTER,
                            children: [
                                new ImageRun({
                                    data: fs.readFileSync(Report[0].apeximgglobal_agents_settings1),
                                    transformation: transformation
                                }),
                            ]
                        })
                    ],
                })
            ]
        }),
        new TableRow({
            children: [
                // new TableCell({ children: [new Paragraph("Global Agents Settings")] }),
                new TableCell({ children: [new Paragraph("Enable resume schedule scan options under global agent settings")] }),
                new TableCell({ children: [new Paragraph(`Resume an Interrupted Scheduled Scan- ${Report[0].global_agents_settings2} and Resume a missed Scheduled Scan at the same time the next day- ${Report[0].global_agents_settings3}`)] }),
                new TableCell({
                    verticalAlign: VerticalAlign.CENTER,
                    children: [
                        new Paragraph({
                            alignment: AlignmentType.CENTER,
                            children: [
                                new ImageRun({
                                    data: fs.readFileSync(Report[0].apeximgglobal_agents_settings2),
                                    transformation: transformation
                                }),
                            ]
                        })
                    ],
                }),
            ],
        })

    ];

    let Apex41Para = [
        new Paragraph({
            style: "common-space",
            text: `Trend Micro Apex One protects enterprise networks from malware, network viruses, web-based threats, spyware, and mixed threat attacks. Apex One Server consists of Apex One agent program that resides at the endpoint OS and a server OS. The Apex One Security agent guards the endpoint and reports its security status to the server. Through the web-based management console, the Apex One server makes it easy to set coordinated security policies and deploy updates to every agent.`,
        }),
        new Paragraph({ style: "common-space", text: `Trend Micro Apex Central™ is a web-based console that provides centralized management for Trend Micro products and services at the gateway, mail server, file server, and corporate desktop levels. Administrators can use the policy management feature to configure and deploy product settings to managed products and endpoints. The Apex Central web-based management console provides a single monitoring point for antivirus and content security products and services throughout the network.` }),
        new Paragraph({ style: "common-space", text: `Apex one SaaS provisioned ${Report[0].cName} to manage a total of ${Report[0].total_service} clients.` })

    ]

    if (Report[0].report_type === "On-Premises") {

        global_agents_settings = [];

        Apex41Para = [
            new Paragraph({
                style: "common-space",
                text: `Trend Micro Apex One protects enterprise networks from malware, network viruses, web-based threats, spyware, and mixed threat attacks. Apex One Server consists of Apex One agent program that resides at the endpoint OS and a server OS. The Apex One Security agent guards the endpoint and reports its security status to the server. Through the web-based management console, the Apex One server makes it easy to set coordinated security policies and deploy updates to every agent.`,
            }),
            new Paragraph({ style: "common-space", text: `Trend Micro Apex Central™ is a web-based console that provides centralized management for Trend Micro products and services at the gateway, mail server, file server, and corporate desktop levels. Administrators can use the policy management feature to configure and deploy product settings to managed products and endpoints. The Apex Central web-based management console provides a single monitoring point for antivirus and content security products and services throughout the network.` }),
        ]

        preReport.push(
            // "System Health-Overview"
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph("System Health-Overview")] }),
                    new TableCell({ children: [new Paragraph("Minimum Requirements")] }),
                    new TableCell({ children: [new Paragraph("")] }),
                    new TableCell({ children: [new Paragraph("")] }),
                ],
            }),

            // "Memory"
            new TableRow({
                children: [
                    new TableCell({
                        children: [
                            new Paragraph("Memory"),
                        ],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph(`${Report[0].memory1} GB (This would depend on the number of agents customer deployed. Please refer sizing guide)`),
                        ],
                    }),
                    new TableCell({ children: [new Paragraph(`${Report[0].memory2}`)] }),
                    new TableCell({
                        verticalAlign: VerticalAlign.CENTER,
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new ImageRun({
                                        data: fs.readFileSync(Report[0].apexmemory),
                                        transformation: transformation,
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),

            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Operating System")],
                    }),
                    new TableCell({
                        children: [new Paragraph("Supported OS")],
                    }),
                    new TableCell({
                        children: [new Paragraph(`${Report[0].sos1}`)],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new ImageRun({
                                        data: fs.readFileSync(Report[0].apeximgsos),
                                        transformation: transformation,
                                    }),
                                ],
                            }),
                        ],
                        verticalAlign: VerticalAlign.CENTER,
                    }),
                ],
            }),

            // Create a TableRow for "CPU"
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("CPU")],
                    }),
                    new TableCell({
                        children: [new Paragraph(`${Report[0].cpu1} cores`)],
                    }),
                    new TableCell({
                        children: [new Paragraph(`${Report[0].cpu2} cores`)],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new ImageRun({
                                        data: fs.readFileSync(tab1),
                                        transformation: transformation,
                                    }),
                                ],
                            }),
                        ],
                        verticalAlign: VerticalAlign.CENTER,
                    }),
                ],
            }),

            // Create a TableRow for "Hostname / IP"
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Hostname / IP")],
                    }),
                    new TableCell({
                        children: [new Paragraph('')],
                    }),
                    new TableCell({
                        children: [new Paragraph(`${Report[0].ip1}`)],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new ImageRun({
                                        data: fs.readFileSync(tab1),
                                        transformation: transformation,
                                    }),
                                ],
                            }),
                        ],
                        verticalAlign: VerticalAlign.CENTER,
                    }),
                ],
            }),

            // Create a TableRow for "Apex One Build Version"
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Apex One Build Version")],
                    }),
                    new TableCell({
                        children: [new Paragraph(`${Report[0].version1}`)],
                    }),
                    new TableCell({
                        children: [new Paragraph(`${Report[0].version2}`)],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new ImageRun({
                                        data: fs.readFileSync(Report[0].apeximgversions),
                                        transformation: transformation,
                                    }),
                                ],
                            }),
                        ],
                        verticalAlign: VerticalAlign.CENTER,
                    }),
                ],
            }),

            // Create a TableRow for "Agent Management tree"
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Agent Management tree")],
                    }),
                    new TableCell({
                        children: [new Paragraph("AD / Custom / NetBIOS grouping")],
                    }),
                    new TableCell({
                        children: [new Paragraph(`${Report[0].agent_management_tree}`)],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new ImageRun({
                                        data: fs.readFileSync(tab1),
                                        transformation: transformation,
                                    }),
                                ],

                            }),
                        ],
                        verticalAlign: VerticalAlign.CENTER,
                    }),
                ],
            })
        ),

            global_agents_settings.push(
                new TableRow({
                    children: [
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            rowSpan: 3,
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: "Global Agents Settings"
                            })]
                        }),
                        new TableCell({ children: [new Paragraph("Enable Clean / Delete Infected Files within Compressed Files")] }),
                        new TableCell({ children: [new Paragraph(Report[0].global_agents_settings1)] }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new ImageRun({
                                            data: fs.readFileSync(Report[0].apeximgglobal_agents_settings1),
                                            transformation: transformation
                                        }),
                                    ]
                                })
                            ],
                        })
                    ]
                }),
                new TableRow({
                    children: [
                        // new TableCell({ children: [new Paragraph("Global Agents Settings")] }),
                        new TableCell({ children: [new Paragraph("Enable resume schedule scan options under global agent settings")] }),
                        new TableCell({ children: [new Paragraph(`Resume an Interrupted Scheduled Scan- ${Report[0].global_agents_settings2} and Resume a missed Scheduled Scan at the same time the next day- ${Report[0].global_agents_settings3}`)] }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new ImageRun({
                                            data: fs.readFileSync(Report[0].apeximgglobal_agents_settings2),
                                            transformation: transformation
                                        }),
                                    ]
                                })
                            ],
                        }),
                    ],
                }),

                new TableRow({
                    children: [
                        new TableCell({ children: [new Paragraph("Enable Smart Protection Service Proxy")] }),
                        new TableCell({ children: [new Paragraph(`${Report[0].global_agents_settings4}`)] }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new ImageRun({
                                            data: fs.readFileSync(Report[0].apeximgglobal_agents_settings3),
                                            transformation: transformation
                                        }),
                                    ]
                                })
                            ],
                        }),
                    ],
                })
            )

    }


    const content = [
        new Paragraph({
            text: '3 Product Architecture',
            heading: HeadingLevel.HEADING_1,
            spacing: {
                before: 220,
            },
            keepLines: true,
            
        }),

        new Paragraph({
            style: "image-style",
            children: [
                new ImageRun({
                    data: fs.readFileSync(imagePath),
                    transformation: {
                        width: 392,
                        height: 284
                    }

                })
            ]
        }),

        new Paragraph({
            text: '4 Apex One & Apex Central',
            heading: HeadingLevel.HEADING_1,
            keepLines: true,
        }),

        ...Apex41Para,

        new Paragraph({
            text: '4.1 Apex One Configuration Overview',
            heading: HeadingLevel.HEADING_2,
            keepLines: true,
            
            spacing: {
                after: 230,
            }
        }),

        new Table({
            margins: {
                top: 60,
                bottom: 60,
                left: 60,
                right: 50
            },
            alignment: AlignmentType.CENTER,
            columnWidths: [7000, 8000, 4500, 1000],
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            shading: {
                                color: "ffffff",
                                fill: "000000"
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 7000,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    text: 'Component',
                                })
                            ],
                        }),
                        new TableCell({
                            shading: {
                                color: "ffffff",
                                fill: "000000"
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 8000,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    text: 'Trend Recommended'
                                })
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 4500,
                                type: WidthType.DXA,
                            },
                            shading: {
                                color: "ffffff",
                                fill: "000000"
                            },
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    text: 'Deployed'
                                })
                            ],
                        }),
                        new TableCell({
                            shading: {
                                color: "ffffff",
                                fill: "000000"
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 1000,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    text: 'Status'
                                })
                            ],
                        }),
                    ],
                }),

                new TableRow({
                    children: [
                        new TableCell({

                            shading: {
                                color: "000000",
                                fill: "ADD8E6"
                            },

                            children: [new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "Apex one Administration Configuration Health-Overview",
                                        bold: true
                                    })
                                ]

                            })], columnSpan: 2
                        }),
                        new TableCell({ children: [new Paragraph("")] }),
                        new TableCell({ children: [new Paragraph("")] }),
                    ]
                }),

                ...preReport,

                //License
                new TableRow({
                    children: [
                        new TableCell({ children: [new Paragraph("License")] }),
                        new TableCell({ children: [new Paragraph("Within Term")] }),
                        new TableCell({ children: [new Paragraph(moment(Report[0].license_date1).format('DD/MM/YYYY'))] }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new ImageRun({
                                        data: fs.readFileSync(Report[0].apeximglicense_date || tab1),
                                        transformation: transformation,
                                    })
                                ]
                            })],
                        }),
                    ]
                }),
                //'Deployed Agents
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph('Deployed Agents')],
                        }),
                        new TableCell({
                            children: [
                                new Paragraph(`Total Purchased Licensed Seat is ${Report[0].total_purchased_licensed}`),
                            ]

                        }),
                        new TableCell({
                            children: [new Paragraph(Report[0].total_deployed_licensed)],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new ImageRun({
                                            data: fs.readFileSync(Report[0].apeximgDeployed_Agents || tab1),
                                            transformation: transformation
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),

                //Certified Safe Software Service
                new TableRow({
                    children: [
                        new TableCell({ children: [new Paragraph("Certified Safe Software Service")] }),
                        new TableCell({ children: [new Paragraph("Enable Certified Safe Software Service")] }),
                        new TableCell({ children: [new Paragraph(Report[0].certified_safe_software_service)] }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [

                                        new ImageRun({
                                            data: fs.readFileSync(Report[0].apeximgCertified_Safe_Software_Service || tab1),
                                            transformation: transformation
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),

                // "Patterns Update Status"
                new TableRow({
                    children: [
                        new TableCell({ children: [new Paragraph("Patterns Update Status")] }),
                        new TableCell({ children: [new Paragraph("Up to Date")] }),
                        new TableCell({ children: [new Paragraph(`Up to Date- ${Report[0].patterns_update_status_uptodate} Outdated- ${Report[0].outdated}`)] }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new ImageRun({
                                            data: fs.readFileSync(Report[0].apeximgsuperman),
                                            transformation: transformation
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),

                //Apex Central Integration
                new TableRow({
                    children: [
                        new TableCell({ children: [new Paragraph("Apex Central Integration")] }),
                        new TableCell({ children: [new Paragraph("Register Apex One to Apex Central")] }),
                        new TableCell({ children: [new Paragraph(Report[0].apex_central_integration)] }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [

                                        new ImageRun({
                                            data: fs.readFileSync(Report[0].apeximgapex_central_integration || tab1),
                                            transformation: transformation
                                        }),
                                    ],
                                }),
                            ],

                        }),
                    ],
                }),

                ...global_agents_settings,

                // "Agent scheduled updates"
                new TableRow({
                    children: [
                        new TableCell({ children: [new Paragraph("Agent scheduled updates")] }),
                        new TableCell({ children: [new Paragraph("Enabled")] }),
                        new TableCell({ children: [new Paragraph(ASU)] }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new ImageRun({
                                            data: fs.readFileSync(Report[0].apeximgagent_scheduled_updates || tab1),
                                            transformation: transformation
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),

                // "Smart Protection Server"
                new TableRow({
                    children: [
                        new TableCell({ children: [new Paragraph("Smart Protection Server")] }),
                        new TableCell({ children: [new Paragraph("Integrated/Standalone SPS Server/Global SPS")] }),
                        new TableCell({ children: [new Paragraph(Report[0].smart_portection_server)] }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new ImageRun({
                                            data: fs.readFileSync(tab1), // Assuming tab1 is the image path
                                            transformation: transformation
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),

                //  "Notification"
                new TableRow({
                    children: [
                        new TableCell({ children: [new Paragraph("Notification")] }),
                        new TableCell({ children: [new Paragraph("Enabled")] }),
                        new TableCell({ children: [new Paragraph(Report[0].notification)] }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new ImageRun({
                                            data: fs.readFileSync(Report[0].apeximgnotification || tab1),
                                            transformation: transformation
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),

            ]

        })

    ]
    return content;

    try {

    } catch (error) {
        console.log("Apex-41 - error")
    }

}



module.exports = { apex41pdf }


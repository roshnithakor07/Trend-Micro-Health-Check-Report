
const ReportModel = require('../Models/reportModel')

const tab1 = "images/tab1.png";
const tab2 = "images/tab2.png";
const tab3 = "images/tab3.png";

const getPo1 = async (req, res) => {
  const Report = await ReportModel.find({}).sort({ _id: -1 }).limit(1);



  let MTable = ""
  let RTable1 = ""
  let SPTable = ""
  let SSTable = ""

  let policyTitle = ""

  if (Report[0].checkPolicyOverviewTwoAdded === true) {
    policyTitle = `5.2.1 Policy Overview: 01 ${Report[0].OverviewPolicyName1} Policy`;
  } else {
    policyTitle = `5.2 Policy Overview: ${Report[0].OverviewPolicyName1} Policy`;
  }

  let vp_mode = ""
  if (Report[0].vp_mode !== "Inline") {
    vp_mode = `${Report[0].vulnerability_protection} with Tap (Detect-only) Mode`
  } else {
    vp_mode = `${Report[0].vulnerability_protection} with Inline Mode`
  }



  //SSPS

  switch (Report[0].configure_schedule_scan_checkbox3) {
    case 'daily':
      SPTable = `Daily - Start time: ${Report[0].configure_schedule_scan_time3} (hh:mm)`;
      break;
    case 'weeklyEvery':
      SPTable = `Weekly Every ${Report[0].configure_schedule_scan_weekevery3} - Start time: ${Report[0].configure_schedule_scan_time3}`;
      break;
    case 'monthlyDay':
      SPTable = `Monthly, On day ${Report[0].configure_schedule_scan_month3} - Start time: ${Report[0].configure_schedule_scan_time3}`;
      break;
    case 'monthlyOnDay':
      SPTable = `Monthly, On the ${Report[0].configure_schedule_scan_date3} ${Report[0].configure_schedule_scan_day3} Start time: ${Report[0].configure_schedule_scan_time3}`;
      break;
    default:
      SPTable = ''; // Handle the case when none of the conditions match
  }


  //1MCA

  switch (Report[0].use_activeAction1) {
    case 'yes1':
      MTable = { text: `Virus/Malware > Use Active Action`, margin: [10, 95, 0, 0] }
      break;
    case 'yes2':
      MTable = [
        {
          text: 'Used the same action for all Virus/Malware type.\n(If the first action is unsuccessful, Apex One performs the second action.)',
          margin: [13, 60, 0, 0],
          fontSize: 11
        },
        {

          margin: [13, 0, 0, 0],
          fontSize: 11,
          table: {
            body: [
              [
                { text: 'Type', bold: true },
                { text: '1st Action', bold: true },
                { text: '2nd Action', bold: true }
              ],
              [
                { text: 'All types' },
                Report[0].first_action1,
                Report[0].second_action1
              ]
            ]
          }
        }
      ];
      break;
    case 'yes3':
      MTable = [
        { text: 'Used specific action for each Virus/Malware type:', style: 'common' },
        {
          margin: [0, 6, 0, 0],
          table: {
            body: [
              [{ text: `Select - Joke: ${Report[0].joke1}` }],
              [{ text: `Select - Trojans: ${Report[0].trojans1}` }],
              [{ text: `Select - Virus: ${Report[0].virus11} & ${Report[0].virus21}` }],
              [{ text: `Select - Test Virus: ${Report[0].test_virus1}` }],
              [{ text: `Select - Packer: ${Report[0].packer1}` }],
              [{ text: `Select - Probable Malware: ${Report[0].probable_malware11} & ${Report[0].probable_malware21}` }],
              [{ text: `Select - Other Malware: ${Report[0].other_malware11} & ${Report[0].other_malware21}` }]
            ]
          }
        }
      ];
      break;
    default:
      MTable = '';
      break;
  }

  //2 Real-Time Scan-Action Settings
  switch (Report[0].use_activeAction2) {
    case 'yes1':
      RTable1 = { text: `Virus/Malware > Use Active Action`, margin: [10, 95, 0, 0] };
      break;
    case 'yes2':
      RTable1 = [
        {
          text: 'Used the same action for all Virus/Malware type.\n(If the first action is unsuccessful, Apex One performs the second action.)',
          margin: [13, 60, 0, 0],
          fontSize: 11,
        },
        {
          fontSize: 11,
          margin: [13, 0, 0, 0],
          table: {
            body: [
              [
                { text: 'Type', bold: true },
                { text: '1st Action', bold: true },
                { text: '2nd Action', bold: true }
              ],
              [
                { text: 'All types' },
                Report[0].first_action2,
                Report[0].second_action2
              ]
            ]
          }
        }
      ];
      break;
    case 'yes3':
      RTable1 = [
        { text: 'Used specific action for each Virus/Malware type:', lineHeight: 1.2, style: 'common' },
        {
          fontSize: 11,
          margin: [0, 6, 0, 0],
          table: {
            body: [
              [{ text: `Select - Joke: ${Report[0].joke2}` }],
              [{ text: `Select - Trojans: ${Report[0].trojans2}` }],
              [{ text: `Select - Virus: ${Report[0].virus12} & ${Report[0].virus22}` }],
              [{ text: `Select - Test Virus: ${Report[0].test_virus2}` }],
              [{ text: `Select - Packer: ${Report[0].packer2}` }],
              [{ text: `Select - Probable Malware: ${Report[0].probable_malware12} & ${Report[0].probable_malware22}` }],
              [{ text: `Select - Other Malware: ${Report[0].other_malware12} & ${Report[0].other_malware22}` }]
            ]
          }
        }
      ];
      break;
    default:
      RTable1 = '';
      break;
  }

  // 3 SSAS
  switch (Report[0].use_activeAction3) {
    case 'yes1':
      SSTable = { text: `Virus/Malware > Use Active Action`, margin: [10, 95, 0, 0] };
      break;
    case 'yes2':
      SSTable = [
        {
          text: 'Used the same action for all Virus/Malware type.\n(If the first action is unsuccessful, Apex One performs the second action.)',
          margin: [13, 60, 0, 0],
          fontSize: 11,
        },
        {
          fontSize: 11,
          margin: [13, 0, 0, 0],
          table: {
            body: [
              [
                { text: 'Type', bold: true },
                { text: '1st Action', bold: true },
                { text: '2nd Action', bold: true }
              ],
              [
                { text: 'All types' },
                Report[0].first_action3,
                Report[0].second_action3
              ]
            ]
          }
        }
      ];
      break;
    case 'yes3':
      SSTable = [
        {
          text: `Used specific action for each Virus/Malware type:`, lineHeight: 1.2, style: 'common'
        },
        {
          fontSize: 11,
          margin: [0, 6, 0, 0],
          table: {
            body: [
              [{ text: `Select - Joke: ${Report[0].joke3}` }],
              [{ text: `Select - Trojans: ${Report[0].trojans3}` }],
              [{ text: `Select - Virus: ${Report[0].virus13} & ${Report[0].virus23}` }],
              [{ text: `Select - Test Virus: ${Report[0].test_virus3}` }],
              [{ text: `Select - Packer: ${Report[0].packer3}` }],
              [{ text: `Select - Probable Malware: ${Report[0].probable_malware13} & ${Report[0].probable_malware23}` }],
              [{ text: `Select - Other Malware: ${Report[0].other_malware13} & ${Report[0].other_malware23}` }]
            ]
          }
        }
      ];
      break;
    default:
      SSTable = '';
      break;
  }

  let BMContent = [], prePageBreak = 'before', preMargin = [0, 0, 0, 0];

  if (Report[0].report_type === "On-Premises") {

    prePageBreak = "none"
    preMargin = [0, 11, 0, 0]

    let predictiveMlData3 = Report[0].predictiveMl3 === "No" ? "No Exceptions added" : "Exceptions added";
    let bm7 = Report[0].bm7 === "No" ? "No exceptions added in Approved Program list" : "exceptions added in Approved Program list";

    BMContent.push(

      {
        pageBreak: 'before',
        fontSize: 11,
        margin: [0, 11, 0, 0],
        lineHeight: 1.4,
        table: {
          body: [
            // bm
            [{ text: 'Behavior Monitoring', rowSpan: 7, margin: [0, 130, 0, 0] }, 'Enable Malware Behavior Blocking Known and potential threats', `${Report[0].bm1}`, { image: `${Report[0].tab51BM1}`, style: "imgStyle", width: 15 }],
            ['', 'Ransomware Protection Protect documents against unauthorized encryption or modification', `${Report[0].bm2}`, { image: `${Report[0].tab51BM2}`, style: "imgStyle", width: 15 }],
            ['', 'Protect documents against unauthorized encryption or modification -> Automatically backup and restore files changed by suspicious programs', `${Report[0].bm3}`, { image: `${Report[0].tab51BM3}`, style: "imgStyle", width: 15 }],
            ['', 'Enable program inspection to detect and block compromised executable files', `${Report[0].bm4}`, { image: `${Report[0].tab51BM4}`, style: "imgStyle", width: 15 }],
            ['', 'Anti-exploit Protection Terminate programs that. exhibit abnormal behavior. associated with exploit attacks', `${Report[0].bm5}`, { image: `${Report[0].tab51BM5}`, style: "imgStyle", width: 15 }],
            ['', 'Newly Encountered Programs Monitor newly encountered programs downloaded through web or email application channels -> Prompt User', `${Report[0].bm6}`, { image: `${Report[0].tab51BM6}`, style: "imgStyle", width: 15 }],
            ['', 'Exceptions (specify exception if any)', bm7, { image: `${Report[0].tab51BM7}`, style: "imgStyle", width: 15 }],

            [{ text: 'Predictive Machine Learning', rowSpan: 3, margin: [0, 30, 0, 0] }, 'Enable', `${Report[0].predictiveMl}`, { image: `${Report[0].tab52}`, style: "imgStyle", width: 15 }],
            ['', 'Action\nFile: quarantine \nProcess: Terminate', `Action Set \nFile: ${Report[0].predictiveMl1}\nProcess: ${Report[0].predictiveMl2}`, { image: `${Report[0].tab52ML1}`, style: "imgStyle", width: 15 }],
            ['', 'Exception (specify exception if any)', predictiveMlData3, { image: `${Report[0].tab52ML2}`, style: "imgStyle", width: 15 }],

            ['Suspicious Connection', 'Enable with Block option', `${Report[0].suspicious_Connection} with Block option`, { image: `${Report[0].tab53}`, style: "imgStyle", width: 15 }],
            ['Web Reputation', 'Enable for Internal and External agents with Security Level Medium', `${Report[0].web_reputation1} with Security Level ${Report[0].web_reputation2}`, { image: `${Report[0].tab54}`, style: "imgStyle", width: 15 }],
            ['Vulnerability Protection', 'Enable', `${vp_mode}`, { image: `${Report[0].tabVP}`, style: "imgStyle", width: 15 }],
            ['Device Control', 'Enable', `${Report[0].device_control}`, { image: `${Report[0].tabDC}`, style: "imgStyle", width: 15 }],

            ['Application Control', 'Enable', `${Report[0].application_control}`, { image: `${Report[0].tabAC}`, style: "imgStyle", width: 15 }],
            ['Firewall', 'Enable (Optional)', `${Report[0].firewall}`, { image: `${Report[0].tab55}`, style: "imgStyle", width: 15 }],
            ['Agent Self-Protection', 'Enable Self-Protection with a password.', `${Report[0].agent_self_protection}`, { image: `${Report[0].tab56}`, style: "imgStyle", width: 15 }],
          ]
        }
      },

      {
        pageBreak: 'before',
        fontSize: 11,
        margin: [0, 15, 0, 0],
        lineHeight: 1.5,
        table: {
          body: [
            [{ text: 'Additional Service', margin: [0, 100, 0, 0] }, { text: 'Configure respective services', margin: [0, 100, 0, 0] }, `${Report[0].additional_service1} Unauthorized Change Prevention Service for Windows desktops & ${Report[0].additional_service2} Windows Server platforms with full mode.
  
                  ${Report[0].additional_service3} Firewall Service for Windows desktops & ${Report[0].additional_service4} for Windows Server platforms.
    
                  ${Report[0].additional_service5} Suspicious Connection Service for Windows desktops & ${Report[0].additional_service6} Windows Server platforms.
    
                  ${Report[0].additional_service7} Data Protection Service for Windows desktops & ${Report[0].additional_service8} Windows Server platforms.
  
                  ${Report[0].additional_service9} Advanced Protection Service for Windows desktops and ${Report[0].additional_service10} Windows Server platforms.`,
            { image: tab1, style: "imgStyle", width: 15, margin: [0, 100, 0, 0] }],
          ]
        }
      },

    )
  } else {
    BMContent.push(
      {
        pageBreak: "before",
        fontSize: 11,
        margin: [0, 11, 0, 0],
        lineHeight: 1.4,
        table: {
          body: [
            // bm
            ['Behavior Monitoring', 'Enable with Ransomware Protection & Anti-exploit protection', `${Report[0].bm} Ransomware Protection & Anti-exploit protection`, { image: `${Report[0].tab51}`, style: "imgStyle", width: 15 }],
            ['Predictive Machine Learning', 'Enable', `${Report[0].predictiveMl}`, { image: `${Report[0].tab52}`, style: "imgStyle", width: 15 }],
            ['Suspicious Connection', 'Enable with Block option', `${Report[0].suspicious_Connection} with Block option`, { image: `${Report[0].tab53}`, style: "imgStyle", width: 15 }],
            ['Vulnerability Protection', 'Enable', `${vp_mode}`, { image: `${Report[0].tabVP}`, style: "imgStyle", width: 15 }],
            ['Device Control', 'Enable', `${Report[0].device_control}`, { image: `${Report[0].tabDC}`, style: "imgStyle", width: 15 }],
            ['Web Reputation', 'Enable with Security Level Medium', `${Report[0].web_reputation1} with Security Level ${Report[0].web_reputation2}`, { image: `${Report[0].tab54}`, style: "imgStyle", width: 15 }],
            ['Application Control', 'Enable', `${Report[0].application_control}`, { image: `${Report[0].tabAC}`, style: "imgStyle", width: 15 }],
            ['Firewall', 'Enable (Optional)', `${Report[0].firewall}`, { image: `${Report[0].tab55}`, style: "imgStyle", width: 15 }],
            ['Agent Self-Protection', 'Enable Self-Protection with a password', `${Report[0].agent_self_protection}`, { image: `${Report[0].tab56}`, style: "imgStyle", width: 15 }],
            [{ text: 'Additional Service', margin: [0, 100, 0, 0] }, { text: 'Configure respective services', margin: [0, 100, 0, 0] }, `${Report[0].additional_service1} Unauthorized Change Prevention Service for Windows desktops & ${Report[0].additional_service2} Windows Server platforms with full mode.
  
            ${Report[0].additional_service3} Firewall Service for Windows desktops & ${Report[0].additional_service4} for Windows Server platforms.

            ${Report[0].additional_service5} Suspicious Connection Service for Windows desktops & ${Report[0].additional_service6} Windows Server platforms.

            ${Report[0].additional_service7} Data Protection Service for Windows desktops & ${Report[0].additional_service8} Windows Server platforms.

            ${Report[0].additional_service9} Advanced Protection Service for Windows desktops and ${Report[0].additional_service10} Windows Server platforms.`,
            { image: tab1, style: "imgStyle", width: 15, margin: [0, 100, 0, 0] }],
          ]
        }
      }
    )
  }

  try {

    let content = [

      // 4.2 Policy overview
      {
        margin: preMargin,
        pageBreak: prePageBreak,
        text: `${policyTitle}`,
        tocItem: ['subToc'],
        style: ['heading'],
        tocStyle: { italics: true },
        tocMargin: [20, 5, 0, 0],
      },

      // 1 po1 to ManualSA Half
      {
        margin: [0, 11, 0, 0],
        lineHeight: 1.4,
        fontSize: 11,
        table: {
          body: [
            [{ text: `Policy Configuration - Overview ${Report[0].OverviewPolicyName1} Policy`, style: "table3", colSpan: 4 }, '', '', ''],
            [{ text: 'Component', style: "apexone41" }, { text: 'Trend Recommended', style: "apexone41" }, { text: 'Deployed', style: "apexone41" }, { text: 'Status', style: "apexone41" }],
            ['Agent Scan Mode', 'Smart scan', { text: `${Report[0].agent_scan_mode1}` }, { image: `${Report[0].tab8}`, style: "imgStyle", width: 15 }],
            [{ text: 'Manual Scan - Policy', rowSpan: 7, margin: [0, 115, 0, 0] }, 'Files to Scan > All Scannable files', `${Report[0].files_to_Scan1}`, { image: `${Report[0].tab9}`, style: "imgStyle", width: 15 }],
            ['', 'Scan Hidden Folders', `${Report[0].scan_hidden_folders1}`, { image: `${Report[0].tab10}`, style: "imgStyle", width: 15 }],
            ['', 'Select - Scan compressed files. > Maximum layers: 2', `Select- Scan compressed files. > Maximum layers: ${Report[0].scan_compressed_files1}`, { image: `${Report[0].tab11}`, style: "imgStyle", width: 15 }],
            ['', 'Select - Scan OLE objects. > Maximum layers: 3', `Select- Scan OLE objects. > Maximum layers: ${Report[0].scan_ole_object1}`, { image: `${Report[0].tab12}`, style: "imgStyle", width: 15 }],
            ['', 'Enable - Detect exploit code in OLE file', `${Report[0].detect_exploit_code1} Detect exploit code in OLE files.`, { image: `${Report[0].tab13}`, style: "imgStyle", width: 15 }],
            ['', 'Virus/Malware Scan Settings Only > Scan boot area', `${Report[0].virus_scan_settings_only1} - Scan boot area`, { image: `${Report[0].tab14}`, style: "imgStyle", width: 15 }],
            ['', 'CPU Usage > Medium', `${Report[0].cpu_usage1}`, { image: `${Report[0].tab15}`, style: "imgStyle", width: 15 }],

            [{ text: 'Manual Scan - Actions', rowSpan: 5, margin: [0, 190, 0, 0] }, [
              'Virus/Malware > Use a specific action for each virus/malware type:',
              {
                table: {

                  body: [
                    [{ text: 'Select - Joke: Quarantine', colSpan: 3 }, '', ''],
                    [{ text: 'Select - Trojans: Quarantine', colSpan: 3 }, '', ''],
                    [{ text: 'Select - Virus: Clean & Quarantine', colSpan: 3 }, '', ''],
                    [{ text: 'Select - Test Virus: Quarantine', colSpan: 3 }, '', ''],
                    [{ text: 'Select - Packer: Quarantine', colSpan: 3 }, '', ''],
                    [{ text: 'Select - Probable Malware: Quarantine', colSpan: 3 }, '', ''],
                    [{ text: 'Select - Other Malware: Clean & Quarantine', colSpan: 3 }, '', ''],

                  ]
                },
              }
            ], MTable, { image: `${Report[0].tab16}`, style: "imgStyle", width: 15, margin: [0, 100, 0, 0] }],

            //Manual Scan - Actions 
            ['', 'Select - Back up files before cleaning.', `${Report[0].back_up_files1} - Back up files before cleaning.`, { image: `${Report[0].tab17}`, style: "imgStyle", width: 15 }],
            ['', 'Enable - Damage Cleanup Services with Advanced clean up', `${Report[0].damage_cleanup_services11} - Damage Clean-up Services with ${Report[0].damage_cleanup_services21}`, { image: `${Report[0].tab18}`, style: "imgStyle", width: 15 }],
            ['', 'Enable - Run cleanup when Probable virus/malware is detected', `${Report[0].run_cleanup1} - Run cleanup when probable virus/malware is detected`, { image: `${Report[0].tab19}`, style: "imgStyle", width: 15 }],
            ['', 'Enable - Spyware/Grayware > Clean: Apex One terminates Processes.', `Enabled - Spyware/Grayware > ${Report[0].apex_one_terminates_processes1}: Apex One terminates processes.`, { image: `${Report[0].tab20}`, style: "imgStyle", width: 15 }]
          ]
        }
      },

      // 1 ManualSA Half to 2RTSPS
      {
        // unbreakable: 'true',
        pageBreak: 'before',
        fontSize: 11,
        margin: [0, 11, 0, 0],
        lineHeight: 1.4,
        table: {
          body: [
            //2Real-Time Scan Policy Settings
            [{ text: 'Real-Time Scan Policy Settings', rowSpan: 11, margin: [0, 160, 0, 0] }, 'Enable - Virus/Malware Scan', `${Report[0].virus_scan2}`, { image: `${Report[0].tab21}`, style: "imgStyle", width: 15 }],
            ['', 'Enable - Spyware/Grayware scan', `${Report[0].spyware_scan2} - Spyware/Grayware scan`, { image: `${Report[0].tab22}`, style: "imgStyle", width: 15 }],
            ['', 'User Activity on Files > Scan files being created/modified and retrieved', `User Activity on Files > Scan files being ${Report[0].user_activity_on_files2}`, { image: `${Report[0].tab23}`, style: "imgStyle", width: 15 }],
            ['', 'Files to Scan > All Scannable files', `${Report[0].files_to_scan2}`, { image: `${Report[0].tab24}`, style: "imgStyle", width: 15 }],
            ['', 'Enable - Scan the boot sector of the USB storage device after plugging in.', `${Report[0].enable12} - Scan the boot sector of the USB storage device after plugging in.`, { image: `${Report[0].tab26}`, style: "imgStyle", width: 15 }],
            ['', 'Enable - Scan all files in a removable storage device after plugging in.', `${Report[0].enable22} - Scan all files in a removable storage device after plugging in.`, { image: `${Report[0].tab27}`, style: "imgStyle", width: 15 }],
            ['', 'Enable - Quarantine malware variants detected in memory.', `${Report[0].enable32} - Quarantine malware variants detected in memory.`, { image: `${Report[0].tab28}`, style: "imgStyle", width: 15 }],
            ['', 'Select - Scan compressed files. > Maximum layers: 2', `Selected - Scan compressed files. > Maximum layers: ${Report[0].scan_compressed_files2}`, { image: `${Report[0].tab29}`, style: "imgStyle", width: 15 }],
            ['', 'Select - Scan OLE objects. > Maximum layers: 3', `Selected - Scan OLE objects. > Maximum layers:  ${Report[0].scan_ole_objects2}`, { image: `${Report[0].tab30}`, style: "imgStyle", width: 15 }],
            ['', 'Enable - Detect exploit code in OLE files.', `${Report[0].detect_exploit_code_in_ole_files2} - Detect exploit code in OLE files.`, { image: `${Report[0].tab31}`, style: "imgStyle", width: 15 }],
            ['', 'Enable - CVE exploit scanning', `${Report[0].cvf_exploit_scanning2} - CVE exploits scanning`, { image: `${Report[0].tab32}`, style: "imgStyle", width: 15 }],


            [{ text: 'Real-Time Scan-Action Settings', rowSpan: 4, margin: [0, 150, 0, 0] }, [
              'Virus/Malware > Use a specific action for each virus/malware type:',
              {
                table: {

                  body: [
                    [{ text: 'Select - Joke: Quarantine', colSpan: 3 }, '', ''],
                    [{ text: 'Select - Trojans: Quarantine', colSpan: 3 }, '', ''],
                    [{ text: 'Select - Virus: Clean & Quarantine', colSpan: 3 }, '', ''],
                    [{ text: 'Select - Test Virus: Quarantine', colSpan: 3 }, '', ''],
                    [{ text: 'Select - Packer: Quarantine', colSpan: 3 }, '', ''],
                    [{ text: 'Select - Probable Malware: Quarantine', colSpan: 3 }, '', ''],
                    [{ text: 'Select - Other Malware: Clean & Quarantine', colSpan: 3 }, '', '']
                  ]
                },
              }
            ], RTable1, { image: `${Report[0].tab33}`, style: "imgStyle", width: 15, margin: [0, 100, 0, 0] }],
            ['', 'Enable - Back up files before cleaning.', `${Report[0].back_up_files2} - Back up files before cleaning.`, { image: `${Report[0].tab34}`, style: "imgStyle", width: 15 }],
            ['', 'Enable - Run cleanup when probable virus/malware is detected', `${Report[0].run_cleanup2} - Run cleanup when probable virus/malware is detected.`, { image: `${Report[0].tab35}`, style: "imgStyle", width: 15 }],
            ['', 'Enable - Spyware/Grayware > Clean: Apex One terminates processes.', `Enabled - Spyware/Grayware > ${Report[0].apex_one_terminates_processes2}: Apex One terminates processes.`, { image: `${Report[0].tab36}`, style: "imgStyle", width: 15 }]
          ]
        }
      },

      //RTSAS TO SCPS
      {
        pageBreak: 'before',
        fontSize: 11,
        margin: [0, 11, 0, 0],
        lineHeight: 1.4,
        table: {
          body: [

            //Schedule Scan Policy Settings
            [{ text: 'Schedule Scan Policy Settings', rowSpan: 9, margin: [0, 100, 0, 0] }, 'Enable - Virus/Malware Scan', `${Report[0].virus_scan3} - Virus/Malware Scan`, { image: `${Report[0].tab37}`, style: "imgStyle", width: 15 }],
            ['', 'Enable - Spyware/Grayware scan', `${Report[0].spyware_scan3} - Spyware/Grayware scan`, { image: `${Report[0].tab38}`, style: "imgStyle", width: 15 }],
            ['', 'Configure Schedule Scan to run at least once a week.', SPTable, { image: `${Report[0].tab39}`, style: "imgStyle", width: 15 }],
            ['', 'Files to Scan > All Scannable files', `${Report[0].filestoscan3}`, { image: `${Report[0].tab40}`, style: "imgStyle", width: 15 }],
            ['', 'Select - Scan compressed files. > Maximum layers: 2', `Selected - Scan compressed files. > Maximum layers: ${Report[0].scan_compressed_files3}`, { image: `${Report[0].tab41}`, style: "imgStyle", width: 15 }],
            ['', 'Selected - Scan compressed files. > Maximum layers:3', `Selected - Scan OLE objects. > Maximum layers: ${Report[0].scanoleobjects3}`, { image: `${Report[0].tab42}`, style: "imgStyle", width: 15 }],
            ['', 'Enable - Detect exploit code in OLE files.', `${Report[0].detect_exploit_code3} - Detect exploit code in OLE files.`, { image: `${Report[0].tab43}`, style: "imgStyle", width: 15 }],
            ['', 'Virus/Malware Scan Settings Only > Scan boot area', `${Report[0].scan_boot_area3} Scan boot area`, { image: `${Report[0].tab44}`, style: "imgStyle", width: 15 }],
            ['', 'CPU Usage > Medium', `${Report[0].cpu_usage3}`, { image: `${Report[0].tab45}`, style: "imgStyle", width: 15 }],


            [{ text: 'Schedule Scan-Action Settings', rowSpan: 5, margin: [0, 160, 0, 0] }, [
              'Virus/Malware > Use a specific action for each virus/malware type:',
              {
                table: {

                  body: [
                    [{ text: 'Select - Joke: Quarantine', colSpan: 3 }, '', ''],
                    [{ text: 'Select - Trojans: Quarantine', colSpan: 3 }, '', ''],
                    [{ text: 'Select - Virus: Clean & Quarantine', colSpan: 3 }, '', ''],
                    [{ text: 'Select - Test Virus: Quarantine', colSpan: 3 }, '', ''],
                    [{ text: 'Select - Packer: Quarantine', colSpan: 3 }, '', ''],
                    [{ text: 'Select - Probable Malware: Quarantine', colSpan: 3 }, '', ''],
                    [{ text: 'Select - Other Malware: Clean & Quarantine', colSpan: 3 }, '', '']
                  ]
                },
              }
            ], SSTable, { image: `${Report[0].tab46}`, style: "imgStyle", width: 15, margin: [0, 100, 0, 0] }],
            ['', 'Select - Back up files before cleaning.', `${Report[0].back_up_files3} - Back up files before cleaning.`, { image: `${Report[0].tab47}`, style: "imgStyle", width: 15 }],
            ['', 'Enable - Damage Cleanup Services with Advanced clean up', `${Report[0].damage_cleanup_services13} - Damage Clean-up Services with ${Report[0].damage_cleanup_services23}.`, { image: `${Report[0].tab48}`, style: "imgStyle", width: 15 }],
            ['', 'Enable - Run cleanup when probable virus/malware is detected', `${Report[0].run_cleanup3} - Run cleanup when probable virus/malware is detected.`, { image: `${Report[0].tab49}`, style: "imgStyle", width: 15 }],
            ['', 'Enable - Spyware/Grayware > Clean: Apex One terminates processes.', `Enabled - Spyware/Grayware > ${Report[0].apex_one_terminates_processes3}: Apex One terminates processes.`, { image: `${Report[0].tab50}`, style: "imgStyle", width: 15 }],
          ]
        }
      },

      ...BMContent

    ]

    return content
  } catch (error) {
    console.log("error - po1")
  }

}



module.exports = { getPo1 }


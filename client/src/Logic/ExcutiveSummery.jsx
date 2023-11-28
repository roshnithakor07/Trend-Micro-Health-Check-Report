import React from 'react'

function ExcutiveSummery() {


    {/* Name of product */ }


    {/* Apex one policy 41 */ }

    let esummary0 = "Memory Allocated to the Apex One server is not as per the Trend Micro Requirement."
    let rsummary0 = `Memory Allocated to the Apex One server is not as per the Trend Micro Requirement, recommended to refer to the sizing document for details. https://docs.trendmicro.com/all/ent/apex-one/2019/en-us/apexOne_2019_req.pdf.`
    let esummary4 = `Certified Safe Software Service is Disabled.`
    let rsummary4 = `Certified Safe Software Service is disabled, recommend to enable it.`;
    let esummary5 = `Apex Central is not registered with Apex One.`
    let rsummary5 = 'It is recommended to register the Apex one with Apex Central to manage the policies.'
    let esummary6 = "Global Agents Settings are not configured as per the Trend Micro best practice."
    let rsummary6 = `The Clean/Delete Infected is Disabled, recommended to Enable it.`
    let rsummary7 = "In a global setting, resume an interrupted Scheduled Scan is disabled, recommended to enable it to continue the scheduled scan the next day."
    let esummary9 = `Agent Scheduled updates are not Scheduled.`;
    let rsummary9 = `Agent Scheduled updates are disabled, recommended to enable it.`;
    let esummary010 = `Notification is not Enabled.`;
    let rsummary010 = `Notification is disabled, recommended to enable it.`



    //PO1
    let rsummary10 = `All the agents are using the Conventional Scan method recommended to use the Smart Scan Method. Smart Scan leverages threat signatures that are stored in the cloud.`
    let rsummary11 = [`files to scan are set as File types scanned By IntelliScan, recommended to set it as All Scannable files as Only scan files known to potentially harbor malicious code, including files disguised by a harmless extension name are Scan in IntelliScan.`,
        "files to scan are set as File types scanned By Specific Extension, recommended to set it as All Scannable files. it will only scan files with specified extension and Trend Micro recommended to scan all type of files."]
    let rsummary12 = `In Manual Scan and policy settings, Scan Hidden Folders is disabled, recommended to enable it.`;
    let rsummary13 = `detect exploit code in OLE is disabled, recommended to enable it.`;
    let rsummary14 = `the scan boot area is disabled, recommended to enable it.`;
    // let rsummary151 & rsummer152 = has dynamic values


    //MCA/RCA/SCA
    let rsummary161 = 'the active Action is selected, recommended to select Use a specific action for each virus/malware type.'
    let rsummary162 = 'the same action for all malware-Virus types is selected, recommended to select Use a specific action for each virus/malware type.'
    let rsummary17 = "back up files before cleaning is disabled, recommended to enable it.";
    let rsummary18 = `damage Cleanup Services are enabled with standard cleanup, recommended to enable with advance cleanup as The Security Agent uses advanced cleanup rules to proactively detect and stop applications that exhibit Fake AV and rootkit behavior.`
    let rsummary19 = `run cleanup when probable virus/malware is detected is disabled, recommended to enable it.`
    let rsummary20 = `in Spyware/Grayware settings Clean: Apex One terminates processes that are not enabled and recommends enabling it.`

    //Real Time Policy
    let rsummary21 = `Virus/Malware Scan is disabled, recommended to enable it.`
    let rsummary22 = `Spyware/Grayware Scan is disabled, recommended to enable it.`
    let rsummary23 = `In Real-Time Scan Policy Settings, user Activity on Files > Scan files being created/modified and retrieved not selected recommend to configure this to all files.`;
    let rsummary24 = `In Real-Time Scan Policy Settings, recommended to enable as it scans directories physically located on other endpoints, but mapped to the local endpoint.`;
    let rsummary25 = `In Real-Time Scan Policy Settings, scan the boot sector of the USB storage device after plugging in is disabled, recommended to enable it.`
    let rsummary26 = `In Real-Time Scan Policy Settings, scan all files in a removable storage device after plugging in is disabled, recommended to enable it.`
    let rsummary27 = `In Real-Time Scan Policy Settings, quarantine malware variants detected in memory is disabled, recommended to enable it.`;
    let rsummary28 = `In Real-Time Scan Policy Settings, CVE exploit scanning is disabled, recommended to enable it.`;


    //scp
    let rsummary29 = `The Schedule Scan is configured daily and needs to be configured on a weekly basis for optimal performance.`

    //BM
    let rsummary51BM1 = "Behavior Monitoring protection modules are disabled and recommended to enable it for better protection from ransomware. It constantly monitors endpoints for unusual modifications to the operating system or installed software. Behavior Monitoring protects endpoints through Malware Behavior Blocking and Event Monitoring."
    let rsummary51BM2 = "In Behaviour Monitoring, Threats to block are selected to Known Threats recommended to select Known and potential threats. It Blocks behavior associated with known threats and acts on behavior that is potentially malicious."
    let rsummary51BM3 = "In Behaviour Monitoring, protecting documents against unauthorized encryption or modification is disabled recommended to enable it. It will protect the unauthorized encryption or modification of trusted files."
    let rsummary51BM5 = "In Behaviour Monitoring, Block processes commonly associated with ransomware is disabled and recommended to enable it. Ransomware commonly distributes executable files in specific locations on endpoints before attempting to hijack files. Blocking the processes started from these locations can help prevent the ransomware from being able to hijack files."
    let rsummary51BM6 = "In Behaviour Monitoring, enabling program inspection to detect and block compromised executable files is disabled and recommended to enable it. Program inspection monitors processes and performs API hooking to determine if a program is behaving in an unexpected manner."
    let rsummary51BM7 = "In Behaviour Monitoring, Anti-Exploit protection is disabled and recommended to enable it. Anti-exploit protection works in conjunction with program inspection to monitor the behavior of programs and detect abnormal behavior that may indicate that an attacker has exploited a program vulnerability."
    let rsummary51BM8 = "In Behaviour Monitoring, Newly Encountered Program Protection is disabled and recommended to enable it. it works in conjunction with Web Reputation Services and Real-time Scan to verify the prevalence of files downloaded through web channels, email applications, or Microsoft Office macro scripts."
    let rsummary51BM10 = "In Behaviour Monitoring, Event Monitoring is disabled and recommended to enable it. Event Monitoring provides a more generic approach to protecting against unauthorized software and malware attacks. It monitors system areas for certain events, allowing administrators to regulate programs that trigger such events."



    let rsummary52ML1 = "The predictive Machine Learning module is disabled, recommended to enable it. It uses advanced machine learning technology to correlate threat information and perform in-depth file analysis or behavioral process and script analysis to detect emerging unknown security risks."
    let rsummary52ML2 = "In Predictive Machine Learning module is enabled with log-only mode, recommended to set the action Terminate/Quarantine to prevent unknown threats."
    let rsummary53SC1 = "In suspicious connection Detect network connections made to addresses in the Global C&C IP list is disabled and recommended to enable it. to monitor connections made to Trend Micro confirmed C&C servers and select to Block connections."
    let rsummary53SC2 = "In suspicious connection detect connections using malware network fingerprinting is disabled and recommended to enable it. Malware network fingerprinting performs pattern matching on packet headers. Security Agents log all connections made by packets with headers that match known malware threats using the Relevance Rule pattern."
    let rsummary53SC3 = "In suspicious connection Cleaning suspicious connections when a C&C callback is detected is disabled, and recommended to enable it. Security Agents use Generic Lean to clean the malware threat and terminate the connection to the C&C server."
   
    let rsummary54 = "Web reputation module is disabled, recommended to enable it with medium level of detection."
    let rsummary54WR = "Web Reputation is enabled in Assessment mode recommended to disable it, When in Assessment mode, Security Agents allow access to all websites. For any accessed website that violates the configured Security Level setting, the Security Agent logs the event."
    let rsummary55 = "The firewall is disabled, recommended to enable it (Optional). Firewall policies allow you to block or allow certain types of network traffic not specified in a policy exception. A policy also defines which Apex One Firewall features are enabled or disabled. Assign the policy to one or multiple Firewall profiles."
    let rsummary56PS1 = ["Agent Self-Protection is Disabled, recommended to enable it to prevent unauthorized agent Uninstallation and Unloading.","Agent Uninstallation with password is Disabled, recommended to enable it to prevent unauthorized agent Uninstallation and Unloading."]
    let rsummary56PS2 = "Agent installed in co-exist mode recommended to use fully functional Security Agents so, all modules can activate in a single agent for better protection."
    let rsummary56PS3 = "in Privilege and other settings, Security Agents only update the Pattern files recommended to update all components."
    let rsummary56PS4 = "in Privilege and other settings, Security Agents only update the Pattern files, Engine, and Drivers recommended to update all components."
    

    let rsummary57 = "Agent Unload and Unlock is not configured, recommended to configure it."
    let rsummary58 = "Agent uninstallation is not configured, recommended to configure it."
    let rsummary591 = "Unauthorized Change Prevention Service for Windows desktops &  for Windows Server platforms are disabled, recommended to enabled it.";
    let rsummary592 = "Firewall Service for Windows desktops & for Windows Server platforms are disabled, recommended to enabled it.";
    let rsummary593 = "Suspicious Connection Service for Windows desktops & Windows Server platforms are disabled, recommended to enabled it.";
    let rsummary594 = "Data Protection Service for Windows desktops & Windows Server platforms are disabled, recommended to enabled it.";
    let rsummary595 = "Advanced Protection Service for Windows desktops and Windows Server platforms are disabled, recommended to enabled it.";
    let rsummaryVP = "The Vulnerability protection is disabled, recommended to enable it uses a host-based intrusion prevention system (HIPS) to virtually patch known and unknown vulnerabilities before a patch is available or deployable.";
    let rsummaryVP1 = "The Vulnerability Protection is enabled with Tap mode (Detect only). Check internally and monitor if it is not affecting internal traffic then switch to inline/prevent mode to block the malicious traffic."
    let rsummaryVP2 = "The Vulnerability module is enabled with an Aggressive profile recommended to select the 'Recommended' profile. Aggressive scanning may generate many nonessential logs and impact endpoint performance. Trend Micro strongly advises using the Recommended profile."
    let rsummaryDC = "Device Control is disabled, recommended to enable it as it regulates access to external storage devices and network resources connected to computers. Device Control helps prevent data loss and leakage, combined with file scanning, helps guard against security risks."
    let rsummaryAC = "Application Control is disabled and recommended to be enabled as it provides the ability to control which users have access to specific applications on certain endpoints."


    {/* Apex central 43 */ }

    let esummary60 = `Memory Allocated to the Apex Central server is not as per the Trend Micro Requirement.`
    let rsummary60 = `Memory Allocated to the Apex Central server is not as per the Trend Micro Requirement, recommended to refer to the sizing document for details. https://docs.trendmicro.com/all/ent/apex-one/2019/en-us/apexOne_2019_req.pdf.`
    let esummary61 = `In Apex Central Active Directory is not configured.`;
    let rsummary61 = `Configure Active Directory Sync to allow administrators to create user accounts for web console access based on Active Directory users or groups. For more information`
    let esummary62 = `In Apex Central Log Retention is not configured.`
    let rsummary62 = `In Apex Central Log Retention is not configured recommended to configure it.`
    let esummary63 = `In Apex Central Scheduled Report is not configured.`
    let rsummary63 = `In Apex Central Schedule Reports are not configured, recommended to configure it for better visibility in the console for all types of events.`
    let esummary64 = `In Apex Central Event Notifications are not Enabled.`
    let rsummary64 = `In Apex Central Event Notifications are disabled, recommended to enable it.`
    let esummary65 = "In Apex Central syslog is not configured.";
    let rsummary65 = `In Apex Central syslog is not configured, recommended to configure them to forward logs to the syslog server (For compliance purposes). For more information`;
    let esummary66 = `In Apex Central Report Maintenance is not configured.`
    let rsummary66 = `In Apex Central Report Maintenance is not configured, recommended to configure it.`



    return {
        esummary0, rsummary0, esummary4, rsummary4, esummary5, rsummary5,
        esummary6, rsummary6, rsummary7, esummary9, rsummary9, esummary010, rsummary010,
        rsummary10, rsummary11, rsummary12, rsummary13, rsummary14,
        rsummary161, rsummary162,
        rsummary17, rsummary18, rsummary19, rsummary20,
        rsummary21, rsummary22, rsummary23, rsummary24, rsummary25, rsummary26, rsummary27, rsummary28,
        rsummary29,
        rsummary51BM1, rsummary51BM2, rsummary51BM3, rsummary51BM5, rsummary51BM6, rsummary51BM7, rsummary51BM8, rsummary51BM10,
        rsummary52ML1,rsummary52ML2,rsummary53SC1,rsummary53SC2,rsummary53SC3, 
        rsummary54,rsummary54WR, 
        rsummary55, 
        rsummary56PS1,rsummary56PS2,rsummary56PS3,rsummary56PS4, 
        rsummary57, rsummary58, rsummary591, rsummary592, rsummary593, rsummary594, rsummary595,
        rsummaryVP,rsummaryVP1,rsummaryVP2, rsummaryDC, rsummaryAC,
        esummary60, rsummary60, esummary61, rsummary61, esummary62, rsummary62,
        esummary63, rsummary63, esummary64, rsummary64, esummary65, rsummary65,
        esummary66, rsummary66

    }
}

export default ExcutiveSummery

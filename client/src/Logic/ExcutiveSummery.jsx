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
    let rsummary11 = `files to scan are set as File types scanned By IntelliScan, recommended to set it as All Scannable files as Only scan files known to potentially harbor malicious code, including files disguised by a harmless extension name are Scan in IntelliScan.`
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
    let rsummary51 = "Behavior Monitoring protection modules are disabled and recommended to enable it for better protection from ransomware."
    let rsummary51BM1 = "Behavior Monitoring is enabled with Ransomware Protection, but Anti-exploit protection is disabled, recommended to enable it. Anti-exploit protection works in conjunction with program inspection to monitor the behavior of programs and detect abnormal behavior that may indicate that an attacker has exploited program vulnerability. Once detected, BM terminates the program processes.";
    let rsummary52 = "Predictive Machine Learning uses advanced machine learning technology to correlate threat information and perform in-depth file analysis or behavioral process and script analysis to detect emerging unknown security risks."
    let rsummary53 = "Suspicious Connection is enabled with Log only action, recommended to enable with block action to protect agents against C&C server callbacks."
    let rsummary54 = "Web reputation module is disabled, recommended to enable it with medium level of detection."
    let rsummary55 = "The firewall is disabled, recommended to enable it (Optional). Firewall policies allow you to block or allow certain types of network traffic not specified in a policy exception. A policy also defines which Apex One Firewall features are enabled or disabled. Assign the policy to one or multiple Firewall profiles."
    let rsummary56 = "Agent Self-Protection is Disabled, recommended to enable it to prevent unauthorized agent Uninstallation and Unloading."
    let rsummary57 = "Agent Unload and Unlock is not configured, recommended to configure it."
    let rsummary58 = "Agent uninstallation is not configured, recommended to configure it."
    let rsummary591 = "Unauthorized Change Prevention Service for Windows desktops &  for Windows Server platforms are disabled, recommended to enabled it.";
    let rsummary592 = "Firewall Service for Windows desktops & for Windows Server platforms are disabled, recommended to enabled it.";
    let rsummary593 = "Suspicious Connection Service for Windows desktops & Windows Server platforms are disabled, recommended to enabled it.";
    let rsummary594 = "Data Protection Service for Windows desktops & Windows Server platforms are disabled, recommended to enabled it.";
    let rsummary595 = "Advanced Protection Service for Windows desktops and Windows Server platforms are disabled, recommended to enabled it.";
    let rsummaryVP = "Vulnerability protection is disabled, recommended to enable it uses a host-based intrusion prevention system (HIPS) to virtually patch known and unknown vulnerabilities before a patch is available or deployable.";
    let rsummaryVP1 = "Vulnerability Protection is enabled with Tap mode (Detect only). Check internally and monitor if it is not affecting internal traffic then switch to inline/prevent mode to block the malicious traffic."
    let rsummaryDC = "Device Control is disabled, recommended to enable it as it regulates access to external storage devices and network resources connected to computers. Device Control helps prevent data loss and leakage, combined with file scanning, helps guard against security risks."
    let rsummaryAC = "Application Control is disabled, recommended to enable as it provides the ability to control which users have access to specific applications on certain endpoints."


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
        rsummary161,rsummary162,
        rsummary17, rsummary18, rsummary19, rsummary20,
        rsummary21, rsummary22, rsummary23, rsummary24, rsummary25, rsummary26, rsummary27, rsummary28,
        rsummary29,
        rsummary51,rsummary51BM1, rsummary52, rsummary53, rsummary54, rsummary55, rsummary56, rsummary57, rsummary58, rsummary591, rsummary592, rsummary593, rsummary594, rsummary595,
        rsummaryVP, rsummaryVP1, rsummaryDC, rsummaryAC,
        esummary60, rsummary60, esummary61, rsummary61, esummary62, rsummary62,
        esummary63, rsummary63, esummary64, rsummary64, esummary65, rsummary65,
        esummary66, rsummary66

    }
}

export default ExcutiveSummery

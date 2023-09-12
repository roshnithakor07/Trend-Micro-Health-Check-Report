const mongoose = require('mongoose');


const reportSchema = new mongoose.Schema({

    allApex41ExecutiveSummary: { type: String, default: "[]" },
    allApex41ReqSummary: { type: String, default: "[]" },
    allApex43ExecutiveSummary: { type: String, default: "[]" },
    allApex43ReqSummary: { type: String, default: "[]" },
    allPolicyOneRSummeryArr: { type: String, default: "[]" },
    allPolicyTwoRSummeryArr: { type: String, default: "[]" },
    allCommonPolicySummeryArr: { type: String, default: "[]" },
    checkPolicyOverviewTwoAdded: { type: Boolean, default: false },
    eSummaryPolicyOverview: { type: String, default: '[]' },
    eSummaryPolicyOverview1: { type: String, default: '[]' },
    recommendedProcedureArr: { type: String, default: '[]' },
    showRecommendedProcedure: { type: Boolean, default: false },

    allApex41ES: { type: String, default: "[]" },
    allApex43ES: { type: String, default: "[]" },
    allPolicyOneReq: { type: String, default: "[]" },
    allPolicyTwoReq: { type: String, default: "[]" },
    extraEsummarySentences: { type: String, default: '[]' },
    allCommonPolicySumArr: { type: String, default: "[]" },



    //intro1
    report_date: {
        type: String,
        default: ""
    },
    report_type: {
        type: String,
        default: ""
    },
    cLogo: {
        type: String,
        default: "images/evenuts-logo.png"
    },
    cName: {
        type: String,
        default: ""
    },
    dv: {
        type: String,
        default: ""
    },
    vd: {
        type: Date,
        default: ""
    },
    pb: {
        type: String,
        default: ""
    },
    ab: {
        type: String,
        default: ""
    },
    title: {
        type: String,
        default: ""
    },
    documentVersion: {
        type: String,
        default: ""
    },

    //intro2

    vd1: {
        type: Date,
        default: Date.now
    },

    initialdraft: {
        type: String,
        default: ""
    },

    vd2: {
        type: Date,
        default: Date.now
    },

    finalreport: {
        type: String,
        default: ""
    },

    //intro 22

    location: {
        type: String,
        default: ""
    },
    customerAttendance: {
        type: String,
        default: ""
    },
    trendMicroAttendance: {
        type: String,
        default: ""
    },

    //executivesummary
    executivesummarydate: {
        type: Date,
        default: Date.now
    },
    companyName: {
        type: String,
        default: ""
    },


    //productArchitecture
    productArchitecture: {
        type: String,
        default: "images/evenuts-logo.png"
    },

    //apex41

    total_service: { type: String, default: "0" },
    memory1: { type: String, default: "" },
    memory2: { type: String, default: "" },
    sos1: { type: String, default: "Windows Server 2019" },
    cpu1: { type: String, default: "" },
    cpu2: { type: String, default: "" },
    ip1: { type: String, default: "" },
    license_date1: { type: Date, default: "" },
    version1: { type: String, default: "" },
    version2: { type: String, default: "" },
    total_purchased_licensed: { type: String, default: "" },
    total_deployed_licensed: { type: String, default: "" },
    agent_management_tree: { type: String, default: "AD" },
    certified_safe_software_service: { type: String, default: "Enabled" },
    apex_central_integration: { type: String, default: "Yes" },
    global_agents_settings1: { type: String, default: "Yes" },
    global_agents_settings2: { type: String, default: "Enabled" },
    global_agents_settings3: { type: String, default: "Enabled" },
    global_agents_settings4: { type: String, default: "Enabled" },
    patterns_update_status_uptodate: { type: String, default: "" },
    outdated: { type: String, default: "" },
    agent_scheduled_updates: { type: String, default: "Enabled" },
    agent_scheduled_updates_daily: { type: String, default: "" },
    agent_scheduled_updates_option: { type: String, default: "" },
    timePeriod: { type: String, default: "" },
    smart_portection_server: { type: String, default: "Integrated SPS" },
    notification: { type: String, default: "Enabled" },


    // apexone 41 img
    apexmemory: { type: String, default: "images/tab1.png" },
    apeximgsos: { type: String, default: "images/tab1.png" },
    apeximglicense_date: { type: String, default: "images/tab1.png" },
    apeximgversions: { type: String, default: "images/tab1.png" },
    apeximgDeployed_Agents: { type: String, default: "images/tab1.png" },
    apeximgCertified_Safe_Software_Service: { type: String, default: "images/tab1.png" },
    apeximgapex_central_integration: { type: String, default: "images/tab1.png" },
    apeximgglobal_agents_settings1: { type: String, default: "images/tab1.png" },
    apeximgglobal_agents_settings2: { type: String, default: "images/tab1.png" },
    apeximgglobal_agents_settings3: { type: String, default: "images/tab1.png" },
    apeximgsuperman: { type: String, default: "images/tab1.png" },
    apeximgagent_scheduled_updates: { type: String, default: "images/tab1.png" },
    apeximgnotification: { type: String, default: "images/tab1.png" },

    //apex43
    memory3: { type: String, default: '8' },
    memory4: { type: String, default: '8' },
    sos2: { type: String, default: 'Windows Server 2019' },
    ip2: { type: String, default: '255.255.255.255' },
    version3: { type: String, default: '11123' },
    version4: { type: String, default: '11123' },
    license_date2: { type: String, default: '' },
    active_directory: { type: String, default: "Configured" },
    log_retention: { type: String, default: "Configured" },
    reports: { type: String, default: "Configured" },
    event_notification: { type: String, default: 'Enabled' },
    syslog: { type: String, default: "Configured" },
    report_maintenance: { type: String, default: "Configured" },
    product_registration: { type: String, default: 'Enabled' },

    //apex43 - 51 - 59
    apex43memory: { type: String, default: "images/tab1.png" },
    apex43sos: { type: String, default: "images/tab1.png" },
    tab60: { type: String, default: "images/tab1.png" },
    tab6060: { type: String, default: "images/tab1.png" },
    tab61: { type: String, default: "images/tab1.png" },
    tab62: { type: String, default: "images/tab1.png" },
    tab63: { type: String, default: "images/tab1.png" },
    tab64: { type: String, default: "images/tab1.png" },
    tab65: { type: String, default: "images/tab1.png" },
    tab66: { type: String, default: "images/tab1.png" },
    tab67: { type: String, default: "images/tab1.png" },


    //policy overiview starts here...

    //po1
    OverviewPolicyName1: { type: String, default: "" },
    agent_scan_mode1: { type: String, default: 'Smart Scan' },
    files_to_Scan1: { type: String, default: 'All Scanable files' },
    scan_hidden_folders1: { type: String, default: 'Enabled' },
    scan_compressed_files1: { type: String, default: '3' },
    scan_ole_object1: { type: String, default: '3' },
    detect_exploit_code1: { type: String, default: 'Enabled' },
    virus_scan_settings_only1: { type: String, default: 'Enabled' },
    cpu_usage1: { type: String, default: 'Medium' },

    //po1
    tab8: { type: String, default: "images/tab1.png" },
    tab9: { type: String, default: "images/tab1.png" },
    tab10: { type: String, default: "images/tab1.png" },
    tab11: { type: String, default: "images/tab1.png" },
    tab12: { type: String, default: "images/tab1.png" },
    tab13: { type: String, default: "images/tab1.png" },
    tab14: { type: String, default: "images/tab1.png" },
    tab15: { type: String, default: "images/tab1.png" },

    //MCA
    use_activeAction1: { type: String, default: "" },
    customize_action_for_porbable_virus_checkbox1: { type: String, default: "" },
    customize_action_for_porbable_virus_option1: { type: String, default: "Quarantine" },
    first_action1: { type: String, default: "Quarantine" },
    second_action1: { type: String, default: "Quarantine" },
    joke1: { type: String, default: "Quarantine" },
    trojans1: { type: String, default: "Quarantine" },
    virus11: { type: String, default: "Clean" },
    virus21: { type: String, default: "Quarantine" },
    test_virus1: { type: String, default: "Quarantine" },
    packer1: { type: String, default: "Quarantine" },
    probable_malware11: { type: String, default: "Quarantine" },
    probable_malware21: { type: String, default: "Quarantine" },
    other_malware11: { type: String, default: "Clean" },
    other_malware21: { type: String, default: "Quarantine" },
    back_up_files1: { type: String, default: "Enabled" },
    damage_cleanup_services11: { type: String, default: "Enabled" },
    damage_cleanup_services21: { type: String, default: "Advanced clean-up" },
    run_cleanup1: { type: String, default: "Enabled" },
    apex_one_terminates_processes1: { type: String, default: "Clean" },

    tab16: { type: String, default: "images/tab1.png" },
    tab17: { type: String, default: "images/tab1.png" },
    tab18: { type: String, default: "images/tab1.png" },
    tab19: { type: String, default: "images/tab1.png" },
    tab20: { type: String, default: "images/tab1.png" },


    //2.Real-Time Scan Policy Settings - 21 -32

    virus_scan2: { type: String, default: 'Enabled' },
    spyware_scan2: { type: String, default: 'Enabled' },
    user_activity_on_files2: { type: String, default: 'created/modified and retrieved' },
    files_to_scan2: { type: String, default: 'All Scanable files' },
    scan_network_drive2: { type: String, default: 'Enabled' },
    enable12: { type: String, default: 'Enabled' },
    enable22: { type: String, default: 'Enabled' },
    enable32: { type: String, default: 'Enabled' },
    scan_compressed_files2: { type: String, default: '2' },
    scan_ole_objects2: { type: String, default: '3' },
    detect_exploit_code_in_ole_files2: { type: String, default: 'Enabled' },
    cvf_exploit_scanning2: { type: String, default: 'Enabled' },



    tab21: { type: String, default: "images/tab1.png" },
    tab22: { type: String, default: "images/tab1.png" },
    tab23: { type: String, default: "images/tab1.png" },
    tab24: { type: String, default: "images/tab1.png" },
    tab25: { type: String, default: "images/tab1.png" },
    tab26: { type: String, default: "images/tab1.png" },
    tab27: { type: String, default: "images/tab1.png" },
    tab28: { type: String, default: "images/tab1.png" },
    tab29: { type: String, default: "images/tab1.png" },
    tab30: { type: String, default: "images/tab1.png" },
    tab31: { type: String, default: "images/tab1.png" },
    tab32: { type: String, default: "images/tab1.png" },


    //Real-Time Scan-Action Settings

    use_activeAction2: { type: String, default: "yes3" },
    customize_action_for_porbable_virus_checkbox2: { type: String, default: "" },
    customize_action_for_porbable_virus_option2: { type: String, default: "Quarantine" },
    first_action2: { type: String, default: "Quarantine" },
    second_action2: { type: String, default: "Quarantine" },
    joke2: { type: String, default: "Quarantine" },
    trojans2: { type: String, default: "Quarantine" },
    virus12: { type: String, default: "Clean" },
    virus22: { type: String, default: "Quarantine" },
    test_virus2: { type: String, default: "Quarantine" },
    packer2: { type: String, default: "Quarantine" },
    probable_malware12: { type: String, default: "Quarantine" },
    probable_malware22: { type: String, default: "Quarantine" },
    other_malware12: { type: String, default: "Clean" },
    other_malware22: { type: String, default: "Quarantine" },
    back_up_files2: { type: String, default: "Enabled" },
    run_cleanup2: { type: String, default: 'Enabled' },
    apex_one_terminates_processes2: { type: String, default: "Clean" },

    //Real-Time Scan-Action Settings 33 - 36 - img

    tab33: { type: String, default: "images/tab1.png" },
    tab34: { type: String, default: "images/tab1.png" },
    tab35: { type: String, default: "images/tab1.png" },
    tab36: { type: String, default: "images/tab1.png" },


    //3 Schedule Scan Policy Settings - 37-45
    virus_scan3: { type: String, default: 'Enabled' },
    spyware_scan3: { type: String, default: 'Enabled' },
    configure_schedule_scan_checkbox3: { type: String, default: "" },
    configure_schedule_scan_weekevery3: { type: String, default: "" },
    configure_schedule_scan_month3: { type: String, default: "" },
    configure_schedule_scan_date3: { type: String, default: "" },
    configure_schedule_scan_day3: { type: String, default: "" },
    configure_schedule_scan_time3: { type: String, default: "" },
    filestoscan3: { type: String, default: "All Scanable files" },
    scan_compressed_files3: { type: String, default: "2" },
    scanoleobjects3: { type: String, default: "3" },
    detect_exploit_code3: { type: String, default: "Enabled" },
    scan_boot_area3: { type: String, default: "Enabled" },
    cpu_usage3: { type: String, default: 'Medium' },

    tab37: { type: String, default: "images/tab1.png" },
    tab38: { type: String, default: "images/tab1.png" },
    tab39: { type: String, default: "images/tab1.png" },
    tab40: { type: String, default: "images/tab1.png" },
    tab41: { type: String, default: "images/tab1.png" },
    tab42: { type: String, default: "images/tab1.png" },
    tab43: { type: String, default: "images/tab1.png" },
    tab44: { type: String, default: "images/tab1.png" },
    tab45: { type: String, default: "images/tab1.png" },



    //3Schedule Scan-Action Settings 
    use_activeAction3: { type: String, default: "yes3" },
    customize_action_for_porbable_virus_checkbox3: { type: String, default: "" },
    customize_action_for_porbable_virus_option3: { type: String, default: "Quarantine" },
    first_action3: { type: String, default: "Quarantine" },
    second_action3: { type: String, default: "Quarantine" },
    joke3: { type: String, default: "Quarantine" },
    trojans3: { type: String, default: "Quarantine" },
    virus13: { type: String, default: "Clean" },
    virus23: { type: String, default: "Quarantine" },
    test_virus3: { type: String, default: "Quarantine" },
    packer3: { type: String, default: "Quarantine" },
    probable_malware13: { type: String, default: "Quarantine" },
    probable_malware23: { type: String, default: "Quarantine" },
    other_malware13: { type: String, default: "Clean" },
    other_malware23: { type: String, default: "Quarantine" },
    back_up_files3: { type: String, default: "Enabled" },
    damage_cleanup_services13: { type: String, default: "Enabled" },
    damage_cleanup_services23: { type: String, default: "Advanced clean-up" },
    run_cleanup3: { type: String, default: "Enabled" },
    apex_one_terminates_processes3: { type: String, default: "Clean" },

    // 46 - 50
    tab46: { type: String, default: "images/tab1.png" },
    tab47: { type: String, default: "images/tab1.png" },
    tab48: { type: String, default: "images/tab1.png" },
    tab49: { type: String, default: "images/tab1.png" },
    tab50: { type: String, default: "images/tab1.png" },

    bm: { type: String, default: 'Enabled with' },
    bm1: { type: String, default: 'Enabled' },
    bm2: { type: String, default: 'Enabled' },
    bm3: { type: String, default: 'Enabled' },
    bm4: { type: String, default: 'Enabled' },
    bm5: { type: String, default: 'Enabled' },
    bm6: { type: String, default: 'Enabled' },
    bm7: { type: String, default: 'No' },
    predictiveMl: { type: String, default: 'Enabled' },
    predictiveMl1: { type: String, default: "Quarantine" },
    predictiveMl2: { type: String, default: "Terminate" },
    predictiveMl3: { type: String, default: "No" },
    suspicious_Connection: { type: String, default: 'Enabled' },
    vulnerability_protection: { type: String, default: 'Enabled' },
    vp_mode: { type: String, default: 'Inline' },
    device_control: { type: String, default: 'Enabled' },
    web_reputation1: { type: String, default: 'Enabled' },
    web_reputation2: { type: String, default: 'Medium' },
    application_control: { type: String, default: 'Enabled' },
    firewall: { type: String, default: 'Enabled' },
    agent_self_protection: { type: String, default: 'Enabled' },
    agent_unload_unlock: { type: String, default: 'Configured' },
    agent_uninstallation: { type: String, default: 'Configured' },
    additional_service1: { type: String, default: 'Enabled' },
    additional_service2: { type: String, default: 'Enabled' },
    additional_service3: { type: String, default: 'Enabled' },
    additional_service4: { type: String, default: 'Enabled' },
    additional_service5: { type: String, default: 'Enabled' },
    additional_service6: { type: String, default: 'Enabled' },
    additional_service7: { type: String, default: 'Enabled' },
    additional_service8: { type: String, default: 'Enabled' },
    additional_service9: { type: String, default: 'Enabled' },
    additional_service10: { type: String, default: 'Enabled' },

    tab51: { type: String, default: "images/tab1.png" },
    tab51BM1: { type: String, default: "images/tab1.png" },
    tab51BM2: { type: String, default: "images/tab1.png" },
    tab51BM3: { type: String, default: "images/tab1.png" },
    tab51BM4: { type: String, default: "images/tab1.png" },
    tab51BM5: { type: String, default: "images/tab1.png" },
    tab51BM6: { type: String, default: "images/tab1.png" },
    tab51BM7: { type: String, default: "images/tab1.png" },

    tab52: { type: String, default: "images/tab1.png" },
    tab52ML1: { type: String, default: "images/tab1.png" },
    tab52ML2: { type: String, default: "images/tab1.png" },
    tab53: { type: String, default: "images/tab1.png" },
    tab54: { type: String, default: "images/tab1.png" },
    tab55: { type: String, default: "images/tab1.png" },
    tab56: { type: String, default: "images/tab1.png" },
    tab59: { type: String, default: "images/tab1.png" },
    tabVP: { type: String, default: "images/tab1.png" },
    tabDC: { type: String, default: "images/tab1.png" },
    tabAC: { type: String, default: "images/tab1.png" },


})


module.exports = new mongoose.model('Report', reportSchema);
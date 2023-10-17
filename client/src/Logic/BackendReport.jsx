import { useState, useRef } from "react";
import axios from "axios";
import Endpoints from "../API/Endpoints";

function ReportLogic() {

  const { saveReportData, savePolicyData } = Endpoints();
  const [cName, setCName] = useState("");
  const [reportTypeName, setReportTypeName] = useState("On-Premises");
  const [visible, setVisible] = useState(true);
  const date = new Date();


  let tab1 = "images/tab1.png";

  const [myReportData, setReportData] = useState(
    {
      allApex41ExecutiveSummary: "[]",
      allApex41ReqSummary: "[]",
      allApex43ExecutiveSummary: "[]",
      allApex43ReqSummary: "[]",
      allPolicyOneRSummeryArr: "[]",
      allPolicyTwoRSummeryArr: "[]",
      eSummaryPolicyOverview: "[]",
      eSummaryPolicyOverview1: "[]",
      recommendedProcedureArr: "[]",
      showRecommendedProcedure: "false",

      // intro1
      report_date: `${date.toLocaleDateString()}  ${date.toLocaleTimeString()}`,
      report_type: "On-Premises",
      cLogo: "images/evenuts-logo.png",
      cName: "EVENTUS",
      dv: "",
      vd: "",
      pb: "",
      ab: "",


      // intro2
      vd1: "",
      initialdraft: "",
      vd2: "",
      finalreport: "",

      //intro22
      location: "Remotely",
      customerAttendance: "",
      trendMicroAttendance: "",

      //executivesummary
      executivesummarydate: "",


      // Product Architecture
      productArchitecture: "images/PA.png",

      //apex41
      total_service: "0",
      memory1: "8",
      memory2: "8",
      sos1: "Windows Server 2019",
      cpu1: "0",
      cpu2: "0",
      ip1: "00.00.00.00",
      license_date1: "",
      version1: "1234",
      version2: "1234",
      agent_management_tree: "AD",
      total_purchased_licensed: "0",
      total_deployed_licensed: "0",
      certified_safe_software_service: "Enabled",
      apex_central_integration: "Yes",
      global_agents_settings1: "Yes",
      global_agents_settings2: "Enabled",
      global_agents_settings3: "Enabled",
      global_agents_settings4: "Enabled",
      patterns_update_status_uptodate: "0",
      outdated: "0",
      agent_scheduled_updates: "Enabled",
      agent_scheduled_updates_daily: "00:00",
      agent_scheduled_updates_option: "Daily",
      timePeriod: "00",
      smart_portection_server: "Integrated SPS",
      notification: "Enabled",

      //apexone 41 img
      apexmemory: tab1,
      apeximgsos: tab1,
      apeximglicense_date: tab1,
      apeximgversions: tab1,
      apeximgDeployed_Agents: tab1,
      apeximgCertified_Safe_Software_Service: tab1,
      apeximgapex_central_integration: tab1,
      apeximgglobal_agents_settings1: tab1,
      apeximgglobal_agents_settings2: tab1,
      apeximgglobal_agents_settings3: tab1,
      apeximgsuperman: tab1,
      apeximgagent_scheduled_updates: tab1,
      apeximgnotification: tab1,

      //apex43
      sos2: "Windows Server 2019",
      ip2: "00.00.00.00",
      version3: "",
      version4: "",
      license_date2: "",
      active_directory: "Configured",
      log_retention: "Configured",
      reports: "Scheduled",
      event_notification: "Enabled",
      syslog: "Configured",
      report_maintenance: "Configured",
      product_registration: "Enabled",

      //apex43 - 51 - 59
      apex43memory: tab1,
      apex43sos: tab1,
      tab60: tab1,
      tab6060: tab1,
      tab61: tab1,
      tab62: tab1,
      tab63: tab1,
      tab64: tab1,
      tab65: tab1,
      tab66: tab1,
      tab67: tab1,

      //Policy Overivew 1
      // 1 po1 // no name changes
      OverviewPolicyName1: "NAME-OF-POLICY",
      agent_scan_mode1: "Smart Scan",
      files_to_Scan1: "All Scannable files",
      scan_hidden_folders1: "Enabled",
      scan_compressed_files1: "2",
      scan_ole_object1: "3",
      detect_exploit_code1: "Enabled",
      virus_scan_settings_only1: "Enabled",
      cpu_usage1: "Medium",

      //po1
      tab8: tab1,
      tab9: tab1,
      tab10: tab1,
      tab11: tab1,
      tab12: tab1,
      tab13: tab1,
      tab14: tab1,
      tab15: tab1,

      //Manual Scan - Actions- no change

      use_activeAction1: "yes3",
      customize_action_for_porbable_virus_checkbox1: "",
      customize_action_for_porbable_virus_option1: "Quarantine",
      first_action1: "Quarantine",
      second_action1: "Quarantine",
      joke1: "Quarantine",
      trojans1: "Quarantine",
      virus11: "Clean",
      virus21: "Quarantine",
      test_virus1: "Quarantine",
      packer1: "Quarantine",
      probable_malware11: "Quarantine",
      probable_malware21: "Quarantine",
      other_malware11: "Clean",
      other_malware21: "Quarantine",
      back_up_files1: "Enabled",
      damage_cleanup_services11: "Enabled",
      damage_cleanup_services21: "Advanced clean-up",
      run_cleanup1: "Enabled",
      apex_one_terminates_processes1: "Clean",

      tab16: tab1,
      tab17: tab1,
      tab18: tab1,
      tab19: tab1,
      tab20: tab1,

      //2.Real-Time Scan Policy Settings - 21 -32
      virus_scan2: "Enabled",
      spyware_scan2: "Enabled",
      user_activity_on_files2: "created/modified and retrieved",
      files_to_scan2: "All Scannable files",
      scan_network_drive2: "Enabled",
      enable12: "Enabled",
      enable22: "Enabled",
      enable32: "Enabled",
      scan_compressed_files2: "2",
      scan_ole_objects2: "3",
      detect_exploit_code_in_ole_files2: "Enabled",
      cvf_exploit_scanning2: "Enabled",

      tab21: tab1,
      tab22: tab1,
      tab23: tab1,
      tab24: tab1,
      tab25: tab1,
      tab26: tab1,
      tab27: tab1,
      tab28: tab1,
      tab29: tab1,
      tab30: tab1,
      tab31: tab1,
      tab32: tab1,

      //2 Real-Time Scan-Action Settings

      use_activeAction2: "yes3",
      customize_action_for_porbable_virus_checkbox2: "",
      customize_action_for_porbable_virus_option2: "Quarantine",
      first_action2: "Quarantine",
      second_action2: "Quarantine",
      joke2: "Quarantine",
      trojans2: "Quarantine",
      virus12: "Clean",
      virus22: "Quarantine",
      test_virus2: "Quarantine",
      packer2: "Quarantine",
      probable_malware12: "Quarantine",
      probable_malware22: "Quarantine",
      other_malware12: "Clean",
      other_malware22: "Quarantine",
      back_up_files2: "Enabled",
      run_cleanup2: "Enabled",
      apex_one_terminates_processes2: "Clean",

      //Real-Time Scan-Action Settings 33 - 36 - img

      tab33: tab1,
      tab34: tab1,
      tab35: tab1,
      tab36: tab1,

      //3 Schedule Scan Policy Settings - 37-45
      virus_scan3: "Enabled",
      spyware_scan3: "Enabled",
      configure_schedule_scan_checkbox3: "weeklyEvery",
      configure_schedule_scan_weekevery3: "Monday",
      configure_schedule_scan_month3: "1",
      configure_schedule_scan_date3: "First",
      configure_schedule_scan_day3: "Monday",
      configure_schedule_scan_time3: "00:00",
      filestoscan3: "All Scannable files",
      scan_compressed_files3: "2",
      scanoleobjects3: "3",
      detect_exploit_code3: "Enabled",
      scan_boot_area3: "Enabled",
      cpu_usage3: "Medium",

      tab37: tab1,
      tab38: tab1,
      tab39: tab1,
      tab40: tab1,
      tab41: tab1,
      tab42: tab1,
      tab43: tab1,
      tab44: tab1,
      tab45: tab1,

      //3Schedule Scan-Action Settings
      use_activeAction3: "yes3",
      customize_action_for_porbable_virus_checkbox3: "",
      customize_action_for_porbable_virus_option3: "Quarantine",
      first_action3: "Quarantine",
      second_action3: "Quarantine",
      joke3: "Quarantine",
      trojans3: "Quarantine",
      virus13: "Clean",
      virus23: "Quarantine",
      test_virus3: "Quarantine",
      packer3: "Quarantine",
      probable_malware13: "Quarantine",
      probable_malware23: "Quarantine",
      other_malware13: "Clean",
      other_malware23: "Quarantine",
      back_up_files3: "Enabled",
      damage_cleanup_services13: "Enabled",
      damage_cleanup_services23: "Advanced clean-up",
      run_cleanup3: "Enabled",
      apex_one_terminates_processes3: "Clean",

      // 46 - 50
      tab46: tab1,
      tab47: tab1,
      tab48: tab1,
      tab49: tab1,
      tab50: tab1,

      //BM - 51 - 59
      bm0: "Enabled with",
      bm1: "Enabled",
      bm2: "Enabled",
      bm3: "Enabled",
      bm4: "Enabled",
      bm5: "Enabled",
      bm6: "Enabled",
      bm7: "No",
      predictiveMl: "Enabled",
      predictiveMl1: "Quarantine",
      predictiveMl2: "Terminate",
      predictiveMl3: "No",
      suspicious_Connection: "Enabled",
      vulnerability_protection: "Enabled",
      vp_mode: "Inline",
      device_control: "Enabled",
      web_reputation1: "Enabled",
      web_reputation2: "Medium",
      application_control: "Enabled",
      firewall: "Enabled",
      agent_self_protection: "Enabled",
      additional_service1: "Enabled",
      additional_service2: "Enabled",
      additional_service3: "Enabled",
      additional_service4: "Enabled",
      additional_service5: "Enabled",
      additional_service6: "Enabled",
      additional_service7: "Enabled",
      additional_service8: "Enabled",
      additional_service9: "Enabled",
      additional_service10: "Enabled",

      tab51: tab1,
      tab51BM1: tab1,
      tab51BM2: tab1,
      tab51BM3: tab1,
      tab51BM4: tab1,
      tab51BM5: tab1,
      tab51BM6: tab1,
      tab51BM7: tab1,


      tab52: tab1,
      tab52ML1: tab1,
      tab52ML2: tab1,
      tab53: tab1,
      tab54: tab1,
      tab55: tab1,
      tab56: tab1,
      tab59: tab1,
      tabVP: tab1,
      tabDC: tab1,
      tabAC: tab1,
    }
  );

  const [myPolicy2, setPolicy2Data] = useState({

    // 1 po1 // no name changes
    OverviewPolicyName1: "NAME-OF-POLICY2",
    agent_scan_mode1: "Smart Scan",
    files_to_Scan1: "All Scannable files",
    scan_hidden_folders1: "Enabled",
    scan_compressed_files1: "2",
    scan_ole_object1: "3",
    detect_exploit_code1: "Enabled",
    virus_scan_settings_only1: "Enabled",
    cpu_usage1: "Medium",

    //po1
    tab8: tab1,
    tab9: tab1,
    tab10: tab1,
    tab11: tab1,
    tab12: tab1,
    tab13: tab1,
    tab14: tab1,
    tab15: tab1,

    //Manual Scan - Actions- no change

    use_activeAction1Policy2: "yes3",
    customize_action_for_porbable_virus_checkbox1: "",
    customize_action_for_porbable_virus_option1: "Quarantine",
    first_action1: "Quarantine",
    second_action1: "Quarantine",
    joke1: "Quarantine",
    trojans1: "Quarantine",
    virus11: "Clean",
    virus21: "Quarantine",
    test_virus1: "Quarantine",
    packer1: "Quarantine",
    probable_malware11: "Quarantine",
    probable_malware21: "Quarantine",
    other_malware11: "Clean",
    other_malware21: "Quarantine",
    back_up_files1: "Enabled",
    damage_cleanup_services11: "Enabled",
    damage_cleanup_services21: "Advanced clean-up",
    run_cleanup1: "Enabled",
    apex_one_terminates_processes1: "Clean",

    tab16: tab1,
    tab17: tab1,
    tab18: tab1,
    tab19: tab1,
    tab20: tab1,

    //2.Real-Time Scan Policy Settings - 21 -32
    virus_scan2: "Enabled",
    spyware_scan2: "Enabled",
    user_activity_on_files2: "created/modified and retrieved",
    files_to_scan2: "All Scannable files",
    scan_network_drive2: "Enabled",
    enable12: "Enabled",
    enable22: "Enabled",
    enable32: "Enabled",
    scan_compressed_files2: "2",
    scan_ole_objects2: "3",
    detect_exploit_code_in_ole_files2: "Enabled",
    cvf_exploit_scanning2: "Enabled",

    tab21: tab1,
    tab22: tab1,
    tab23: tab1,
    tab24: tab1,
    tab25: tab1,
    tab26: tab1,
    tab27: tab1,
    tab28: tab1,
    tab29: tab1,
    tab30: tab1,
    tab31: tab1,
    tab32: tab1,

    //2 Real-Time Scan-Action Settings

    use_activeAction2Policy2: "yes3",
    customize_action_for_porbable_virus_checkbox2: "",
    customize_action_for_porbable_virus_option2: "Quarantine",
    first_action2: "Quarantine",
    second_action2: "Quarantine",
    joke2: "Quarantine",
    trojans2: "Quarantine",
    virus12: "Clean",
    virus22: "Quarantine",
    test_virus2: "Quarantine",
    packer2: "Quarantine",
    probable_malware12: "Quarantine",
    probable_malware22: "Quarantine",
    other_malware12: "Clean",
    other_malware22: "Quarantine",
    back_up_files2: "Enabled",
    run_cleanup2: "Enabled",
    apex_one_terminates_processes2: "Clean",

    //Real-Time Scan-Action Settings 33 - 36 - img

    tab33: tab1,
    tab34: tab1,
    tab35: tab1,
    tab36: tab1,

    //3 Schedule Scan Policy Settings - 37-45
    virus_scan3: "Enabled",
    spyware_scan3: "Enabled",
    configure_schedule_scan_checkbox3: "weeklyEvery",
    configure_schedule_scan_weekevery3: "Monday",
    configure_schedule_scan_month3: "1",
    configure_schedule_scan_date3: "First",
    configure_schedule_scan_day3: "Monday",
    configure_schedule_scan_time3: "00:00",
    filestoscan3: "All Scannable files",
    scan_compressed_files3: "2",
    scanoleobjects3: "3",
    detect_exploit_code3: "Enabled",
    scan_boot_area3: "Enabled",
    cpu_usage3: "Medium",

    tab37: tab1,
    tab38: tab1,
    tab39: tab1,
    tab40: tab1,
    tab41: tab1,
    tab42: tab1,
    tab43: tab1,
    tab44: tab1,
    tab45: tab1,

    //3Schedule Scan-Action Settings
    use_activeAction3Policy2: "yes3",
    customize_action_for_porbable_virus_checkbox3: "",
    customize_action_for_porbable_virus_option3: "Quarantine",
    first_action3: "Quarantine",
    second_action3: "Quarantine",
    joke3: "Quarantine",
    trojans3: "Quarantine",
    virus13: "Clean",
    virus23: "Quarantine",
    test_virus3: "Quarantine",
    packer3: "Quarantine",
    probable_malware13: "Quarantine",
    probable_malware23: "Quarantine",
    other_malware13: "Clean",
    other_malware23: "Quarantine",
    back_up_files3: "Enabled",
    damage_cleanup_services13: "Enabled",
    damage_cleanup_services23: "Advanced clean-up",
    run_cleanup3: "Enabled",
    apex_one_terminates_processes3: "Clean",

    // 46 - 50
    tab46: tab1,
    tab47: tab1,
    tab48: tab1,
    tab49: tab1,
    tab50: tab1,

    //BM - 51 - 59
    bm1: "Enabled",
    bm2: "Known and potential threats",
    bm3: "Enabled",
    bm4: "Enabled",
    bm5: "Enabled",
    bm6: "Enabled",
    bm7: "Enabled",
    bm8: "Enabled",
    bm9: "Prompt user",
    bm10: "Enabled",
    bm11: "No",
    predictiveMl1: "Enabled",
    predictiveMl2: "Quarantine",
    predictiveMl3: "Terminate",
    predictiveMl4: "No",
    suspicious_Connection: "Enabled",
    vulnerability_protection: "Enabled",
    vp_mode: "Inline",
    device_control: "Enabled",
    web_reputation1: "Enabled",
    web_reputation2: "Medium",
    application_control: "Enabled",
    firewall: "Enabled",
    agent_self_protection: "Enabled",
    additional_service1: "Enabled",
    additional_service2: "Enabled",
    additional_service3: "Enabled",
    additional_service4: "Enabled",
    additional_service5: "Enabled",
    additional_service6: "Enabled",
    additional_service7: "Enabled",
    additional_service8: "Enabled",
    additional_service9: "Enabled",
    additional_service10: "Enabled",

    //BM - 51 - 59
    tab51BM1: tab1,
    tab51BM2: tab1,
    tab51BM3: tab1,
    tab51BM4: tab1,
    tab51BM5: tab1,
    tab51BM6: tab1,
    tab51BM7: tab1,
    tab51BM8: tab1,

    tab52ML1: tab1,
    tab52ML2: tab1,
    tab52ML3: tab1,

    tab53: tab1,
    tab54: tab1,
    tab55: tab1,
    tab56: tab1,
    tab59: tab1,
    tabVP: tab1,
    tabDC: tab1,
    tabAC: tab1,


  });



  const getCompanyName = (e) => {
    setCName(e.target.value);

  };

  const handleType = (e) => {
    alert(`You are working on ${e.target.value} Report`);

    if (e.target.value === "SAAS") {
      setVisible(false);
      setReportTypeName("SaaS")
    } else {
      setVisible(true);
      setReportTypeName("On-Premises")
    }
  };

  const handleChange = (e) => {
    setReportData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };


  const handlePolicy2 = (e) => {
    setPolicy2Data((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const loadFile = (e) => {
    const element = document.getElementById("file");
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      // console.log('RESULT', imageBase64Stringsep)
      myReportData.cLogo = reader.result;
      document.getElementById("output").src = reader.result;
    };
    reader.readAsDataURL(file);
  };

  const loadFilePA = (e) => {
    const element = document.getElementById("filePA");
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      myReportData.productArchitecture = reader.result;
      document.getElementById("outputPA").src = reader.result;
    };
    reader.readAsDataURL(file);
    //document.getElementById("outputPA").style.display = "block"
  };

  // handleReport

  const handleReport = () => {
    const getProductById = async (e) => {
      try {
        await axios.post(saveReportData, myReportData);
      } catch (error) {
        console.log(error);
      }
    };
    getProductById();
  };

  // handle Policy overview 2

  const handlePolicyOverview2 = (e) => {

    const getProductById = async (e) => {
      try {
        // console.log("policy 2 data", myPolicy2);
        await axios.post(savePolicyData, myPolicy2);
      } catch (error) {
        console.log(error);
      }
    };
    getProductById();
  };

  return {
    cName,
    reportTypeName,
    visible,
    myPolicy2,
    handlePolicy2,
    handleChange,
    handleType,
    loadFile,
    handleReport,
    myReportData,
    getCompanyName,
    handlePolicyOverview2,
    loadFilePA,
  };

}

export default ReportLogic;

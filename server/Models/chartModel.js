const mongoose = require("mongoose");


//Main Chart 
const chartSchema = new mongoose.Schema({
    r_id: { type: String, default: '' },
    logDays: { type: String, default: "30" },
    logDuration: { type: String, default: "days" },
    logCollectionDate: { type: String, default: "" },
    chartTitles: { type: String, default: "" },
    showCharts: { type: String, default: "[]" }
});

let Chart1 = new mongoose.model("Chart", chartSchema);

//Ag

const agSchema = new mongoose.Schema({
    r_id: { type: String, default: '' },
    platform: { type: String, default: "" },
    platform_count: { type: String, default: "" },
    platform_count_sum: { type: Number, default: "" },
    agent_Program: { type: String, default: "" },
    agent_Program_Count: { type: String, default: "" },
    chartDescription: { type: String, default: "[]" }
});

let Ag = new mongoose.model("Ag", agSchema);

// virus
const virusSchema = new mongoose.Schema({
    r_id: { type: String, default: "" },
    virus: { type: String, default: "" },
    virus_count: { type: String, default: "" },
    endpoint: { type: String, default: "" },
    endpoint_count: { type: String, default: "" },
    action: { type: String, default: "" },
    action_count: { type: String, default: "" },
    action_count_per: { type: String, default: "" },
    chartTypes: { type: String, default: "" },
    desTitle: { type: String, default: "" },
    desImages: { type: String, default: "" },
    desDescription: { type: String, default: "" },
    chartFirstLine: { type: String, default: "" },
    checkDescriptionAdded: { type: Boolean, default: false },
    total_detection: { type: Number, default: "0" },
    chartDescription: { type: String, default: "[]" },
    chartSubPoints: { type: String, default: "[]" },
    showChart: { type: String, default: "[]" }

});

let Virus = new mongoose.model("Virus", virusSchema);


//Spyware
const spywareSchema = new mongoose.Schema({
    r_id: { type: String, default: "" },
    spyware: { type: String, default: "" },
    spyware_count: { type: String, default: "" },
    endpoint: { type: String, default: "" },
    endpoint_count: { type: String, default: "" },
    action: { type: String, default: "" },
    action_count: { type: String, default: "" },
    action_count_per: { type: String, default: "" },
    chartTypes: { type: String, default: "" },
    desTitle: { type: String, default: "" },
    desImages: { type: String, default: "" },
    desDescription: { type: String, default: "" },
    chartFirstLine: { type: String, default: "" },
    checkDescriptionAdded: { type: Boolean, default: false },
    total_detection: { type: Number, default: "0" },
    chartDescription: { type: String, default: "[]" },
    chartSubPoints: { type: String, default: "[]" },
    showChart: { type: String, default: "[]" }
});

let Spyware = new mongoose.model("Spyware", spywareSchema);


//WR

const wrSchema = new mongoose.Schema({

    r_id: { type: String, default: "" },
    url: { type: String, default: "" },
    url_count: { type: String, default: "" },
    endpoint: { type: String, default: "" },
    endpoint_count: { type: String, default: "" },
    protocol: { type: String, default: "" },
    protocol_count: { type: String, default: "" },
    action: { type: String, default: "" },
    action_count: { type: String, default: "" },
    chartDescription: { type: String, default: "[]" },
    chartTypes: { type: String, default: "" },
    chartFirstLine: { type: String, default: "" },
    desTitle: { type: String, default: "" },
    desImages: { type: String, default: "" },
    checkDescriptionAdded: { type: Boolean, default: false },
    desDescription: { type: String, default: "" },
    total_detection: { type: Number, default: 0 },
    chartSubPoints: { type: String, default: "[]" },
    showChart: { type: String, default: "[]" }
});

let Wr = new mongoose.model("Wr", wrSchema);

// ips
const ipsSchema = new mongoose.Schema({
    r_id: { type: String, default: "" },
    rule: { type: String, default: "" },
    rule_count: { type: String, default: "" },
    product_endpoint: { type: String, default: "" },
    product_endpoint_count: { type: String, default: "" },
    action: { type: String, default: "" },
    action_count: { type: String, default: "" },
    action_count_per: { type: String, default: "" },
    chartTypes: { type: String, default: "" },
    chartFirstLine: { type: String, default: "" },
    total_detection: { type: Number, default: "" },
    chartDescription: { type: String, default: "[]" },
    updatedIPTable: { type: String, default: "[]" },
    chartSubPoints: { type: String, default: "[]" },
    showChart: { type: String, default: "[]" }
});

let Ips = new mongoose.model("Ips", ipsSchema);


//bm
const ccSchema = new mongoose.Schema({
    product_endpoint: { type: String, default: "" },
    product_endpoint_count: { type: String, default: "" },
    callback_address: { type: String, default: "" },
    callback_address_count: { type: String, default: "" },
    chartTypes: { type: String, default: "" },
    chartFirstLine: { type: String, default: "" },
    total_detection: { type: Number, default: "" },
    chartDescription: { type: String, default: "[]" },
    chartSubPoints: { type: String, default: "[]" },
    showChart: { type: String, default: "[]" }
});

//cc
let Cc = new mongoose.model("Cc", ccSchema);

//bm
const bmSchema = new mongoose.Schema({
    r_id: { type: String, default: "" },
    endpoint: { type: String, default: "" },
    endpoint_count: { type: String, default: "" },
    policy: { type: String, default: "" },
    policy_count: { type: String, default: "" },
    action: { type: String, default: "" },
    action_count: { type: String, default: "" },
    action_count_per: { type: String, default: "" },
    chartTypes: { type: String, default: "" },
    chartFirstLine: { type: String, default: "" },
    total_detection: { type: Number, default: "" },
    chartDescription: { type: String, default: "[]" },
    updatedPolicyRiskTable: { type: String, default: "[]" },
    chartSubPoints: { type: String, default: "[]" },
    showChart: { type: String, default: "[]" }
});

let Bm = new mongoose.model("Bm", bmSchema);


// dc
const dcSchema = new mongoose.Schema({
    r_id: { type: String, default: "" },
    device_type: { type: String, default: "" },
    device_type_count: { type: String, default: "" },
    device_type_per: { type: String, default: "" },
    product_endpoint: { type: String, default: "" },
    product_endpoint_count: { type: String, default: "" },
    permission: { type: String, default: "" },
    permission_count: { type: String, default: "" },
    chartTypes: { type: String, default: "" },
    chartFirstLine: { type: String, default: "" },
    total_detection: { type: Number, default: "" },
    chartDescription: { type: String, default: "[]" },
    updatedDCVendorTable: { type: String, default: "[]" },
    chartSubPoints: { type: String, default: "[]" },
    showChart: { type: String, default: "[]" }
});

let Dc = new mongoose.model("Dc", dcSchema);


// smartscan
const smartScanSchema = new mongoose.Schema({
    r_id: { type: String, default: "" },
    ssap: { type: String, default: "" },
    ssap_count: { type: String, default: "" },
    chartFirstLine: { type: String, default: "" },
    total_detection: { type: Number, default: 0 },
    tablePatternData: { type: String, default: "" },
    patternDays: { type: Number, default: 7 }

});

let Smartscan = new mongoose.model("Smartscan", smartScanSchema);

const furtherInformationSchema = new mongoose.Schema({
    r_id: {
        type: String,
        default: ''
    },

    linkTitle1: {
        type: String,
        default: ''
    },

    furtherInformation1: {
        type: String,
        default: ''
    },

    linkTitle2: {
        type: String,
        default: 'https://success.trendmicro.com/solution/1105726'
    },

    furtherInformation2: {
        type: String,
        default: 'https://success.trendmicro.com/solution/1105726'
    },

    linkTitle3: {
        type: String,
        default: ''
    },

    furtherInformation3: {
        type: String,
        default: ''
    }

});

let FurtherInformation = new mongoose.model("FurtherInformation", furtherInformationSchema);




module.exports = {
    Chart1, Ag, Virus, Spyware, Bm, Dc, Ips, Smartscan, Wr, Cc, FurtherInformation
}
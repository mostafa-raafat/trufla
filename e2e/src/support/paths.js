const path = require('path');

const jsonReports = path.join(process.cwd(), '/e2e/src/reports/json');
const htmlReports = path.join(process.cwd(), '/e2e/src/reports/html');
const targetJson = path.join(jsonReports, '/cucumber_report.json');

exports.cucumberReporterOptions = {
    theme: 'bootstrap',
    jsonFile: targetJson,
    output: htmlReports + '/cucumber_report.html',
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
        'App Version': '0.0.1',
        'Test Environment': 'Testing',
        Browser: 'Chrome  54.0.2840.98',
        Platform: 'MacOS 12',
        Parallel: 'Scenarios',
        Executed: 'Local'
    }
};
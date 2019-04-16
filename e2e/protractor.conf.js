// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const reporter = require('cucumber-html-reporter');
const options = require('./src/support/paths');

exports.config = {

  allScriptsTimeout: 11000,
  specs: ["./src/features/**/*.feature"],
  seleniumAddress: "http://localhost:4444",
  capabilities: {
    browserName: "chrome",
    args: ["no-sandbox"]
  },

  directConnect: true,
  baseUrl: "http://localhost:4200/",
  framework: "custom",
  frameworkPath: require.resolve("protractor-cucumber-framework"),
  cucumberOpts: {
    require: ["./src/steps/**/*.step.ts", "./src/hooks/**/*.hook.ts"],
    format: 'json:./e2e/src/reports/json/cucumber_report.json'
  },

  onPrepare() {
    require("ts-node").register({
      project: require("path").join(__dirname, "./tsconfig.e2e.json")
    });
  },

  onComplete: () => {
    try {
      reporter.generate(options.cucumberReporterOptions); // invoke cucumber-html-reporter
    } catch (err) {
      if (err) {
        throw new Error('Failed to save cucumber test results to json file.');
      }
    }
  }

};

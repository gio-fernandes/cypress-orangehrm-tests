const { defineConfig } = require("cypress");
const webpack = require("@cypress/webpack-preprocessor");
const path = require("path");

module.exports = defineConfig({
  e2e: {

    baseUrl: "https://opensource-demo.orangehrmlive.com",

    setupNodeEvents(on, config) {

      const options = {
        webpackOptions: {
          resolve: {
            alias: {
              "@pages": path.resolve(__dirname, "cypress/pages"),
            },
            extensions: [".js"]
          }
        }
      };

      on("file:preprocessor", webpack(options));

      return config;
    },
  },
});
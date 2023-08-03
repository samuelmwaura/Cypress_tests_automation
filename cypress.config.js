const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges:false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false  // It solves the cross Origin error that prevents cypress from access other domain sites
  },
});

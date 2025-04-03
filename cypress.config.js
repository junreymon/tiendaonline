const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'azpskz',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

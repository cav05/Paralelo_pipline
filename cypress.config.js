const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '65k9q2',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

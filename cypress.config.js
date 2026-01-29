const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'chromium' && browser.name !== 'electron') {
          // 2. ปิดป้ายไฟที่บอกว่าเป็นหุ่นยนต์ (การพรางตัวระดับลึก)
          // คำสั่งนี้จะลบค่า navigator.webdriver ออกไปครับ
          launchOptions.args.push('--disable-blink-features=AutomationControlled');
        }
        return launchOptions;
      });
    },
  },
});

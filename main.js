const { Builder, By, Key } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function myFunction() {
  //create a new instance of a driver with chrome
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    //navigate to google.com
    await driver.get('http://www.google.com');
    //enter the text 'webdriver' into the input field 'q'
    await driver.findElement(By.name('q')).sendKeys('webdriver');
    //press the enter key
    await driver.findElement(By.name('q')).sendKeys(Key.ENTER);

    //execute whatever tasks you want to run in google
  } finally {
    await driver.quit();
  }
})();

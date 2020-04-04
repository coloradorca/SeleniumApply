const { Builder, By, Key, Select } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
// const url = require('./url.js');
const { usernameAndPw, loginUrl } = require('./usernameAndPw.js');

(async function myFunction() {
  //create a new instance of a driver with chrome
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    //navigate to login pagin
    await driver.get(loginUrl);
    //enter the text 'username' into the input field
    await driver.findElement(By.name('user[email]')).sendKeys(usernameAndPw[0]);
    //enter the password and hit enter
    await driver
      .findElement(By.name('user[password]'))
      .sendKeys(usernameAndPw[1], Key.ENTER);

    //TODO scroll to bottom of page

    //I'm using the xpath selector as there wasn't any readily accessible class names or Id to use

    // //click filter button to add more filters (narrow down to non-senior and active in the last 15 days( due to Covid19, older than 30days is probably a no go))
    let filterbtn = driver.findElement(
      By.xpath(
        '//button[@data-test="SearchBar-ToggleFilterControlPanelButton"]',
      ),
    );
    await filterbtn.click();

    //find the field that excludes keywords senior
    let excludedKeywords = driver.findElement(
      By.xpath(
        '//input[@data-test="KeywordsFilterField--excludedKeywords--input"]',
      ),
    );
    await excludedKeywords.sendKeys('senior', Key.ENTER);

    //find the field that has days since posting

    // let daysSinceStartupLastActive = driver.findElement(
    //   By.xpath('//div[@name="daysSinceStartupLastActive"]'),
    // );

    // await daysSinceStartupLastActive.click();

    // await driver
    //   .findElement(By.xpath('//input[@name="daysSinceStartupLastActive "'))
    //   .sendKeys('30');
    // // .click();

    //click the button to review results
    let exitFilters = driver.findElement(
      By.xpath('//button[@data-test="SearchBar-ViewResultsButton"]'),
    );

    await exitFilters.click();

    //error handling
  } catch (err) {
    console.log(err);
    // driver.quit();
  } finally {
    //wait a couple seconds to see what the code above did, then quit the automation
    await driver.sleep(5000);
    await driver.quit();
  }
})();

// field for excludedKeywords
// <input class="styles_component__1gMPT input_8bf46 styles_bordered__20Gln styles_warning__2qKxy" type="text" data-test="KeywordsFilterField--excludedKeywords--input" placeholder="Enter a keyword">

// field for last 30 days
// <input name="daysSinceStartupLastActive" type="hidden" value="30">

// button to click view results
// <button class="styles_component__3A0_k styles_primary__3xZwV styles_small__6SIIc styles_emphasis__KRjK8" type="button" data-test="SearchBar-ViewResultsButton">View results</button>

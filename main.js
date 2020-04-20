const { Builder, By, Key, Select } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
// const url = require('./url.js');
const { usernameAndPw, loginUrl, note } = require('./usernameAndPw.js');

(async function myFunction() {
  //create a new instance of a driver with chrome
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    //navigate to login pagin
    await driver.get(loginUrl);
    //enter the text 'username' into the input field
    await driver.findElement(By.name('user[email]')).sendKeys(usernameAndPw[0]);
    //enter the password and press enter
    await driver
      .findElement(By.name('user[password]'))
      .sendKeys(usernameAndPw[1], Key.ENTER);

    //I'm using the xpath selector as there wasn't any readily accessible class names or Id to use

    // //click filter button to add more filters (narrow down to non-senior and active in the last 15 days( due to Covid19, older than 30days is probably a no go))
    // let filterbtn = driver.findElement(
    //   By.xpath(
    //     '//button[@data-test="SearchBar-ToggleFilterControlPanelButton"]',
    //   ),
    // );
    // await driver.sleep(1000);
    // await filterbtn.click();

    // //find the field that excludes keywords senior
    // let excludedKeywords = driver.findElement(
    //   By.xpath(
    //     '//input[@data-test="KeywordsFilterField--excludedKeywords--input"]',
    //   ),
    // );
    // await excludedKeywords.sendKeys('senior', Key.ENTER);

    // await driver.sleep(1000);

    // //click the button to review results
    // let exitFilters = driver.findElement(
    //   By.xpath('//button[@data-test="SearchBar-ViewResultsButton"]'),
    // );
    // await exitFilters.click();

    // await driver.sleep(1000);

    // // filter jobs by the newest listing
    // await driver
    //   .findElement(
    //     By.xpath(
    //       // '//button[@class="styles_component__3A0_k styles_secondaryGray__HjszQ styles_regular__3b1-C styles_emphasis__KRjK8 button_cecdc"]',
    //       "//*[contains(text(), 'Recommended')]",
    //     ),
    //   )
    //   .click();

    // await driver.sleep(1000);
    // await driver
    //   .findElement(By.xpath("//*[contains(text(), 'Newest')]"))
    //   .click();

    await driver.sleep(2000);

    //the follow block is an anonymous asynchrounous IIFE that updates with the DOM every pass of the loop
    (async function () {
      let counter = 0;
      //change the number to define how many jobs are applied for
      while (counter < 1) {
        // the apply button is selected and redefined after every pass to reflect the change in the DOM
        let applyButton = driver.findElement(
          By.xpath("//button[contains(text(), 'Apply')]"),
        );
        applyButton.click();

        await driver.sleep(2000);

        let company;
        await driver
          .findElement(By.className('startup_5f07e'))
          .getText()
          .then((text) => (company = text));
        await console.log(company);

        await driver.findElement(
          By.xpath('//button[contains(text(), "Cancel")]'),
        );

        // //send the note to the job poster
        // await driver.findElement(By.name('userNote')).sendKeys(note);
        // //SUBMIT!
        // await driver
        //   .findElement(
        //     By.xpath('//button[contains(text(), "Send application")]'),
        //   )
        //   .click();

        await driver.sleep(3000);
        counter++;
      }
      return;
    })();
  } catch (err) {
    console.log(err);
    driver.quit();
  } finally {
    //wait a couple seconds to see what the code above did, then quit the automation
    await driver.sleep(4000);
    await driver.quit();
  }
})();

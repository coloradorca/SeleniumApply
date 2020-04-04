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
    await driver.sleep(1000);
    await filterbtn.click();

    //find the field that excludes keywords senior
    let excludedKeywords = driver.findElement(
      By.xpath(
        '//input[@data-test="KeywordsFilterField--excludedKeywords--input"]',
      ),
    );
    await excludedKeywords.sendKeys('senior', Key.ENTER);

    await driver.sleep(5000);

    //find the field that has days since posting

    let daysSinceStartupLastActiveOuter = driver.findElement(
      By.xpath(
        '//div[@class="css-1szy77t-control select__control select__control--is-focused select__control--menu-is-open"]',
      ),
      // <div class="css-1szy77t-control select__control select__control--is-focused select__control--menu-is-open"><div class="css-1hwfws3 select__value-container select__value-container--has-value"><div class="css-dvua67-singleValue select__single-value">30 days</div><div class="css-1g6gooi"><div class="select__input" style="display: inline-block;"><input autocapitalize="none" autocomplete="off" autocorrect="off" id="react-select-7-input" spellcheck="false" tabindex="0" type="text" aria-autocomplete="list" value="" style="box-sizing: content-box; width: 2px; background: 0px center; border: 0px; font-size: inherit; opacity: 1; outline: 0px; padding: 0px; color: inherit;"><div style="position: absolute; top: 0px; left: 0px; visibility: hidden; height: 0px; overflow: scroll; white-space: pre; font-size: 16px; font-family: system-ui; font-weight: 400; font-style: normal; letter-spacing: normal; text-transform: none;"></div></div></div></div><div class="css-1wy0on6 select__indicators"><span class="css-bgvzuu-indicatorSeparator select__indicator-separator"></span><div aria-hidden="true" class="css-1thkkgx-indicatorContainer select__indicator select__dropdown-indicator"><svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" class="css-19bqh2r"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg></div></div></div>
    );
    let reactInput = driver.findElement(By.id('react-select-7-input'));
    await reactInput.click();
    await reactInput.sendKeys('30');
    // <input autocapitalize="none" autocomplete="off" autocorrect="off" id="react-select-7-input" spellcheck="false" tabindex="0" type="text" aria-autocomplete="list" value="" style="box-sizing: content-box; width: 2px; background: 0px center; border: 0px; font-size: inherit; opacity: 1; outline: 0px; padding: 0px; color: inherit;"></input>

    await daysSinceStartupLastActiveOuter.click();
    // <div class="css-1szy77t-control select__control select__control--is-focused select__control--menu-is-open"><div class="css-1hwfws3 select__value-container select__value-container--has-value"><div class="css-dvua67-singleValue select__single-value">30 days</div><div class="css-1g6gooi"><div class="select__input" style="display: inline-block;"><input autocapitalize="none" autocomplete="off" autocorrect="off" id="react-select-7-input" spellcheck="false" tabindex="0" type="text" aria-autocomplete="list" value="" style="box-sizing: content-box; width: 2px; background: 0px center; border: 0px; font-size: inherit; opacity: 1; outline: 0px; padding: 0px; color: inherit;"><div style="position: absolute; top: 0px; left: 0px; visibility: hidden; height: 0px; overflow: scroll; white-space: pre; font-size: 16px; font-family: system-ui; font-weight: 400; font-style: normal; letter-spacing: normal; text-transform: none;"></div></div></div></div><div class="css-1wy0on6 select__indicators"><span class="css-bgvzuu-indicatorSeparator select__indicator-separator"></span><div aria-hidden="true" class="css-1thkkgx-indicatorContainer select__indicator select__dropdown-indicator"><svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" class="css-19bqh2r"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg></div></div></div>

    // let innerDiv = daysSinceStartupLastActiveOuter.findElement(
    //   By.xpath(
    //     '//div[@class="css-1hwfws3 select__value-container select__value-container--has-value"]',
    //   ),
    // );

    // let daysSinceStartupLastActiveInput = daysSinceStartupLastActiveOuter.findElement(
    //   By.xpath('//input[@name="daysSinceStartupLastActive"]'),
    // );

    // await innerDiv.click();

    await driver.sleep(5000);
    await driver
      .findElement(By.xpath('//input[@name="daysSinceStartupLastActive"]'))
      .sendKeys('30', Key.ENTER);

    //click the button to review results
    let exitFilters = driver.findElement(
      By.xpath('//button[@data-test="SearchBar-ViewResultsButton"]'),
    );

    await exitFilters.click();

    //error handling
  } catch (err) {
    console.log(err);
    driver.quit();
  } finally {
    //wait a couple seconds to see what the code above did, then quit the automation
    await driver.sleep(5000);
    // await driver.quit();
  }
})();

// field for excludedKeywords
// <input class="styles_component__1gMPT input_8bf46 styles_bordered__20Gln styles_warning__2qKxy" type="text" data-test="KeywordsFilterField--excludedKeywords--input" placeholder="Enter a keyword">

// field for last 30 days
// <input name="daysSinceStartupLastActive" type="hidden" value="30">

// button to click view results
// <button class="styles_component__3A0_k styles_primary__3xZwV styles_small__6SIIc styles_emphasis__KRjK8" type="button" data-test="SearchBar-ViewResultsButton">View results</button>

// #main > div > div.frame_6b4d4 > div.content_1ca23 > div > div.component_3a9b0 > button > span > div

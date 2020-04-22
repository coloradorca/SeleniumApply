# Selenium WebDriver Auto Apply

Automate Job Applications for job listings on Angel.co using Selenium WebDriver.

## Description

---

So you’re looking for a job? The aggregated position listings on job boards are a perfect place to apply for each job methodically and sequentially. Selenium WebDriver Auto Apply is a program that automates filtering search criteria, sending a note to a hiring manager, and clicking submit. This is not my original idea. A bud of mine created something similar. Max Caudle (Maison Caiby) mentioned this idea, and here is his [repo](https://github.com/MasonCaiby/auto_app). But I had a couple issues with ripping off his code and using it myself. First He wrote his app in Python, I have a limited understanding of Python and I like to understand what is going on. Second, Angel.co has since changed their website, so his code is outdated.

The two main reasons I wrote this program are:

1. To learn Selenium WebDriver (not its intended use) and automated testing.

2. To confirm my suspicion that blindly applying for jobs is a fruitless endeavor.

---

## Examples

[Youtube Video](https://youtu.be/xCWGoQNxbpU) displaying this program sending....

![image](screenshot3.png)

## Installation

Create a profile on [AngelList](https://angel.co/)

Create some basic filters on what types of jobs you're looking for. Ensure those filters are correct, and verify by closing out of that window, log in again, and see if they persist. If the filters persisted, the following program should pick them up when you log in with each new instance of the WebDriver.

Install [Selenium](https://www.npmjs.com/package/selenium-webdriver)

`npm install selenium-webdriver`

Install a [webdriver](https://www.selenium.dev/documentation/en/webdriver/driver_requirements/#quick-reference) that you'll be using.

Move the Webdriver to your PATH env variable, i.e.

`sudo mv chromedriver /usr/local/bin/`

Verify your webdriver is indeed in your PATH

`sudo nano /etc/paths`

That should be enough to get you started...

You will have to create a new file in the root directory named usernameAndPw.js where you will create and store variables(usernameAndPw, loginUrl, note) as defined in the autoApply.js file on line 5. The usernameAndPw variable should look like:

`['YourEmailAddress@gmail.com', 'TopsecretPW1234']`

If you so choose to keep track of the jobs you applied to, create a new .csv file and on line 133 of autoApply.js, point the fs.appendFileSync function to the correct path.

---

## Notes

Some of the script navigates filters that are pertinent during the time I'm applying (Covid Days). So these filters might not be pertinent to all job seekers in a given market. The code is heavily commented and explained to give step by step explanations of what each line of code does.

I had some complications with getting the exe file in my PATH env variable, [this Link](https://www.kenst.com/2015/03/including-the-chromedriver-location-in-macos-system-path/) might be useful resource.

## Author

Rob Gonzalez-Pita

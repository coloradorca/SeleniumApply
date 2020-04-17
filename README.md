# SeleniumApply

Automate Job Applications for jobs on Angel.co using Selenium (in JavaScript).

## Description

---

Project Idea is not original in the least bit. Although a quick google search wasn't too productive on how to automate job applications, a bud of mine created something similar. [Max Caudle](http://maxcaudle.com/contact) (Aux Cable || Maison Caiby) mentioned this idea, and here is his [repo](https://github.com/MasonCaiby/auto_app).

But the issues I found with ripping off his code and using it myself are:

1. He wrote his in Python. I have a limited understanding of Python and I like to understand what is going on.

2. I wanted to learn Selenium WebDriver (not its intended use) and writing 'virtual tests' for sites.

3. Angel.co has since changed their website, so his code is outdated.

---

## Reasoning behind this Project

This was mostly done to 'cover my bases' and really confirm my suspicion that blindly applying for jobs is a waste of time.

---

## Getting Started

Install [Selenium](https://www.npmjs.com/package/selenium-webdriver)

Install a [specific webdriver](https://www.selenium.dev/documentation/en/webdriver/driver_requirements/#quick-reference) that you'll be using.

Move the Webdriver to your PATH of choice, i.e. `sudo mv chromedriver /usr/local/bin/`

Verify your webdriver is indeed in your PATH `sudo nano /etc/paths`

That should be enough to get you started...

---

## Notes

Some of the script navigates filters that are pertinent during the time I'm applying (Covid Days). So these filters might not be pertinent to all job seekers in a given market.

## Author

Rob Gonzalez-Pita

This is the home assignment to assess your coding skills and test design skills. Good Luck!
Please use any test framework to do the following task and push your code to a public git repository, alongside with instruction to set up environment and be able to run your code.

**Question:**

Follow the **page object model**. Navigate to [Spotify Web Player](https://open.spotify.com). 
Login from Home page (can login by clicking the “LOG IN” button or through the popup when you click the play button on the player).
Once you have logged in, design and write automation test for the music player.

**Recommendations:**

This is an open question, in your code, we would like to see your code structure, test design, and test strategy.
In order to test the player you need to at least have an free trial account with Spotify, Please don’t commit your login credential to the github.
Please give us instructions of where to put our own login information and detailed framework environment setup guidance if we want to run your code locally.
Bonus question: inside the framework, you are welcome to do more than we asked in the above question to demonstrate you automation skills.

## Installation

### System Requirements:
- Node.js v9.5.0
- npm version v5.6.0
- cypress v3.8.3
- Google Chrome 78

Install Node: https://nodejs.org/en/download/

## Install Node Packages
- run `npm install` to install cypress locally as a dev dependancy

## Run Tests
```
npm run test-cy:e2e
```

## Add your spotify Login information in:
```
Open /cypress/support/command.js 

```

# cucumber-javascript

## Prerequisites
* NodeJS
* Java
---
## Install
1. 
```
npm i webdriverio @wdio/cli
```
2. 
```
.\node_modules\.bin\wdio config
```
  1. Where should your test be launched? -> `On my local machine`
  2. Which framework do you want to use?  -> `Cucumber`
  3. Do you want to run WebdriverIO commands sync or async? -> `Sync`
  4. Where are you feature files located? -> `(./features/**/*.feature)`
  5. Where are you step definitions located? -> `(./features/step-definitions)`
  6. Which reporter do you want to use? -> `Spec`
  7. Do you want to add a service to your test setup? -> `Selenium-standalone`

3. Change the desired **capabilities** into file `wdio.conf.js`
4. In Hook, section uncomment `beforeSession` and add `babel` that allows using some of the more modern features
```javascript
beforeSession: function (config, capabilities, specs) {
        require("@babel/register");
    },
```
5. Change **cucumberOpts**  into file `wdio.conf.js`
´´´javascript
require: [
    "./steps/**/given.js",
    "./steps/**/when.js",
    "./steps/**/then.js"
], // <string[]> (file/dir) require files before executing features 
´´´

---
To run your tests, execute:
.\node_modules\.bin\wdio .\wdio.conf.js
/**
 * Login into app
 * 
 * @param {string} user username
 * @param {string} pass password
 * @param {object} userField WebDriverIO input field
 * @param {object} passField WebDriverIO input field
 * @param {object} submitButton WebDriverIO submit button
 */
export default (user,pass,userField, passField, submitButton)=>{
    userField.waitForDisplayed(30000);
    userField.setValue(user);

    passField.waitForDisplayed(30000);
    passField.setValue(pass);

    submitButton.waitForDisplayed(30000);
    submitButton.click();
};
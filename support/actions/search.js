/**
 * Search for a keyword
 * 
 * @param {string} keyword keyword to search for
 * @param {object} inputField WebDriverIO input field
 * @param {object} submitButton WebDriverIO submit button
 */
export default (keyword, inputField, submitButton)=>{
    inputField.waitForDisplayed(30000);
    inputField.click();
    inputField.setValue(keyword);
    submitButton.waitForDisplayed(30000);
    submitButton.click();
};
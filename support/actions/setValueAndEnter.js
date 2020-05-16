/**
 * set value and enter for a keyword
 * 
 * @param {string} keyword keyword to search for
 * @param {object} inputField WebDriverIO input field
 */
export default (keyword, inputField)=>{
    inputField.waitForDisplayed(30000);
    inputField.click();
    inputField.setValue(keyword);
    browser.keys("Enter");
};
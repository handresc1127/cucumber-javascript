/**
 * select by value
 *  
 * @param {string} keyword keyword to search for
 * @param {object} inputField WebDriverIO input field
 */
export default (keyword, inputField)=>{
    inputField.waitForDisplayed(30000);
    inputField.selectByAttribute('value',keyword);
};
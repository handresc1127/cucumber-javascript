/**
 * return text
 *  
 * @param {object} inputField WebDriverIO input field
 */
export default (inputField)=>{
    inputField.waitForDisplayed(30000);
    var value = inputField.getText();
    return value
};
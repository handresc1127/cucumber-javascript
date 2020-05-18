/**
 * wait to elemnt
 *  
 * @param {object} inputField WebDriverIO input field
 */
export default (inputField)=>{
    inputField.waitForDisplayed(30000);
};
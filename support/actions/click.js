/**
 * 
 * @param {object} field WebDriver IO object to clicked
 */
export default field => {
    field.waitForDisplayed(30000);
    field.click()
};
import assert from "assert";

/**
 * Verify if field is displayed
 * 
 * @param {object} field WebDriverIO input field
 */
export default (field) => {
    const isPresent=field.isDisplayed();
    assert.ok(isPresent,`The field ${field} is no Displayed`);
};
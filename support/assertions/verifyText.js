import assert from "assert";

/**
 * verify if the current text is equal to expected 
 * 
 * @param {object} field WebDriverIO input field
 * @param {string} expected
 */
export default (field, expected) => {
    const currentText=field.getText();
    assert.equal(currentText,expected);
};
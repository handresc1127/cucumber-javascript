import assert from "assert";

/**
 * verify if text contains other text
 * 
 * @param {string} current
 * @param {string} expected
 */
export default (current, expected) => {
    assert.ok(current.includes(expected),expected+" not included in current value");
};
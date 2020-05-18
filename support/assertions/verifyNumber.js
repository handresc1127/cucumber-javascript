import assert from "assert";

/**
 * verify two int are equals
 * 
 * @param {int} current
 * @param {int} expected
 */
export default (current, expected) => {
    assert.ok(current==expected,"Expected: "+expected+" but was: "+current);
};
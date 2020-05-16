import assert from "assert";

/**
 * Ensure link text includes keyword
 * 
 * @param {Array.Object} links List of WebDriverIO elements
 * @param {String} keyword search keyword
 */
export default (links, keyword) => {
    links.forEach(link => {
        const linkText = link.getText().toLowerCase();
        if (linkText) {
            assert(
                linkText.includes(keyword),
                `Link text does not include ${keyword}`
            );
        }
    });
};
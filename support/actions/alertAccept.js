/**
 * 
 */
export default () => {
    browser.waitUntil(
        () => browser.isAlertOpen(),
        {
            timeout: 5000,
            timeoutMsg: 'Alert is no open'
        }
    );
    console.log(browser.getAlertText());
    browser.acceptAlert()
};
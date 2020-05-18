/**
 * wait to url
 *  
 * @param {string} urlExpected
 */
export default (urlExpected)=>{
    browser.waitUntil(
        () => browser.getUrl() === urlExpected,
        {
            timeout: 5000,
            timeoutMsg: 'url expected to be different after 5s '+browser.getUrl()+' was'+ urlExpected
        }
    );
};
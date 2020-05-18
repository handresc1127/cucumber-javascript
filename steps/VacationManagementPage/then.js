import { Then } from "cucumber";
import homePage from "../../pages/Home";
import listPage from "../../pages/List";
void

Then('Verify than is logged-in the homepage', () => { 
    homePage.verifyLogoIsPresent();
    homePage.verifyLoggedIn();
    homePage.VerifyUserInformationIsPresent();
});


Then('Verify the before user {string} exist', leader => { 
    listPage.goTo();
    listPage.verifyUser(leader);
});
Then('Return user row {string}', leader => { 
    listPage.returnUser(leader);
});
Then('Delete before user {string}',leader => { 
    listPage.deleteUser(leader);
});
Then('Verify user was deleted {string}', leader => { 
    listPage.verifyNoUser(leader);
});
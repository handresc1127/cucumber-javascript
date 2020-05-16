import { Then } from "cucumber";
import homePage from "../../pages/Home";
void

Then('Verify than is logged-in the homepage', () => { 
    homePage.verifyLogoIsPresent();
    homePage.verifyLoggedIn();
    homePage.VerifyUserInformationIsPresent();
});


Then('Verify the before user exist', () => { 
});
Then('Return user row', () => { 
});
Then('Delete before user', () => { 
});
Then('Verify user was deleted', () => { 
});
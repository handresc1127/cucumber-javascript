import verifyFieldIsPresent from "../support/assertions/verifyFieldIsPresent";
import verifyText from "../support/assertions/verifyText";

class Home{
    get logoField(){
        return $("#logo");
    }

    get loggedInNoticeField(){
        return $("#content .flash_notice");
    }

    get userInformationField(){
        return $("#user_information");
    }

    verifyLogoIsPresent(){
        verifyFieldIsPresent(this.logoField);
    }

    verifyLoggedIn(){
        verifyText(this.loggedInNoticeField,"Signed in successfully.");
    }

    VerifyUserInformationIsPresent(){
        verifyFieldIsPresent(this.userInformationField);
    }
}

module.exports = new Home();
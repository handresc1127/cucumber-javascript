import goToURL from "../support/actions/goToURL";
import loginGap from "../support/actions/login";
import click from "../support/actions/click";

class Login{
    get userField(){
        return $("#user_email");
    }
    get passField(){
        return $("#user_password");
    }
    get submitButton(){
        return $(".submit");
    }

    get createUserButton(){
        return $("[href='/employees/new']");
    };

    login(username,password){
        loginGap(username,password,this.userField,this.passField,this.submitButton);
    }

    goTo(){
        goToURL("/");
    }

    createEmployes(){
        click(this.createUserButton);
    };
}

module.exports = new Login();
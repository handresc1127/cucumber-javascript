import goToURL from "../support/actions/goToURL";
import loginGap from "../support/actions/login";
import click from "../support/actions/click";
import getText from "../support/actions/getText";
import waitToElement from "../support/actions/waitToElement";
import waitToUrl from "../support/actions/waitToUrl";
import verifyContains from "../support/assertions/verifyContains";
import verifyNumber from "../support/assertions/verifyNumber";
import alertAccept from "../support/actions/alertAccept";


class List{
    get tableField(){
        return $("table");
    }

    get createUserButton(){
        return $("[href='/employees/new']");
    };

    deleteButton(index){
        var i=index+1;
        return $('tr:nth-child('+i+') > td:nth-child(9) > a');
    }

    userRow(index){
        var i=index+1;
        return $('tr:nth-child('+i+')');
    }

    goTo(){
        goToURL("/employees");
        waitToUrl("https://vacations-management.herokuapp.com/employees");
    }
    verifyUser(leader){
        var table=getText(this.tableField);
        //console.log(table);
        verifyContains(table,leader);
    }
    returnUser(leader){
        var table=getText(this.tableField);
        var res = table.split("\n");
        var i;
        for (i = 0; i < res.length; i++) {
            if(res[i].includes(leader))
              break;
        }
        if(i>=res.length){
            i=-1;
        }            
        console.log("index= "+i);
        return i;
    }
    deleteUser(leader){
        var index=this.returnUser(leader);
        var text=getText(this.userRow(index));
        console.log(text);
        click(this.deleteButton(index));
        alertAccept();
        browser.pause(3000);
    }
    verifyNoUser(leader){
        var index=this.returnUser(leader);
        if(index!=-1){
            this.deleteUser(leader);
        }
        verifyNumber(index,-1);
    }
}

module.exports = new List();
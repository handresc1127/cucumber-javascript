import setValue from "../support/actions/setValue";
import selectText from "../support/actions/selectText";
import click from "../support/actions/click";

class Creation{
    get firstNameField(){
        return $("#employee_first_name");
    }

    get lastNameField(){
        return $("#employee_last_name");
    }

    get emailField(){
        return $("#employee_email");
    }

    get identificationField(){
        return $("#employee_identification");
    }
    get leaderField(){
        return $("#employee_leader_name");
    }
    get yearField(){
        return $("#employee_start_working_on_1i");
    }

    get monthField(){
        return $("#employee_start_working_on_2i");
    }

    get dayField(){
        return $("#employee_start_working_on_3i");
    }

    get submitButton(){
        return $("input[type='submit']");
    }

    setFullName(fullName){
        var res = fullName.split(" ");
        var i;
        var firstName="";
        var lastName="";
        for (i = 0; i < Math.floor(res.length/2); i++) {
            firstName += res[i] + " ";
        }
        for (i = Math.floor(res.length/2); i < res.length; i++) {
            lastName += res[i] + " ";
        }
        setValue(firstName.trim(),this.firstNameField);
        setValue(lastName.trim(),this.lastNameField);
    }

    setEmail(emailAddress){
        setValue(emailAddress,this.emailField);
    }

    setIdentification(id){
        setValue(id,this.identificationField);
    }

    setDateStarts(date){
        var separators = [' ', '-', '/','\\/', ':'];
        var res = date.split(new RegExp('[' + separators.join('') + ']', 'g'));

        var day="";
        var month="";
        var year="";
        if(res.length==3){
            day=parseInt(res[0]);
            month=parseInt(res[1]);
            year=res[2];
        }

        selectText(year,this.yearField);
        selectText(month,this.monthField);
        selectText(day,this.dayField);
    }

    setLeader(leader){
        setValue(leader,this.leaderField);
    }

    userCreateSubmit(){
        click(this.submitButton);
    }

    setEmail(email){
        setValue(email,this.emailField);
    }
   
}

module.exports = new Creation();
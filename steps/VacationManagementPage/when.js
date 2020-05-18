import { When } from "cucumber";
import loginPage from "../../pages/Login";
import creationPage from "../../pages/Creation"

void
When('Login into Vacations Management', () => { 
    loginPage.login("gap-automation-test@mailinator.com","12345678");
});

When('Go to option create a new user', () => { 
    loginPage.createEmployes();
});

When('Create the user {string}', fullName => { 
    creationPage.setFullName(fullName);
});

When('Set the identification {string}', identification => { 
    creationPage.setIdentification(identification);
});

When('Set date-starts with {string}', startDate => { 
    creationPage.setDateStarts(startDate);
});

When('Set the leader field with {string}', leader => { 
    creationPage.setLeader(leader);
});

When('Save the user', () => { 
    creationPage.userCreateSubmit();
});

When('Set the email address with {string}', email => { 
    creationPage.setEmail(email);
});
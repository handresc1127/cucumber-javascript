import { When } from "cucumber";
import loginPage from "../../pages/Login";
void
When('Login into Vacations Management', () => { 
    loginPage.login("gap-automation-test@mailinator.com","12345678");
});

When('Go to option create a new user', () => { 
    loginPage.createEmployes();
});

When('Create the user {string}', fullName => { 
});

When('Set the identification {string}', identification => { 
});

When('Set date-starts with {string}', startDate => { 
});

When('Set the leader field with {string}', leader => { 
});

When('Save the user', () => { 
});
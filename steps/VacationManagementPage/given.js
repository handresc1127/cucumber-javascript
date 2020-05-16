import { Given } from "cucumber";
import loginPage from "../../pages/Login";
void

Given('A web browser is at the Vacations Management', () => { 
        loginPage.goTo();
  });

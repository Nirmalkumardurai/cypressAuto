import { orangeHRM } from "../../../pages/loginPage/loginPage.cy";

const orangeHRMLogin = new orangeHRM;


describe('OrgangeHRM', () => {

    it('OrangeHRM Login', () => {
        orangeHRMLogin.visitURL();
        orangeHRMLogin.enterUsername('Admin');
        orangeHRMLogin.enterPassword('admin123');
        orangeHRMLogin.Submit();

    })

})
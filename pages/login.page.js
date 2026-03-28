export class LoginPage{
    constructor(page){ // Instancia del objeto
        this.page = page;

        // Objetos
        this.usernameInput = page.locator('#user-name')
        this.passwordInput = page.locator('#password')
        this.loginButton = page.locator('#login-button')
        this.errorMessage = page.locator('[data-test="error"]')

    }

    // Funciones customizadas

    /*
    Funcion: Launch Sauce Demo
    Description:
    author:
    date:
    params:
    return:
    */
    async goto(){
        await this.page.goto('https://www.saucedemo.com/')
    }

    // Login function
    async login(username, password){
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.loginButton.click()
    }
}
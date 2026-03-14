const { test, expect } = require('@playwright/test');

/*

Test case 001
Step 1- Enter credentials (Username: standard_user/Password: secret_sauce)
Step 2- CLick Login
Step 3- Validate URL contains "Inventory"
Step 4- Validate Home page name is "Products"

*/

// Flujo de trabajo (Automation)
/*
1- Ejecutar el test case manualmente
2- Mi test case depende de datos externos? = Test Data
    2.1 -> la mayoria de estos casos se marca el test case como NA
3- Mi test case usa datos que yo puedo generar?
    3.1 -> Generar el dato automatizable
4- Identificacion de elementos

    4.1 Selector CSS,ID,CLASS, ATRIBUTO,ROLE, XPATH
    DOM: Document Object Model

    ID: #user-name
    Attr: [data-test=username]
    Attr2: [name=user-name]
    Class: .input_error para este ejercicio no funciona
5- Scripting
*/

// PLAYWRIGHT ACTIONS

/*

click()
fill() -> ingresar texto completo
type() -> simular teclado, caracter por caracter
hover() -> mover el mouse en el elemento
check() -> marcar en un checkbox
uncheck()
selectOption() -> Seleccionar un valor del dropdwon
press() -> simular mouse y teclas 

*/

/*

Assertions (Validaciones)

toBeVisible() - verifica que un elemento sea visible
toHaveText() - Verifica que un elemento tengo el texto
toContainsText() - Verifica que el elemento contenga el texto
toHaveURL()
toHaveCount() - verifica la cantidad de elementos
*/

test('My First Test - Sauce Demo app', async({page}) => {
    // Navegar a la pagina
    await page.goto('https://www.saucedemo.com/')

    // Ingresar Username
    await page.fill('#user-name','standard_user')

    // Ingresar Password
    await page.fill('#password', 'secret_sauce')

    // Click Login
    await page.click('#login-button')

    // Validar URL contenga "Inventory"
    await expect(page).toHaveURL(/inventory/)

    // Validar que el nombre de la pantalla sea products
    await expect(page.locator('[data-test=title]')).toHaveText('Products')
})

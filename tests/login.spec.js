import {test, expect} from '@playwright/test'; // funciones de playwright -> Mandatorias
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';
import { users } from '../data/users';

// Test Suite -> Agrupador de Tests
test.describe('@regression Sauce Demo - Login Test Suite', () =>{

    // Instancias
    let loginPage;
    let inventoryPage;

    // HOOKS: El flujo de los test scripts

    // BeforeAll
    // BeforeEach
    // AfterEach
    // AfterALL

    test.beforeEach(async ({page}) =>{
        // Crear las instancias -> Constructores
        loginPage = new LoginPage(page);
        inventoryPage = new InventoryPage(page);
        console.log("Soy el before each -> Antes de cada prueba")
        await loginPage.goto();
    })

    test.afterEach(async () =>{
        console.log("Soy el after each -> Despues de cada prueba")
        //Mandar algun dato a un servidor /Endpoint
    })

    test.afterAll(async () =>{
        console.log("Soy el after all - > Despues de la test suite")
        // Configuracion de datos
    })

    test.beforeAll(async () =>{
        console.log("Soy el before all -> Antes de la test suite")
        // configuraciones glaboles
    })

    // Test Script
    test('TC01 - Login exitoso con credenciales válidas', async({page}) => {
        // Test Steps
        await loginPage.login(users.standard.username, users.standard.password)
        // Assertion 1
        await expect(page).toHaveURL(/inventory/)
        // Assertion 2
        await expect(inventoryPage.title).toHaveText('Products')

        // Screenshot manual
        await page.screenshot({
            path: 'screenshots/login-success.png',
            fullPage: true
        })
    })

    test('TC02 - Login inválido con password incorrecto', async({page}) => {
        await loginPage.login(users.invalid.username, users.invalid.password)

        // Assertion 1
        await expect(loginPage.errorMessage).toBeVisible()
        // Assertion 2
        await expect(loginPage.errorMessage).toContainText('Username and password do not match')
        // Screenshot manual
        await page.screenshot({
            path: 'screenshots/error-message.png',
            fullPage: true
        })
    })

    test('TC03 - Login con usuario bloqueado', async({}) => {
        await loginPage.login(users.invalid.username, users.invalid.password)

        // Assertion 1
        await expect(loginPage.errorMessage).toBeVisible()
        // Assertion 2
        await expect(loginPage.errorMessage).toContainText('Username and password do not match')

    })

})
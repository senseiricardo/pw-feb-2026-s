import {test, expect} from '@playwright/test'; // funciones de playwright -> Mandatorias
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';

// Test Suite -> Agrupador de Tests
test.describe('Sauce Demo - Login Test Suite', () =>{

    // Test Script
    test('TC01 - Login exitoso con credenciales válidas', async({page}) => {
        // Crear las instancias -> Constructores
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);

        // Test Steps
        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce')
        // Assertion 1
        await expect(page).toHaveURL(/inventory/)
        // Assertion 2
        await expect(inventoryPage.title).toHaveText('Products')
    })

    test('TC02 - Login inválido con password incorrecto', async({page}) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login('standard_user', 'wrong_password')

        // Assertion 1
        await expect(loginPage.errorMessage).toBeVisible()
        // Assertion 2
        await expect(loginPage.errorMessage).toContainText('Username and password do not match')
    })

})
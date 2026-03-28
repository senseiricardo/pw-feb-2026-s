import {test, expect} from '@playwright/test'; // funciones de playwright -> Mandatorias
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';
import { users } from '../data/users';

// Test Suite -> Agrupador de Tests
test.describe('Sauce Demo - Login Test Suite', () =>{

    // Test Script
    test('TC01 - Login exitoso con credenciales válidas', async({page}) => {
        // Crear las instancias -> Constructores
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);

        // Test Steps
        await loginPage.goto();
        await loginPage.login(users.standard.username, users.standard.password)
        // Assertion 1
        await expect(page).toHaveURL(/inventory/)
        // Assertion 2
        await expect(inventoryPage.title).toHaveText('Products')
    })

    test('TC02 - Login inválido con password incorrecto', async({page}) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login(users.invalid.username, users.invalid.password)

        // Assertion 1
        await expect(loginPage.errorMessage).toBeVisible()
        // Assertion 2
        await expect(loginPage.errorMessage).toContainText('Username and password do not match')
    })

})
export class InventoryPage{
    constructor(page){ // Instancia del objeto
        this.page = page;

        // Objetos
        this.filter = page.locator('#filter') //-> JL
        this.title = page.locator('[data-test=title]')
    }

    // Funciones customizables
    async getTitleText(){
        return await this.title.textContent();
    }

}
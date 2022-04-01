const listScreen = require('../../screenobject/iOS/list.screen')

class CreateItemList{

    async createList(name){
        await listScreen.creatListBtn.click();
        await listScreen.inputListName.addValue(name);
        await listScreen.createBtn.click();
    }

    async validateList(name){
        await expect( await listScreen.listNameField(name)).toBeExisting();
    }
}

module.exports = new CreateItemList();
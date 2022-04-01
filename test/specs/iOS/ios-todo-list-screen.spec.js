const listScreen = require('../../screenobject/iOS/list.screen')

describe(' TODO LIST', ()=>{
    it('Create TODO LIST',async () =>{
        await listScreen.creatListBtn.click();
        await listScreen.inputListName.addValue('Caline');
        await listScreen.createBtn.click();
       await expect( await listScreen.listNameField('Caline')).toBeExisting();
       await driver.pause(4000);
    });
    });
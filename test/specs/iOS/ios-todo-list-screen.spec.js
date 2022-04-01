const listScreen = require('../../screenobject/iOS/list.screen')

describe(' TODO LIST', ()=>{
    it('Create TODO LIST',async () =>{
        await listScreen.creatListBtn.click();
        await listScreen.inputListName.addValue('Caline');
        await listScreen.createBtn.click();

     //  await $('//*[@name="Create list"]').click(); //1
     //  await $('//*[@value="List Name"]').addValue('Caline'); //2
      // await $('~Create').click();//3
       await expect( await listScreen.listNameField('Caline')).toBeExisting();
       await driver.pause(4000);
    });
    });
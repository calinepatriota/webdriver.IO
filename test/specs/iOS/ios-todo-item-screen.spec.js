//const createItemList = require('../../specs/iOS/item.list.screen')
//const editList = require('../../screenobject/iOS/item.screen')
import createItemList from '../../specs/iOS/item.list.screen';
import editList from '../../screenobject/iOS/item.screen';

describe('Create List of TODO LIST', ()=>{
  before(async() =>{
    createItemList.createList('Caline');
    createItemList.validateList('Caline');
    await editList.getByAccessibilityId('Caline').click();
  });

    it('Create List of TODO LIST',async () =>{
      // createItemList.createList('Caline');
     // createItemList.validateList('Caline');
     // await editList.getByAccessibilityId('Caline').click();
      await editList.createItemBtn.click();
      await editList.titleInput.addValue('Caline Title');
      await editList.dueBtn.click();
      await editList.inputDate.addValue('30 March 2022');
      await editList.createBtn.click();
      await driver.pause(4000);
      await expect( await editList.itemNameField('Caline Title')).toBeExisting();
      await expect( await editList.itemNameField('Due Today')).toBeExisting();



      // await $('~Caline').click();//1
      // await $('//*[@name="Create item"]').click();//2
      // await $('//*[@value="Title"]').addValue('Caline Title');//3
      // await $('//*[@value="Due"]').click();//4
       //await $('//*[@value="Due"]').addValue('30 March 2022');//5
      // await driver.pause(4000);
      // await $('~Create').click();//6
       //await expect( await $('~Caline Title')).toBeExisting();//7
       await driver.pause(4000);
    });
    });
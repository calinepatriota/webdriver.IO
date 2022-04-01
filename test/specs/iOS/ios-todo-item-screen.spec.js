import createItemList from '../../specs/iOS/item.list.screen';
import editList from '../../screenobject/iOS/item.screen';

describe('Create List of TODO LIST', ()=>{
  before(async() =>{
    createItemList.createList('Caline');
    createItemList.validateList('Caline');
    await editList.getByAccessibilityId('Caline').click();
  });

    it('Create List of TODO LIST',async () =>{
      await editList.createItemBtn.click();
      await editList.titleInput.addValue('Caline Title');
      await editList.dueBtn.click();
      await editList.inputDate.addValue('30 March 2022');
      await editList.createBtn.click();
      await driver.pause(4000);
      await expect( await editList.itemNameField('Caline Title')).toBeExisting();
      await expect( await editList.itemNameField('Due Today')).toBeExisting();
       await driver.pause(4000);
    });
    });
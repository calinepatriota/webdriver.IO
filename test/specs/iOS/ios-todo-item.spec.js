describe('Create List of TODO LIST', ()=>{
    it('Create List of TODO LIST',async () =>{

      
       await $('//*[@name="Create list"]').click();
       await $('//*[@value="List Name"]').addValue('Caline');
       await $('~Create').click();
       await expect( await $('~Caline')).toBeExisting();

       await $('~Caline').click();
       await $('//*[@name="Create item"]').click();
       await $('//*[@value="Title"]').addValue('Caline Title');
       await $('//*[@value="Due"]').click();
       await $('//*[@value="Due"]').addValue('30 March 2022');
       await driver.pause(4000);
       await $('~Create').click();
       await expect( await $('~Caline Title')).toBeExisting();
       await driver.pause(4000);
    });
    });
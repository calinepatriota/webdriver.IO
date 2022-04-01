describe(' TODO LIST', ()=>{
    it('Create TODO LIST',async () =>{
        await $('//*[@name="Create list"]').click();
       await $('//*[@value="List Name"]').addValue('Caline');
       await $('~Create').click();

       await expect( await $('~Caline')).toBeExisting();
       await driver.pause(4000);
    });
    });
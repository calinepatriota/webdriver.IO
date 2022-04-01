describe('iOS findelement Test', ()=>{
    it('find element by accessibility id',async () =>{
        await $('~Alert Views').click();
        await $('~Simple').click();
        await expect(await driver.getAlertText()).toContain('A Short Title Is Best');
       // await $('~OK').click();
    });

    it('find element by tagname id',async () =>{
        console.log('==========');
        console.log(await $('XCUIElementTypeStaticText').getText());

        const textEles = await $$('XCUIElementTypeStaticText');
        for(const element of textEles){
            console.log(await element.getText());

        }
    });

    it('find element by xpath',async () =>{
        // await $('//XCUIElementTypeStaticText[@name="Alert Views"]').click();
        // await $('//XCUIElementTypeStaticText[@label="Simple"]').click();

        await $('//*[@name="Alert Views"]').click();
        await $('//*[@label="Simple"]').click();
    });

    it('find element by class chain',async () =>{
       // const alertText = '**/XCUIElementTypeStaticText[`label == "Alert Views"`]';
        const alertText = '**/XCUIElementTypeStaticText[`label CONTAINS "Alert"`]';
        await $(`-ios class chain:${alertText}`).click();
        await $('//*[@label="Simple"]').click();
    });

    it('find element by predicate strings',async () =>{
       // const alertText = 'label == "Alert Views"';
        const alertText = 'value BEGINSWITH[c] "alert"';

         await $(`-ios predicate string:${alertText}`).click();
         await $('//*[@label="Simple"]').click();
     });

     it.only('input field',async () =>{
 
          await $('~Search').click();
          await $('~Default').click();
          await $('//XCUIElementTypeSearchField').addValue('Caline');
          await expect($('//XCUIElementTypeSearchField')).toHaveAttr('value');
          await $('~Clear text').click();
          await expect($('//XCUIElementTypeSearchField')).not.toHaveAttr('value');

      });

    });
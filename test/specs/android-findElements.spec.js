describe ('Android Test', () => {
    it('Find element by accessibility id', async () => {
       const appOptions = await $('~App');
       await appOptions.click();

    const actionBar = await $('~Action Bar');
    await expect(actionBar).toBeExisting();
    });

    it('Find element by class name', async () => {
        const className =  await $('android.widget.TextView')
        console.log('===========')
        console.log('here' + await className.getText())
        await expect(className).toHaveText('API Demos');

    }
    );

    xit('Find element by xpath', async() => {
        //xit skip test using x before it
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();
        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();
        await $('//android.widget.TextView[@text="Command two"]').click();
        const textAssertion = await $('//android.widget.TextView');
        await expect(textAssertion).toHaveText('You selected: 1 , Command two');
   
    }
    );

    it('Find element by UIAutomator', async () => {
        await $('android=new UiSelector().textContains("Alert")').click();
    });

    it('Find multiple elements', async() =>{
        const expectedList = [
            'API Demos',"Access'ibility",
            'Accessibility','Animation',
            'App','Content',
            'Graphics','Media',
            'NFC','OS',
            'Preference','Text',
            'Views'
        ]
        const actualList = []
        const textList = await $$('android.widget.TextView');
        console.log()
        for(const element of textList){
            console.log('=======')
            console.log(element.getText())
            console.log('=======')
            actualList.push(await element.getText())

        }
        await expect(actualList).toEqual(expectedList)
    });
    
    it.only('Working eith text field', async()=>{
        await $('~Views').click();
        await $('//*[@text="Auto Complete"]').click();
        await $('//*[@content-desc="1. Screen Top"]').click();

        const textField= await $('//*[@resource-id="io.appium.android.apis:id/edit"]');
        await textField.addValue('Canada');

        await expect (textField).toHaveText('Canada');
    });
});

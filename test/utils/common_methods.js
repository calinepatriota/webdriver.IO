class CommonMethods{

    async click(element){
        await element.click();
    }


    async acceptAlert(){
        await driver.acceptAlert();
    }


    async validateToHaveText(element, text){
        await expect(element).toHaveText(text);
    }


    async validateToBeDisplayed(element){
        await expect(element).toBeDisplayed();
    }


    async getTextElement(element){
        return await element.getText();
    }


    async send_keys(element, text){
        await element.addValue(text);
    }

}

module.exports = new CommonMethods();
class ItemScreen{

    get createItemBtn(){
        return  $('//*[@name="Create item"]');
    }

    get titleInput(){
        return  $('//*[@value="Title"]');
    }

    get dueBtn(){
        return $('//*[@value="Due"]');
    }

    get inputDate(){
        return $('//*[@value="Due"]');
    }

    get createBtn(){
        return $('~Create');
    }


    itemNameField(name){
        return $(`~${name}`);
    }

    getByAccessibilityId(name){
        // await $(`~${name}`).click();
         return $(`~${name}`);
    }


}

//module.exports = new ItemScreen();
export default new ItemScreen();
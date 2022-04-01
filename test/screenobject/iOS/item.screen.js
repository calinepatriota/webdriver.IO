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
         return $(`~${name}`);
    }


}

export default new ItemScreen();
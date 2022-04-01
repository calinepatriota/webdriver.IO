class ListSceren{
    get creatListBtn(){
        return $('//*[@name="Create list"]');
    }

    get inputListName(){
        return $('//*[@value="List Name"]');
    }

    get createBtn(){
        return $('~Create');
    }

    listNameField(name){
        return $(`~${name}`);
    }

}

module.exports = new ListSceren();
class DeleteNoteScreen{

    get textTitle(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
    }

    get title(){
        return  $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
    }

    get moreBtn(){
        return $('~More');
    }

    get deleteBtn(){
        return $('//*[@text="Delete"]');
    }

    get iconNav(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
    }

    get trashBtn(){
        return  $('//*[@text="Trash Can"]');
    }

}

//export default new DeleteNoteScreen();
module.exports = new DeleteNoteScreen();
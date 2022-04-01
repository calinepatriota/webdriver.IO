class AddNoteScreen{

    get skipBtn(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]');
    }

    get addnoteText() {
        return $('//*[@text="Add note"]');
    }

    get text(){
        return $('//*[@text="Text"]');
    }

    get editingLabel(){
        return $('//*[@text="Editing"]');
    }

    get editTitle(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
    }

    get editNote(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]');
    }

    get editBtn(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]');
    }

    get viewNote(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]');
    }

    async saveNote() {
        await driver.back();
        await driver.back();
    }
}

//export default new AddNoteScreen();
module.exports = new AddNoteScreen();
const addNoteScreen = require("../../screenobject/android/add-note.screen");
const commom_methods = require('../../utils/common_methods')

class EditNoteScreen{

    async skipTutorial(){
        commom_methods.click(addNoteScreen.skipBtn);
        commom_methods.validateToBeDisplayed(addNoteScreen.addnoteText);
    }

    async addAndSaveNote(noteTite, noteSubtitle){
        commom_methods.click(addNoteScreen.addnoteText);
        commom_methods.click(addNoteScreen.text);
        commom_methods.validateToBeDisplayed(addNoteScreen.editingLabel);
        commom_methods.send_keys(addNoteScreen.editTitle, noteTite);
        await addNoteScreen.editNote.addValue(noteSubtitle);
        await addNoteScreen.saveNote();
    }
}

module.exports = new EditNoteScreen();
const addNoteScreen = require("../../screenobject/android/add-note.screen");

class EditNoteScreen{

    async skipTutorial(){
    await addNoteScreen.skipBtn.click();
    await expect(addNoteScreen.addnoteText).toBeDisplayed();
    }

    async addAndSaveNote(noteTite, noteSubtitle){
        await addNoteScreen.addnoteText.click();
        await addNoteScreen.text.click();
        await expect(addNoteScreen.editingLabel).toBeDisplayed();
        await addNoteScreen.editTitle.addValue(noteTite);
        await addNoteScreen.editNote.addValue(noteSubtitle);
        await addNoteScreen.saveNote();
    }
}

module.exports = new EditNoteScreen();
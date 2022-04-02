const addNoteScreen = require("../../screenobject/android/add-note.screen");
const { skipTutorial, addAndSaveNote } = require("./edit-note.screen");
const data = require('../../data/constants');

describe('Add notes', ()=>{

    it('Add a note', async () =>{
    await skipTutorial();
    await addAndSaveNote(data.noteTitle,data.noteDescription);
     await expect(addNoteScreen.editBtn).toBeDisplayed();
     await expect(addNoteScreen.viewNote).toHaveText(data.noteDescription);
     });
});


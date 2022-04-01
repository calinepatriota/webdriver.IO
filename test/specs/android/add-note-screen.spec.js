const addNoteScreen = require("../../screenobject/android/add-note.screen");
const { skipTutorial, addAndSaveNote } = require("./edit-note.screen");

describe('Add notes', ()=>{

    it('Add a note', async () =>{
    await skipTutorial();
    await addAndSaveNote('Title Calineeeeeeeeee','Calineeeeeeeeee\nBeaa\nLuna');
     await expect(addNoteScreen.editBtn).toBeDisplayed();
     await expect(addNoteScreen.viewNote).toHaveText('Calineeeeeeeeee\nBeaa\nLuna');
     });
});


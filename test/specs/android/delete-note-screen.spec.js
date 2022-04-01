const deleteNoteScreen = require("../../screenobject/android/delete-note.screen");
const { skipTutorial, addAndSaveNote } = require("./edit-note.screen");

 describe('Delete notes', ()=>{
     before(async() =>{
        await skipTutorial();
        await addAndSaveNote('Title Calineeeeeeeeee','Calineeeeeeeeee\nBeaa\nLuna');
        driver.back();
     });

    it('Delete a note', async () =>{
        const note = await deleteNoteScreen.textTitle.getText();
        await deleteNoteScreen.title.click();
        await deleteNoteScreen.moreBtn.click();
        await deleteNoteScreen.deleteBtn.click();
        await driver.acceptAlert();
        await deleteNoteScreen.iconNav.click();
        await deleteNoteScreen.trashBtn.click();
        const noteTrash = await deleteNoteScreen.textTitle
        await expect(noteTrash).toHaveText(note);
    });
 });


const deleteNoteScreen = require("../../screenobject/android/delete-note.screen");
const { skipTutorial, addAndSaveNote } = require("./edit-note.screen");
const data = require('../../data/constants');
const commom_methods = require('../../utils/common_methods')

 describe('Delete notes', ()=>{
     before(async() =>{
        await skipTutorial();
        await addAndSaveNote(data.noteTitle,data.noteDescription);
        driver.back();
     });

    it('Delete a note', async () =>{
        const note = commom_methods.getTextElement(deleteNoteScreen.textTitle);
        commom_methods.click(deleteNoteScreen.title);
        commom_methods.click(deleteNoteScreen.moreBtn);
        await driver.pause(3000);
        commom_methods.click(deleteNoteScreen.deleteBtn);
        await driver.pause(3000);
        commom_methods.acceptAlert();
        commom_methods.click(deleteNoteScreen.iconNav);
        await driver.pause(3000);
        commom_methods.click(deleteNoteScreen.trashBtn);
        await driver.pause(3000);
        commom_methods.validateToHaveText(deleteNoteScreen.textTitle, note);        
    });
 });
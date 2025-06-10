const fs = require('fs');
const path = require('path');

function saveNote(noteContent){
    const filePath=path.join(__dirname,'note.txt');
    fs.appendFileSync(filePath,noteContent+ '\n');
}

module.exports=saveNote;
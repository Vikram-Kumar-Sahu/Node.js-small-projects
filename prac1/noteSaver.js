const log = require('./logger');
const saveNote = require('./saveNote');

const note = "Learned how modules work in Node.js";
saveNote(note);
log("Note saved successfully.");
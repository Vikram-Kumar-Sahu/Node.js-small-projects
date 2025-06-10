const fs = require('fs');
const fileName = 'notes.txt';

// Step 1: Write to the file
fs.writeFile(fileName, '📌 First note\n', 'utf8', (err) => {
  if (err) {
    return console.error('Error writing first note:', err);
  }
  console.log('✅ First note written.');

  // Step 2: Append another note
  fs.appendFile(fileName, '📌 Second note\n', 'utf8', (err) => {
    if (err) {
      return console.error('Error appending note:', err);
    }
    console.log('✅ Second note appended.');

    // Step 3: Read the file content
    fs.readFile(fileName, 'utf8', (err, data) => {
      if (err) {
        return console.error('Error reading file:', err);
      }
      console.log('\n📄 Notes content:\n', data);

      // Step 4: Watch for changes
      fs.watch(fileName, (eventType, filename) => {
        console.log(`\n👀 ${filename} file changed: ${eventType}`);
      });
    });
  });
});

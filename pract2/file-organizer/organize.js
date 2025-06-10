const fs = require('fs');
const path = require('path');

// 1. Folder to organize
const targetFolder = path.join(__dirname, 'files');

// 2. File type categories
const types = {
  Text: ['.txt', '.md'],
  Images: ['.jpg', '.jpeg', '.png'],
  Documents: ['.pdf', '.docx'],
  Scripts: ['.js', '.py'],
  JSON: ['.json']
};

// 3. Read all files in the folder
fs.readdir(targetFolder, (err, files) => {
  if (err) {
    return console.error('Error reading folder:', err);
  }

  files.forEach(file => {
    const ext = path.extname(file);
    const filePath = path.join(targetFolder, file);

    for (const [folder, extensions] of Object.entries(types)) {
      if (extensions.includes(ext)) {
        const destDir = path.join(targetFolder, folder);
        
        // Create folder if it doesn't exist
        if (!fs.existsSync(destDir)) {
          fs.mkdirSync(destDir);
        }

        // Move the file
        const destPath = path.join(destDir, file);
        fs.renameSync(filePath, destPath);
        console.log(`Moved ${file} → ${folder}/`);
        break;
      }
    }
  });
});

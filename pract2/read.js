const fs = require('fs');
// const data = fs.readFileSync('example.txt','utf8');
// console.log(data);

// fs.readFile('example.txt','utf8',(err,data) => {
//     if (err) throw err;
//     console.log(data);
// });

// fs.writeFile('output.txt','Hello World',(err) => {
//     if(err) throw err;
//     console.log("file written sucessfully");
//     fs.appendFile('output.txt','.\nAppended text',(err) =>{
//     if(err) throw err;
//     console.log('Content appended')
// })
// });
// fs.appendFile('output.txt','.\nAppended text',(err) =>{
//     if(err) throw err;
//     console.log('Content appended')
// })

// fs.unlink('output.txt',(err)=>{
//     if(err) throw err;
//     console.log('File deleted');
// });

// fs.mkdir('newFolder',(err) => {
//     if (err) throw err;
//     console.log('Folder created');
// });

// fs.readdir('.',(err,file) => {
//     if(err) throw err;
//     console.log(newFolder);
// });

// const EvemtEmitter = require('events');
// const emitter = new EvemtEmitter();

// emitter.on('greet', () =>{
//     console.log('Hello there!');

// });

// emitter.emit('greet');

// emitter.on('greetUser',(name)=>{
//     console.log(`hello, ${name}!`);
// });
// emitter.emit('greetUser','Vikram');

const path = require('path');
const os = require('os');
const EvemtEmitter = require('events');
const { EventEmitter } = require('stream');

fs.readFile(__filename,'utf8',(err,data) =>{
    if(!err) console.log("File read successfully!");

});

console.log("Platform",os.platform());
console.log("Free memory (MR):",(os.freemem()/(1024 * 1024)).toFixed(2));

const emitter = new EventEmitter();
emitter.on('launch',() => {
    console.log('Node.js core modules tutorial launched');
});
emitter.emit('launch');
console.log('Current file.path:',path.basename(__filename));
const fs = require('fs');
const path = require('path'); // <-- Add this line
const fsPromises = require('fs').promises;

const flieOps = async () => {
    try{
        const data = await fsPromises.readFile(path.join(__dirname,'stater.txt'),'utf8');
        console.log(data);

        await fsPromises.writeFile(path.join(__dirname,'promiseWrite.txt'),data);
        await fsPromises.appendFile(path.join(__dirname,'promiseWrite.txt'),'\n\nNice to meet you.');
        await fsPromises.rename(path.join(__dirname,'promiseWrite.txt'),path.join(__dirname,'promiseReWrite.txt'));

        const newData = await fsPromises.readFile(path.join(__dirname,'promiseReWrite.txt'),'utf8');
        console.log(newData);
    }
    catch(err){
        console.error(err)
    }
}

flieOps();

// fs.readFile(path.join(__dirname,'stater.txt'),'utf8',(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// })


// fs.writeFile(path.join(__dirname,'reply.txt'),'nice to meet you',(err)=>{
//     if(err) throw err;
//     console.log("Write Completely");

//     fs.appendFile(path.join(__dirname,'reply.txt'),'\n\nYes it is.',(err) =>{
//         if (err) throw err;
//         console.log('Append complete');
//         fs.rename(path.join(__dirname,'reply.txt'),path.join(__dirname,'newReply.txt'),(err)=>{
//             if (err) throw err;
//             console.log('rename complete');
//         })
//     })
// })

process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
}) 
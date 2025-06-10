const fs = require ('fs');

if(!fs.existsSync('./new.txt')){
    fs.mkdir('./new',(err) => {
        if(err) throw err;
        console.log('Directory created');
    });
}

if(!fs.existsSync('./new.txt')){
    fs.rmdir('./new',(err) => {
        if(err) throw err;
        console.log('Directory removed');
    });
}
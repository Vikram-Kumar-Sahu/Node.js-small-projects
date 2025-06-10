const fs = require('fs');
function logReqRes(filename){
    return(req,res,next) =>{
        fs.appendFile(
        "log.txt",
        `${Date.now()}:${req.method}: ${req.path} \n`,
        (err) => {
            if (err) {
                console.error('Logging failed:', err);
                // Optionally send a response or call next(err)
            }
            next();
        }
    );
    }
}
module.exports ={
    logReqRes,
};
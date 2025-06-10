const fs = require('fs');
const path = require('path');
const os = require('os');
const EventEmitter = require('events');
const { uptime } = require('process');
const { timeStamp } = require('console');

//create event
const emitter = new EventEmitter();

//File path where logs will be stored
const logFilePath = path.join(__dirname,'logs.txt');


const userInfo = os.userInfo();
const systemUptime = os.uptime();
const osType = os.type();
const totalMemory = os.totalmem()/(1024*1024*1024);

const logMessage =
`
User: ${userInfo.username}
OS Type: ${osType}
uptime: ${systemUptime.toFixed(2)}s
Total Memory: ${totalMemory.toFixed(2)} GB
Timestamp:{new Date().toISOString()}`;

// Function to write to log file
function writeLog(message) {
  fs.appendFile(logFilePath, message, (err) => {
    if (err) {
      console.error('Error writing log:', err);
    } else {
      console.log('✅ Log written successfully!');
      emitter.emit('logWritten');
    }
  });
}

// Event Listener
emitter.on('logWritten', () => {
  console.log('📣 Event: Log has been written to the file.');
});

// Start logging
writeLog(logMessage);
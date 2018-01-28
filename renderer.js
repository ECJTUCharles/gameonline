// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
// renderer.js
// 引入ipcRenderer对象
const electron = require('electron');
const ipcRenderer = electron.ipcRenderer;
// 设置监听
ipcRenderer.on('main-process-messages', (event, message) => {
  console.log('message from Main Process: ' , message);  // Prints Main Process Message.
});


// renderer.js
ipcRenderer.on('asynchronous-reply', (event, arg) => {
    console.log('asynchronous-reply: %O %O', event, arg);
  });
  ipcRenderer.send('asynchronous-message', 'hello');
  
 
  // renderer.js
console.log('synchronous-message: ', ipcRenderer.sendSync('synchronous-message', 'hello'));


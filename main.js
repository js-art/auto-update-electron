const {app,BrowserWindow}=require('electron')
const path=require('path')
const {autoUpdater}=require('electron-updater')
const log=require('electron-log')
log.transports.file.resolvePathFn = () => path.join("/Users/mostafanaderi/Desktop/list/Udemy - Electron JS Complete Guide With Projects 2022-9/3. Auto Update Electron Application/auto-update-electron/package.json", 'logs/main.log');
let win;
function createWindow(){
  win=new BrowserWindow({width:300,height:400})
  win.loadFile(path.join(__dirname,'index.html'))
}

app.on('ready',()=>{
  createWindow()
  autoUpdater.checkForUpdatesAndNotify()
})

autoUpdater.on("update-available",()=>{
  console.log("hello")
})

autoUpdater.on("checking-for-update",()=>{
  console.log("checking-for-update")
})

autoUpdater.on("download-progress",()=>{
  console.log("download-progress")
})
autoUpdater.on("update-downloaded",()=>{
  console.log("update-downloaded")
})
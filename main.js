const {app,BrowserWindow}=require('electron')
const path=require('path')
const {autoUpdater}=require('electron-updater')
const log=require('electron-log')
log.transports.file.resolvePathFn = () => path.join("/Users/mostafanaderi/Desktop/list/Udemy - Electron JS Complete Guide With Projects 2022-9/3. Auto Update Electron Application/auto-update-electron/package.json", 'logs/main.log');
log.log("Application version= "+app.getVersion())
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
  log.info("update available")

})

autoUpdater.on("checking-for-update",()=>{
  log.info("checking for update")

})

autoUpdater.on("download-progress",()=>{
  log.info("download progress")
})

autoUpdater.on("download-progress",(progress)=>{
  log.info("\n\ndownload-progress")
  log.info(progress)

}) 
autoUpdater.on("update-downloaded",()=>{
  log.info("update downloaded")
})
autoUpdater.on("update-not-available",()=>{
  log.info("update not available")

})
autoUpdater.on("error",(err)=>{
  log.info("error in autoUpdater "+err)

})


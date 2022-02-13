const { app, BrowserWindow, Tray, Menu } = require('electron')

const path = require('path')
const isDev = require('electron-is-dev')

require('@electron/remote/main').initialize()
console.log(__dirname);
function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 1280,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    },
    icon: __dirname + "/1.png"
  })

  win.on('minimize',function(event){
    event.preventDefault();
  });
  win.setMenu(null);
  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  )
  //tray menu
  let tray = null
  app.whenReady().then(() => {
    tray = new Tray(__dirname + "/1.png")
    tray.setToolTip('eConexão')
    tray.on("click", () => {
      if(win.isMinimized) {
          win.restore()
      }
    });
  })

}

app.on('ready', createWindow)

//Quit when all windows are closed.
app.on('window-all-closed', (e) => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  e.preventDefault();
  if (process.platform !== 'darwin') {
    //app.quit()
  }
})
app.on('minimize', (e) => {
  e.preventDefault();
  app.minimize()
  // or depending you could do: win.hide()
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})
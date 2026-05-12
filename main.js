const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 400,
    height: 600,
    autoHideMenuBar: true, // Ẩn thanh menu File/Edit cho giống app xịn
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // Load file giao diện của bạn vào
  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
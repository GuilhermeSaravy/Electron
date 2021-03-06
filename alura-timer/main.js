const { app, BrowserWindow, ipcMain } = require('electron');

app.on('ready', () => {
    console.log('Aplicação iniciada');
    let mainWindow = new BrowserWindow({
        width: 600,
        height: 400
    })

    mainWindow.loadURL(`file://${__dirname}/app/index.html`)
})

app.on('window-all-closed', () => {
    app.quit();
})

let sobreWindow = null;
ipcMain.on('abrir-janela-sobre', () => {
    if (sobreWindow == null) {
        sobreWindow = new BrowserWindow({
        width: 300,
        height: 220,
        alwaysOnTop: true,
        frame: false
    });
    sobreWindow.on('close', () => {
        sobreWindow = null
    })
}
    sobreWindow.loadURL(`file://${__dirname}/app/sobre.html`)
})

ipcMain.on('fechar-sobre', () => {
    sobreWindow.close()
})
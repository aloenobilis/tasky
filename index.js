const path = require('path'); 
const electron = require('electron'); 
const { app, BrowserWindow, Tray } = electron; 
const TimerTray = require('./app/timer_tray.js');                                                  // S4L49
const MainWindow = require('./app/main_window.js');                                                // S4L56 

let mainWindow;                                                                                    // S4L38
let tray;                                                                                          // S4L51

app.on('ready', () => {
    app.dock.hide();                                                                               // S4L55
    mainWindow = new MainWindow(`file://${__dirname}/src/index.html`);                             // S4L56 - mainWindow.loadURL(`file://${__dirname}/src/index.html`);  

    const iconName = process.platform === 'win32' ? 'windows-icon.png' : 'iconTemplate.png';        // S4L40 -  Depending on whether our app is running on Windows or OSX we'll want to use their respetive icons
    const iconPath = path.join(__dirname, `./src/assets/${iconName}`); 

    tray = new TimerTray(iconPath, mainWindow);                                                     // S4L51,  The Tray constructor requires a path for the icon to be dispayed on the status bar 
}); 
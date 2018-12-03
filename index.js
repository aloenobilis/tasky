const path = require('path'); 
const electron = require('electron'); 
const { app, BrowserWindow, Tray } = electron; 
const TimerTray = require('./app/timer_tray.js');                                                  // S4L49
 
let mainWindow;                                                                                    // S4L38
let tray;                                                                                          // S4L51

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        // S4L39 
        height: 500,   
        width: 300, 
        frame: false,                  // false means no title bar for the window 
        resizable: false,              // false inidicates that the user cannot resize the window 
        show: false,                   // S4L41 if false the window won't show 
    });
    mainWindow.loadURL(`file://${__dirname}/src/index.html`); 

    const iconName = process.platform === 'win32' ? 'windows-icon.png' : 'iconTemplate.png';        // S4L40 -  Depending on whether our app is running on Windows or OSX we'll want to use their respetive icons
    const iconPath = path.join(__dirname, `./src/assets/${iconName}`); 

    tray = new TimerTray(iconPath, mainWindow);                                                     // S4L51,  The Tray constructor requires a path for the icon to be dispayed on the status bar 
}); 
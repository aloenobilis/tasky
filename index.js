const path = require('path'); 
const electron = require('electron'); 
const { app, BrowserWindow, Tray } = electron; 

 
let mainWindow;                                                                                    // S4L38
let tray;                                                                                          // S4L41 

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

    tray = new Tray(iconPath);                                                                      // The Tray constructor requires a path for the icon to be dispayed on the status bar 

    tray.on('click', (event, bounds) => {                                                           // S4L41 -  because the window show is false by default we'll want to show th window on click of the icon                                         
        const {x, y} = bounds;                                                                      // S4L44 - Click event bounds, x,y are for the the postion of the window on the screen
        const {height, width} = mainWindow.getBounds();                                             // S4L44 - Window Bounds  (height and width), height, width are for the windows size 
    
        if(mainWindow.isVisible()) {                                                                // S4L42 - will check to see if window is visible so the onClick can either show or hide the window
            mainWindow.hide();
        } else {
            const yPosition = process.platform === 'darwin' ? y : y - height;                       // S4L45 - specific y postion for darwin or windows because of the positioning of the status bars. TODO - add feature for linux, solution in comments S4L44 /45
            mainWindow.setBounds({                                                                  // S4L44 
                x: x - width / 2,
                y: yPosition, 
                height, 
                width 
            });
            mainWindow.show(); 
        }
    }); 
}); 
const electron = require('electron'); 
const { BrowserWindow } = electron; 

// S4L56
class MainWindow extends BrowserWindow {
    constructor(url) {
        super({
            // S4L39 
            height: 500,   
            width: 300, 
            frame: false,                  // false means no title bar for the window 
            resizable: false,              // false inidicates that the user cannot resize the window 
            show: false,                   // S4L41 if false the window won't show 
        });

        this.loadURL(url);                                                                            // S4L56
        this.on('blur', this.onBlur.bind(this));
    }

    onBlur() {
        this.hide();                                                                                  // s4l54 - whenever the user click away from the main window, i.e blur, then we hide the window
    }
}

module.exports = MainWindow; 
const electron = require('electron'); 
const { Tray, app, Menu } = electron;   
class TimerTray extends Tray {                                                                      // S4L49 - we'll extend the base class of Tray provided by electron, to add some functionality
    constructor(iconPath, mainWindow){                                                                          // S4L49 - whenever this class is created we'll ensure its takes an icon path, we then pass what's taken in and pass it to the super() so that the icon path can be received from the parent class of Tray which requires a path 
        super(iconPath)                                                                             // S4L49 - super will invoke the parents class constructor thereby this class will receive its config
        
        this.mainWindow = mainWindow;                                                               // S4L50 - we receive reference to mainWindow from the constructor , so its being passed in when we call the class, we make it a locally scoped reference so we can use it
        
        this.setToolTip('sash.cloud');                                                              // S4L51 - since we're inheriting all the methods from the parent class, here we just call setTooltip to add a tooltip 
        this.on('click', this.onClick.bind(this))                                                   // S4L50 - we setup our onclick method inside the constructor because the base class Tray has a method that we inherit which is .on 
        this.on('right-click', this.onRightClick.bind(this))                                        // S4L53 - on right click event handler for menu
    }

    onClick(event, bounds) {                                                                        // S4L50, S4L41 -  because the window show is false by default we'll want to show th window on click of the icon                                         
        const {x, y} = bounds;                                                                      // S4L44 - Click event bounds, x,y are for the the postion of the window on the screen
        const {height, width} = this.mainWindow.getBounds();                                        // S4L44 - Window Bounds  (height and width), height, width are for the windows size 
    
        if(this.mainWindow.isVisible()) {                                                           // S4L42 - will check to see if window is visible so the onClick can either show or hide the window
            this.mainWindow.hide();
        } else {
            const yPosition = process.platform === 'darwin' ? y : y - height;                       // S4L45 - specific y postion for darwin or windows because of the positioning of the status bars. TODO - add feature for linux, solution in comments S4L44 /45
            this.mainWindow.setBounds({                                                             // S4L44 
                x: x - width / 2,
                y: yPosition, 
                height, 
                width 
            });
            this.mainWindow.show(); 
        }
    }

    onRightClick() {                                                                                // S4L53
        const menuConfig = Menu.buildFromTemplate([                                                 // S4L53 - we configure the menu template
            {
                label: 'Quit', 
                click: () => app.quit()
            }
        ]); 
        this.popUpContextMenu(menuConfig);                                                          // S4L53 - associate the menu with the tray, popUpContextMenu belongs to the parent class, so we can ofcourse access it by calling this
    }
}
module.exports = TimerTray; 
const electron = require('electron'); 
const { Tray } = electron; 

// S4L49 - we'll extend the base class of Tray provided by electron, to add some functionality  
class TimerTray extends Tray {
    constructor(iconPath){                                                                      // S4L49 - whenever this class is created we'll ensure its takes an icon path, we then pass what's taken in and pass it to the super() so that the icon path can be received from the parent class of Tray which requires a path 
        super(iconPath)                                                                         // S4L49 - super will invoke the parents class constructor thereby this class will receive its config
    }


}
module.exports = TimerTray; 
/**
 * @name Mic muted 
 * @authors JoyEn12#7075 and hajkenek#2673
 * @description Very simple Mic Muted app for our arduino best app xD
 * @version 0.0.1
 */

 

module.exports = class Muted {

    start() {
        this.mainLoopInterval = setInterval(this.checkMuteButton.bind(this), 500);

        console.log("Script", "Loaded");
    }

    checkMuteButton() {
        let muteButtons = document.querySelectorAll('[aria-label="Mute"]');
        if (muteButtons.length !=1) {
            console.log( "WARNING: Couldn't find the mute button.");
        }
        const muteButton = muteButtons[0];
        let x = muteButton.getAttribute("aria-checked");
        if (x==="true")
        {
            console.log("Muted")
        }
    }
    



    stop() {

        clearInterval(this.mainLoopInterval);
        console.log("Script", "Unloaded");
    }

} 
    

    





       
    
 areWeMuted() {
        return (this.muteButton.getAttribute("aria-checked") === 'true');
    }

 checkMuteButton() {
        // Find the mute button
        let muteButtons = document.querySelectorAll('[aria-label="Mute"]');
        if (muteButtons.length != 1) {
            throw "Failed to load. Couldn't find the mute button.";
        }
        const muteButton = muteButtons[0];

        // Little function to return true/false based on mute button state
        const areWeMuted = () => (muteButton.getAttribute("aria-checked") === 'true');

        // Initialize data if we haven't done so yet
        if (this.lastMutedState == undefined) {
            this.lastMutedState = areWeMuted();
        }

        // Only arm/disarm on rising/falling edge
        const newMutedState = areWeMuted();
        if (this.lastMutedState == newMutedState) {
            // do nothing; muted state hasn't changed
            return;
        }

        // Update the button state
        this.lastMutedState = newMutedState;

       
    }   
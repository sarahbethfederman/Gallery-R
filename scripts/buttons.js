
var buttons = {
    'videoLoader': require('./videoLoader.js'),
    'skipIntroBtn': document.querySelector('[rel="js-skip-btn]'),
    'makeButton': function(button, clickEvent) {
        button.addEventListener('click', clickEvent);
    },
    'init': function() {
        // make the skipIntro button start the video loop
        this.makeButton(skipIntroBtn, videoLoader.loop);

        // make the video control buttons
    }
};

module.exports = buttons;
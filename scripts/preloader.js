/**
 * Created by Sarah on 12/1/14.
 */

var preloader = {
    'ghost': document.createElement("video"),
    'ghost2': document.createElement("video"),
    'currentVid': 0,
    'load': function(url) {
        self.ghost2.src = url;
    },
    'start': function(vids) {
        var self = this;

        self.ghost.addEventListener('canplaythrough', startLoad);

        // load the first one
        self.ghost.src = vids[self.currentVid].videoUrl;


        function startLoad() {
            self.currentVid++;
            self.ghost.src = url;

            console.log("canplay" + self.currentVid);
        }
    }
};



module.exports = preloader;
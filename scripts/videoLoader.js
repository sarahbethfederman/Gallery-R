/**
 * Created by Sarah on 11/24/14.
 */

var $ = require('jquery');

var videoLoader =  {
    'urls': [],
    'init': function(data) {
        for (video in data) {
            if (data.hasOwnProperty(video)) {
                this.urls.push(data[video]['videoUrl']);
                console.log(data[video]['videoUrl']);
            }
        }
        this.progressBar();
    },
    'progressBar': function() {
        var $progressBar = $('#progress-bar');
        var $video = $('video');

        // progress bar
        $video.on('timeupdate', function() {
            // get the percentage of video played
            var percentage = ($video[0].currentTime / $video[0].duration) * 100;

            // set the progress bar value
            $progressBar.val(percentage);
        });
    }
};

module.exports = videoLoader;
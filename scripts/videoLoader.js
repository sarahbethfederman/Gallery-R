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
    },
    'draw': function() {

    }
};

module.exports = videoLoader;
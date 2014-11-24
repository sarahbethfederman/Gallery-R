/**
 * Created by Sarah on 11/24/14.
 * Loads video data from firebase
 */


var Firebase = require('firebase');

var ref = new Firebase('https://gallery-r.firebaseio.com/videos');
var data;

ref.on("value", function(snapshot) {
    data = snapshot.val();
    console.log(data);
});

module.exports = data;
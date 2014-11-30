/**
 * Created by Sarah on 11/29/14.
 */

var slideNav = {
    'names': [],
    'navContainer': undefined,
    'init': function(data) {
       for (key in data) {
           if (data.hasOwnProperty(key)) {
               this.names.push(key);
           }
       }
    },
    'move': function(offset) {

    }
};

module.exports = slideNav;
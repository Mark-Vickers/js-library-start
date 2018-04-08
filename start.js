//
// A JavaScript Library Starting Point
//
// This file acts a starting point for writing a JavaScript
// library or framework. Modify the names and start coding.
//

// The library is added into the global execution context using an IIFE
// Note that the initial semi-colon is to escape any unclosed declaration
// done before this code is included
;(function(global) {

    // when a varibale is declared using this library this function gets called
    var start = function(init1, init2, init3) {
        // call the init function and return as a new obejct
        return new start.init(init1, init2, init3);
    }
    
    // declare private variables and functions
    var startLocal = [1, 2, 3, 4];

    // declare exposed functions
    start.prototype = {
        showPublic: function() {
            return this.init1 + ', ' + this.init2 + ', ' + this.init3;
        },

        showPrivate: function() {
            return startLocal[0] + ', ' + startLocal[1] + ', ' + startLocal[2] + ', ' + startLocal[3];
        }
    }
    
    //initialisation function
    start.init = function(init1, init2, init3) {
        var self = this;
        
        // default values for initialisation
        self.init1 = init1 || 1;
        self.init2 = init2 || 2;
        self.init3 = init3 || 3;

        console.log('start.init function called')
    }
    
    // prototype chain
    start.init.prototype = start.prototype;
    
    // add library into passed global object
    global.start = start;
}(window));
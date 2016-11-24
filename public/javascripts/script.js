function Event(sender) { // informs the objects when events occur
    "use strict";
    this._sender = sender;
    this._listeners = [];
}
Event.prototype = {
    attach: function(listener) {
        "use strict";
        this._listeners.push(listener);
    },
    notify: function(args) {
        "use strict";
        var ind;
        for (ind = 0; ind < this._listeners.length; ind += 1) {
            this._listeners[ind](this.sender, args);
        }
    }
};
window.onload = function() {
    // initialize model, view, controller
    "use strict";
    var model = new Model();
    var view = new View(model, {
        'addButton': $('#add'),
        'delButton': $('#remove')
    });
    var controller = new Controller(model, view);
    // build view
    view.show();
    // fancy header fade-in
    $('h1').fadeIn(3000);
};

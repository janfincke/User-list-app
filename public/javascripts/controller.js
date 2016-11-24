function Controller(model, view) {
    "use strict";
    this._model = model;
    this._view = view;

    var _this = this;

    this._view.addButtonClicked.attach(function() {
        _this.addItem();
    });
    this._view.delButtonClicked.attach(function() {
        _this.delItem();
    });
}

Controller.prototype = {
    addItem: function() {
        // gets user input and then calls addItem() to add a new table row
        "use strict";
        var username = document.getElementById('username').value,
            email = document.getElementById('email').value,
            password = document.getElementById('password').value;
        if (!username) {
            return;
        } else if (!email) {
            return;
        } else if (!password) {
            return;
        } else {
            this._model.addItem(username, email, password);
        }
    },
    delItem: function() {
        // when the delete button is pressed, calls removeItem() to delete the first table row
        "use strict";
        var username,
            email,
            password;
        username = this._model.getItems.username;
        email = this._model.getItems.email;
        password = this._model.getItems.password;
        this._model.removeItem(username, email, password);
    }
};

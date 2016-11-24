function Model(items) {
    "use strict";
    this._items = items;
    // make new observer events for item manipulation
    this.itemAdded = new Event(this);
    this.itemRemoved = new Event(this);
}
Model.prototype = {
    getItems: function() {
        "use strict";
        return this._items;
    },
    addItem: function(username, email, password) {
        "use strict";
        // get input field values
        var username = document.getElementById('username'),
            email = document.getElementById('email'),
            password = document.getElementById('password');
        // insert new values as the first row of the table
        var tr = "<tr>";
        var td1 = '<td>' + username.value + '</td>';
        var td2 = '<td>' + email.value + '</td>';
        var td3 = '<td>' + password.value + '</td></tr>';
        $('#users').prepend(tr + td1 + td2 + td3);
        // reset input fields
        username.value = '';
        email.value = '';
        password.value = '';
        // notify observer
        this.itemAdded.notify({
            username: username,
            email: email,
            password: password
        });
    },
    removeItem: function(username, email, password) {
        "use strict";
        // removes the first table row
        var rows = document.getElementById('users').rows.length;
        document.getElementById('users').deleteRow(0);

        // notify observer
        this.itemRemoved.notify({
            username: username,
            email: email,
            password: password
        });
    }
};

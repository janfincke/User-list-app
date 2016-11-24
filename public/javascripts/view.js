function View(model, elements) {
    "use strict";
    this._model = model;
    this._elements = elements;

    this.listModified = new Event(this);
    this.addButtonClicked = new Event(this);
    this.delButtonClicked = new Event(this);

    var _this = this;
    // attach listeners to model
    this._model.itemAdded.attach(function() {
        _this.buildList();
    });
    this._model.itemRemoved.attach(function() {
        _this.buildList();
    });
    // attach listeners to HTML elements (add and remove buttons)
    this._elements.addButton.click(function() {
        _this.addButtonClicked.notify();
    });
    this._elements.delButton.click(function() {
        _this.delButtonClicked.notify();
    });

    var data = $.ajax({
        url: "/assets/data.json",
        dataType: "json",
        success: function(data) {
            for (var key in data) {
                var tr = "<tr>";
                var td1 = '<td>' + data[key].username + '</td>'
                var td2 = '<td>' + data[key].email + '</td>'
                var td3 = '<td>' + data[key].password + '</td></tr>'
                $('#users').append(tr + td1 + td2 + td3);
            }
        }
    });
}

View.prototype = {
    show: function() {
        // run this function to start building view
        "use strict";
        this.buildList();
        this.search();
    },
    buildList: function() {
        // builds a new table
        "use strict";
        var table = this.data;
    },
    search: function() {
        "use strict"
        var input = document.getElementById("search");
        input.onkeyup = function() {
            var filter,
                table,
                tr,
                td,
                i;

            filter = input.value.toUpperCase(),
            table = document.getElementById("data"),
            tr = table.getElementsByTagName("tr");
            //  loop through all table rows, and hide those that don't match the search query
            for (i = 0; i < tr.length; i++) {
                td = tr[i].getElementsByTagName("td")[0];
                if (td) {
                    if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                    } else {
                        tr[i].style.display = "none";
                    }
                }
            };
        }
    }
}

function CheckBrowser() {
    if ('localStorage' in window && window['localStorage'] !== null) {
        return true;
    } else {
        return false;
    }
}

// Display All Items
function doShowAll() {
    if (CheckBrowser()) {
        var key = "";
        var list = "<tr><th>Item</th><th>Value</th></tr>\n";
        var i = 0;
        
        for (i = 0; i <= localStorage.length - 1; i++) {
            key = localStorage.key(i);
            list += "<tr><td>" + key + "</td>\n<td>" + localStorage.getItem(key) + "</td></tr>\n";
        }

        if (list == "<tr><th>Item</th><th>Value</th></tr>\n") {
            list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
        }

        document.getElementById('list').innerHTML = list;
    } else {
        alert('Cannot save shopping list as your browser does not support HTML 5');
    }
}

// Create/Save Item
function SaveItem() {
    var name = document.forms.ShoppingList.name.value;
    var data = document.forms.ShoppingList.data.value;
    var quantity = Number(data);

    if (name !== "" && !isNaN(quantity) && quantity > 0) {
        localStorage.setItem(name, data);
        doShowAll();
        document.forms.ShoppingList.name.value = "";
        document.forms.ShoppingList.data.value = "";
    } else {
        alert("Please enter a valid item name and numbers for quantity.");
    }
}

// Update Item
function ModifyItem() {
    var name1 = document.forms.ShoppingList.name.value;
    var data1 = document.forms.ShoppingList.data.value;

    if (localStorage.getItem(name1) != null) {
        localStorage.setItem(name1, data1);
        document.forms.ShoppingList.data.value = localStorage.getItem(name1);
    }
    doShowAll();
}

// Delete Single Item
function RemoveItem() {
    var name = document.forms.ShoppingList.name.value;
    localStorage.removeItem(name);
    doShowAll();
}

// Reset Storage
function ClearAll() {
    localStorage.clear();
    doShowAll();
}
BackOffice.filter('FilterByType', function() {
    return function(items, filterValue, ammount) {
        var filtered = [];
        if (typeof items !== "undefined") {
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                //console.log(item);
                if (filterValue.indexOf(item.type.keyname) !== -1) {
                    filtered.push(item);
                }
            }
        }
        return filtered.slice(0, ammount);
    };
});


BackOffice.filter('TrimQuote', function() {
    return function(quote) {
        if (typeof quote !== "undefined") {
            return quote.substring(0, 100) + "...";
        }
    };
});

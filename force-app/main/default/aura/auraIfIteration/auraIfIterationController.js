({
    doInit: function (component, event, helper) {
        var values = [];
        for (var i = 0; i < 5000; i++) {
            values.push('Bordeaux');
        }
        component.set("v.myList", values);
    }
})
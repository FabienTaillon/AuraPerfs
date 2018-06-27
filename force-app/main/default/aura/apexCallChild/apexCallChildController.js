({
    doInit : function(component, event, helper) {

        var action = component.get("c.getPicklistValues");

        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {

                component.set('v.myList', response.getReturnValue());
            }
            else {
                console.log("Something went wrong :/");
            }
        });

        //action.setStorable();
        $A.enqueueAction(action);
    }
})

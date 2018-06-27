({
	doInit : function(component, event, helper) {
        var frList = [ 'Parisis', 'BapBap', 'Deck & Donohue' ];
        var ukList = [ 'Brooklyn', 'Anchor', 'Sierra Nevada' ];
        
        var locale = $A.get("$Locale.language");
        
        if (locale == 'fr') {
            component.set("v.beers", frList);
        }
        else {
            component.set("v.beers", ukList);
        }
    },
    
    changeList : function(component, event, helper) {
      component.set('v.beers', [ 'Brooklyn', 'Anchor', 'Sierra Nevada' ]);
    }
})
({
    render : function(cmp, helper) {
        var ret = this.superRender();
        //console.log('render');
        return ret;
    },

    rerender : function(cmp, helper){
        this.superRerender();
        //console.log('rerender');
    },
    
    afterRender: function (component, helper) {
        this.superAfterRender();
        //console.log('afterRender');
    }
})
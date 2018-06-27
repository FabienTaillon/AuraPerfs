public with sharing class ChildApexCtrl {

    @AuraEnabled
    public static List<String> getPicklistValues() {
        System.debug('getPicklistValues');
        return new List<String>{'Paris','London', 'San Francisco'};
    }
}
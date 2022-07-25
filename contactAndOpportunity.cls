public class contactAndOpportunity{
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getOpportunity(string recordId,string stage){
        list<Opportunity>  opList = [Select Name,StageName,Amount from Opportunity where AccountId=:recordId and StageName=:stage];
        System.debug(opList);
        return opList;
    }

    
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContact(string recordId,string lead){
        list<Contact> contList = [Select LastName,LeadSource,Title from Contact where AccountId=:recordId and LeadSource=:lead];
        System.debug(contList);
        return contList;
    }

    }


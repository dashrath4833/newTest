import { LightningElement,api,wire } from 'lwc';
import getOpportunity from '@salesforce/apex/contactAndOpportunity.getOpportunity';
import getContact from '@salesforce/apex/contactAndOpportunity.getContact';
import { NavigationMixin } from 'lightning/navigation';

export default class TETquestion extends NavigationMixin(LightningElement) {
    
    //@api showHide = false;
    @api temp = false
    @api temp1 = false
    @api recordId 
     recordDataId1
    // @api stageName
    @api lstOfOppor
    @api lstofCont
     recordDataId;

     contId;contId1;

    //Handling of swipe to the contact tab //
    
    connectedCallback(){
        this.temp1=true;
    }

    handleClickTab1(){
        this.temp=false;
        this.temp1=true;
        this.template.querySelector('.firstTab').classList.add('slds-is-active');
        this.template.querySelector('.secondTab').classList.remove('slds-is-active');
        this.template.querySelector('.tab-default-1').classList.add('slds-show');
        this.template.querySelector('.tab-default-1').classList.remove('slds-hide');
        this.template.querySelector('.tab-default-2').classList.remove('slds-show');
        this.template.querySelector('.tab-default-2').classList.add('slds-hide');
       
    }


    //Handling of swipe to the opportunity tab //
    handleClickTab2(){
        this.temp=true
        this.temp1=false
        this.template.querySelector('.firstTab').classList.remove('slds-is-active');
        this.template.querySelector('.secondTab').classList.add('slds-is-active');
        this.template.querySelector('.tab-default-1').classList.remove('slds-show');
        this.template.querySelector('.tab-default-1').classList.add('slds-hide');
        this.template.querySelector('.tab-default-2').classList.remove('slds-hide');
        this.template.querySelector('.tab-default-2').classList.add('slds-show');
    }


    // Handling of clicking of Lead Source in Contact //
    handleClickWeb(){
        this.template.querySelectorAll('.tap').forEach(element => {
            element.classList.remove('leadSource')
        });
            
        this.template.querySelector('.web').classList.add('leadSource')
        getContact({recordId:this.recordId, lead:'Web'})
        .then(result => {
            this.lstofCont = result;
            console.log(' --> file: oneFileUpload.js --> line 22 --> this.lstAllFiles' +(this.lstofCont));
        }).catch(error => {
            this.error = error;
            console.log(' --> file: oneFileUpload.js --> line 25 -->  this.error', this.error);
        })


       
    }

    handleClickPhone(){
        this.lstofCont=[]
        this.template.querySelectorAll('.tap').forEach(element => {
            element.classList.remove('leadSource')
        });
            
        this.template.querySelector('.phone').classList.add('leadSource')
        getContact({recordId:this.recordId, lead:'Phone Inquiry'})
        .then(result => {
            this.lstofCont = result;
            console.log(' --> file: oneFileUpload.js --> line 22 --> this.lstAllFiles' +(this.lstofCont));
        }).catch(error => {
            this.error = error;
            console.log(' --> file: oneFileUpload.js --> line 25 -->  this.error', this.error);
        })
    }


    handleClickPartner(){
        this.lstofCont=[]
        this.template.querySelectorAll('.tap').forEach(element => {
            element.classList.remove('leadSource')
        });
            
        this.template.querySelector('.partner').classList.add('leadSource')
        getContact({recordId:this.recordId, lead:'Partner Referral'})
        .then(result => {
            this.lstofCont = result;
            console.log(' --> file: oneFileUpload.js --> line 22 --> this.lstAllFiles' +(this.lstofCont));
        }).catch(error => {
            this.error = error;
            console.log(' --> file: oneFileUpload.js --> line 25 -->  this.error', this.error);
        })
    }

    handleClickPurchase(){
        this.lstofCont=[]
        this.template.querySelectorAll('.tap').forEach(element => {
            element.classList.remove('leadSource')
        });
            
        this.template.querySelector('.purchase').classList.add('leadSource')
        getContact({recordId:this.recordId, lead:'Purchased List'})
        .then(result => {
            this.lstofCont = result;
            console.log(' --> file: oneFileUpload.js --> line 22 --> this.lstAllFiles' +(this.lstofCont));
        }).catch(error => {
            this.error = error;
            console.log(' --> file: oneFileUpload.js --> line 25 -->  this.error', this.error);
        })
    }

    handleClickOther(){
        this.lstofCont=[]
        this.template.querySelectorAll('.tap').forEach(element => {
            element.classList.remove('leadSource')
        });
            
        this.template.querySelector('.other').classList.add('leadSource')
        getContact({recordId:this.recordId, lead:'Other'})
        .then(result => {
            this.lstofCont = result;
            console.log(' --> file: oneFileUpload.js --> line 22 --> this.lstAllFiles' +(this.lstofCont));
        }).catch(error => {
            this.error = error;
            console.log(' --> file: oneFileUpload.js --> line 25 -->  this.error', this.error);
        })
        
    }


    // Handling of clicking of Stages in Opportunity //
    handleClickProspect(event){
        console.log(event.detail)
        this.template.querySelectorAll('.click').forEach(element => {
            element.classList.remove('stageName')
        });
        this.template.querySelector('.prospect').classList.add('stageName')
        console.log(this.recordId)

        getOpportunity({recordId:this.recordId, stage:'Prospecting'})
        .then(result => {
            this.lstOfOppor = result;
            console.log(' --> file: oneFileUpload.js --> line 22 --> this.lstAllFiles' +(this.lstOfOppor));
        }).catch(error => {
            this.error = error;
            console.log(' --> file: oneFileUpload.js --> line 25 -->  this.error', this.error);
        })


    }

    handleClickQualification(){
        this.lstOfOppor=[]
        this.template.querySelectorAll('.click').forEach(element => {
            element.classList.remove('stageName')
        });
        this.template.querySelector('.qualification').classList.add('stageName')

        getOpportunity({recordId:this.recordId, stage:'Qualification'})
        .then(result => {
            this.lstOfOppor = result;
            console.log(' --> file: oneFileUpload.js --> line 22 --> this.lstAllFiles' +(this.lstOfOppor));
        }).catch(error => {
            this.error = error;
            console.log(' --> file: oneFileUpload.js --> line 25 -->  this.error', this.error);
        })

    }

    handleClickNeedAnalysis(){
        this.lstOfOppor=[]
        this.template.querySelectorAll('.click').forEach(element => {
            element.classList.remove('stageName')
        });
        this.template.querySelector('.needAnalysis').classList.add('stageName')
        getOpportunity({recordId:this.recordId, stage:'Needs Analysis'})
        .then(result => {
            this.lstOfOppor = result;
            console.log(' --> file: oneFileUpload.js --> line 22 --> this.lstAllFiles' +(this.lstOfOppor));
        }).catch(error => {
            this.error = error;
            console.log(' --> file: oneFileUpload.js --> line 25 -->  this.error', this.error);
        })
    }

   

    handleClickValuePropostion(){
        this.lstOfOppor=[]
        this.template.querySelectorAll('.click').forEach(element => {
            element.classList.remove('stageName')
        });
        this.template.querySelector('.valueProposition').classList.add('stageName')
        getOpportunity({recordId:this.recordId, stage:'Value Proposition'})
        .then(result => {
            this.lstOfOppor = result;
            console.log(' --> file: oneFileUpload.js --> line 22 --> this.lstAllFiles' +(this.lstOfOppor));
        }).catch(error => {
            this.error = error;
            console.log(' --> file: oneFileUpload.js --> line 25 -->  this.error', this.error);
        })
    }

    handleClickDecisionMakers(){
        this.lstOfOppor=[]
        this.template.querySelectorAll('.click').forEach(element => {
            element.classList.remove('stageName')
        });
        this.template.querySelector('.decisionMakers').classList.add('stageName')
        getOpportunity({recordId:this.recordId, stage:'Id. Decision Makers'})
        .then(result => {
            this.lstOfOppor = result;
            console.log(' --> file: oneFileUpload.js --> line 22 --> this.lstAllFiles' +(this.lstOfOppor));
        }).catch(error => {
            this.error = error;
            console.log(' --> file: oneFileUpload.js --> line 25 -->  this.error', this.error);
        })
    }

    handleClickPerception(){
        this.lstOfOppor=[]
        this.template.querySelectorAll('.click').forEach(element => {
            element.classList.remove('stageName')
        });
        this.template.querySelector('.perception').classList.add('stageName')
        getOpportunity({recordId:this.recordId, stage:'Perception Analysis'})
        .then(result => {
            this.lstOfOppor = result;
            console.log(' --> file: oneFileUpload.js --> line 22 --> this.lstAllFiles' +(this.lstOfOppor));
        }).catch(error => {
            this.error = error;
            console.log(' --> file: oneFileUpload.js --> line 25 -->  this.error', this.error);
        })
    }

    handleClickProposal(){
        this.lstOfOppor=[]
        this.template.querySelectorAll('.click').forEach(element => {
            element.classList.remove('stageName')
        });
        this.template.querySelector('.proposal').classList.add('stageName')
        getOpportunity({recordId:this.recordId, stage:'Proposal/Price Quote'})
        .then(result => {
            this.lstOfOppor = result;
            console.log(' --> file: oneFileUpload.js --> line 22 --> this.lstAllFiles' +(this.lstOfOppor));
        }).catch(error => {
            this.error = error;
            console.log(' --> file: oneFileUpload.js --> line 25 -->  this.error', this.error);
        })
    }

    handleClickNegotiation(){
        this.lstOfOppor=[]
        this.template.querySelectorAll('.click').forEach(element => {
            element.classList.remove('stageName')
        });
        this.template.querySelector('.negotiation').classList.add('stageName')
        getOpportunity({recordId:this.recordId, stage:'Negotiation/Review'})
        .then(result => {
            this.lstOfOppor = result;
            console.log(' --> file: oneFileUpload.js --> line 22 --> this.lstAllFiles' +(this.lstOfOppor));
        }).catch(error => {
            this.error = error;
            console.log(' --> file: oneFileUpload.js --> line 25 -->  this.error', this.error);
        })
    }

    handleClickClosedWon(){
        this.lstOfOppor=[]
        this.template.querySelectorAll('.click').forEach(element => {
            element.classList.remove('stageName')
        });
        this.template.querySelector('.closedWon').classList.add('stageName')
        getOpportunity({recordId:this.recordId, stage:'Closed Won'})
        .then(result => {
            this.lstOfOppor = result;
            console.log(' --> file: oneFileUpload.js --> line 22 --> this.lstAllFiles' +(this.lstOfOppor));
        }).catch(error => {
            this.error = error;
            console.log(' --> file: oneFileUpload.js --> line 25 -->  this.error', this.error);
        })
    }

    handleClickClosedLost(){
        this.lstOfOppor=[]
        this.template.querySelectorAll('.click').forEach(element => {
            element.classList.remove('stageName')
        });
        this.template.querySelector('.closedLost').classList.add('stageName')
        getOpportunity({recordId:this.recordId, stage:'Closed Lost'})
        .then(result => {
            this.lstOfOppor = result;
            console.log(' --> file: oneFileUpload.js --> line 22 --> this.lstAllFiles' +(this.lstOfOppor));
        }).catch(error => {
            this.error = error;
            console.log(' --> file: oneFileUpload.js --> line 25 -->  this.error', this.error);
        })
    }

    showActions(e){
         
        // if(this.showHide==false){
        //     this.showHide=true
        // }else{
        //     this.showHide=false;
        // }

        console.log('function clicked');
        console.log(e.target.parentElement)
        console.log(e.target.parentElement.querySelector('.yes'));
        
            if(e.target.parentElement.querySelector('.slds-dropdown_actions').style.display == 'none')
            {
                e.target.parentElement.querySelector('.slds-dropdown_actions').style.display = 'block';
            }
            else
            {
                e.target.parentElement.querySelector('.slds-dropdown_actions').style.display = 'none';
            }
    
    }

    navigateToRecordViewPage(){
        // View a custom object record.
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId:this.recordDataId,
                actionName: 'view'
            }
        });
    }

    
    handleDetailButton(event){
        this.recordDataId=event.target.name;
        console.log(event.target.name);
        this.navigateToRecordViewPage();

    }

   



    navigateToRecordEditPage() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.recordDataId,
                actionName: 'edit'
            }
        });
    }

    handleEditButton(event){
        console.log('I am edit')
        this.recordDataId = event.target.name
        console.log(this.recordDataId)
        this.navigateToRecordEditPage()
        // console.log('bye');

    }


    // navigateToRecordViewPage(){
    //     // View a custom object record.
    //     this[NavigationMixin.Navigate]({
    //         type: 'standard__recordPage',
    //         attributes: {
    //             recordId:this.contId,
    //             actionName: 'view'
    //         }
    //     });
    // }
    
        
}   



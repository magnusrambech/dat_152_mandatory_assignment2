'use strict';

class UIHandler {
    constructor(){
        //Reference to the HTML object that is used to display the list of members.
        this.memberList = document.createElement("table");
        //Getter that returns the number of members displayed in the view.
        this.length = 0;
        /*
        //Setter that adds a callback to run when a Delete button is clicked.
        this.deleteMemberCallback;
        //Setter that adds a callback to run when an Edit button is clicked.
        this.editMemberCallback;
        */
    }
    
    
    
    
    
    
    
    addMember(newMember){
    	console.log(newMember);
    	
    }
    
    getMember(id){
    	console.log("placeholder 1...")
    }
    
    editMember(member){
    	console.log("placeholder 2...");
    }
    
    deleteMember(id){
    	console.log("placeholder 3...")
    }
}
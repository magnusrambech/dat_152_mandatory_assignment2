'use strict';

class UIHandler {
    constructor(){
        //Reference to the HTML object that is used to display the list of members.
        this.memberList = document.createElement("table");
        this.memberList.setAttribute("id","memberTable");
       
    }
    
    
    
    
    
    
    
    addMember(newMember){
    	console.log("placeholder 1...")
    	
    }
    
    getMember(member){
    	var elem = document.getElementById("memberInfo");
    	elem.textContent = member;
    }
    
    editMember(member){
    	console.log("placeholder 2...");
    }
    
    deleteMember(id){
    	console.log("placeholder 3...")
    }
}
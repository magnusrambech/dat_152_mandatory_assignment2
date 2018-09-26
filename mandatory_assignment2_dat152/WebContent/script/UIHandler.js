'use strict';

class UIHandler {
    constructor(){
        //Reference to the HTML object that is used to display the list of members.
        this.memberList = document.createElement("table");
        this.memberList.setAttribute("id","memberTable");
        
        let thead = document.createElement("thead");
        let tr = document.createElement("tr");
        let tbody = document.createElement("tbody");
        tbody.setAttribute("id","tableMemberList")
        thead.appendChild(tr);
        this.memberList.appendChild(thead);
        this.memberList.appendChild(tbody);
    
        let data = ["Firstname", "Address", "Phone", "Lastname", "", ""];
        for(var j=0; j < data.length; j++ ){
            tr.appendChild(document.createElement("th")).innerHTML = data[j];
        }
       
    }
    
    
    
    
    
    
    
    addMemberToList(newMember){
    	
    	 //creates table rows with id that corresponds to netMember
        let tr = document.createElement("tr");
        tr.setAttribute("id", newMember.memberId);
        document.getElementById("tableMemberList").appendChild(tr);
        var id = newMember.memberId;
        delete newMember.memberId;
        
        let i = 0;
        for(var value in newMember){
        	let cell = tr.insertCell(i);
        	cell.innerHTML = newMember[value];
        	i++;
        }
        tr.insertCell(4).innerHTML = "<button id=delete" + id + " type='button'>Delete</button>";
        tr.insertCell(5).innerHTML = "<button id=edit" + id + " type='button'>Edit</button>";
        
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
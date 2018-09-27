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
        
        tr.insertCell(4).innerHTML = "<button id=delete" + id + " type='button' onclick='deleteMember("+ id +")'>Delete</button>";
        tr.insertCell(4).innerHTML = "<button id=edit" + id + " type='button' class='open edit' onclick=editMember("+ id +")>Edit</button>";
        
 
    }
    
    getMember(member){
    	var elem = document.getElementById("memberInfo");
    	
    	if(!member){
    		while (elem.firstChild) {
        	    elem.removeChild(elem.firstChild);
        	}
    		window.alert("User with this ID was not found.")
    	}
    	else{
    		let fname = document.createElement("p");fname.innerHTML = "First name: " + member.firstname;
        	let lname = document.createElement("p");lname.innerHTML =  "Last name: " + member.lastname;
        	let address = document.createElement("p");address.innerHTML =  "Address: " + member.address;
        	let phone = document.createElement("p");phone.innerHTML =  "Phone: " + member.phone;
        	
        	//removes previous member before showing new one
        	while (elem.firstChild) {
        	    elem.removeChild(elem.firstChild);
        	}
        	
        	elem.appendChild(fname);
        	elem.appendChild(fname);
        	elem.appendChild(lname);
        	elem.appendChild(address);
        	elem.appendChild(phone);
    	}
    	
    	
    }
    
    showEdit(id){
    	let member = document.getElementById(id);
    	showModal(id, member.firstChild.innerHTML, member.firstChild.nextSibling.innerHTML, member.firstChild.nextSibling.nextSibling.innerHTML, member.firstChild.nextSibling.nextSibling.nextSibling.innerHTML);
    	
    }
    
    editMember(member){
    	
    }
    
    deleteMember(id){
    	location.reload();
    }
}
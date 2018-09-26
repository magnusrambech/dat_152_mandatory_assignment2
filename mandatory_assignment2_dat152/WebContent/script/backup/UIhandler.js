'use strict';

class UIHandler {
    constructor(){
        //Reference to the HTML object that is used to display the list of members.
        this.memberList = document.createElement("table");
        
        //Getter that returns the number of members displayed in the view.
        this.length = 10;
        /*
        //Setter that adds a callback to run when a Delete button is clicked.
        this.deleteMemberCallback;
        //Setter that adds a callback to run when an Edit button is clicked.
        this.editMemberCallback;
        */
    }

    addMember(newMember) {

        //builds table with thead and tbody if it hasn't been done before
        if (document.getElementsByTagName("thead").length == 0) {
            //adds elements in correct order of hierarchy
            let thread = document.createElement("thead");
            let tr = document.createElement("tr");
            thread.appendChild(tr);
            this.memberList.appendChild(thread);
            this.memberList.appendChild(document.createElement("tbody"));

            //loops through the header titles needed and adds them to the table
            let j = 0;
            let data = ["Firstname", "Lastname", "Address", "Phone", "", ""];
            while (j < 6 ){
                tr.appendChild(document.createElement("th")).innerHTML = data[j];
                j++
            }
        }
        //Error prevention alert
        if (document.getElementById(newMember[Object.keys(newMember)[0]]) != null){
            alert("Error member with duplicate ID already exists. to edit an existing member, press the 'edit' button");
            return;
        }
        //creates table rows with id that corresponds to netMember
        let tr = document.createElement("tr");
        tr.setAttribute("id", newMember[Object.keys(newMember)[0]]);
        document.getElementsByTagName("tbody")[0].appendChild(tr);
        delete newMember.memberId;

        //extracts all values from newMember
        let values = Object.values(newMember);

        //loops through the values and inserts them into a table row
        let j = 0;
        while (j < values.length){
            tr.insertCell(j).innerHTML = values[j];
            j++;
        }

        //the task didn't ask for button ID's but I assumed having them point to a specific entry is probably useful later on
        tr.insertCell((4)).innerHTML = "<button id=delete" + newMember[Object.keys(newMember)[0]] + " type='button'>Delete</button>";
        tr.insertCell((5)).innerHTML = "<button id=edit" + newMember[Object.keys(newMember)[0]] + " type='button'>Edit</button>";
        this.length += 1;
    }

    editMember(member){

        //Error prevention alert
        if (document.getElementById(member[Object.keys(member)[0]])== null){
            alert("error when trying to edit member: No member with the specified ID was found!");
            return;
        }

        //finds the table row that corresponds to the members ID
        let selected = document.getElementById(member[Object.keys(member)[0]]).firstChild;

        delete member.memberId;

        //stores edited values into an object;
        let values = Object.values(member);

        //loops through the values and use them to replace old values of selected table row elements
        let j = 0;
        while (j < values.length) {
            selected.innerHTML = values[j];
            selected = selected.nextSibling;
            j++;
        }
    }
    
    deleteMember(id) {
        //removes the element with the selected ID
        let del = document.getElementById(id);

        //Error prevention alert
        if (del == null){
            alert("Error when trying to delete member: No member with the specified ID was found!");
            return;
        }

        del.parentNode.removeChild(del);
        this.length -= 1;
    }

    getMember(id){

        //Error prevention alert
        if (document.getElementById(id) == null){
            alert("Error when trying to get member: No member with the specified ID was found!");
            return;
        }

        //finds the table row that corresponds to the member ID and
        let member = {memberId: "id"};
        let iterate = document.getElementById(id).firstChild;

        //iterates through all siblings while adding them to an object
        member.firstname = iterate.textContent;
        iterate = iterate.nextSibling;
        member.lastname = iterate.textContent;
        iterate = iterate.nextSibling;
        member.address = iterate.textContent;
        iterate = iterate.nextSibling;
        member.phone = iterate.textContent;

        //returns the object containing all values
        return member;
    }
    
    
    //AJAX
    
    
    
    
}

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

    addMember(newMember) {

        //instantiate thread and tbody if it hasn't been done before
        if (document.getElementsByTagName("thread").length == 0) {
            let thread = document.createElement("thread");
            let tbody = document.createElement("tbody");
            let tr = document.createElement("tr");
            thread.appendChild(tr);
            this.memberList.appendChild(thread);
            this.memberList.appendChild(tbody);

            //create all "th" elements
            let j = 0;
            let data = ["Firstname", "Lastname", "Address", "Phone", "", ""];
            while (j < 6 ){
                tr.appendChild(document.createElement("th")).innerHTML = data[j];
                j++
            }
        }
        //create new element
        let tr = document.createElement("tr");
        let id = newMember[Object.keys(newMember)[0]];
        tr.setAttribute("id", id);
        delete newMember.memberId;
        let values = Object.values(newMember);
        document.getElementsByTagName("tbody")[0].appendChild(tr);

        let j = 0;
        while (j < values.length){
            tr.insertCell(j).innerHTML = values[j];
            j++;
        }
        tr.insertCell((4)).innerHTML = "<button id=delete" + id + " type='button'>Delete</button>";
        tr.insertCell((5)).innerHTML = "<button id=edit" + id + " type='button'>Edit</button>";
        this.length += 1;
    }

    editMember(member){
        let id = member[Object.keys(member)[0]];
        let edit = document.getElementById(id).firstChild;
        delete member.memberId;
        let values = Object.values(member);
        let selected = edit;

        let j = 0;
        while (j < values.length) {
            selected.innerHTML = values[j];
            selected = selected.nextSibling;
            j++;
        }
    }


    deleteMember(id) {    }



    getMember(member){    }
}

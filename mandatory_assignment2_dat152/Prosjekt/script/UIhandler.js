
class UIHandler {

    constructor(){
        //Reference to the HTML object that is used to display the list of members.
        this.memberList = document.createElement("table");
        //Getter that returns the number of members displayed in the view.
        this.length;
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
            let names = ["Firstname", "Lastname", "Address", "Phone", "", ""];
            while (j < 6 ){
                tr.appendChild(document.createElement("th")).innerHTML = names[j];
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
        length = length+1;
    }

    deleteMember(id) {    }

    editMember(member){    }

    getMember(member){    }
}

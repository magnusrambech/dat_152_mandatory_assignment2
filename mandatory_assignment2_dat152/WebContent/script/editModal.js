// Henter modulen
var eModal = document.getElementById('editModal');

// Henter span elementet
var eSpan = document.getElementsByClassName("close")[1];

function showModal(id, fname, addr, phone, lname){
	eModal.style.display = "block";
	document.getElementById("memberId").innerHTML = id;
	document.getElementById("newFirstName").value = fname;
	document.getElementById("newLastName").value = lname;
	document.getElementById("newAddress").value = addr;
	document.getElementById("newPhone").value = phone;
}

// Modulen lukkes når brukeren trykker på X.
eSpan.onclick = function(){
	eModal.style.display="none";
}

// Modulen lukkes når brukeren klikker utenfor modulen.
window.onclick = function(event) {
    if (event.target == modal) {
        eModal.style.display = "none";
    }
}

var editButton = document.getElementById("saveMemberBtn");

//editButton.onclick = updateMember();


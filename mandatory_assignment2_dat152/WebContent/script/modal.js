// Henter modulen
var modal = document.getElementById('myModal');

// Henter knappen som åpner modulen
var btn = document.getElementById("myBtn");

// Henter span elementet
var span = document.getElementsByClassName("close")[0];

// Modulen åpnes når burkeren trykker på knappen 
btn.onclick = function() {
    modal.style.display = "block";
}

// Modulen lukkes når brukeren trykker på X.
span.onclick = function(){
	modal.style.display="none";
}

// Modulen lukkes når brukeren klikker utenfor modulen.
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var addButton = document.getElementById("addMemberBtn");

addButton.onclick = function(){
	console.log("Funker");
}


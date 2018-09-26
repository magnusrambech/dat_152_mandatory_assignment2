
"use strict"
var memberIdElm = null


function load() {
  	document.getElementById("getMember").addEventListener("click",getMember,false)
  	memberIdElm = document.getElementById("memberId")
  	document.getElementById('addMemberBtn').addEventListener("click",addMember,false)
    }

function viewResult(m){
	document.getElementById("memberInfo").textContent=m;
}

function getMember(e){
	let url = config.servicesPath + "/member"
    const ajax = new AJAXConnection(url)
    ajax.onsuccess = viewResult
    ajax.get([memberIdElm.value])

}

function addMember(e){
	let json={};

	json.firstname = document.getElementById("firstName").value;
	json.lastname = document.getElementById("lastName").value;
	json.phone = document.getElementById("phone").value;
	json.address = document.getElementById("address").value;
	
	console.log(json)
	let url = config.servicesPath + "/member";
	const ajax = new AJAXConnection(url);	
	ajax.post(url, json);
	
	
	
}

function initAjax(){
	let reachedEnd = false;
	let curr = 1;
	document.getElementById('memberlist').appendChild(ui.memberList);
	let url = config.servicesPath + "/member";
	const ajax = new AJAXConnection(url);	
	
	// TODO: hent ut alle medlemmer ved bruk av 'ajax' (AJAXConnection) og vis de på siden ved bruk av 'ui' (UIHandler)

	}
		
	
}
window.addEventListener("DOMContentLoaded",load,true)
window.addEventListener('DOMContentLoaded',initAjax,true)
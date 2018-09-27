
"use strict"
var memberIdElm = null
let ui = new UIHandler();

function load() {
  	document.getElementById("getMember").addEventListener("click",getMember,false)
  	memberIdElm = document.getElementById("memberId")
  	document.getElementById('addMemberBtn').addEventListener("click",addMember,false)
  	document.getElementById('saveMemberBtn').addEventListener("click",updateMember,false)
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
	json.address = document.getElementById("address").value;
	json.phone = document.getElementById("phone").value;
	json.lastname = document.getElementById("lastName").value;
	
	let url = config.servicesPath + "/member";
	const ajax = new AJAXConnection(url);	
	ajax.post(url, json);
	
	location.reload()

}
function updateMember(e){
    let json = {};

    json.firstname = document.getElementById("newFirstName").value;
    json.address = document.getElementById("newAddress").value;
    json.phone = document.getElementById("newPhone").value;
    json.lastname = document.getElementById("newLastName").value;
    let id = document.getElementById("memberId").innerHTML;
    
    let url = config.servicesPath + "/member/"+id;
    const ajax = new AJAXConnection(url);
    ajax.put(url, json);

    location.reload();
}

function editMember(id){
	ui.showEdit(id);
	
}

function deleteMember(id){
	let url = config.servicesPath + "/member";
	const ajax = new AJAXConnection(url);
	if(window.confirm("Are you sure?")){
		ajax.del([id]);
		ui.deleteMember(id);
	}
	
}

function initAjax(){
	let reachedEnd = false;
	let curr = 1;
	document.getElementById('memberlist').appendChild(ui.memberList);
	let url = config.servicesPath + "/updates/-1";
	this.ajaxGetAll(url);
}

function ajaxGetAll(url){
	const ajax = new AJAXConnection(url);	
	ajax.getAll();
}
window.addEventListener("DOMContentLoaded",load,true)
window.addEventListener('DOMContentLoaded',initAjax,true)
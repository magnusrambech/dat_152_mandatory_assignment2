function init() {
	
	
//	  IKKE AJAX 
//	     |
//	     v
//	
//    const ui = new UIHandler()
//    document.getElementById('memberlist').appendChild(ui.memberList);
//
//    ui.addMember({
//        'memberId': 1,
//        'firstname': 'Ole',
//        'lastname':'Olsen' ,
//        'address': 'Olsenbakken',
//        'phone': '91826453'
//    })
//
//    ui.addMember({
//        'memberId': 2,
//        'firstname': 'Anne',
//        'lastname':'Annesen',
//        'address': 'Annesvingen',
//        'phone': '87655458'
//    })
//
//    ui.editMember({
//        'memberId': 1,
//        'firstname': 'Ole',
//        'lastname':'Olsen' ,
//        'address': 'Olsenbakken',
//        'phone': '11223344'
//    })
//
//    ui.deleteMember(2);


}

function initAjax(){
	const ui = new UIHandler();
	document.getElementById('memberlist').appendChild(ui.memberList);
	let url = config.servicesPath;
	const ajax = new AJAXConnection(url);	
	
	// TODO: hent ut alle medlemmer ved bruk av 'ajax' (AJAXConnection) og vis de på siden ved bruk av 'ui' (UIHandler)
	
}

document.addEventListener('DOMContentLoaded',initAjax,true)
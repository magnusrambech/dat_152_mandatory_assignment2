function init() {
    const ui = new UIHandler()
    document.getElementById('memberlist').appendChild(ui.memberList);

    ui.addMember({
        'memberId': 1,
        'firstname': 'Ole',
        'lastname':'Olsen' ,
        'address': 'Olsenbakken',
        'phone': '91826453'
    })

    ui.addMember({
        'memberId': 2,
        'firstname': 'Anne',
        'lastname':'Annesen',
        'address': 'Annesvingen',
        'phone': '87655458'
    })

    ui.editMember({
        'memberId': 1,
        'firstname': 'Ole',
        'lastname':'Olsen' ,
        'address': 'Olsenbakken',
        'phone': '11223344'
    })

    ui.deleteMember(2);


}

function initAjax(){
	const ui = new UIHandler();
	document.getElementById('memberlist').appendChild(ui.memberList);
	let url = config.servicesPath;
	const ajax = new AJAXConnection(url);	
	
	
}

document.addEventListener('DOMContentLoaded',initAjax,true)
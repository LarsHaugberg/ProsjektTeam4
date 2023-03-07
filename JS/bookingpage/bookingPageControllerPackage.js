


function packageModalContent() { 
	let html = '<br><div class="outer-modal-content">';
	for(let packageOption of model.data.packageOptions){
		html += /*HTML*/`<div class="inner-modal-content">
		
		<table id="package-table-name-price">
			<tr><th>Pakke:</th><th>${packageOption.name}</th></tr>
			<tr><td>Antall Timer:</td><td>${packageOption.hours}</td></tr>
			<tr><td>Ukedagspris:</td><td>${packageOption.price.weekdayPrice} ,-</td></tr>
			<tr><td>Helgepris:</td><td>${packageOption.price.weekendPrice} ,-</td></tr>
			<tr><th>Tilbehør inkludert:</th><th>Antall:</th></tr>`;  
		for (comfort of packageOption.comforts){
			html += `<tr><td>${comfort.name}</td><td> ${comfort.quantity}</td></tr>`;
		}
		html += `<tr><td colspan="2">${btnChoosePackage(packageOption.id)}</td></tr></table></div>`;  
    }
    html += `</div>`;
    model.app.modalContent = html;
    openModal();
}






function addPackageToInputs(id){
    //model.inputs.bookingPage.packageChoice = id;
    model.inputs.bookingPage.selectedHours = [];
    let packageToCopy = getPackageById(id);
    model.inputs.bookingPage.packageChoice = JSON.parse(JSON.stringify(packageToCopy));
    closeModal();
    console.log(id);
}

function removePackageChoice(){
    model.inputs.bookingPage.packageChoice = null;
    closeModal();
}




function btnChoosePackage(id){
    let html = '';
	if(model.inputs.bookingPage.packageChoice){
		if (model.inputs.bookingPage.packageChoice.id == id) {
			html = /* html */`<button class="choose-package-button" onclick="removePackageChoice()">Fjern</button>`;
		} else {
			html = /* html */`<button class="choose-package-button" onclick="addPackageToInputs(${id})">Velg</button>`;
		}
	} else {
		html = /* html */`<button class="choose-package-button" onclick="addPackageToInputs(${id})">Velg</button>`;
	}
    return html;
}
function packageModalContent() { 
	let html = '<br><div id="ytretest">';
	for(let packageOption of model.data.packageOptions){
		html += /*HTML*/`<div id="indretest"><table id="package-table-name-price">
		<tr><td>Pakke:</td><td>${packageOption.name}</td></tr>
		<tr><td>Antall Timer:</td><td>${packageOption.hours}</td></tr>
		<tr><td>Ukedagspris:</td><td>${packageOption.price.weekdayPrice} ,-</td></tr>
		<tr><td>Helgepris:</td><td>${packageOption.price.weekendPrice} ,-</td></tr>
		<tr>${btnChoosePackage(packageOption.id)}</tr>
		</table><br>  
		<table id="package-table-comforts">
        <th>Tilbehør inkludert:</th>
        <th>Antall:</th>
        `;  
		for (comfort of packageOption.comforts){
			html += `<tr><td>${comfort.name}</td><td> ${comfort.quantity}</td></tr>`;
		}
		html += `</table></div>`;  
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
			html = /* html */`<td>Fjern pakke:</td><td><button onclick="removePackageChoice()">Fjern</button></td>`;
		} else {
			html = /* html */`<td>Bestill pakken her:</td><td><button onclick="addPackageToInputs(${id})">Velg</button></td>`;
		}
	} else {
		html = /* html */`<td>Bestill pakken her:</td><td><button onclick="addPackageToInputs(${id})">Velg</button></td>`;
	}
    return html;
}
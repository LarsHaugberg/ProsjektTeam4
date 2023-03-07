function getComfortDropdown() {
	let HTML = ""
	HTML += /* html */ `<div><select onchange="selectComfort(this.value)"> 
    <option value=""><i>- comforts -</i></option>`;

	for (let i = 0; i < model.data.comforts.length; i++) {
		const comfort = model.data.comforts[i];
		HTML += `<option value="${comfort.id}">${comfort.id} : ${comfort.name}</option>`;
	}
	HTML += `</select></div>`;
	return HTML;
}

function getInputChoices() {
	let comfortList = [];
	for (let dataComfort of model.data.comforts) {
		let comfortCount = 0;
		for (let comfortId of model.inputs.bookingPage.comfortChoices) {
			if (dataComfort.id == comfortId) {
				comfortCount++;
			}
		}
		if (comfortCount > 0) {
			comfortList.push({ id: dataComfort.id, count: comfortCount });
		}
	}
	let html = '<div>';
	html += `<table class="comforts-table">`;
	html += /*html*/`
	<tr><th>Vare</th><th>Pr stk</th><th>Antall</th><th>Pris totalt</th></tr>`;

	for (let comfort of comfortList) {
		html += /*html*/`<tr><td>${getComfortById(comfort.id).name}</td><td>${getComfortById(comfort.id).price}</td><td> ${comfort.count} </td>
        <td>${getComfortById(comfort.id).price * comfort.count}</td><td></td></tr>`;
	}
	html += `</table></div>`;
	html += /* html */`${sumHoursSelected()}<br>${sumComfortsSelected()}<br>${totalSum()}`;
	return html;
}

function inputListBooking(){
	let selectedHours = model.inputs.bookingPage.selectedHours;
	let html = '';
    html += /*HTML*/`
        <table>
            <tr><th>Valgt flåte: </th><th colspan="2">${fleetNameChosen()}</th></tr>
            <tr style="border-bottom: 2px solid black;"></tr>
			<tr><td>Tid valgt:</td><td colspan="2">${selectedHours.length > 0 ? getBookingTimeAdmin(selectedHours): ' - '}</td></tr>
            <tr><td>Vare:</td><td>Antall</td><td>Sum</td></tr>
            <tr style="border-bottom: 1px solid black;"></tr>
            ${packageIsChosen()}
            ${hoursComfortsSelected()}
            <tr style="border-bottom: 2px solid black;"></tr>
            <tr><td>Total Sum:</td><td></td><td>${totalSum()}</td></tr>
		</table><br>
        `;
	return html;
}
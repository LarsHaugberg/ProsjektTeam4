function getBookingInput() {
	let HTML = `<div> ${getComfortDropdown()} ${getInputComfortChoices()} </div>`;
	return HTML;
}

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

function getInputComfortChoices() {
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
	<tr>
		<th>
			Vare
		</th>
		<th>
			Pr stk
		</th>
		<th>
			Antall
		</th>
		<th>
			Pris totalt
		</th>
		
	</tr>
	`;

	for (let comfort of comfortList) {
		html += /*html*/`<tr><td>${getComfortById(comfort.id).name}</td><td>${getComfortById(comfort.id).price}</td><td> ${comfort.count} </td>
        <td>${getComfortById(comfort.id).price * comfort.count}</td>
		<td><button onclick="subtractComfort(${comfort.id})">-</button>
		<button onclick="addComfort(${comfort.id})">+</button>
		<button onclick="deleteComfortChoicesByComfortId(${comfort.id})">x</button></td>
		</tr>`;
	}
	html += `</table></div>`;
	html += /* html */`${sumHoursSelected()}<br>${sumComfortsSelected()}<br>${totalSum()}`;
	return html;
}

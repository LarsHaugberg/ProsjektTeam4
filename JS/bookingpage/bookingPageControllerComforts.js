function comfortsModalContent() {
    let html = '';
    html += /*HTML*/`
        <table>
        ${getInputComfortChoicesM()}
        </table>
        `;
    model.app.modalContent = html;
    openModal();
}

function getInputComfortChoicesM() {
	let comfortList = [];
	for (let dataComfort of model.data.comforts) {
		let comfortCount = 0;
		for (let comfortId of model.inputs.bookingPage.comfortChoices) {
			if (dataComfort.id == comfortId) {
				comfortCount++;
			}
		}
        comfortList.push({ id: dataComfort.id, count: comfortCount });
	}
	let html = '<div>';
	html += `<table class="comforts-table">`;
	html += /*html*/`<tr><td>Vare</td><td>Pr stk</td><td>Antall	</td><td>Pris totalt</td></tr>`;

	for (let comfort of comfortList) {
		html += /*html*/`<tr><td>${getComfortById(comfort.id).name}</td><td>${getComfortById(comfort.id).price}</td><td> ${comfort.count} </td>
        <td>${getComfortById(comfort.id).price * comfort.count}</td>
		<td><button onclick="subtractComfort(${comfort.id})">-</button>
		<button onclick="addComfort(${comfort.id})">+</button>
		<button onclick="deleteComfortChoicesByComfortId(${comfort.id})">x</button></td>
		</tr>`;
	}
	html += /*html*/`</table>
    <button onclick="comfortModalClose()">Bekreft</button>
    </div>
    `;
	return html;
}
// html += /* html */`${sumHoursSelected()}<br>${sumComfortsSelected()}<br>${totalSum()}`; 


function updateEditorModalContenComforts() {
    model.app.modalContent = /*HTML*/
    `${getInputComfortChoicesM()}
    `;
    updateView()
}

function comfortModalClose(){

    closeModal()
}



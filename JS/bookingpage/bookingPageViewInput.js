function getBookingInput(){
    let HTML = `<div> ${getComfortDropdown()} ${getInputComfortChoices()} </div>`;
    return HTML;
}

function getComfortDropdown(){
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

function getInputComfortChoices(){
	let comfortList = [];
	for(let dataComfort of model.data.comforts){
		let comfortCount = 0;
		for(let comfortId of model.inputs.bookingPage.comfortChoices){
			if(dataComfort.id == comfortId){
				comfortCount++;
			}
		}
        if(comfortCount > 0){
		    comfortList.push({id: dataComfort.id, count: comfortCount});
        }
	}
	let html = '<div>';
	html += `<ul>`;
	
	for(let comfort of comfortList){
		html += /*html*/`<li>${getComfortById(comfort.id).name} antall: ${comfort.count} 
        sum: ${getComfortById(comfort.id).price * comfort.count}
		<button onclick="comfortAmount('subtract', ${comfort.id})">-</button>
		<button onclick="comfortAmount('add', ${comfort.id})">+</button>
		<button onclick="deleteComfortChoicesByComfortId(${comfort.id})">x</button>
		</li>`;
	}
	html += '</ul></div>';
	return html;
}

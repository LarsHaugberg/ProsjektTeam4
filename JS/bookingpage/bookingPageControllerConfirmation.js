function checkOrder() {
    /* fleet dato og timer */
    if (model.inputs.bookingPage.selectedHours.length < 1) { alert('Hei du må velge dato og tid for å fullføre en bestilling') }
    else { confirmationModalContent() }
}

function confirmationModalContent() {
    let html = '';
    html += /*HTML*/`
        <table class="comforts-modal-table">
            <tr><th>Valgt flåte: </th><th colspan="2">${fleetNameChosen()}</th></tr>
            <tr style="border-bottom: 2px solid black;"></tr>
            <tr><td>Tid valgt:</td><td>${getBookingTimeAdmin(model.inputs.bookingPage.selectedHours)}</td></tr>
            <tr><td>Vare:</td><td>Antall</td><td>Sum</td></tr>
            <tr style="border-bottom: 1px solid black;"></tr>
            ${packageIsChosen()}
            ${hoursComfortsSelected()}
            <tr style="border-bottom: 2px solid black;"></tr>
            <tr><td>Total Sum:</td><td></td><td>${totalSum()}</td></tr>
		</table><br>
        <button onclick="addBooking()">Bekreft bestilling</button>
        `;
    model.app.modalContent = html;
    openModal();
}

function checkOrderForComforts() {
    let html = '';
    let comfort = model.inputs.bookingPage.packageChoice
    if (model.inputs.bookingPage.packageChoice == null) { return "" }
    else {
        for (let i = 0; i < model.inputs.bookingPage.packageChoice.comforts.length; i++) {
            html += //html
                `
        <tr><td>${comfort.comforts[i].name}</td><td>${comfort.comforts[i].quantity}</td><td></td></tr>
        `;
        }
    }
    return html
}

function checkOrderForPackage() {
    let html = '';
    if (model.inputs.bookingPage.packageChoice == null) { return "" }
    else {
        html = `<tr><td>${model.inputs.bookingPage.packageChoice.name}:</td><td>1</td>
    <td>${isWeekend() ? model.inputs.bookingPage.packageChoice.price.weekendPrice :
            model.inputs.bookingPage.packageChoice.price.weekdayPrice}</td></tr>
        <tr><td>Timer:</td><td>${model.inputs.bookingPage.packageChoice.hours}</td><td></td></tr> `;
    }
    return html
}

function isWeekend() {
    let day = model.inputs.bookingPage.selectedDate.getDay();
    if (day < 6 && day > 0) { return false; }
    else return true;

}

function getListOfComforts() {
    let comfortList = [];
    let html = "";
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
    for (let comfort of comfortList) {
        html +=/* html */`
        <tr>
            <td>${getComfortById(comfort.id).name}</td>
            <td> ${comfort.count} </td>
            <td>${getComfortById(comfort.id).price * comfort.count}</td>
        </tr>
        `;
    }
    return html;
}

function getHoursNoPackage() {
    let html = '';
    if (model.inputs.bookingPage.packageChoice == null) {
        html += /* html */`<tr><td>Timer valgt:</td><td>${model.inputs.bookingPage.selectedHours.length}</td><td>${sumHoursSelected()}</td></tr>`;
    }
    return html;
}

function hoursComfortsSelected() {
    let html = '';
    html += /* html */`
    
    ${getHoursNoPackage()}
    `;
    if (model.inputs.bookingPage.packageChoice == null) {
        html += /* html */`
        <tr><td>Ekstra produkter:</td><td></td><td></td></tr>
        <tr style="border-bottom: 1px solid black;"></tr>
        `;
    }
    html += `
    ${getListOfComforts()}
    `;
    return html;
}

function packageIsChosen() {
    let html = '';
    html += /* html */`
    ${checkOrderForPackage()}
    ${checkOrderForComforts()}
    <tr style="border-bottom: 2px solid black;"></tr>
    `;
    if (model.inputs.bookingPage.packageChoice !== null && model.inputs.bookingPage.comfortChoices.length > 0) {
        html += /* html */`
        <tr><td>Ekstra produkter:</td><td></td><td></td></tr>
        <tr style="border-bottom: 1px solid black;"></tr>
        `;
    }


    return html;
}


function updateBookingPageView() {
    let HTML = /*HTML*/`
    <h1>Booking Side</h1> <hr/> <div class="booking-wrapper" > 
    ${getBookingPage()} 
    </div>
    `;
    return HTML;
}

function getBookingPage() {
    let HTML = '';

    HTML += /*HTML*/`<div><b> Velg flåte: </b></div>`;
    HTML += /*HTML*/`<div> <select id="fleetSelector" onchange="selectFleet(this.value)">
        <option value=""><i>- Flåte -</i></option>
    `;

    for (let fleet of model.data.fleets) {
        HTML += /*HTML*/`<option ${isSelected(fleet.id)} value="${fleet.id}">${fleet.id} : ${fleet.name}</option>`;
    }

    HTML += /*HTML*/`</select></div>`;
    HTML += /*HTML*/`<div> Flåte valgt er: ${(model.inputs.bookingPage.fleetChoice || model.inputs.bookingPage.fleetChoice === 0) ? model.inputs.bookingPage.fleetChoice : ''} </div>`;
    HTML += /*HTML*/`<button onclick="goToPrevMonth()">Forrige måned</button>`;
    HTML += /*HTML*/`<button onclick="goToNextMonth()">Neste måned</button>`;
    HTML += /*HTML*/`<br /><h3>${model.inputs.bookingPage.selectedDate.getFullYear()}<h3>`;
    HTML += /*HTML*/`<br /><h3>${getSelectedMonthName()}<h3>`;
    HTML += /*HTML*/`${showCalendar()} ${getBookingInput()}
    <button onclick="packageModalContentTEST()">Pakker</button>
    <button onclick="addBooking()">Bestill</button>
    <div>${getModal()}</div>
    `;
    return HTML;
}

function isSelected(fleetId) {
    if (fleetId == model.inputs.bookingPage.fleetChoice) return 'selected="selected"';
    else return '';
}



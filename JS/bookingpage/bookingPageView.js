function updateBookingPageView() {
    let HTML = /*HTML*/`
    <h1>Booking Side</h1> <hr/> 
    <div class="booking-wrapper"> 
        ${getBookingPage()} 
    </div>
    `;
    return HTML;
}

function getBookingPage() {
    let HTML = '';

    HTML += /*HTML*/`<div><b> Velg flåte: </b></div>
    <img src="img/picture1.jpg" alt="flåte1" width="262" height="192">
    <img src="img/picture3.jpg" alt="flåte2" width="274" height="184">
    <button onclick="packageModalContent()">Pakker</button>
    <img onclick="selectFleet(${model.data.fleets.id})" src="/img/picture1.jpg" alt="flåte1" width="262" height="192">
    <img onclick="selectFleet(${model.data.fleets.id})" src="/img/picture3.jpg" alt="flåte2" width="274" height="184">

   
     <div><select id="fleetSelector" onchange="selectFleet(this.value)">
         <option value=""><i>- Flåte -</i></option>`;

        for (let fleet of model.data.fleets) {
            HTML += /*HTML*/`<option ${isSelected(fleet.id)} value="${fleet.id}">${fleet.id} : ${fleet.name}</option>`;
        }

        HTML += /*HTML*/`</select>
    </div>
    <div> 
        Flåte valgt er: ${(model.inputs.bookingPage.fleetChoice || model.inputs.bookingPage.fleetChoice === 0) ? model.inputs.bookingPage.fleetChoice : ''} 
    </div>
    <button onclick="goToPrevMonth()">Forrige måned</button> 
    <button onclick="goToNextMonth()">Neste måned</button><br>

    <h3>${getSelectedMonthName()} ${model.inputs.bookingPage.selectedDate.getFullYear()} <h3>
    ${showCalendar()} 
    <div>
        <div>
            
            ${getComfortDropdown()} 
        </div>
            ${getInputComfortChoices()} 
        <div>
            ${getModal()}
        </div>
        <button onclick="addBooking()">Bestill</button>
    </div>
    `;
    return HTML;
}

function isSelected(fleetId) {
    if (fleetId == model.inputs.bookingPage.fleetChoice) return 'selected="selected"';
    else return '';
}



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

    HTML += /*HTML*/`<div><b> Velg flåte: </b></div>`;
     
    for (let fleet of model.data.fleets) {
        HTML += /* html */ `<div class="booking-image" onclick="selectFleet(${fleet.id})">${fleet.img}</div>`;
    }


    HTML += /*HTML*/`
    
    <div> 
        Flåte valgt er: ${fleetNameChosen()} 
    </div>
    <button onclick="goToPrevMonth()">Forrige måned</button> 
    <button onclick="goToNextMonth()">Neste måned</button>
    <button class="pakker-btn" onclick="packageModalContent()">Pakker</button>
    <br>

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
        <button onclick="checkOrder()">Bestill</button>
    </div>
    `;
    return HTML;
}

function isSelected(fleetId) {
    if (fleetId == model.inputs.bookingPage.fleetChoice) return 'selected="selected"';
    else return '';
}

function fleetNameChosen(){
   if (model.inputs.bookingPage.fleetChoice === 1){
    return getFleetNameById(1);
   } 
   if(model.inputs.bookingPage.fleetChoice === 0) {
    return getFleetNameById(0);
   }else{ 
    return ''}

}


function updateBookingPageView() {
    let HTML = /*HTML*/`
   
    <div class="booking-wrapper"> 
    <div class="booking-container">
    ${getBookingPage()}
    </div>
    </div>
    ${getModal()} 
    `;
    return HTML;
}

function getBookingPage() {
    let HTML = '';
    HTML += /*HTML*/`
    <div class="col-1">
        `;
        for (let fleet of model.data.fleets) {
            HTML += /* html */ `
            <div 
                class="booking-image"
                style="border-color:${model.data.fleets[fleet.id].border}"  
                onclick="selectFleet(${fleet.id}),settBorder(${fleet.id})">
                ${fleet.img}
            </div>`;
        }
        HTML += /*HTML*/`
        <!-- <div> Flåte valgt er: ${fleetNameChosen()} </div>  -->
        <div class="booking-buttons">
        <button class="booking-btn" onclick="comfortsModalContent()">Ekstra produkter</button>
        <button class="booking-btn" onclick="packageModalContent()">Pakker</button>
        <button class="booking-btn" onclick="checkOrder()">Bestill</button>
        </div>
        <br>
        <div class="booking-order-overview">${inputListBooking()}</div>
     
    </div>
    <div class="col-2">
    <div class="booking-month-button">
    <button  onclick="goToPrevMonth()">Forrige måned</button> 
    <button  onclick="goToNextMonth()">Neste måned</button>
    </div>
    
    <div class="booking-subtitle">${getSelectedMonthName()} ${model.inputs.bookingPage.selectedDate.getFullYear()} ${showDate()}</div>
    <div>${getMonthAsTable()} </div>
    <div>${getTimePicker()}</div>
    
       
        
    
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


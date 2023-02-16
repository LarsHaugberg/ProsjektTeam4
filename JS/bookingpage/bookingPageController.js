function selectFleet(fleetId) {
    model.inputs.bookingPage.fleetChoice = fleetId;
    updateView();
}

function goToNextMonth() {
    model.inputs.bookingPage.selectedDate.setMonth(model.inputs.bookingPage.selectedDate.getMonth() + 1);
    updateView();
}

function goToPrevMonth() {
    model.inputs.bookingPage.selectedDate.setMonth(model.inputs.bookingPage.selectedDate.getMonth() - 1);
    updateView();
}

function sumComfortsSelected() {
    let priceSum = 0;
    for (let comfortId of model.inputs.bookingPage.comfortChoices) {
        priceSum += getComfortById(comfortId).price;
    }
    return priceSum;
}

function getComfortById(id) {
    for (let comfort of model.data.comforts) {
        if (id == comfort.id)
            return comfort;
    }
    return null;
}
// totalsum
function totalSum() {
    return sumHoursSelected() + sumComfortsSelected();
}

function getPackageById(id) {
    for (let package of model.data.packageOptions) {
        if (id == package.id)
            return package;
    }
    return null;
}

//main controller 
function emptySelection() {
    model.inputs.bookingPage.selectedHours = [];
    model.inputs.bookingPage.packageChoice = null;
    model.inputs.bookingPage.comfortChoices = [];
    updateView();
}

function selectComfort(comfortId) {
    model.inputs.bookingPage.comfortChoices.push(comfortId);
    updateView();
}

function getIdToCompare(idToCompare){
    for (let i = 0; i < model.data.bookings.length; i++) {
        const booking = model.data.bookings[i];
        if (booking.orderId == idToCompare) {
            return true; 
        }
    }
    return false;
}

function getNewBookingId(){
	let i = 0;
	while(true){
		if(!getIdToCompare(i)){
			return i;
		}
		i++;
	}
}

// sender av gåre bestiling
function addBooking() {
    let newBooking = {};
    newBooking.orderId = getNewBookingId();
    newBooking.fleetId = Number(model.inputs.bookingPage.fleetChoice);
     //kopierer objektet
    if(model.inputs.bookingPage.packageChoice != null){newBooking.chosenPackage = JSON.parse(JSON.stringify(model.inputs.bookingPage.packageChoice));}
    else {newBooking.chosenPackage = null;}

    newBooking.chosenComforts = model.inputs.bookingPage.comfortChoices.map((x) => x);
    newBooking.chosenDate = new Date(model.inputs.bookingPage.selectedDate.valueOf());
    newBooking.chosenHours = model.inputs.bookingPage.selectedHours.map((x) => x);
    newBooking.customer = model.app.currentUser;
    newBooking.totalPrice = totalSum();
    if (model.inputs.bookingPage.selectedHours.length < 1) { return; }
    model.data.bookings.push(newBooking);
    emptySelection();
    updateView();
    console.log(newBooking);
}

function addComfort(comfortId){
    model.inputs.bookingPage.comfortChoices.push(comfortId);
    updateView();

}

function subtractComfort(comfortId){
    for(let i = model.inputs.bookingPage.comfortChoices.length -1; i >= 0 ; i--){
        if(model.inputs.bookingPage.comfortChoices[i] == comfortId){
            model.inputs.bookingPage.comfortChoices.splice(i, 1);
            break;
        }
    }  
    updateView();
}

function deleteComfortChoicesByComfortId(comfortId){
	for(let i = model.inputs.bookingPage.comfortChoices.length -1; i >= 0 ; i--){
		let id = model.inputs.bookingPage.comfortChoices[i];
		if(getComfortById(id).id == comfortId){
			model.inputs.bookingPage.comfortChoices.splice(i, 1);
		}
	}
    updateView();
}

function getFleetNameById(id) {
    for (let fleet of model.data.fleets) {
        if (id == fleet.id)
            return fleet.name;
    }
    return null;
}
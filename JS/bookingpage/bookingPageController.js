function selectFleet(fleetId) {
    model.inputs.bookingPage.fleetChoice = fleetId;
    console.log('fleet Id:' + fleetId);
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
    let booking = {};
    booking.orderId = getNewBookingId();
    booking.fleetId = 0;
    booking.chosenPackage = null;
    booking.chosenComforts = model.inputs.bookingPage.comfortChoices;
    booking.chosenDate = "";
    booking.chosenHours = 
    booking.customer
    booking.totalPrice
    model.data.bookings.push()
}

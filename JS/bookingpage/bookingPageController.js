function selectFleet(fleetId) {
    model.inputs.bookingPage.fleetChoice = fleetId;
    model.inputs.bookingPage.selectedHours = [];
    updateView();
}

function settBorder(index){
    for (let i = 0; i < model.data.fleets.length; i++) {
        model.data.fleets[i].border = "#efe2cd"
    }
    model.data.fleets[index].border = "black"
    updateView();
}

function goToNextMonth() {
    model.inputs.bookingPage.selectedHours = [];
    model.inputs.bookingPage.selectedDate.setMonth(model.inputs.bookingPage.selectedDate.getMonth() + 1);
    model.inputs.bookingPage.selectedDate.setDate(1);
    updateView();
}

function goToPrevMonth() {
    model.inputs.bookingPage.selectedHours = [];
    model.inputs.bookingPage.selectedDate.setMonth(model.inputs.bookingPage.selectedDate.getMonth() - 1);
    model.inputs.bookingPage.selectedDate.setDate(1);
    updateView();
}

function sumComfortsSelected() {
    let priceSum = 0;
    for (let comfortId of model.inputs.bookingPage.comfortChoices) {
        priceSum += Number(getComfortById(comfortId).price);
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
	let totalPrice = 0;
	if(model.inputs.bookingPage.packageChoice){
		if(!isWeekend())
			totalPrice = sumComfortsSelected() + Number(model.inputs.bookingPage.packageChoice.price.weekdayPrice);
		else totalPrice = sumComfortsSelected() + Number(model.inputs.bookingPage.packageChoice.price.weekendPrice);
        return totalPrice;
	}
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

function emptySelectedHours(){
    model.inputs.bookingPage.selectedHours = [];
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
    //hindrer at man kan bestille uten timer.
    if (model.inputs.bookingPage.selectedHours.length < 1) { return; }
    model.data.bookings.push(newBooking);
    alert("Booking gjennomført")
    emptySelection();
    closeModal();
    updateView();
    console.log(newBooking);
}

function addComfort(comfortId){
    model.inputs.bookingPage.comfortChoices.push(comfortId);
    updateEditorModalContenComforts();
    updateView();

}

function subtractComfort(comfortId){
    for(let i = model.inputs.bookingPage.comfortChoices.length -1; i >= 0 ; i--){
        if(model.inputs.bookingPage.comfortChoices[i] == comfortId){
            model.inputs.bookingPage.comfortChoices.splice(i, 1);
            break;
        }
    }  
    updateEditorModalContenComforts();
    updateView();
}

function deleteComfortChoicesByComfortId(comfortId){
	for(let i = model.inputs.bookingPage.comfortChoices.length -1; i >= 0 ; i--){
		let id = model.inputs.bookingPage.comfortChoices[i];
		if(getComfortById(id).id == comfortId){
			model.inputs.bookingPage.comfortChoices.splice(i, 1);
		}
	}
    updateEditorModalContenComforts();
    updateView();
}

function getFleetNameById(id) {
    console.log('getFleetNameByID kjoerer: '+ id)
    for (let fleet of model.data.fleets) {
        if (id == fleet.id){
            return fleet.name;
        }    
    }
    return null;
}
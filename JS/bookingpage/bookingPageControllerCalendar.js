function selectDate(date){
    if (model.inputs.bookingPage.selectedDate.getDate() != date) {
        emptySelection();
    }
    model.inputs.bookingPage.isDateSelected = true;
    model.inputs.bookingPage.selectedDate.setDate(date);
    updateView();
}


function getPriceDay(day){
    if(day < 6 && day > 0) return model.data.prices.weekdayPriceDay;
    else return model.data.prices.weekendPriceDay;
    
}

function getPriceHour(){
    let day = model.inputs.bookingPage.selectedDate.getDay();
    if(day < 6 && day > 0) return model.data.prices.weekdayPriceHour;
    else return model.data.prices.weekendPriceHour;
}


//returnerer samlet pris på timer valgt
function sumHoursSelected(){
    let day = model.inputs.bookingPage.selectedDate.getDay();
    let priceSum = 0;
    
	for(let hour of  model.inputs.bookingPage.selectedHours){
		priceSum += getPriceHour();
	}
    if(priceSum >= getPriceDay(day)){
        return  getPriceDay(day);
    }
    else return priceSum;
}
//---------------------------------------------------------------
// velg timer til bestiling
/*
function selectHour(hour){
    if (!checkIfHourIsSelected(hour)){
        model.inputs.bookingPage.selectedHours.push(hour);
    } else {unselectHour(hour);}
    updateView();
}*/

function selectHour(hour){

    if(!checkIfHourIsSelected(hour)){
		if(model.inputs.bookingPage.selectedHours.length > 0){
			if (hour > getHighestHourSelected()){
				let hoursToAutoSelect = getHoursToAutoSelect(hour);
				for(let hourToAutoSelect of hoursToAutoSelect){
					model.inputs.bookingPage.selectedHours.push(hourToAutoSelect);
				}
			}	
		}
		else{
			model.inputs.bookingPage.selectedHours.push(hour);
		}	
    }
    else{
        if(model.inputs.bookingPage.selectedHours.length > 0){//------------------test: fra 0 til 1. hadde ingen effekt...
			for(let i=getHighestHourSelected(); i>=hour; i--){//---------------------------fra >= til >hour tester
				if(checkIfHourIsBooked(i)) continue;
                unselectHour(i);
                console.log('unselects: '+ i)
			}
		}
        else unselectHour(hour);
    }
	
    console.log('timer valgt: '+ model.inputs.bookingPage.selectedHours);
    updateView();

}
function getHighestHourSelected(){
	if(model.inputs.bookingPage.selectedHours.length > 0){
		let max =  model.inputs.bookingPage.selectedHours[0];
		for(let hour of model.inputs.bookingPage.selectedHours){
			if (hour > max){
				max = hour;
			}
		}
        console.log('max: '+ max);
		return max;
		
	}	
    console.log('error??');
	//return null;
}

function getHoursToAutoSelect(hour){
	let hours = [];
	if(hour > getHighestHourSelected()){
		for(let i = getHighestHourSelected() + 1; i <= hour; i++){
            if(checkIfHourIsBooked(i)) break;//legge til en else under i stedet for if?
            if(!checkIfHourIsBooked(i)){ 
			    hours.push(i);
            }    
		}
        console.log('hoursToAutoSelect: '+ hours);
		return hours;
	}
    console.log('error2??');
	return;
		
	
}

function checkIfHourIsBooked(hour){
	const bookings = model.data.bookings;
    let fleet = model.inputs.bookingPage.fleetChoice;
    let fullYear = model.inputs.bookingPage.selectedDate.getFullYear();
    let month = model.inputs.bookingPage.selectedDate.getMonth();
    let date = model.inputs.bookingPage.selectedDate.getDate();

    for (let b = 0; b < bookings.length; b++) {
        let booking = bookings[b];
        if (booking.fleetId == fleet &&
            booking.chosenDate.getFullYear() == fullYear &&
            booking.chosenDate.getMonth() == month &&
            booking.chosenDate.getDate() == date) {
            for (let i = 0; i < booking.chosenHours.length; i++) {
                let bookedHour = booking.chosenHours[i];
                if (bookedHour == hour) {
                    return true;
                }
            }
        }
    }
    
    return false;
}

//----------------------------------


function unselectHour(hour){
    let indexToDelete = findHourIndexInSelected(hour);
    model.inputs.bookingPage.selectedHours.splice(indexToDelete,1);
    updateView();
}

function findHourIndexInSelected(hour){
    for(let i = 0; i < model.inputs.bookingPage.selectedHours.length; i++){
        if(hour == model.inputs.bookingPage.selectedHours[i]){
            return i;
        }
    }
    return null;
}

function checkIfHourIsSelected(hour){
    for(let selectedHour of model.inputs.bookingPage.selectedHours){
        if(hour === selectedHour){            
            return true;
        }
    }
    return false;
}
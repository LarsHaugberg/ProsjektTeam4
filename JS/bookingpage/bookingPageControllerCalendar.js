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

// velg timer til bestiling
function selectHour(hour){
    if (!checkIfHourIsSelected(hour)){
        model.inputs.bookingPage.selectedHours.push(hour);
    } else {unselectHour(hour);}
    updateView();
}

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
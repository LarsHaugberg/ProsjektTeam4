function updateBookingPageView() {
    let HTML = /*HTML*/`
    ${upperNavBar()}
    <h1>Booking Side</h1>
    <hr/>
    
        ${getBookingPage()}`;
       
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
    HTML += `${showCalendar()} ${getBookingInput()}
    `;
    return HTML;
}

function isSelected(fleetId) {
    if (fleetId == model.inputs.bookingPage.fleetChoice) return 'selected="selected"';
    else return '';
}


function showCalendar() {
    let selectedDate = model.inputs.bookingPage.selectedDate.getDate();
    let HTML = getMonthAsTable();
    //HTML += /*HTML*/`<br /> dato valgt: ${(selectedDate || selectedDate === 0)? selectedDate : ''} <br />`;
    HTML += /*HTML*/`<br /> dato valgt: ${(model.inputs.bookingPage.fleetChoice || model.inputs.bookingPage.fleetChoice === 0) ? selectedDate : ''} <br />`;
    HTML += getTimePicker();
    return HTML;


}


function getMonthAsTable() {
    if (model.inputs.bookingPage.fleetChoice === null) return '';
    let day = new Date();
    let currentMonth = model.inputs.bookingPage.selectedDate.getMonth();
    let currentYear = model.inputs.bookingPage.selectedDate.getFullYear();
    let HTML = `<table>`;
    let rows = 7;
    let columns = 7;
    let date = 1;
    let daysInSelectedMonth = model.data.daysInMonth[currentMonth];
    let started = false;
    day.setFullYear(currentYear, currentMonth, 0);

    for (let a = 0; a < rows; a++) {//  ukene eks uke numer
        let startPostition = day.getDay();
        HTML += "<tr>";
        for (let b = 0; b < columns; b++) { // uke dager eks mandag tirsdag
            if (a == 0) { // øverste linje
                HTML += /*HTML*/`<th>                           
                    ${getDayName(b)} 
                </th>`;
            }
            else {
                if (b == startPostition && a == 1) {
                    started = true;
                }
                if (started && date <= daysInSelectedMonth) {   // ----
                    day.setDate(day.getDate() + 1);
                    HTML += /*HTML*/`<td>                           
                    <button class="${getClassesForDateButton(date)}" onclick="selectDate(${day.getDate()})">
                      <!--  ${getDayName(day.getDay() - 1)}  <br />  -->
                         ${day.getDate()} <br />
                        <!-- Heldagspris: ${getPriceDay(day.getDay())} 
                        <br> Timespris: ${getPriceHour()} -->
                    </button>
                    </td>`;
                    date++;
                }
                else {
                    HTML += '<td></td>';
                }
            }
        }
        HTML += "</tr>";
    }
    HTML += `</table>`;
    HTML += `<p> Døgnpris: ${getPriceDay(model.inputs.bookingPage.selectedDate.getDay())} 
    <br> Timespris: ${getPriceHour()} </p>`
    return HTML;
}

function getTimePicker() {
    //let hoursInDay = 24;
    let rows = 4;
    let columns = 6;
    let HTML = `<table>`;
    let hour = 0;


    for (let h = 0; h < rows; h++) {
        HTML += `<tr>`;

        for (let n = 0; n < columns; n++) {
            HTML += /*HTML*/`<td>
            <button class="${getClassesForHourButton(hour)}" onclick="selectHour(${hour})">
                ${(hour < 10? "0" + hour: hour) + ':00'} <br> ${hour < 7 ? "" : getPriceHour()}
            </button>                               
            </td>`;
            hour++;
        }
        HTML += "</tr>";
    }

    HTML += `</table>`;
    if (model.inputs.bookingPage.isDateSelected) {
        return HTML;
    } else {
        return "";
    }

}

function getClassesForDateButton(date) {
    const bookings = model.data.bookings;
    let fleet = model.inputs.bookingPage.fleetChoice;
    let fullYear = model.inputs.bookingPage.selectedDate.getFullYear();
    let month = model.inputs.bookingPage.selectedDate.getMonth();
    let countHours = 0;
    if (date == model.inputs.bookingPage.selectedDate.getDate()) {
        return "date-button blue-button";
    }
    for (const booking of bookings) {
        if (booking.fleetId == fleet &&
            booking.chosenDate.getFullYear() == fullYear &&
            booking.chosenDate.getMonth() == month &&
            booking.chosenDate.getDate() == date) {
            countHours += booking.chosenHours.length;
        }
    }
    if (countHours > 18) { return "date-button red-button"; }
    if (countHours > 12) { return "date-button light-red-button"; }
    if (countHours > 1) { return "date-button yellow-button"; }

    return "date-button";
}

function getClassesForHourButton(hour) {
    const bookings = model.data.bookings;
    let fleet = model.inputs.bookingPage.fleetChoice;
    let fullYear = model.inputs.bookingPage.selectedDate.getFullYear();
    let month = model.inputs.bookingPage.selectedDate.getMonth();
    let date = model.inputs.bookingPage.selectedDate.getDate();

    if (hour < 7) {return "hour-button un-selectable";}
    for (let b = 0; b < bookings.length; b++) {
        let booking = bookings[b];
        if (booking.fleetId == fleet &&
            booking.chosenDate.getFullYear() == fullYear &&
            booking.chosenDate.getMonth() == month &&
            booking.chosenDate.getDate() == date) {
            for (let i = 0; i < booking.chosenHours.length; i++) {
                let bookedHour = booking.chosenHours[i];
                if (bookedHour == hour) {
                    return "hour-button red-button";
                }
            }
        }
    }
    if (checkIfHourIsSelected(hour) == true) {
        return "hour-button blue-button";
    }
    return "hour-button";
}


function getBookingInput(){
    let HTML = `
    <div> 
    ${getComfortDropdown()}
    ${getInputComfortChoices()}
    
    </div>    
    ` 
    return HTML;
}

function getComfortDropdown(){
    let HTML =/* HTML */`
    <div><select onchange="selectComfort(this.value)"> 
    <option value=""><i>- comforts -</i></option>
    `;

    for (let i = 0; i < model.data.comforts.length; i++) {
        const comfort = model.data.comforts[i];
        HTML += `<option value="${comfort.id}">${comfort.id} : ${comfort.name}</option>`;
    }
    
    HTML += `</select></div>    
    
    `
    return HTML;
    
}

function getInputComfortChoices(){
	let comfortList = [];
	for(let dataComfort of model.data.comforts){
		let comfortCount = 0;
		for(let comfortId of model.inputs.bookingPage.comfortChoices){
			if(dataComfort.id == comfortId){
				comfortCount++;
			}
		}
        if(comfortCount > 0){
		    comfortList.push({id: dataComfort.id, count: comfortCount});
        }
	}
			
	let html = '<div>';
	html += `<ul>`;
	
	for(let comfort of comfortList){
		html += /*html*/`<li>${getComfortById(comfort.id).name} antall: ${comfort.count} sum: ${getComfortById(comfort.id).price * comfort.count}</li>`;
	}
	
	html += '</ul></div>';
	return html;
	
}










/*  


getBookingInput() inneholder alt inkludert nedenforstående funksjoners returverdi samt total pris og bestillingsknapp

getComfortsInput()
getComfortDropdown()

getSelectedComfortList()
getInputComfortChoices()


//alternativt:
//return "date-button"    på knapp:  class="${getClassesForDateButton(date)}"




*/






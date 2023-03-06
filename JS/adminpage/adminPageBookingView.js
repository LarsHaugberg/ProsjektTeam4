function updateAdminPageBookingView() { // Viser viewet på administratorsiden for bildebehandling
    let HTML = /*HTML*/ `
    
    
    `;
    HTML += `<div class="admin-booking-page">
    
    <div class="admin-month">
    <h2>${getSelectedMonthNameAdmin(model.inputs.adminPageBooking.selectedDate.getMonth())} ${model.inputs.adminPageBooking.selectedDate.getFullYear()}</h2>
        <div class="booking-month-button-div"> 
        
            <button class="booking-month-button" onclick="goToPrevMonthAdmin()">Forrige måned</button> 
            <button class="booking-month-button" onclick="goToNextMonthAdmin()">Neste måned</button>
           
        </div>${getAdminMonthAsTable()}</div>`;
    HTML += `<div class="booking-list">${getBookingList()}</div><div class="single-booking-list">${getSingleBookingList()}</div></div>`;
    return HTML;
}



function getAdminMonthAsTable() {
   
    
    let day = new Date();
    let currentMonth = model.inputs.adminPageBooking.selectedDate.getMonth();
    let currentYear = model.inputs.adminPageBooking.selectedDate.getFullYear();
    let HTML = `<table class="admin-booking-table">`;
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
                    <button class="${getClassesForDateButtonAdmin(date)}" onclick="selectAdminDate(${day.getDate()})">
                        ${day.getDate()} <br />
                    </button>
                    </td>`;
                    date++;
                }
                else {//her burde vel klasse og ikke id brukes???
                    HTML += '<td id="blancTdCalendar"><button id="blancTdBtn"></button></td>';
                }
            }
        }
        HTML += "</tr>";
    }
    HTML += `</table>`;
   
    return HTML;
}


//burde bruke samme funksjon som i bookingPageViewCalendar, da med måned som parameter..
function getSelectedMonthNameAdmin(){
    let selectedMonth = model.inputs.adminPageBooking.selectedDate.getMonth();
    if(selectedMonth == 0) return 'Januar';
    if(selectedMonth == 1) return 'Februar';
    if(selectedMonth == 2) return 'Mars';
    if(selectedMonth == 3) return 'April';
    if(selectedMonth == 4) return 'Mai';
    if(selectedMonth == 5) return 'Juni';
    if(selectedMonth == 6) return 'Juli';
    if(selectedMonth == 7) return 'August';
    if(selectedMonth == 8) return 'September';
    if(selectedMonth == 9) return 'Oktober';
    if(selectedMonth == 10) return 'November';
    if(selectedMonth == 11) return 'Desember';

}

function getClassesForDateButtonAdmin(date) {
	let todayDate = new Date();
	let selectedDate = model.inputs.adminPageBooking.selectedDate;
	
	//trenger ikke logikk for å gråe ut passerte dager

    const bookings = model.data.bookings;
    
    let fullYear = model.inputs.adminPageBooking.selectedDate.getFullYear();
    let month = model.inputs.adminPageBooking.selectedDate.getMonth();
    let countHours = 0;


    if(todayDate.getFullYear() == fullYear &&
        todayDate.getMonth() == month &&
        todayDate.getDate() == date){
            if(selectedDate.getDate() == date){
                return "date-button blue-button";
            }
            else return "date-button green-button";
    }

    if (date == selectedDate.getDate()) {
        return "date-button blue-button";
    }
    for (const booking of bookings) {
        if (
            booking.chosenDate.getFullYear() == fullYear &&
            booking.chosenDate.getMonth() == month &&
            booking.chosenDate.getDate() == date) {
            countHours += booking.chosenHours.length;
        }
    }
   
    if (countHours > 0) { return "date-button yellow-button"; }
    return "date-button";
}





function getBookingList(){
    let dateObj = model.inputs.adminPageBooking.selectedDate;
    let fullYear = dateObj.getFullYear();
    let month = dateObj.getMonth();
    let date = dateObj.getDate();


    let html = `<h3>Bookinger  ${getDayName(dateObj.getDay()).toLowerCase()} 
        ${dateObj.getDate()}. ${getSelectedMonthNameAdmin(dateObj.getMonth()).toLowerCase()}</h3>`;

    html += `<div>`;
    for(let booking of model.data.bookings){
        if(booking.chosenDate.getFullYear() == fullYear &&
            booking.chosenDate.getMonth() == month &&
            booking.chosenDate.getDate() == date){
                html += `<table class="booking-table">`;
                html += `<tr><td>Bestillingsnr:</td><td>${booking.orderId}</td></tr>
                    <tr><td>Tid:</td><td>${getBookingTimeAdmin(booking.chosenHours)}</td></tr>
                    <tr><td>Flåte:</td><td>${getFleetNameById(booking.fleetId)}</td></tr>
                    <tr><td colspan="2"><button onclick="selectBookingAdmin(${booking.orderId})">Se mer...</button></td></tr>`;

                html += `</table><hr>`;  

            }

    }
    html += `</div>`;    

    
        
   return html;     


}

function getBookingTimeAdmin(bookingTime){//bookingTIme er et array med valgte timer
    let startHour = bookingTime[0];
    let endHour = bookingTime[bookingTime.length - 1];
    let html = `${startHour}.00 - ${endHour+1}.00`;


    return html;
}

function getSingleBookingList(){

    if(model.inputs.adminPageBooking.selectedBooking === null) return '';

    let booking = getBookingById(model.inputs.adminPageBooking.selectedBooking);

    let user = getUserByName(booking.customer);

    let html = `<h3>Bestillingsnr: ${model.inputs.adminPageBooking.selectedBooking}</h3>`;
    html += `<div>`;
    html += `<table class="single-booking-table">
        <tr><td>Flåte: </td><td>${getFleetNameById(booking.fleetId)}</td></tr>
        <tr><td>Brukernavn: </td><td>${user.name}</td></tr>
        <tr><td>Adresse: </td><td>${user.adress}</td></tr>
        <tr><td>Tlf Nr: </td><td>${user.phoneNumber}</td></tr>
        <tr><td>email: </td><td>${user.email}</td></tr>
        <tr><td>Tid:</td><td>${getBookingTimeAdmin(booking.chosenHours)}</td></tr>
        </table>`;
        html += `<table>`;
        if(booking.chosenPackage != null){
            let packageOption = booking.chosenPackage;
            console.log(packageOption);
            html += `<tr><th colspan="2">${packageOption.name}</th></tr>`;
            html += `<tr><td colspan="2">Tilbehør:</td></tr>`;
            for(let comfort of packageOption.comforts){
                html += `<tr><td>${comfort.name}</td><td>${comfort.quantity}</td></tr>`;
                //html += `</table>`;
            }
            if(booking.chosenComforts.length > 0){ html += `<tr><td colspan="2">Ekstra tilbehør:</td></tr>`;}//<table>
            
            html += `${getListOfComfortsAdmin(booking.chosenComforts)}`;
                
            
        } 
        else{
            html += `<tr><td colspan="2">Tilbehør:</td></tr>`;
            html += `${getListOfComfortsAdmin(booking.chosenComforts)}`;

        }
        html += `</table>`;
        html += `<table>
            <tr><td>Total pris:</td><td>${booking.totalPrice}</td></tr></table>`;



    html += `</div>`
    return html;
}



function getListOfComfortsAdmin(comfortChoices) {
    let comfortList = [];
    let html = "";
    for (let dataComfort of model.data.comforts) {
        let comfortCount = 0;
        for (let comfortId of comfortChoices) {
            if (dataComfort.id == comfortId) {
                comfortCount++;
            }
        }
        if (comfortCount > 0) {
            comfortList.push({ id: dataComfort.id, count: comfortCount });
        }
    }
    for (let comfort of comfortList) {
        html +=/*html*/`
        <tr>
            <td>${getComfortById(comfort.id).name}</td>
            <td> ${comfort.count} </td>
        </tr>`;
    }

    return html;
}


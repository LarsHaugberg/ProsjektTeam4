function updateAdminPageBookingView() { // Viser viewet på administratorsiden for bildebehandling
    let HTML = /*HTML*/ `
    <h1> Administrator side for Bookinger</h1>
    `;
    HTML += `<div class="admin-booking-page"><div class="admin-month">
        <div class="booking-month-button">
            <button  onclick="goToPrevMonthAdmin()">Forrige måned</button> 
            <button  onclick="goToNextMonthAdmin()">Neste måned</button>
        </div>${getAdminMonthAsTable()}</div>`;
    HTML += `<div></div></div>`;
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
                    <button class="date-button" onclick="selectAdminDate(${day.getDate()})">
                        ${day.getDate()} <br />
                    </button>
                    </td>`;
                    date++;
                }
                else {
                    HTML += '<td id="blancTdCalendar"><button id="blancTdBtn"></button></td>';
                }
            }
        }
        HTML += "</tr>";
    }
    HTML += `</table>`;
   
    return HTML;
}
function updateBookingPageView() {
    let HTML = /*html*/`
    <h1>Booking Side</h1>
        <button onclick="switchPage('frontPage')">Forside</button>
        <button onclick="switchPage('blogPage')">Bloggside</button>
        ${getBookingPage()}`;
    document.getElementById("app").innerHTML = HTML;
}    

function getBookingPage(){
    let html = '';
   

    html += /*html*/`<div><b> Velg flåte: </b></div>`;
    html += /*html*/`<div> <select id="fleetSelector" onchange="selectFleet(this.value)">
        <option value=""><i>- Flåte -</i></option>
    `;   
    
    for(let fleet of model.data.fleets){
        html += /*html*/`<option ${isSelected(fleet.id)} value="${fleet.id}">${fleet.id} : ${fleet.name}</option>`;
    }


    html += /*html*/`</select></div>`;      
    html += /*html*/`<div> Flåte valgt er: ${(model.inputs.bookingPage.fleetChoice || model.inputs.bookingPage.fleetChoice === 0)? model.inputs.bookingPage.fleetChoice : '' } </div>`;
    html += /*html*/`<button onclick="goToPrevMonth()">Forrige måned</button>`;  
    html += /*html*/`<button onclick="goToNextMonth()">Neste måned</button>`;      
    html += /*html*/`<br /><h3>${getSelectedMonthName()}<h3>`;  
    html += `${showCalendar()}`;
    return html;
}

//kan denne ligge i viewet??
function isSelected(fleetId){
    if(fleetId == model.inputs.bookingPage.fleetChoice) return 'selected="selected"';
    else return '';
}


function showCalendar(){
    let selectedDate = model.inputs.bookingPage.selectedDate;
    let html = getMonthAsTable();
    html += /*html*/`<br /> dato valgt: ${(selectedDate || selectedDate === 0)? selectedDate : ''} <br />`;
    //html += getTimePicker();
    return html;


}

function getMonthAsTable(){
    let currentMonth = model.inputs.bookingPage.selectedMonth;
    let html = `<table>`;
    let rows = 5;
    let columns = 7;
    let date = 1;//kan man bruke dagens dato is stedet??
    let daysInSelectedMonth = model.data.daysInMonth[currentMonth];

    for(let r=0; r < rows; r++){
        html += "<tr>";
        for(let i=0; i < columns; i++){     
            if(date <= daysInSelectedMonth){ //onclick="selectDate(${date})">
                html += /*html*/`<td>                           
                    <button class="date-button" onclick=""> 
                         ${date} <br /> 
                    </button>
                    </td>`;

            }
            else{
                break;
            }
            date++;

        }
        html+= `</tr>`;
    }
    html+= `</table>`;
    return html;




}








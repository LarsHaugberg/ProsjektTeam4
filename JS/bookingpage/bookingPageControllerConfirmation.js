function checkOrder() {
    /* fleet dato og timer */
    if (model.inputs.bookingPage.selectedHours.length < 1) { alert('bestilling uferdig') }
    else { confirmationModalContent() }
}

function confirmationModalContent() {
    let html = '';
    html += /*HTML*/`
        <table>
            <tr><td>Vare</td><td>Antal</td><td>Sum</td></tr>
            <tr><td>${fleetNameChosen()}</td><td></td></tr>
            ${checkOrderForPackage()}
            ${checkOrderForComforts()}
          
            <tr><td></td><td></td></tr>
            <tr><td></td><td></td></tr>
            <tr>total sum:<td></td><td>${totalSum()}</td></tr>
		</table><br>
        `;  
        

    model.app.modalContent = html;
    openModal();
}

function checkOrderForComforts(){
    let html = '';
    let comfort =  model.inputs.bookingPage.packageChoice
    if(model.inputs.bookingPage.packageChoice == null) {return ""}
    else {
    for (let i = 0; i < model.inputs.bookingPage.packageChoice.comforts.length; i++) {
        html += //html
        `
        <tr><td>${comfort.comforts[i].name}</td><td>${comfort.comforts[i].quantity}</td><td></td></tr>
        `;
    }
}
    return html
}

function checkOrderForPackage() {
    let html = '';
    if (model.inputs.bookingPage.packageChoice == null) { return ""}
    else {
        html = `<tr><td>${model.inputs.bookingPage.packageChoice.name}:</td><td>1</td>
    <td>${isWeekend() ? model.inputs.bookingPage.packageChoice.price.weekendPrice :
            model.inputs.bookingPage.packageChoice.price.weekdayPrice}</td></tr>
            <tr><td>Timer:</td><td>${model.inputs.bookingPage.packageChoice.hours}</td><td></td></tr> `;
    }
    return html
}

function isWeekend() {
    let day = model.inputs.bookingPage.selectedDate.getDay();
    if (day < 6 && day > 0) { return false; }
    else return true;

}

/*  forslag til sumeringen inputs for booking siden

vare                antal   sum
fleetname:
Jentekveld (4 stk):   1   1504        
Timer:                4
comforts: 
Vin                   3
shampo og balsam      4
håndklær              4
mineralvann           4
aroma                 1
Badekåpe              4

timer:                2    1000
comforts:
vin                   2     400
shogbalsm             1     100  
minevann              2     100
-------------------
total sum                  4104

*/

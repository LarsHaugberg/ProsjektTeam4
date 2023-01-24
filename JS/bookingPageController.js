


function selectFleet(fleetId){
    model.inputs.bookingPage.fleetChoice = fleetId;
    console.log('fleet Id:' + fleetId);
    //model.data.selectedMonth = getCurrentMonth();
    setTimeAsSelected();
    updateView();
}

function setTimeAsSelected(){
    let date = new Date();
    model.inputs.bookingPage.selectedDate = date.getDate();
    model.inputs.bookingPage.selectedMonth = date.getMonth();
    model.inputs.bookingPage.selectedYear = date.getFullYear();
    console.log('date: ' + model.inputs.bookingPage.selectedDate);
    console.log('Month: ' + model.inputs.bookingPage.selectedMonth);
    console.log('Year: ' + model.inputs.bookingPage.selectedYear);

}


function goToNextMonth(){
    model.inputs.bookingPage.selectedMonth++;
    if(model.inputs.bookingPage.selectedMonth > 11){
        model.inputs.bookingPage.selectedMonth = 0;
        goToNextYear();
    }
    console.log('Month: ' + model.inputs.bookingPage.selectedMonth);
    updateView();
}

function goToPrevMonth(){
    model.inputs.bookingPage.selectedMonth--;
    if(model.inputs.bookingPage.selectedMonth < 0){
        model.inputs.bookingPage.selectedMonth = 11;
        goToPrevYear();
    }
    console.log('Month: ' + model.inputs.bookingPage.selectedMonth);
    updateView();
}

function goToNextYear(){
    model.inputs.bookingPage.selectedYear++;
   
    updateView();
}

function goToPrevYear(){
    model.inputs.bookingPage.selectedYear--;
    
    updateView();
}






function getSelectedMonthName(){
    if(model.inputs.bookingPage.selectedMonth == 0) return 'Januar';
    if(model.inputs.bookingPage.selectedMonth == 1) return 'Februar';
    if(model.inputs.bookingPage.selectedMonth == 2) return 'Mars';
    if(model.inputs.bookingPage.selectedMonth == 3) return 'April';
    if(model.inputs.bookingPage.selectedMonth == 4) return 'Mai';
    if(model.inputs.bookingPage.selectedMonth == 5) return 'Juni';
    if(model.inputs.bookingPage.selectedMonth == 6) return 'Juli';
    if(model.inputs.bookingPage.selectedMonth == 7) return 'August';
    if(model.inputs.bookingPage.selectedMonth == 8) return 'September';
    if(model.inputs.bookingPage.selectedMonth == 9) return 'Oktober';
    if(model.inputs.bookingPage.selectedMonth == 10) return 'November';
    if(model.inputs.bookingPage.selectedMonth == 11) return 'Desember';

}
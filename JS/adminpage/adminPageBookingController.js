


function selectAdminDate(){

}

function goToPrevMonthAdmin(){
    
    model.inputs.adminPageBooking.selectedDate.setMonth(model.inputs.adminPageBooking.selectedDate.getMonth() - 1);
    model.inputs.adminPageBooking.selectedDate.setDate(1);
    updateView();


}


function goToNextMonthAdmin(){
    
    model.inputs.adminPageBooking.selectedDate.setMonth(model.inputs.adminPageBooking.selectedDate.getMonth() + 1);
    model.inputs.adminPageBooking.selectedDate.setDate(1);
    updateView();

    
}
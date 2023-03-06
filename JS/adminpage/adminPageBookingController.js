function selectAdminDate(date){
    if (model.inputs.adminPageBooking.selectedDate.getDate() != date) {
        model.inputs.adminPageBooking.selectedBooking = null;
    }
    model.inputs.adminPageBooking.isDateSelected = true;
    model.inputs.adminPageBooking.selectedDate.setDate(date);
    updateView();
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

function selectBookingAdmin(orderId){
    model.inputs.adminPageBooking.selectedBooking = orderId;
    updateView();
}

function getBookingById(id){
    for (let booking of model.data.bookings){
        if(booking.orderId == id){
            return booking;
        }
    }
    return null;
}

function getUserByName(username){
    for(let user of model.data.users){
        if(username == user.name){
            return user;
        }
    }
    return null;
}


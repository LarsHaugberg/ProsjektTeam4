function comfortsExtraProductLoop() { // Lager HTML og lister igjennom comforts arrayet 
    let HTML = '';                    // og legger til knapper sletting 
    for (let i = 0; i < model.data.comforts.length; i++) {
        HTML += `<li>${model.data.comforts[i].name} - ${model.data.comforts[i].price},- <button onclick="removeComforts(${i})">X</button> </li>`
    }
    return HTML;
}

function removeComforts(index) { // Slettefunksjonen for og fjerne fra comforts arrayet
    model.data.comforts.splice(index, 1)
    updateView()
}

function addComfortsInComfortsArray() { // Legge til comforts objekter
    let id = loopComfortsArray()
    let name = model.inputs.adminPageComfort.product
    let price = model.inputs.adminPageComfort.price
    if (price == '' || name == '') {
        alert('Fyll inn feltene')
    }
    else model.data.comforts.push({ id: id, name: name, price: price })
    updateView()
}

function loopComfortsArray() { // Returnerer ID til  addComfortsInComfortsArray() funksjonen
    let counter = 0;
    for (let i = 0; i < model.data.comforts.length; i++) {
        counter++
    }
    return counter;
}
function comittPriceChanges() { // Samlefunksjon som sjekker verdien i inputfeltet 
    checkWeekdayPriceHour()     // eventuelt beholder verdien om de er tomme
    checkWeekdayPriceDay()
    checkWeekendPriceHour()
    checkWeekendPriceDay()
    updateView()
}

function checkWeekdayPriceHour() { // Sjekker om inpufeltet er tomt, endrer modellen hvis vi fyller inn ny pris
    if (model.inputs.adminPageComfort.weekdayHourPrice != '') {
        model.data.prices.weekdayPriceHour = model.inputs.adminPageComfort.weekdayHourPrice;
        model.inputs.adminPageComfort.weekdayHourPrice = '';
    }
    else { model.data.prices.weekdayPriceHour = model.data.prices.weekdayPriceHour }
}


function checkWeekdayPriceDay() { // Sjekker om inpufeltet er tomt, endrer modellen hvis vi fyller inn ny pris
    if (model.inputs.adminPageComfort.weekdayDayPrice != '') {
        model.data.prices.weekdayPriceDay = model.inputs.adminPageComfort.weekdayDayPrice;
        model.inputs.adminPageComfort.weekdayDayPrice = '';
    }
    else { model.data.prices.weekdayPriceDay = model.data.prices.weekdayPriceDay }
}

function checkWeekendPriceHour() { // Sjekker om inpufeltet er tomt, endrer modellen hvis vi fyller inn ny pris
    if (model.inputs.adminPageComfort.weekendHourPrice != '') {
        model.data.prices.weekendPriceHour = model.inputs.adminPageComfort.weekendHourPrice;
        model.inputs.adminPageComfort.weekendHourPrice = '';
    }
    else { model.data.prices.weekendPriceHour = model.data.prices.weekendPriceHour }
}

function checkWeekendPriceDay() { // Sjekker om inpufeltet er tomt, endrer modellen hvis vi fyller inn ny pris
    if (model.inputs.adminPageComfort.weekendDayPrice != '') {
        model.data.prices.weekendPriceDay = model.inputs.adminPageComfort.weekendDayPrice;
        model.inputs.adminPageComfort.weekendDayPrice = '';
    }
    else { model.data.prices.weekendPriceDay = model.data.prices.weekendPriceDay }
}

function packageOptionsSelector() { // Returnerer valgene i dropdown menyen
    let HTML = `<option>velg pakke</option>`;
    for (let i = 0; i < model.data.packageOptions.length; i++) {
        HTML += `
        <option  value="${i}" >${model.data.packageOptions[i].name} </option>  
        `
    }

    return HTML

}
function changePackageEditorContent(index) { // Tar i mot select sin value og endrer valgt pakke i modellen
    model.inputs.adminPageComfort.selectPackage = index
    updateView()
}

function packageOptionsComfortLoop() { // Retunerer HTML med innholdet i valgt pakke
    let HTML =
        `
        PakkeNavn : ${model.data.packageOptions[model.inputs.adminPageComfort.selectPackage].name}<br>
        Ukedags pris : ${model.data.packageOptions[model.inputs.adminPageComfort.selectPackage].price.weekdayPrice}<br>
        Helgepris : ${model.data.packageOptions[model.inputs.adminPageComfort.selectPackage].price.weekendPrice}<br>
        timer : ${model.data.packageOptions[model.inputs.adminPageComfort.selectPackage].hours}<br>`
    for (let i = 0; i < model.data.packageOptions[model.inputs.adminPageComfort.selectPackage].comforts.length; i++) {
        HTML += ` 
        <li>${model.data.comforts[i].name}: 
        antall: ${model.data.packageOptions[model.inputs.adminPageComfort.selectPackage].comforts[i].quantity}
        </li>
        `
    }

    return HTML
}

function removePackage() { // Fjerner valgt pakke fra arrayet
    model.data.packageOptions.splice(model.inputs.adminPageComfort.selectPackage, 1)
    updateView()
}

function showPackageEditor() {  // Skriv om dette her
    let HTML = /*HTML*/`
         <div>
            ${packageOptionsComfortLoop()}
         </div>
         `;
    return HTML
}

// ${model.data.packageOptions[i].id}

/*
packageOptions: [
   {
       id: 0,
       name: 'Jentekveld (6 stk)',
       price: {
           weekdayPrice: 5264,
           weekendPrice: 7664,
       },
       hours: 4,
       comforts: [
           { id: 0, quantity: 4, },
           { id: 1, quantity: 6, },
           { id: 2, quantity: 6, },
           { id: 3, quantity: 6, },
           { id: 4, quantity: 1, },
           { id: 5, quantity: 6, },
       ],

   },
*/








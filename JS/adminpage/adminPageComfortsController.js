function comfortsExtraProductLoop() { // Lager HTML og lister igjennom comforts arrayet 
    let HTML = '';                    // og legger til knapper sletting 
    for (let i = 0; i < model.data.comforts.length; i++) {
        HTML += `
        <li>${model.data.comforts[i].name} - ${model.data.comforts[i].price},- </li>
        <button onclick="removeComforts(${i})">X</button>
        `
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
        while (counter == model.data.comforts[i].id) { counter++ }
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

function checkWeekdayPriceHour(isWeekend, innVerdi) { // Sjekker om inpufeltet er tomt, endrer modellen hvis vi fyller inn ny pris
    // let verdi = innVerdi
    //weekdayHourPrice
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
// ${model.inputs.adminPageComfort.selectPackageDropdown == null ? 'Velg pakke' : `${model.data.packageOptions[model.inputs.adminPageComfort.selectPackage].name}`}
function packageOptionsSelector() { // Returnerer valgene i dropdown menyen
    let HTML = `<option>${model.data.packageOptions[model.inputs.adminPageComfort.selectPackage].name}}</option>`;
    for (let i = 0; i < model.data.packageOptions.length; i++) {
        if (model.data.packageOptions[i].name != model.data.packageOptions[model.inputs.adminPageComfort.selectPackage].name) {
            HTML += `
        <option value="${i}">${model.data.packageOptions[i].name}</option>  
        `
        }
    }
    return HTML

}
function changePackageEditorContent(index) { // Tar i mot select sin value og endrer valgt pakke i modellen
    model.inputs.adminPageComfort.selectPackage = index
    model.inputs.adminPageComfort.selectPackageDropdown = model.data.packageOptions[model.inputs.adminPageComfort.selectPackage].name
    updateView()
}

function showPackageEditor() { // Returnerer HTML med innholdet i valgt pakke
    let HTML = //html
        `
        <div>PakkeNavn :  ${model.data.packageOptions[model.inputs.adminPageComfort.selectPackage].name}</div>
        <div class="admin-package-inputbox">
            <input class="admin-spann-button" 
            onchange="model.inputs.adminPageComfort.packageName = this.value"
            type="text"/>
            <button onclick="changePackageOptions('name')">v</button>
        </div>
        <div>Ukedags pris : ${model.data.packageOptions[model.inputs.adminPageComfort.selectPackage].price.weekdayPrice}</div> 
        <div class="admin-package-inputbox">
            <input class="admin-spann-button"  
            onchange="model.inputs.adminPageComfort.weekdayPrice = this.value"
            type="number"/>
            <button onclick="changePackageOptions('weekdayPrice')">v</button>
        </div>
        <div>Helgepris : ${model.data.packageOptions[model.inputs.adminPageComfort.selectPackage].price.weekendPrice}</div> 
        <div class="admin-package-inputbox">
            <input class="admin-spann-button" 
            onchange="model.inputs.adminPageComfort.weekendPrice = this.value" 
            type="number"/>
            <button onclick="changePackageOptions('weekendPrice')">v</button>
        </div>
        <div>timer : ${model.data.packageOptions[model.inputs.adminPageComfort.selectPackage].hours}</div>
        <div class="admin-package-hour-buttons">
            <button onclick="addSubtractHour('▲')">▲</button> 
            <button onclick="addSubtractHour('▼')">▼</button>
        </div>
        `
    for (let i = 0; i < model.data.packageOptions[model.inputs.adminPageComfort.selectPackage].comforts.length; i++) {
        HTML += //html
            ` 
        <div>${model.data.packageOptions[model.inputs.adminPageComfort.selectPackage].comforts[i].name} : 
        antall: ${model.data.packageOptions[model.inputs.adminPageComfort.selectPackage].comforts[i].quantity}</div>
        <div class="admin-package-inputbox">   
            <button onclick="addSubtractQuantity('▲',${i})">▲</button> 
            <button onclick="addSubtractQuantity('▼',${i})">▼</button>
            <button onclick="adminPageRemoveComfortFromPackage(${i})">X</button>
        </div>
        `;
    }
    return HTML
}

function changePackageOptions(toDo) {
    let packagePrice = model.data.packageOptions[model.inputs.adminPageComfort.selectPackage].price
    let inputPackageOptions = model.inputs.adminPageComfort
    if (toDo == 'weekendPrice') {
        packagePrice.weekendPrice = inputPackageOptions.weekendPrice;
        inputPackageOptions.weekendPrice = '';
    }
    if (toDo == 'weekdayPrice') {
        packagePrice.weekdayPrice = inputPackageOptions.weekdayPrice;
        inputPackageOptions.weekdayPrice = '';
    }
    if (toDo == 'name') {
        model.data.packageOptions[model.inputs.adminPageComfort.selectPackage].name = inputPackageOptions.packageName;
        inputPackageOptions.packageName = '';
    }
    updateView()

}

function adminPageRemoveComfortFromPackage(index) { // Sletter objekter fra packageOptions arrayet
    model.data.packageOptions[model.inputs.adminPageComfort.selectPackage].comforts.splice(index, 1)
    updateView()
}

function addSubtractHour(toDo) { // Endrer 
    let hour = model.data.packageOptions[model.inputs.adminPageComfort.selectPackage]
    if (toDo == '▼' && hour.hours > 0) { hour.hours-- }
    else { hour.hours++ }
    if (hour.hours == 0) { hour.hours = 1 }
    updateView()
}

function addSubtractQuantity(toDo, product) { // Øker eller senker antall produkter
    let quantityInPackage = model.data.packageOptions[model.inputs.adminPageComfort.selectPackage].comforts
    if (toDo == '▼' && quantityInPackage[product].quantity != 0) {
        quantityInPackage[product].quantity--;
    }
    else { quantityInPackage[product].quantity++; }
    updateView()
}

function removePackage() { // Fjerner valgt pakke fra arrayet
    model.data.packageOptions.splice(model.inputs.adminPageComfort.selectPackage, 1)
    updateView()
}










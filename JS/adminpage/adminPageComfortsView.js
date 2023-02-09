function updateAdminPageComfortView() { // Viser viewet på administratorsiden for bildebehandling
    let HTML = /*HTML*/ `
    ${upperNavBar()}
    ${bottomNavBar()}
    <h1> Administrator side for Comforts</h1>
    <div class="adminpage-comforts-wrapper">
    <div class="adminpage-comforts-extraproductsbox"> Tilgjenglige ekstraprodukter:
    <br><br><br>
    ${comfortsExtraProductLoop()}
    <br><br><br><br><br><br><br><br><br><br><br>
    <input type="number" onchange="model.inputs.adminPageComfort.price = this.value" placeholder="Pris"/>
    <input type="text" onchange="model.inputs.adminPageComfort.product = this.value" placeholder="Vare"/>
    <button onclick="addComfortsInComfortsArray()"> Legg til produkter</button>
    </div>    
    <br>
    
    <div class="adminpage-comforts-changepricebox"> Endre priser divven
    <br>
    Endre priser hverdag:<br>
    <input type="number" onchange="model.inputs.adminPageComfort.weekdayHourPrice = this.value" placeholder="${model.data.prices.weekdayPriceHour} Timespris Hverdag"/><br>
    <input type="number" onchange="model.inputs.adminPageComfort.weekdayDayPrice = this.value" placeholder="${model.data.prices.weekdayPriceDay} Dagspris Hverdag"/>
    <br><br><br><br>
    Endre priser Helg<br>
    <input type="number" onchange="model.inputs.adminPageComfort.weekendHourPrice = this.value" placeholder="${model.data.prices.weekendPriceHour} Timespris Helg"/><br>
    <input type="number" onchange="model.inputs.adminPageComfort.weekendDayPrice = this.value" placeholder="${model.data.prices.weekendPriceDay} Dagspris Helg">
    <br> 
    <button onclick="comittPriceChanges()"> Sett ny pris</button> 
    </div>
    <br>
    <div class="admingpage-comforts-editpackagesbox"> Endre pakke innhold divven
    <select onchange="changePackageEditorContent(this.value) ">${packageOptionsSelector()}</select>
    
    ${showPackageEditor()}
    <br>
    
    <input type="text" onchange="model.inputs.adminPageComfort.packageProduct = this.value" placeholder="Vare"/> <button>Legg til Vare</button><br><br><br>
    <button> Legg til pakke</button><br>
    
    <button onclick="removePackage()">fjærn pakke</button>

    </div>
    </div>

    `;
    return HTML;
}
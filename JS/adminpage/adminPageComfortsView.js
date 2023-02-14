function updateAdminPageComfortView() { // Viser viewet på administratorsiden for bildebehandling
    let HTML = /*HTML*/ `
    <h1> Administrator side for Comforts</h1>
    <div class="adminpage-comforts-wrapper">
        <div class="adminpage-comforts-box-row1"> 
            <h4 class="admin-box-subtitle-title">Tilgjenglige ekstraprodukter</h4>
            ${comfortsExtraProductLoop()}
            <div class="admin-extra-produckt-inputbox">
                <input type="number" onchange="model.inputs.adminPageComfort.price = this.value" placeholder="Pris"/>
                <input type="text" onchange="model.inputs.adminPageComfort.product = this.value" placeholder="Vare"/>
                <button class="admin-spann-button" onclick="addComfortsInComfortsArray()"> Legg til produkter</button>
            </div>    
        </div>    
    
        <div class="adminpage-comforts-box-row1">
            <h4 class="admin-box-subtitle-title">Endre priser hverdag</h4>
           
            <input type="number" onchange="model.inputs.adminPageComfort.weekdayHourPrice = this.value" placeholder="${model.data.prices.weekdayPriceHour} Timespris Hverdag"/>
            <input type="number" onchange="model.inputs.adminPageComfort.weekdayDayPrice = this.value" placeholder="${model.data.prices.weekdayPriceDay} Dagspris Hverdag"/>
          
            <h4 class="admin-box-subtitle-title">Endre priser Helg</h4>
            
            <input type="number" onchange="model.inputs.adminPageComfort.weekendHourPrice = this.value" placeholder="${model.data.prices.weekendPriceHour} Timespris Helg"/>
            <input type="number" onchange="model.inputs.adminPageComfort.weekendDayPrice = this.value" placeholder="${model.data.prices.weekendPriceDay} Dagspris Helg">
            <button class="admin-spann-button" onclick="comittPriceChanges()"> Sett ny pris</button> 
        </div>
    
        <div class="adminpage-comforts-box-row2"> 
            <h4>Endre pakke:</h4>
            <select onchange="changePackageEditorContent(this.value) ">${packageOptionsSelector()}</select>
            ${showPackageEditor()}
            <input type="text" onchange="model.inputs.adminPageComfort.packageProduct = this.value,model.app.selectPackageDropdown = this.value" placeholder="Vare"/> 
            <button>Legg til Vare</button> 
            <button class="admin-spann-button" onclick="removePackage()">fjærn pakke</button>
        </div>
        <div class="adminpage-comforts-box-row2"> 
            <h4>Legg til pakke:</h4>
             
            <button onclick="">Legg til pakke</button>
        </div>
    </div>
    `;
    return HTML;
}
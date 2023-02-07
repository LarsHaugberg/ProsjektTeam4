function updateUserPageView() { // Alle inputfeltene som tar imot bruker data 
    let HTML = /*HTML*/
        `   ${upperNavBar()}
        ${bottomNavBar()}
        <h1> LAG NY BRUKER </h1>
        <input 
            type="text" placeholder="Navn"
            onchange="model.inputs.newUserPage.name = this.value" 
            value="${model.inputs.newUserPage.name}"
        /> Brukernavn<br> 
        <input 
            type="text" placeholder="Adresse"
            onchange="model.inputs.newUserPage.adress = this.value" 
            value="${model.inputs.newUserPage.adress}"
        /> Adresse<br>
        <input 
            type="text" placeholder="Telefon"
            onchange="model.inputs.newUserPage.phone = this.value" 
            value="${model.inputs.newUserPage.phone}"
        /> Telefon<br> 
        <input 
            type="text" placeholder="E-post"
            onchange="model.inputs.newUserPage.email = this.value" 
            value="${model.inputs.newUserPage.email}"
        /> E-post<br> 
        <input 
            type="password" placeholder="Passord"
            onchange="model.inputs.newUserPage.password = this.value" 
            value="${model.inputs.newUserPage.password}"
        /> Passord<br> 
        <input 
            type="password" placeholder="Bekreft Passord"
            onchange="model.inputs.newUserPage.confirmedPassword = this.value" 
            value="${model.inputs.newUserPage.confirmedPassword}"
        /> Bekreft Passord<br> 
        <button onclick="generateNewUsers()">Lag Ny Bruker</button>
    `;
    return HTML;
}
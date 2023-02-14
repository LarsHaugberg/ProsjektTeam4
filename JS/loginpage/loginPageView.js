function updateLoginPageView() {  
    let HTML = /*HTML*/
    `   
        <h1> Login side </h1>
        <form> 
        <input 
            type="text" 
            onchange="model.inputs.loginPage.userName = this.value" 
            value="${model.inputs.loginPage.userName}" 
            placeholder="Brukernavn"
        /><br>
        <input  
            type="password" 
            onchange="model.inputs.loginPage.password = this.value" 
            value="${model.inputs.loginPage.password}"  
            placeholder="Passord"
        /><br> 
        <button onclick="login()">LÅGGINN</button><br><br>
        <button onclick="switchPage('newUserPage')">NewUserPage</button>
        </form> 
    `;
    return HTML;
}


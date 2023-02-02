function updateUserPageView() {
    let HTML = /*HTML*/
    `   ${upperNavBar()}
        ${bottomNavBar()}
        <h1> LAG NY BRUKER </h1>
        <input type="text" placeholder="NAVN"/> Brukernavn<br>  
        <input type="text" placeholder="Adresse"/> Adresse<br>
        <input type="text" placeholder="Telefon"/> Telefon<br> 
        <input type="text" placeholder="E-post"/> E-post<br> 
        <input type="text" placeholder="Passord"/> Passord<br> 
        <input type="text" placeholder="Bekreft Passord"/> Bekreft Passord<br> 
        <button >Lag Ny Bruker</button>
    `;
    return HTML;
}
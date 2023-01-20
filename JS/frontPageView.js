function updateFrontPageView() {
    let HTML = /*html*/`
    <h1>Forside</h1>
    <hr/>
    <button onclick="switchPage('bookingPage')">BookingSide</button>
    <button onclick="switchPage('blogPage')">Bloggside</button>
    <hr/>
    
    <div class="frontPagePictureBox"></div>

        `;
    document.getElementById("app").innerHTML = HTML;

}

























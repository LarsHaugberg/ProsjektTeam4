function updateFrontPageView() {
    let HTML = /*html*/`
    <h1>Forside</h1>
        <button onclick="switchPage('bookingPage')">BookingSide</button>
        <button onclick="switchPage('blogPage')">Bloggside</button>
        `;
   document.getElementById("app").innerHTML = HTML;

}
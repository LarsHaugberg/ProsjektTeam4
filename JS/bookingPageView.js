function updateBookingPageView() {
    let HTML = /*html*/`
    <h1>Booking Side</h1>
        <button onclick="switchPage('frontPage')">Forside</button>
        <button onclick="switchPage('blogPage')">Bloggside</button>
        `;
    document.getElementById("app").innerHTML = HTML;

}
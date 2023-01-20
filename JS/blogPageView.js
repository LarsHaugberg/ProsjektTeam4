function updateBlogPageView() {
    let HTML = /*html*/`
    <h1>Bloggen</h1>
        <button onclick="switchPage('frontPage')">Forside</button>
        <button onclick="switchPage('bookingPage')">BookingSide</button>
        `;

    document.getElementById("app").innerHTML = HTML;

}
function updateFrontPageView() {
    let HTML = /*html*/`
    <h1>Forside</h1>
    <hr/>
    <button onclick="switchPage('bookingPage')">BookingSide</button>
    <button onclick="switchPage('blogPage')">Bloggside</button>
    <hr/>
    
    <div class="frontPagePictureBox"><img class="frontPageImages fill" src="${pictureSelector()}"></div>

        `;
    document.getElementById("app").innerHTML = HTML;

}

function pictureSelector(){
    console.log(model.app.currentPicture)

    return model.app.currentPicture;
}























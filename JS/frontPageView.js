function updateFrontPageView() {
    let HTML = /*html*/`
    <h1>Forside</h1>
    <hr/>
    <button onclick="switchPage('bookingPage')">BookingSide</button>
    <button onclick="switchPage('blogPage')">Bloggside</button>
    <hr/>
    
    <div class="frontPagePictureBox"><img class="frontPageImages fill" src="${pictureSelectorShow()}"></div>
    <button onclick="changeFrontPagePicture('<')"><</button>
    <button onclick="changeFrontPagePicture('>')">></button>

        `;
    document.getElementById("app").innerHTML = HTML;

}

function pictureSelectorShow() {
   

    return model.data.frontPagePictures[model.app.currentPicture] ;
}




























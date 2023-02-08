function adminPagePictureLoop() { // Lister opp bildene i frontPagePictures inn i adminPageArray div'en legger til slettefunksjon
    let HTML = '';
    for (let i = 0; i < model.data.frontPagePictures.length; i++) {
        HTML += /*HTML*/`
       <ul onclick="adminPagePreviewPictureSelector(${i})">
            <a href="#">${model.data.frontPagePictures[i].pictureTitle}</a> 
            <button onclick="removeAdminPagePicture(${i})" class="adminpage-removebutton">X</button>
       </ul>  `;

    }
    return HTML;
}
function adminPagePreviewPictureSelector(index) { // Endrer modellen til indexen i loopen for og få vist riktig bilde når man klikker på de
    model.app.currentPicture = index
    updateView()
}
function removeAdminPagePicture(index) { // Sletter bilder fra frontPagePictures arrayet
    model.data.frontPagePictures.splice(index, 1)

}
function adminPageUploadPicture() { // Funksjon som later som vi har en backend og pusher et bildet i arrayet
    let imglink = "/img/picture4.png";
    let title =  'Picture4';
    model.data.frontPagePictures.push({pictureTitle: title, imageLink: imglink,})
    updateView()
}  

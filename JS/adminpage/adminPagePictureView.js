function updateAdminPagePictureView() { // Viser viewet på administratorsiden for bildebehandling
    let HTML = /*HTML*/ `
    <div class="adminpage-wrapper">
        <h1 class="admin-box-subtitle-title"> Administrator side for bildebehanlding</h1>
        <div class="adminpage-picture-box">  <img class="front-page-images fill" 
            src="${model.data.frontPagePictures[model.app.currentPicture].imageLink}">
        </div>       
        <div class="adminpage-arraylist-box">
            <h4 class="admin-picturebox-subtitle-title">Forside bilder</h4>
            ${adminPagePictureLoop()}
            <button class="admin-spann-button" onclick="adminPageUploadPicture()">LAST OPP</button>
        </div>
    </div>
    `;
    return HTML;
}
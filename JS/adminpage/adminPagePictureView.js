function updateAdminPagePictureView() { // Viser viewet på administratorsiden for bildebehandling
    let HTML = /*HTML*/ `
    ${upperNavBar()}
    ${bottomNavBar()}
    <h1> Administrator side for bildebehanlding</h1>
    <div class="adminpage-wrapper">
        <div 
            class="adminpage-picture-box">  <img class="front-page-images fill" 
            src="${model.data.frontPagePictures[model.app.currentPicture].imageLink}">
        </div><br>
            <div 
                class="adminpage-arraylist-box"> ${adminPagePictureLoop()}
                <button onclick="adminPageUploadPicture()" class="adminpage-arraylist-box-button">LAST OPP</button>
            </div><br>
    
    </div>
    `;
    return HTML;
}
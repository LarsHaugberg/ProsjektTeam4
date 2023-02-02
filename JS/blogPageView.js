function updateBlogPageView() {
    let HTML = /*HTML*/`
            ${upperNavBar()}
        <h1>Ida's Mental Helse Blogg</h1>
        <button onclick="openEditorModal()">NyBloggPost</button>
        <hr/>
            ${bottomNavBar()}
            
        <div class="blogWrapper">
            ${listAllBlogPosts()} 
        </div>
            ${getModal()}
        </div>
        
        `;
        return HTML;
}

function getModal() { // Legger modal i HTML så den blir åpnet når vi endrer modal modellen til 'block'
    let HTML = /*HTML*/`
    <div onclick="outsideModalClickClose(event)" class="modal" style="display:${model.modal}">
    <div class="modal-content">
        <span onclick="closeModal()" class="close">&times;</span>
        <p>
           ${model.app.modalContent} 
        </p> 
            </div>`;
    return HTML
}

function listAllBlogPosts() { // Looper igjennom alle blogpost arrayet og viser dem på blogsiden
    let HTML = ``;
    for (let index = model.data.blogPosts.length - 1; index > -1; index--) {
        HTML += /*HTML*/`
            <h1 onclick="openSelectedBlogPostModal(${index})">${model.data.blogPosts[index].postTitle}</h1>
            ${checkIfPostHasImg(index)}
            <div>${model.data.blogPosts[index].postText}<div>
            `;
    }
    return HTML;
}

function listEditorPictures() { // Looper igjennom blogpost bilde arrayet og viser dem på editor modalen
    let HTML = ``
    for (let i = 0; i < model.data.blogPictures.length; i++) {
        HTML += `<img onclick="choseEditorPicture(${i})" 
        style="border-color:${model.data.blogPictures[i].editorBorder}" 
        class="imgSelectorBox" src="${model.data.blogPictures[i].imageLink}">`;
    }
    return HTML;
}








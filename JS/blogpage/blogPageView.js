function updateBlogPageView() {
    let HTML = /*HTML*/
    `
    
        <div class="blogpage-container">
            <h1 class="frontpage-title">Ida's Mental Helse Blogg</h1>
            <br>
            <div class="mini-preview-container">
                ${listAllBlogPosts()}
            </div>
        </div>
            ${getModal()} 
       
    `;
    return HTML;
}

function listAllBlogPosts() { // Looper igjennom alle blogpost arrayet og viser dem på blogsiden
    let HTML = ``;
    for (let index = model.data.blogPosts.length - 1; index > -1; index--) {
        HTML += /*HTML*/
        `
        <div class="blog-preview" onclick="openSelectedBlogPostModal(${index})">
            <h2 class="mini-preview-title" >${model.data.blogPosts[index].postTitle}</h2>
            <div>${model.data.blogPosts[index].postText}</div>
            ${checkIfPostPreviewHasImg(index)}
        </div>
        `;
    }
    return HTML;
}

function checkIfPostPreviewHasImg(index) { // Sjekker om blogposten inneholder et bilde, hvis den ikke har det så sender den ikke med IMG HTML
    let html;
    if (model.data.blogPosts[index].postPicture == undefined) { return '' }
    else {
        html = /*HTML*/`   
            <img class="mini-preview-img" src="${model.data.blogPosts[index].postPicture}"> 
        `;
        return html
    }
}

function listEditorPictures() { // Looper igjennom blogpost bilde arrayet og viser dem på editor modalen
    let HTML = ``
    for (let i = 0; i < model.data.blogPictures.length; i++) {
        HTML += /*HTML*/ 
        `
            <img onclick="chooseEditorPicture(${i})" 
            style="border-color:${model.data.blogPictures[i].editorBorder}" 
            class="img-selector-box" src="${model.data.blogPictures[i].imageLink}">
        `;
    }
    return HTML;
}


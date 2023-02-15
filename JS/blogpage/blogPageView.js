function updateBlogPageView() {
    let HTML = /*HTML*/
    `
        <h1>Ida's Mental Helse Blogg</h1>
        <hr/>
        <div class="blog-wrapper">
            ${listAllBlogPosts()}
            ${getModal()} 
        </div>
        
    `;
    return HTML;
}

function listAllBlogPosts() { // Looper igjennom alle blogpost arrayet og viser dem på blogsiden
    let HTML = ``;
    for (let index = model.data.blogPosts.length - 1; index > -1; index--) {
        HTML += /*HTML*/
        `
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
        HTML += /*HTML*/ 
        `
            <img onclick="chooseEditorPicture(${i})" 
            style="border-color:${model.data.blogPictures[i].editorBorder}" 
            class="img-selector-box" src="${model.data.blogPictures[i].imageLink}">
        `;
    }
    return HTML;
}

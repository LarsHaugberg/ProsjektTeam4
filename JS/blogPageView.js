function updateBlogPageView() {
    let HTML = /*HTML*/`
    <h1>Bloggen</h1>
        <hr/>
            <button onclick="switchPage('frontPage')">Forside</button>
            <button onclick="switchPage('bookingPage')">BookingSide</button>
            <button onclick="openModal()">Ny Post</button>
        <hr/>
        <div class="blogWrapper">
            ${listBlogPosts()} 
        </div>
            ${getModal()}
        </div>
        ${navBar()}
        `;
    document.getElementById("app").innerHTML = HTML;
}

function getModal() {
    let HTML = /*HTML*/`
    <div id="myModal" class="modal" style="display:${model.modal}">
    <div class="modal-content">
        <span onclick="closeModal()" class="close">&times;</span>
        <p>
            <input 
                onchange="model.inputs.blogPage.titlePost = this.value" 
                value="${model.inputs.blogPage.titlePost}" 
                placeholder="Tittel blogpost"> 
        <br>
            <textarea class="textarea"
                onchange="model.inputs.blogPage.currentPost = this.value" 
                placeholder="Skriv blogginnlegget" 
                cols="80" 
                rows="26"
            >${model.inputs.blogPage.currentPost}</textarea> 
        <br>
            <input type="checkbox" 
                onchange="model.inputs.blogPage.pictureIsChecked = ${editorPictureIsChecked()}" 
                ${checkedValue()}
                > Huk av om du ønsker og legge til et bilde
            <div class="imgSelectorBox">
            <img class="frontPageImages fill" 
                 src="${blogPageImageSelector()}">
            </div>
            
            <button onclick="changeEditorPagePicture('<')"><</button>
            <button onclick="changeEditorPagePicture('>')">></button>
        <br>
            <button type="submit" onclick="newBlogPost()">Lag post</button>
        <br>
            
        </p> 
            </div>`;
    return HTML
}
function listBlogPosts() {
    let HTML = ``;
    for (let index = model.data.blogPosts.length - 1; index > -1; index--) {
        HTML += /*HTML*/`
            <h1>${model.data.blogPosts[index].postTitle}</h1>
            ${checkIfPostHasImg(index)}
            <div>${model.data.blogPosts[index].postText}<div>
        
            `;
    }
    return HTML;
}

function editorPictureIsChecked() {
    if (model.inputs.blogPage.pictureIsChecked == false) {
        return true
    } else {
        return false
    }
}
function blogPageImageSelector() {
    return model.data.blogPictures[model.app.editorPicture];
}

function checkedValue() {
    if (model.inputs.blogPage.pictureIsChecked == false) {
        return ''
    } else {
        return 'checked'
    }
}




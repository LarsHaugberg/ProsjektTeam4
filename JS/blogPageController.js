function openBlogPostModaX(index) {
    model.app.modalContent = /*HTML*/`
        <h1>${model.data.blogPosts[index].postTitle}</h1>
        ${checkIfPostHasImg(index)}
        <div>${model.data.blogPosts[index].postText}<div>
    `;
    openModal()
}

function openNewPostModal() {
    model.app.modalContent = /*HTML*/`
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
    <div class="editorPictureContainer">${listblogPostPictures()}</div>
    
    <input type="checkbox" 
        onchange="model.inputs.blogPage.pictureIsChecked = ${editorPictureIsChecked()}" 
        ${checkedValue()}
        > Huk av om du ønsker og legge til et bilde
    
    <br>
    <button type="submit" onclick="newBlogPost()">Lag post</button>
    </div>
    `;
    openModal()
}

function newBlogPost() {
    if (model.inputs.blogPage.titlePost == '' || model.inputs.blogPage.currentPost == '') {
        alert('Du kan ikke gå videre før du har lagt til tittel og tekst i innlegget ditt')
        return
    }
    let id = model.data.blogPosts.length
    let title = model.inputs.blogPage.titlePost
    let text = model.inputs.blogPage.currentPost
    let pictureChecked = model.inputs.blogPage.pictureIsChecked
    let postPicture = model.data.blogPictures
    let index = model.app.editorPicture
    if (pictureChecked == false) {
        model.data.blogPosts.push({ postId: id, postTitle: title, postText: text, })
    }
    else {
        model.data.blogPosts.push({ postId: id, postTitle: title, postText: text, postPicture: postPicture[index].imageLink })
    }
    model.inputs.blogPage.titlePost = '';
    model.inputs.blogPage.currentPost = '';
    closeModal()
}



function choseEditorPicture(index) {
    model.app.editorPicture = index

    if (model.data.blogPictures[index].editorBorder == 'black') {
        for (let i = 0; i < model.data.blogPictures.length; i++) {
            model.data.blogPictures[i].editorBorder = 'white'
        }
        openNewPostModal()
    } else {
        for (let i = 0; i < model.data.blogPictures.length; i++) {
            model.data.blogPictures[i].editorBorder = 'white'
        }
        model.data.blogPictures[index].editorBorder = 'black'
    }
    openNewPostModal()
  
}








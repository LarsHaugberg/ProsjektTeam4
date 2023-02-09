
function updateEditorModalContent() { // Oppdaterer modal view på editor modal
    model.app.modalContent = /*HTML*/
    `
        <input 
            onchange="model.inputs.blogPage.titlePost = this.value" 
            value="${model.inputs.blogPage.titlePost}" 
            placeholder="Tittel blogpost"> 
        <br>
        <textarea class="textarea"
            onchange="model.inputs.blogPage.currentPost = this.value" 
            placeholder="Skriv blogginnlegget" 
            cols="70" 
            rows="24"
        >${model.inputs.blogPage.currentPost}</textarea> 
        <br>
        <h5>Velg et av bildene for og få det med i blogginnlegget</h5>
        <div class="editor-picture-container">${listEditorPictures()}</div>
            <br>
            <button type="submit" onclick="generateNewBlogPost()">Lag post</button>
        </div>
    `;

}

function packageModalContent() { // Oppdaterer modal view på editor modal

    model.app.modalContent = /*HTML*/``;

    let packageRow = 7;
    let packageColum = 7;
    model.app.modalContent += /*HTML*/`<table>`;
    for (let r = 0; r < packageRow; r++) {
        model.app.modalContent += /*HTML*/`<tr>`;
        for (let c = 0; c < packageColum; c++) {
            model.app.modalContent += /*HTML*/ `<th>                           
                ${model.data.packageOptions.name}
            </th>`;
            
        }


        model.app.modalContent += /*HTML*/`</tr>`; 
    }
    model.app.modalContent += /*HTML*/ `</table>`;
    openModal()
}
/* 
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

 */
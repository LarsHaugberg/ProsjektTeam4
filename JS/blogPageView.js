function updateBlogPageView() {
    let HTML = /*html*/`
    <h1>Bloggen</h1>
        <hr/>
        <button onclick="switchPage('frontPage')">Forside</button>
        <button onclick="switchPage('bookingPage')">BookingSide</button>
        <button onclick="openEditorPage()">Ny Post</button>
        <hr/>
        <div class="blogWrapper">
            ${listBlogPosts()} 
        </div>
        
        <div id="myModal" class="modal" style="display:${model.modal}">
        <!-- Modal content -->
        <div class="modal-content">
            <span onclick="closeEditorPage()" class="close">&times;</span>
            <p>
            <input 
            onchange="model.inputs.blogPage.titlePost = this.value" 
            value="${model.inputs.blogPage.titlePost}" 
            placeholder="Tittel blogpost"> 
            <br>
            <textarea onchange="model.inputs.blogPage.currentPost = this.value" 
            placeholder="Skriv blogginnlegget" 
            autocomplete="on" 
            name="Text1" 
            cols="40" 
            rows="15"
            >${model.inputs.blogPage.currentPost}</textarea> 
            <br>
            <button type="submit" onclick="newBlogPost()">Lag post</button> <!-- Funksjoner må lages -->
            <button onclick="uploadNewPicture()">Last Opp bilde</button> <!-- Funksjoner må lages -->
            </p> 
        </div>
        </div>
        ${navBar()}
        `;


    document.getElementById("app").innerHTML = HTML;

}

function listBlogPosts() { // Snu loopen så nyest kommer først
    let HTML = ``;
    for (let index = 0; index < model.data.blogPosts.length; index++) {
        HTML += `
        <h1>${model.data.blogPosts[index].postTitle}</h1>
        <div class="frontPagePictureBox" ><img class="frontPageImages fill" src="${model.data.blogPosts[index].postPicture}"><div>
        <div>${model.data.blogPosts[index].postText}<div>
        
        `;
    }
    return HTML;
}

// Gjør vurdering på window onclick
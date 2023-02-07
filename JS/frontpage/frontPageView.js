function updateFrontPageView() {
    let HTML = /*HTML*/
    `   
         ${upperNavBar()}
        <h1>Ida's Badestue Utleie</h1>
            <hr/>
            ${bottomNavBar()}
        <div class="frontpage-picture-box">
            <img class="front-page-images fill" 
            src="${model.data.frontPagePictures[model.app.currentPicture].imageLink}">
        </div>
            <button onclick="changeFrontPagePicture('<')"><</button>
            <button onclick="changeFrontPagePicture('>')">></button>
            ${listLatestBlogPosts()}
        <div class="blog-wrapper">
            ${getBlogPostModal()}
        </div>
    `;
    return HTML;
}

function listLatestBlogPosts() { // Oppdaterer forsiden med den siste blogposten i arrayet
    let index = model.data.blogPosts.length - 1
    let HTML = /*HTML*/ 
    `
        <div>
            <a href="#" onclick="openModal()">
                <h1 >${model.data.blogPosts[index].postTitle}</h1>
            </a>
                ${checkIfPostHasImg(index)}
            <div>${model.data.blogPosts[index].postText}<div>
        </div>
    `;
    return HTML;
}

function getBlogPostModal() { // Legger modal i HTML så den blir åpnet når vi endrer modal modellen til 'block'
    let index = model.data.blogPosts.length - 1
    let HTML = /*HTML*/ 
    `
        <div onclick="outsideModalClickClose(event)" class="modal" style="display:${model.modal}">
            <div class="modal-content">
                <button onclick="closeModal()" class="close">&times;</button>
                 <p>
                    <h1>${model.data.blogPosts[index].postTitle}</h1>
                        ${checkIfPostHasImg(index)}
                    <div>${model.data.blogPosts[index].postText}<div>
                </p> 
            </div>
        </div>
       
    `;
    return HTML; 
}
 


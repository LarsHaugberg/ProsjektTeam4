function updateFrontPageView() {
    let HTML = /*HTML*/
        `           
    <div id="video-body">
        <video id="video" src="img/vid1.mp4" loop autoplay muted></video>
    </div>
    <div class="frontpage-container">


        <button class="frontpage-left-button" onclick="changeFrontPagePicture('<')"><</button>
        <div class="frontpage-picture-box">
            <img class="front-page-images fill" 
            src="${model.data.frontPagePictures[model.app.currentPicture].imageLink}">
            </div>
            <button class="frontpage-right-button" onclick="changeFrontPagePicture('>')">></button>
            <br>
            ${listLatestBlogPosts()}
            <div class="blog-wrapper">
            ${getBlogPostModal()}
            </div>
        </div>
            `;
    return HTML;
}
// ${checkIfPostHasImg(index)}
function listLatestBlogPosts() { // Oppdaterer forsiden med den siste blogposten i arrayet
    let index = model.data.blogPosts.length - 1
    let HTML = /*HTML*/
        `
        <div>
            <a href="#" onclick="openModal()">
                <h1 >${model.data.blogPosts[index].postTitle}</h1>
            </a>
                
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
                <span onclick="closeModal()" class="close">&times;</span>
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


function getFrontPageTable(){
    let html = `<div class="front-page-table-div">
        </div>
            <table class="front-page-table">
            
            </table>
        </div>`;

    return html;
}

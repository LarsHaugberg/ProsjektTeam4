function switchPage(location) { // Side selector
    model.app.currentPage = location;
    updateView()
}

function openModal() { // Endrer modal modellen så den blir vist
    model.modal = 'block'
    updateView()
}

function closeModal() { // Endrer modal modellen så den blir lukket
    model.modal = 'none';
    updateView()
}

function sendToWebPage(webPage) { // Linker ikonene på navBarBottom til SoMe sidene
    if (webPage == 'instagram') {
        window.open('https://www.instagram.com')
    }
    if (webPage == 'facebook') {
        window.open('https://nb-no.facebook.com/')
    }
    if (webPage == 'twitter') {
        window.open('https://www.twitter.com')
    }
    if (webPage == 'youtube') {
        window.open('https://www.youtube.no')
    }
}

function checkIfPostHasImg(index) { // Sjekker om blogposten inneholder et bilde, hvis den ikke har det så sender den ikke med IMG HTML
    let temp;
        if (model.data.blogPosts[index].postPicture == undefined) { return '' }
        else {
        temp = /*HTML*/`  
            <div class="frontPagePictureBox">
                <img class="frontPageImages fill" src="${model.data.blogPosts[index].postPicture}">
            </div>
        `;
        return temp
    }
}

function bottomNavBar() { // Tegner opp navBar nederst på siden
    let HTML = /*HTML*/`
        <div class="navbarBottom">
            <a onclick="sendToWebPage('youtube')"><img class="img" src="img/youtube.png"></a>
            <a onclick="sendToWebPage('twitter')"><img class="img" src="img/twitter.png"></a>
            <a onclick="sendToWebPage('facebook')"><img class="img" src="img/facebook.png"></a>
            <a onclick="sendToWebPage('instagram')"><img class="img" src="img/instagram.png"></a>
        </div>
    `;
    return HTML
}

function upperNavBar() { // Tegner opp navBar øverst på siden
    let HTML = /*HTML*/ `
        <div class="navbarTop">
            <a onclick="switchPage('frontPage')">Forside</a>
            <a onclick="switchPage('bookingPage')">BookingSide</a>
            <a onclick="switchPage('blogPage')">Bloggside</a>
            <div class="dropdown">
                <button class="dropbtn">AdminSide
                <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <a href="#">Admin 1</a>
                    <a href="#">Admin 2</a>
                    <a href="#">Admin 3</a>
                </div>
            </div> 
        </div>
    `;
    return HTML;
}

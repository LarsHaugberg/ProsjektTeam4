
function newBlogPost() {
    if (model.inputs.blogPage.titlePost == '' || model.inputs.blogPage.currentPost == '') {
        alert('Du kan ikke gå videre før du har lagt til tittel og tekst i innlegget ditt')
        return
    }
    let id = model.data.blogPosts.length
    let title = model.inputs.blogPage.titlePost
    let text = model.inputs.blogPage.currentPost
    let postPicture = model.data.blogPictures[model.app.editorPicture]
    if (postPicture == undefined || '') {
        model.data.blogPosts.push(new Post(id, title, text,))
    }
    else {
        model.data.blogPosts.push(new Post(id, title, text, postPicture))
    }
    model.inputs.blogPage.titlePost = '';
    model.inputs.blogPage.currentPost = '';
    closeModal()
}

function changeEditorPagePicture(selector){
	let blogPagePictures = model.data.blogPictures;

	if(selector === '>'){
		model.app.editorPicture ++;
		if(model.app.editorPicture >= blogPagePictures.length)
			model.app.editorPicture = 0;
	}
	else if(selector === '<'){
		model.app.editorPicture --;
		if(model.app.editorPicture < 0){
			model.app.editorPicture = blogPagePictures.length - 1;
		}	
	}
	updateView()
}

function Post(postId, postTitle, postText, postPicture) {
    this.postId = postId;
    this.postTitle = postTitle;
    this.postText = postText;
    this.postPicture = postPicture
}

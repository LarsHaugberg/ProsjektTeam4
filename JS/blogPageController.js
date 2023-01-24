function openEditorPage() {
    model.modal = 'block';
    updateView()
}
function closeEditorPage() {
    model.modal = 'none';
    updateView()
}
function newBlogPost(){
    let id = model.data.blogPosts.length
    let title = model.inputs.blogPage.titlePost
    let text = model.inputs.blogPage.currentPost
    let postPicture = 'noe' || ''
    model.data.blogPosts.push(new Post(id,title,text,postPicture))
    closeEditorPage()
    
}
function Post(postId, postTitle,postText,postPicture){
    this.postId = postId;
    this.postTitle = postTitle;
    this.postText = postText;
    this.postPicture = postPicture
}
// {
//     postId: 1,
//     postTitle: 'Blogg1',
//     postText: 'Velkommen til mentalhelseblogg',
// },
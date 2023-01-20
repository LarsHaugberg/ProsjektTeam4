// function pictureSelector(selected) {
//     let Pictures = model.data.frontPagePictures;
//     let picture = model.app.currentPicture;
//     for (let i = 0; i < Pictures.length; i++) {
//         if (picture == Pictures[i] && selected == '>') {

//             picture = Pictures[(i+1)]
            
//         }
         
//     }
//     console.log(Pictures)
//     console.log(picture)
//     updateView()
// }








function changeFrontPagePicture(selector){

    let currentPictureIndex = model.app.currentPicture;
    let frontPagePictures = model.data.frontPagePictures;

	if(selector === '>'){
		currentPictureIndex ++;
		if(currentPictureIndex >= frontPagePictures.length)
		    currentPictureIndex = 0;
	}
	else if(selector === '<'){
		currentPictureIndex --;
		if(currentPictureIndex < 0){
			currentPictureIndex = frontPagePictures.length - 1;
		}	
	}
	updateView()
}



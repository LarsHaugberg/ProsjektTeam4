
// function packageModalContent() { 
//     model.app.modalContent = /*HTML*/``;
//     let packageRow = 13;
//     let packageColum = 2;
//     model.app.modalContent += /*HTML*/`<table>`;
//     for (let r = 0; r < packageRow; r++) {
//         model.app.modalContent += /*HTML*/`<tr>`;
//         for (let c = 0; c < packageColum; c++) {
//             model.app.modalContent += /*HTML*/ `<td>                           
//                 ${model.data.packageOptions}
//             </td>`;
            
//         }


//         model.app.modalContent += /*HTML*/`</tr>`; 
//     }
//     model.app.modalContent += /*HTML*/ `</table>`;

//     openModal();
// }


function packageModalContent() { 
    
	let html = '<br><div id="ytretest">';
    
	for(let packageOption of model.data.packageOptions){
		html += /*HTML*/`<div id="indretest"><table id="package-table-name-price">
		<tr><td>Pakke:</td><td>${packageOption.name}</td></tr>
		<tr><td>ukedagspris:</td><td>${packageOption.price.weekdayPrice} ,-</td></tr>
		<tr><td>helgepris:</td><td>${packageOption.price.weekendPrice} ,-</td></tr>
		<tr><td>Bestil pakken her:</td><td><button onclick="addPackageToInputs(${packageOption.id})">BESTIL</button></td></tr>

		</table><br>  

		<table id="package-table-comforts">
        <th>Tilbehør inkludert:</th>
        <th>Antall:</th>
        `;  
		for (comfort of packageOption.comforts){
			html += `<tr><td>${comfort.name}</td><td> ${comfort.quantity}</td></tr>`;
		}
		html += `</table></div>`;  
    }
    html += `</div>`;
	
    model.app.modalContent = html;

    openModal();
}

function addPackageToInputs(id){
    //model.inputs.bookingPage.packageChoice = id;
    let packageToCopy = getPackageById(id);
    model.inputs.bookingPage.packageChoice = JSON.parse(JSON.stringify(packageToCopy));
    closeModal();
    console.log(id);
}


/*
row = rad = lodrett
colums = rekke = vannret   


pakke        navn
timer:        x 
ukedagpris: xxxx,- 
helgpris:   xxxx,-
comforts:
    navn     antal 
    navn     antal 
    navn     antal 
    navn     antal 
    navn     antal 
    navn     antal 

Pakke:            Jentekveld (6 stk)

timer:                   4
ukedagpris:            5264,- 
helgpris:              7664,-

comforts:
vin:                     4
shampo og balsam:        6
håndklær:                6
mineralvann:             6
aroma:                   1
Badekåpe:                6



*/
/*  forslag til sumeringen inputs for booking siden
vare    antal   sum
pakke4:    1   1504       
arstn
iaersnt
ernis
Timer     4    2000
vin       2     400
shogbalsm 1     100  
minevann  2     100
-------------------
total sum      4104

*/
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

function getModal() { // Legger modal i HTML så den blir åpnet når vi endrer modal modellen til 'block'
    let HTML = /*HTML*/
    `
        <div onclick="outsideModalClickClose(event)" class="modal" style="display:${model.modal}">
            <div class="modal-content">
                <span onclick="closeModal()" class="close">&times;</span>
                <p>
                 ${model.app.modalContent} 
                </p> 
            </div>
        </div>
    `;
    return HTML
}
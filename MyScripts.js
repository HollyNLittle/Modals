//VARIABLES
//GET MODAL Element using the IDs
var modal = document.getElementById('simpleModal');
//GET MODAL Element
var modalBtn = document.getElementById('modalBtn');
//GET MODAL Element, an array of classes with this close button, spcfy want the 1st
var closeBtn = document.getElementsByClassName('closeBtn')[0];


//WHEN, WHAT EVENT IS THE TRIGGER?: when the button is clicked...
//WHEN the button is clicked open
modalBtn.addEventListener('click', openModal);
//WHEN the X button is clicked close
closeBtn.addEventListener('click', closeModal);
//WHEN the window outside of the modal is clicked, close
window.addEventListener('click', clickOutside)

//WHAT, WHAT WILL HAPPEN WHEN TRIGGERED? OPEN the modal: change the display from none to block
function openModal() {
    modal.style.display = 'block';
}

//CLOSE the modal
function closeModal() {
    modal.style.display = 'none';
}

//CLOSE the modal when click outside of modal
function clickOutside(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
}
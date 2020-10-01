let modal = document.getElementById("modal");
let btn = document.getElementById("modalButton");
let span = document.getElementsByClassName("close")[0];
let modalContent = document.getElementById('modalContent');

btn.onclick = function() {
  modal.style.display = "block";
  modalContent.style.animationName = "modal-fade-in";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// Open links in mobiles
function handleSmallScreens() {
document.querySelector('.navbar-toggler')
.addEventListener('click', () => {
let navbarMenu = document.querySelector('.navbar-menu')

if (navbarMenu.style.display === 'flex') {
navbarMenu.style.display = 'none'
return
}

navbarMenu.style.display = 'flex'
})
}

handleSmallScreens()
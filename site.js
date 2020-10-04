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

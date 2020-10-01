var back = document.getElementById('backHome');
back.addEventListener("onmouseover", "changeCursor");
function changeCursor() {
    if (back.style.cursor = 'auto') {
        back.style.cursor = 'pointer';
    } else {
        back.style.cursor = 'auto';
    }
}
changeCursor();
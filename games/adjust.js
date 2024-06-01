function adjustHeight() {
    var box = document.getElementById('gameframe')
    box.style.height = (box.offsetWidth / 1.3333) + 'px';
}

window.addEventListener('resize', adjustHeight);
window.addEventListener('load', adjustHeight);
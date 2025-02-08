function playClickSound() {
    var audio = new Audio('click-sound.mp3');
    audio.play();
}

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', playClickSound);
});
const buttons = document.querySelectorAll('button');

const playnote = event =>{
    const button = event.target;
    const note = button.dataset.note;
    const audioID = `audio${note}`;
    const audio = document.getElementById(audioID);
    console.log(audio);
    audio.pause();
    audio.currentTime = 0;
    audio.play();
}

buttons.forEach(button => button.addEventListener('click', playnote));

const keyNoteDown = event =>{
    console.log(key);
    const key = event.key;
    console.log(key);
    const button = document.querySelector(`button[data-key="${key}"]`);
    if (button) button.click;
}

document.addEventListener('keydown', keyNoteDown);
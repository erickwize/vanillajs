function playDrum(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const keyDiv = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if(!keyDiv) return;
    keyDiv.classList.add('playing');
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
}

function removeCss(event) {
    if (event.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await response.json();
    console.log(json)
}

const keys = document.querySelectorAll('.key')

keys.forEach(key => key.addEventListener('transitionend', removeCss))

window.addEventListener('keydown', playDrum);

fetchPosts();


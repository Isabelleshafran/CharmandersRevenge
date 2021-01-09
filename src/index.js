import CharmandersRevenge from './game';


document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById("pokemon-game");
    new CharmandersRevenge(canvas)

    const sound = document.getElementById('sound');
    const soundOn = document.getElementById('sound-on')
    const soundOff = document.getElementById('sound-off')


    soundOn.addEventListener("click", () => {
        sound.play();
    })

    soundOff.addEventListener('click', () => {
        sound.pause();        
    })

  
})
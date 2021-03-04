import { Howl } from 'howler';
import hit from "./../../../../assets/audio/hit.mp3"
import nextLevel from "./../../../../assets/audio/nextLevel.mp3"
import fon from "./../../../../assets/audio/foneSound.mp3"

let check = true

export const soundPalyHit = () => {
  const volumeS = JSON.parse(localStorage.getItem('rangeAudio')).value
  if(JSON.parse(localStorage.getItem('audio')).value === "checked") {
    const sound = new Howl ({
      src: hit,
      html5: true,
      autoplay: false,
      volume: `0.${volumeS}`
    })
    sound.play()
  }
}


export const soundPalyNextLevel = () => {
  if(JSON.parse(localStorage.getItem('audio')).value === "checked") {
    const sound = new Howl ({
      src: nextLevel,
      html5: true,
      autoplay: false
    })
    sound.play()
  }
}

export const soundFon = () => {
  const volumeSo = JSON.parse(localStorage.getItem('rangeSound')).value
  if(check) {
    check = !check
    if(JSON.parse(localStorage.getItem('sound')).value === "checked") {
      const sound = new Howl ({
        src: fon,
        html5: true,
        volume: `0.${volumeSo}`
      })
      sound.play()
      setInterval(() => {
        sound.play()
      }, 39500)   
    }
  } 

}
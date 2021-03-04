import { useRef, useState } from 'react'
import s from './SettingsPage.module.css'

export const SettingsPage = () => {
  

  const audioSettingsLocal = JSON.parse(localStorage.getItem('audio'))
  const [AudioValue, setAudio] = useState(audioSettingsLocal.value)


  
  const soundSettingsLocal = JSON.parse(localStorage.getItem('sound'))
  const [soundValue, setSound] = useState(soundSettingsLocal.value)

  const changeSound = () => {
    const soundValue = JSON.parse(localStorage.getItem('sound')) 
    if ( soundValue.value ===  "checked") {
      localStorage.setItem('sound', JSON.stringify({value: ''}))
      setSound('')
      document.location.reload()
    } else {
      localStorage.setItem('sound', JSON.stringify({value: "checked"}))
      setSound("checked")
      document.location.reload()
    }
  }



  const changeAudio = () => {
    const audioValue = JSON.parse(localStorage.getItem('audio')) 
    if ( audioValue.value ===  "checked") {
      localStorage.setItem('audio', JSON.stringify({value: ''}))
      setAudio('')
    } else {
      localStorage.setItem('audio', JSON.stringify({value: "checked"}))
      setAudio("checked")
    }
  }

  const rangeAudioRef = useRef()
  const rangeAudioSettingsLocal = JSON.parse(localStorage.getItem('rangeAudio'))
  const [rangeAudioValue, setRangeAudio] = useState(rangeAudioSettingsLocal.value)
  const changeRangeAudio = () => {
    const rangeAudioValue = JSON.parse(localStorage.getItem('rangeAudio')) 
    localStorage.setItem('rangeAudio', JSON.stringify({value: rangeAudioRef.current.value}))
    setRangeAudio(rangeAudioRef.current.value)
  }

  const rangeSoundRef = useRef()
  const rangeSoundSettingsLocal = JSON.parse(localStorage.getItem('rangeSound'))
  const [rangeSoundValue, setRangeSound] = useState(rangeSoundSettingsLocal.value)
  const changeRangeSound = () => {
    const rangeSoundValue = JSON.parse(localStorage.getItem('rangeSound')) 
    localStorage.setItem('rangeSound', JSON.stringify({value: rangeSoundRef.current.value}))
    setRangeSound(rangeSoundRef.current.value)
  }



  return (
    <div className="container">
      <div className={s.wrapper}>
        <div className={`row ${s.card}`}>
          <div class="col s12 m12">
            <div class="card grey lighten-1">
              <div class="card-content white-text">
                <span class="card-title">Audio</span>
                <p>
                  <label>
                    <input onClick={changeAudio} type="checkbox" checked={AudioValue}/>
                    <span>ON</span>
                    <div>
                      <p class="range-field">
                        <input type="range" ref={rangeAudioRef} onChange={changeRangeAudio} id="rangeAudio" value={rangeAudioValue} min="0" max="100" />
                      </p>
                    </div>
                  </label>
                </p>
                <br/>
                <span class="card-title">Sound</span>
                <p>
                  <label>
                    <input onClick={changeSound} type="checkbox" checked={soundValue}/>
                    <span>ON</span>
                  </label>
                  <div>
                      <p class="range-field">
                        <input ref={rangeSoundRef} onChange={changeRangeSound} type="range" id="rangeSound" value={rangeSoundValue} min="0" max="100" />
                      </p>
                  </div>
                </p>
                <hr/>
                <div class="card-title">
                  <span class="card-title">Fullscreen: Hotkey - q</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
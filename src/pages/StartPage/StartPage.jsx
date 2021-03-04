import s from './StartPage.module.css'
import swal from 'sweetalert';
import { data } from './../MainPage/game/dataGame'


export const StartPage = () => {
  const audioSettingsLocal = JSON.parse(localStorage.getItem('audio'))
  
  if(!audioSettingsLocal) {
    localStorage.setItem('audio', JSON.stringify({value: "checked"}))
    localStorage.setItem('sound', JSON.stringify({value: ""}))
    localStorage.setItem('rangeAudio', JSON.stringify({value: "80"}))
    localStorage.setItem('rangeSound', JSON.stringify({value: "10"}))
  }


  const startGame = () =>{ 
    const firstName = document.querySelector('#first_name').value
    const lastName = document.querySelector('#last_name').value

    if (!firstName || !lastName) {
      swal("Нou need to fill in the input fields");
    } else {
      data.player.name = firstName 
      data.player.lastName = lastName

      data.player.lives = 5
      data.player.score = 0
      data.player.level = 1

      localStorage.setItem('player', JSON.stringify({name: firstName, lastName: lastName}));
      document.querySelector('#linkMainPage').click()
    } 
  }

  return (
    <div class="row ">
      <div className={`col s12 m6 ${s.inputGroup}`}>
        <div class="card hoverable grey lighten-1">
          <div className={`card-content white-text ${s.inputGroupWrapper}`}>

          <div class="row">
            <div class="input-field col s6">
              <p>Name</p>
              <input  id="first_name" type="text" class="validate"/>
 
            </div>
            <div class="input-field col s6">
              <p>Last Name</p>
              <input id="last_name" type="text" class="validate"/>
            </div>
          </div>

          </div>
          <div class="row" className={`row ${s.buttonWrapper}`}>
              <div class="">
                <a className={`waves-effect waves-light btn ${s.button}`} onClick={startGame}>Start</a>
              </div>            
            </div>

        </div>
      </div>
    </div>
    
  )
}
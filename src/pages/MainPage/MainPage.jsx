import { data } from "./game/dataGame";
import { Breakout } from "./game/index"

export const MainPage = () => {
  const playerName = JSON.parse(localStorage.getItem('player'))
  if(playerName) {
    data.player.name = playerName["name"]
    data.player.lastName = playerName.lastName
  }

  return (
      <Breakout />
  )
}
import { data } from "./../dataGame";
import { ResetGame } from "./RestartGame";
import { soundPalyNextLevel } from "./SoundPaly";


export const CheckGame = (bricks, player, canvas, ballObj) => {
  let { brickObj,  paddleProps} = data;

  let total = 0;
  for (let i = 0; i < bricks.length; i++) {
    if (bricks[i].broke === true) {
      total++;
    }
  }
  if (total === bricks.length) {
    soundPalyNextLevel()
    player.level++;
    ResetGame(ballObj, canvas, paddleProps);
    brickObj.y = 50;
  }
}
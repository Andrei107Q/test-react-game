import { useEffect, useRef } from 'react'
import { BallMovement } from './BallMoment'
import s from './Board.module.css'
import { data } from "./dataGame";
import { PeddleMoment } from './Paddle';
import { WallCollision } from './util/WallCollision';
import { Brick } from './Brick';
import { BrickCollision } from './util/BrickCollision';
import { PaddleHit } from './util/PaddaleHit';
import { PlayerStats } from './PlayerStats';
import { CheckGame } from './util/CheckGame';
import { ResetGame } from './util/RestartGame';
import swal from 'sweetalert';
import { addStatistic } from './util/addStatistic';
import { fullScreen } from './util/fullscreen';
import { soundFon, soundPalyHit } from "./util/SoundPaly";

let bricks = []
let {ballObj, paddleProps, brickObj, player, screenWith} = data
const test = (screenWith - 450) /2

export const Board = () => {
  const canvasRef = useRef(null)
  
  let x = 0

  useEffect(() => {
    setTimeout(() => {
      fullScreen()
    }, 1000);

    const render = () => {
      soundFon()
    
      try { // something going wrong for change page
        const canvas = canvasRef.current

        const ctx = canvas.getContext('2d')

        paddleProps.y = canvas.height - 30

        let newBrickSet = Brick(player.level, bricks, canvas, brickObj);

        if (newBrickSet && newBrickSet.length > 0) {
          bricks = newBrickSet;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height)

        PlayerStats(ctx, player, canvas)

        if(player.lives === 0) {
          swal("Game over", `You score is ${player.score}`)
          .then(() => {
            document.querySelector('#linkStatisticPage').click()
          });
          addStatistic(player)

          player.lives = 5;
          player.level = 0;
          player.score = 0;
          ResetGame(ballObj, canvas, paddleProps);
          bricks.length = 0;
          return
        }
        if(player.lives === 6) {
          swal("Game over");
          alert ('you win')

          player.lives = 5;
          player.level = 1;
          player.score = 0;
          ResetGame(ballObj, canvas, paddleProps);
          bricks.length = 0;
        }
        
        bricks.map((brick) => {
          return brick.draw(ctx);
        });

        BallMovement(ctx, ballObj)

        CheckGame(bricks, player, canvas, ballObj)

        WallCollision(ballObj, canvas, player, paddleProps);

        let brickCollision;

        for (let i = 0; i < bricks.length; i++) {
          brickCollision = BrickCollision(ballObj, bricks[i]);

          if (brickCollision.hit && !bricks[i].broke) {
            if (brickCollision.axis === "X") {
              ballObj.dx *= -1;
              bricks[i].broke = true;
            } else if (brickCollision.axis === "Y") {
              ballObj.dy *= -1;
              bricks[i].broke = true;
            }
            //debugger
            soundPalyHit()
            player.score += 10
          }
        }

        PeddleMoment(ctx, canvas, paddleProps)

        PaddleHit(ballObj, paddleProps)

        requestAnimationFrame(render)
      }catch {}
    }

    render()


  }, [])


  return (

    <div id="wrapperCanvas" className={s.wrapper}>
      <canvas 
        id="canvas" 
        className={s.board} 
        ref={canvasRef}
        onMouseMove={(e) => {
          const displacement = (screenWith - 800) / 2
          let position = (e.clientX - paddleProps.width / 2 - 10) - displacement
          if(screenWith < 850) {
            position = ((e.clientX - paddleProps.width / 2 - 10) - ((screenWith - 450) / 2) ) * 2 
          }
          paddleProps.x = position
          } 
        } 
        height = "500px"
        width = "800px"
        />
    </div>


  )
}



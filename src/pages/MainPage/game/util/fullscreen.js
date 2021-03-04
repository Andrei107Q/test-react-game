export const fullScreen = () => {
  let pressQ = false

  document.addEventListener('keydown', (e) => {
    const keyName = e.key

    console.log('keydown', keyName === 'q');
    
    if(keyName === 'q') {
      

      const wrapperCanvasHtml = document.querySelector('#wrapperCanvas')

      try {

        if (document.fullscreenElement === null) {
          wrapperCanvasHtml.requestFullscreen()
        } else {
          document.exitFullscreen()
          wrapperCanvasHtml.closeFullscreen();
        }
      } catch {
        console.log('Something wrong with fullscreen');
      }

    }
  })

}
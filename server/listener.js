
export default class Listener {

  constructor() {

    window.pack = window.pack || {}
    window.pack.listener = window.pack.listener || {}
    window.pack.listener.mouse = window.pack.listener.mouse || {}

    window.addEventListener('mousemove', e => {

      window.pack.mouse = {
        x : e.clientX,
        y : e.clientY,
      }

      if ( window.pack.listener.mouse.onMove ) {
        window.pack.listener.mouse.onMove( window.pack.mouse )
      }
    })

  }

}

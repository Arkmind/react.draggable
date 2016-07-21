export default class Listener {

  constructor() {

    var lastClientX = 0,
        lastClientY = 0

    window.pack = window.pack || {}
    window.pack.listener = window.pack.listener || {}
    window.pack.listener.mouse = window.pack.listener.mouse || {}

    document.querySelector('.myReactObject').addEventListener('mousemove', e => {

      var mvtX = e.clientX - lastClientX;
      var mvtY = e.clientY - lastClientY;

      window.pack.mouse = {
        x : e.clientX,
        y : e.clientY,
        mvtX : mvtX,
        mvtY : mvtY
      }

      lastClientX = e.clientX
      lastClientY = e.clientY

      if ( window.pack.listener.mouse.onMove ) {
        window.pack.listener.mouse.onMove( window.pack.mouse )
      }
    })

  }

}

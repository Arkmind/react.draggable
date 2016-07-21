import basicConfig from './config'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Draggable extends Component {
  constructor() {

    super();

    this.resize = {
      css : {
        zIndex: 999,
        position: "absolute",
        bottom: 0,
        right: 0,
        backgroundColor: "#e95038",
        height: 15,
        width: 15
      }
    }
    this.position = {
      x: false,
      y: false
    }
    this.state = {
      ...basicConfig.draggable
    }

  }

  checkChanges() {

    console.log('resize')

    let element = ReactDOM.findDOMNode(this)
    element.onresize = () => {

      console.log(element.style)

    }

  }

  callProps(callback) {

    this.setState({
      css : {
        ...this.state.css,
        ...this.props.css
      },
      properties : {
        ...this.state.properties,
        ...this.props.properties
      },
      id: this.props.id || '',
      name: this.props.name || '',
      component: this.props.component || <div></div>
    }, callback)

  }

  componentDidMount() {

    this.setState({
      offsetTop: ReactDOM.findDOMNode(this).offsetTop,
      offsetLeft: ReactDOM.findDOMNode(this).offsetLeft
    })

    this.position = {
      y: ReactDOM.findDOMNode(this).offsetTop,
      x: ReactDOM.findDOMNode(this).offsetLeft
    }

  }

  componentWillMount() {

    this.callProps(() => {
      this.checkType(this.state.properties.type)
    })

  }

  componentWillReceiveProps(nextProps) {

    this.callProps(() => {
      this.checkType(this.state.properties.type)
    })

  }

  checkType(arr) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == "draggable") {
        this.makeDraggable()
      } else if (arr[i] == "selectable") {
        this.makeSelectable()
      } else if (arr[i] == "resizable") {
        this.makeResizable()
      }
    }
  }

  makeDraggable() {
    this.setState({
      draggable: true
    })
  }

  makeResizable() {
    this.setState({
      css: {
        ...this.state.css,
        resize: 'both',
        overflow: 'auto'
      }
    })
  }

  makeSelectable() {

    ReactDOM.findDOMNode(this).addEventListener('mousedown', () => {
      if (this.state.click) {
        console.log(this.lastState)
        this.setState({
          css: {
            ...this.lastState,
            transform: this.state.css.transform
          },
          click: false
        })

        return
      }

      this.lastState = this.state.css
      this.setState({
        css: {
          ...this.state.css,
          backgroundColor: "red"
        },
        click: true
      })
    })

  }

  move() {

    if(this.state.draggable != true) return

    let dep = this.state.properties.deplacements

    document.body.className = "noselect";
    window.pack.listener.mouse.onMove = (mouse) => {
      this.position = {
        x: this.position.x + mouse.mvtX,
        y: this.position.y + mouse.mvtY
      }

      console.log('Positions X Y :', this.position.x, this.position.y)

      if(this.position.x < 10) {
        this.position.x = 1
        this.unMove.bind(this)
      }
      if(this.position.y < 10) {
        this.position.y = 1
        this.unMove.bind(this)
      }

      this.setState({
        css : {
          ...this.state.css,
          transform : 'translate(' +
          + (this.position.x - this.state.css.width / 2) + 'px, ' +
          + (this.position.y - this.state.css.height / 2) + 'px)'
        }
      })

    }
  }

  didResize() {
    console.log('resize')
  }

  unMove() {
    setTimeout(() => {
      document.body.className = "";
      window.pack.listener.mouse.onMove = "";
    }, 1)
  }

  onMouseDown(event) {
    this.move.bind(this)
    console.log(event)
  }

  render() {

    this.props.change(
      this.state
    )

    return (
      <div style={this.state.css}>
        <div
          style={this.state.insetCSS}
          onMouseDown={this.move.bind(this)}
          onMouseUp={this.unMove.bind(this)}
        >
          { this.props.component && this.props.component }
        </div>
      </div>
    );
  }
}

class DashBoard extends Component {

  constructor() {

    super()

  }

  componentWillReceiveProps(nextProps) {



  }

  render() {

    const { drags } = this.props

    return (
      <div>
      { drags.map(e => {

        const layout = React.cloneElement(e, {
          ...e.props,
          change : ( config ) => {
            this.props.change( config )
          }
        })


        return layout
      }) }
      </div>
    )

  }

}

export { Draggable, DashBoard }

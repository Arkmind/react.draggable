import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Draggable extends Component {
  constructor() {

    super();

    this.lastState = {}
    this.position = {
      x: 100,
      y: 100
    }
    this.state = {
      css : {
        height: 100,
        width: 100,
        margin: 50,
        backgroundColor: '#000000',
        position: 'absolute'
      },
      properties : {
        type: ['draggable'],
        limits: ['parent'],
        linkStyles: ['solid'],
        deplacements: 1
      },
      draggable: false
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
        x: Math.round((mouse.x - this.state.offsetLeft)/dep)*dep,
        y: Math.round((mouse.y - this.state.offsetTop)/dep)*dep
      }

      if(this.position.x < 100) this.position.x = 50
      if(this.position.y < 100) this.position.y = 50

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
      <div
        onMouseDown={this.move.bind(this)}
        onMouseUp={this.unMove.bind(this)}
        style={this.state.css}>
        { this.props.component && this.props.component }
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

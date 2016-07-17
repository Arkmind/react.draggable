import React, { Component } from 'react'

export class Preview extends Component {

  constructor() {

    super()

  }

  onChangeInput(value) {
    this.props.onChange(value)
  }

  render() {

    return (
      <div>
      <textarea onChange={ (e) => {
          this.onChangeInput(e.target.value)
        }
      } style={
          width: 50%,
          height: 500
        }></textarea>
        <div style={
          width: 50%,
          height: 500,
          float: left
        }></div>
      </div>
    )

  }

}

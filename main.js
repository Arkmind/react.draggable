import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Draggable, DashBoard } from './server/App.jsx';
import Listener from './server/listener';

new Listener()

class Form extends Component {

  render() {
    return (
      <div onClick={ () => this.props.onClickA && this.props.onClickA() } style={ { color: 'white' } }>
        hello
      </div>
    );
  }
}

ReactDOM.render(
  <div>

    <DashBoard

      drags={[

        <Draggable
          component={<Form
            onClickA={ () => { alert('yolo') }}
            />
          }
          css={{
            height: 200,
          }}
          name="Google.com"
          id="test"
          properties={{
            type: ['draggable', 'resizable', 'selectable']
          }}
        />,

        <Draggable
          component={<Form
            onClickA={ () => { alert('yolo') }}
            />
          }
          css={{
            height: 200,
          }}
          id="test"
          properties={{

          }}
        />

      ]}

      change={( config ) => {
        console.log(config)
      }}

    />

  </div>
, document.querySelector('.myReactObject'))

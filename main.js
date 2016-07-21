import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Draggable, DashBoard } from './server/App.jsx';
import Listener from './server/listener';

new Listener()

class Message extends Component {

  render() {
    return (
      <div style={{ color: "#FFF", padding: 10 }}>{this.props.message}</div>
    );
  }
}

ReactDOM.render(
  <div>

    <DashBoard

      drags={[

        <Draggable
          component={<Message
            message="Draggable item : Draggable, resizable, selectable"
          />}
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
          component={<Message
            message="Draggable item : Draggable"
          />}
          css={{
            height: 200,
          }}
          id="test"
          properties={{

          }}
        />

      ]}

      change={( config ) => {
      }}

    />

  </div>
, document.querySelector('.myReactObject'))

# React.draggable
___
***
## Easy customizable draggable elements in React.js

### Install

`npm install react.draggable`

*OR*

`git clone https://github.com/Arkmind/react.draggable.git`

___

### Utilization

>Using in your project

```javascript
import Draggable from 'react.draggable'
import AnAnotherDiv from './App.jsx'

ReactDOM.render(<Draggable
                  id = "drag1"
                  style = {}
                  properties = {
                    type : "draggable, resizable, selectable",
                    limits : "parent, body, divID",
                    link : "drag2, drag3",
                    linkStyles = "outline, dotted, solid, double",
                    deplacements = 20
                  }
            >
              <AnAnotherDiv/>
            </Draggable>);
```

### Documentation

> Values list

```javascript
id = string // id of the component
style = { // An object that can have style ! (Seriously I don't think I need to explain this shit)
  height: 100,
  width: 100,
  backgroundColor: '#000000'
}
properties = { // It can take differents value, see lower
  type : string,
  limits : string,
  link : string,
  linkStyle : string,
  deplacement : int
}
```

##### Properties
___

**Usage :**
```javascript
properties = {
  value : "method, method"
}
```


> Value : type (default : draggable)

| Method        | Description   |
| ------------- |:-------------:|
| `draggable`     | Make the element draggable  |
| `resizable`     | Make the element resizable  |
| `selectable`    | Make the element selectable |

> Value : limits (default : parent)

| Method        | Description   |
| ------------- |:-------------:|
| `parent`     | The element can't get out of is parent element  |
| `body`       | The element can't get out of the page !  |
| `divID`      | The element can't get out of your div ! |

> Value : link

| Method        | Description   |
| ------------- |:-------------:|
| `otherDraggableElementID`     | Link the element by a line  |

> Value : linkStyles (default : solid)

| Method        | Description   |
| ------------- |:-------------:|
| `solid`     | Simple solid line |
| `double`       | Double solid lines  |
| `dotted`      | Dotted line |
| `outline`      | I don't fucking know |

> Value : deplacements (default : 0)

| Method        | Description   |
| ------------- |:-------------:|
| `int`     | Number of pixel by deplacement  |

**Psssst :** The most of this methods are addables ! (ex : `type : "resizable, draggable, selectable"`)

___
***
[![alt text][2]][1]

  [1]: http://www.arkmind.pw
  [2]: http://arkmind.pw/wp-content/themes/boardwalk/img/logo.png ("Arkmind, to serve you")

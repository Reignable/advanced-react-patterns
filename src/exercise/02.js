// Compound Components
// http://localhost:3000/isolated/exercise/02.js

import {Children, cloneElement, useState} from 'react'
import {Switch} from '../switch'

function Toggle(props) {
  const [on, setOn] = useState(false)
  const toggle = () => setOn(!on)

  return Children.map(props.children, child => {
    if (typeof child.type === 'string') return child
    return cloneElement(child, {on, toggle})
  })
}

const ToggleOn = ({on, children}) => (on ? children : null)

const ToggleOff = ({on, children}) => (on ? null : children)

const ToggleButton = ({on, toggle}) => <Switch on={on} onClick={toggle} />

function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <span>Hello</span>
        <ToggleButton />
      </Toggle>
    </div>
  )
}

export default App

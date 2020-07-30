import React from './react.js'
import ReactDOM from './react-dom.js'

const element = (
  <div className="title">
    <h1>build your own react</h1>
  </div>
)
const container = document.getElementById('root')
ReactDOM.render(element, container)

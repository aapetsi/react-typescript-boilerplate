import React from 'react'
import ReactDOM from 'react-dom'


const App = () => {
  const handleClick = () => alert('hello')
  return(
    <div>
        <h1>React and TypeScript boilerplate {new Date().toLocaleString()}</h1>
        <button onClick={handleClick}>Click me</button>
    </div>
)}

ReactDOM.render(<App />, document.getElementById('root'))

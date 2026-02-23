import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Calculator</h1>
        <form>
          <div>
          <label for="select">Type of operation</label>
          <select name="option">
            <option value="addition">+ (addition)</option>
            <option value="soustraction">- (soustraction)</option>
            <option value="multiplication">x (multiplication)</option>
            <option value="division">/ (division)</option>
          </select>
        </div>

        <div>
          <p>Field 1 :</p>
          <input>
          </input>
        </div>
        <div>
          <p>Field 2 :</p>
          <input>

          </input>
        </div>
          <button>
            Calculate
          </button>
        </form>

        <output for="Result">

        </output>
      </div>
    </>
  )
}

export default App

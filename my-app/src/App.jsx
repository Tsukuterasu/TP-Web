import { useState } from 'react'
import { GoNumber } from "react-icons/go";
import { FaCalculator } from "react-icons/fa";
import { PiMathOperationsLight } from "react-icons/pi";
import './App.css'

function App() {

  return (
    <>
      <div>
        <h1> <FaCalculator/> Calculator</h1>
        <form>
          <div>
          <label for="select"> <PiMathOperationsLight/> Operation type </label>
          <select name="option">
            <option value="addition">+ (addition)</option>
            <option value="soustraction">- (soustraction)</option>
            <option value="multiplication">x (multiplication)</option>
            <option value="division">/ (division)</option>
          </select>
        </div>

        <div>
          <p><GoNumber/> Field 1 :</p>
          <input>
          </input>
        </div>
        <div>
          <p><GoNumber/> Field 2 :</p>
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

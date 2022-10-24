import React, {useState} from 'react';
import './App.css';
import Button from "./components/Button";
import {Counter} from "./components/Counter";
import {Settings} from "./components/Settings";

function App() {

    let [counter, setCounter] = useState(0)
    let [maxValue, setMaxValue] = useState(0)
    let [minValue, setMinValue] = useState(0)
    let [blockd,setBlockd]=useState(true)
console.log('maxValue' , maxValue)
    return (
        <div className={'App'}>
            <Settings blockd={blockd} setBlockd={setBlockd} maxValue={maxValue} setMaxValue={setMaxValue} minValue={minValue} setMinValue={setMinValue}/>
            <Counter setCounter={setCounter} counter={counter}/>

        </div>
    );
}

export default App;

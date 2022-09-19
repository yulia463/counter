import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "./components/Button";

function App() {

    let [counter, setCounter] = useState(0)


    return (
        <div className={'App'}>
            <div className={'out'}>
            <div style={{ color: counter===5 ? "darkred" : 'white'}} className={'input'}

            >
                {counter}
                {/*<button className={'button'} disabled={props.counter === 5} onClick={() => {*/}
                {/*    setCounter(props.counter + 1)*/}
                {/*}}>INC*/}
                {/*</button>*/}

                {/*<button className={'button'} disabled={props.counter === 0} onClick={() => {*/}
                {/*    setCounter(0)*/}
                {/*}}>RESET*/}
                {/*</button>*/}
            </div>
<Button value={counter+1} setCounter={setCounter} title={'INC'} disabled={counter===5}/>
<Button value={0} setCounter={setCounter} title={'RESET'} disabled={counter===0}/>
            </div>
        </div>
    );
}

export default App;

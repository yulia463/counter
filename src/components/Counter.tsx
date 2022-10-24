import React from "react";
import Button from "./Button";

type CounterPropsType={
    counter:number
    setCounter:(value:number)=>void

}
export const Counter=(props:CounterPropsType)=>{

    return(
        <div className={'out'}>
            <div style={{color: props.counter === 5 ? "darkred" : 'white'}} className={'input'}>
                {props.counter}
            </div>
            <Button value={props.counter + 1} setCounter={props.setCounter} title={'INC'} disabled={props.counter === 5}/>
            <Button value={0} setCounter={props.setCounter} title={'RESET'} disabled={props.counter === 0}/>
        </div>
    )

}
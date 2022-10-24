import React, {ChangeEvent, ChangeEventHandler} from "react";
import Button from "./Button";

type SettingsPropsType ={
    maxValue:number,
    setMaxValue:(value:number)=>void,
    minValue:number,
    setMinValue:(value:number)=>void,
    blockd:boolean,
    setBlockd:(value:boolean)=>void


}
export const Settings=(props:SettingsPropsType)=>{
    const onMaxValueChange=(event:ChangeEvent<HTMLInputElement>)=>{
        props.setMaxValue(+event.currentTarget.value)
    }

    return(
        <div className={'out'}>
            <div  className={'settings'}

            >
                <div> MAX VALUE <input value={props.maxValue} onChange={onMaxValueChange} type={"number"}/> </div>
                <div> MIN VALUE <input type={"number"}/> </div>

                {/*{props.counter}*/}
            </div>
         <Button value={0} setCounter={()=>{}} disabled={false} title={'SET'} />
        </div>
    )

}
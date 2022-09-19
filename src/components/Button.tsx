import React from "react";


type ButtonPropsType={
   value:number
    setCounter:(value:number)=>void
    disabled:boolean
    title:string
}

const Button=(props:ButtonPropsType)=>{




    return(

        <div>
            <button className={'button'} disabled={props.disabled} onClick={() => {
                props.setCounter(props.value)
            }}> {props.title}
            </button>

        </div>
    )
}




export default Button;
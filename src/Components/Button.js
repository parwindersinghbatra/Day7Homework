import React from 'react'
import './Button.css'
const Button = (props) => {
    // console.log(props)
    return (
    <>
     <button style={{
            color:props.fontColor,
            backgroundColor:props.backgroundColor,
            borderRadius:props.borderRadius,
            padding:props.padding,
        }}
        className='button'
            >{props.children}
        </button>
    </>
  )
}

export default Button

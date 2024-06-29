/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const Button = ({children,classes="", onClick})=>{
    return(
        <>
        <button className={`bg-accent-500 text-primary-500 hover:bg-accent-300 px-5 py-2 font-semibold cursor-pointer transition-all duration-200  hover:-translate-y-1 ${classes}`} onClick={onClick}>
            {children}
        </button>
        </>
    )
}
export default Button;
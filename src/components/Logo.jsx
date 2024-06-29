/* eslint-disable no-unused-vars */
import React from "react";
import KsuLogo from '../assets/ksu.png'
// import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

const Logo=()=>{
    return(
        <>
        <div className="text-3xl font-semibold flex items-start gap-2">
            {/* <HiOutlineBuildingOffice2 size={33} className="text-accent-500"/> */}
            <img src={KsuLogo} alt="Logo PT Karya Sentosa Unggul" className="max-h-14 max-w-14 " />
            <span className="text-primary-500">PT.KARYA SENTOSA UNGGUL</span>
        </div>
        </>
    )
}

export default Logo
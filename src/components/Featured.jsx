/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import Container from "./Container";
import { FEATURED } from "../../data";
import Button from "./Button";

const Featured = () =>{
    return(
        <>
        <div>
        <Container >
            <div className="relative py-32">
            <div className="text-5xl font-semibold">Portofolio</div>
            <div className="mt-20 gap-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED.map((ft,index)=>(
                <div key={index} className="h-[240px] relative group overflow-hidden shadow-md rounded-md">
                    <img src={ft.link} alt="image" className="w-full h-full absolute object-cover group-hover:scale-150 transition-all duration-300 brightness-50"/>
                    <div className="flex h-full justify-between flex-col relative p-4">
                        <div className="bg-accent-500 text-primary-500 text-sm w-fit uppercase tracking-widest px-4 py-2">
                            {ft.tag}
                        </div>
                        <div className="flex flex-col gap-2 text-primary-500">
                            <span className="text-xl font-semibold">{ft.text}</span>
                            <hr />
                            {/* <span className="text-xl">{ft.price}</span> */}
                        </div>
                    </div>
                </div>
            ))}
            </div>
            <Button classes="mt-10">Browser more project</Button>   
            </div>
        </Container>
        </div>
        </>
    )
}
export default Featured
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import Container from './Container'
import { DESTINATIONS } from '../../data'

const Destinations = ()=>{
    return(
        <>
        <div className='py-32'>
            <Container classes='flex flex-col gap-20'>
                <div className='text-5xl font-semibold text-secondary-500 text-center'>
                    Destination we love the <br />most
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {DESTINATIONS.map((des,index)=>(
                        <div key={index} className='relative w-full aspect-[8/11] flex flex-col justify-end items-start p-6 group overflow-hidden'>
                            <img src={des.link} alt="image" className='w-full h-full object-cover group-hover:scale-150 transition-all duration-300 top-0 left-0 absolute brightness-50' />
                            <div className='text-2xl font-semibold text-primary-500 relative'>{des.text}</div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
        </>
    )
}
export default Destinations
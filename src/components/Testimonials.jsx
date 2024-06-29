/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import Container from './Container'
import { TESTIMONIALS } from '../../data'

const Testimonials = () => {
    return (
        <>
        <div className='bg-background-1 py-32 overflow-hidden'>
            <Container>
                <div className='w-full flex flex-col lg:flex-row gap-12'>
                    <div className='w-max'>
                        <div className='text-5xl font-semibold text-secondary-500 flex flex-col'>
                            <div className='whitespace-nowrap'>Don't take </div>
                            <div className='whitespace-nowrap'>Our Word.</div>
                        </div>
                        <div className='text-secondary-100 mt-4 text-xl'>Take theirs</div>
                    </div>
                    <div className='flex flex-col w-full gap-10'>
                        {TESTIMONIALS.map((test,index)=>(
                            <div className={`text-secondary-100 p-6 md:w-[90%] shadow-md ${index != 1 && "self-end"}`}>
                                <div className='mx-auto'>{test.text}</div>
                                <div className={`flex gap-2 items-center mt-6 ${index != 1 && "justify-end"}`}>
                                    <div className='w-10 h-10 rounded-full'>
                                        <img src={test.src} alt="img" className='w-full h-full object-cover rounded-full' />
                                    </div>
                                    <div>
                                        <div className='text-base text-left font-semibold text-secondary-500'>{test.name}</div>
                                        <div className='text-sm text-left text-secondary-500'>{test.company}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
        </>
    )
}
export default Testimonials
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import Container from './Container'
import { NAV_LINKS, QUALITIES } from '../../data'
import Button from './Button'
import { FaWhatsapp } from "react-icons/fa";
// import Image from '../assets/banner.jpg'

const Banner = () =>{
    const hendeleClick = (url) =>{
        window.open(url,"_blank")
    }
    return (
        <>
        <div className='bg-background-1 py-32'>
        <Container>
            <div className='w-full flex flex-col lg:flex-row gap-20'>
                <div className='flex flex-col flex-1 gap-10'>
                    <div className='text-5xl text-secondary-500 font-semibold'>Layanan Jasa Profesional Kami Dibawah ini</div>
                    <div className='text-secondary-100 text-xl'>Kami meberikan layanan berkualitas dengan melakukan rancangan secara matang sebelum melakukan pembangunan, dengan tim yang berpengalaman dan profesional.</div>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                    {QUALITIES.map((ql,index)=>(
                        <div key={index} className='relative w-full aspect-[8/11] flex flex-col gap-6 group overflow-hidden justify-end items-star p-6'>
                            
                            <img src={ql.img} className='w-full h-full object-cover group-hover:scale-150 transition-all duration-300 top-6 left-0 absolute brightness-50' alt="Layanan Jasa PT.Karya Sentosa Unggul" />
                            <span className='text-2xl font-semibold text-primary-500 relative'>{ql.title}</span>
                        </div>
                    ))}
                </div>
                {NAV_LINKS.map((link, linkIndex)=>(
                    link.name === 'WhatsApp' && (<Button classes='w-fit hover:bg-green-700 bg-green-500 flex flex-row gap-5' key={linkIndex} onClick={()=>hendeleClick(link.url)}>Hubungi Kami <FaWhatsapp size={25} /></Button>)
                ))}
                </div>
                
                
                {/* <div className='flex-1 aspect-[4/2] lg:aspect-[unset] overflow-hidden rounded-md relative group'>
                    <img src={Image} alt="" className='w-full h-full object-cover object-center absolute top-0 left-0 group-hover:scale-150 transition-all duration-300' />
                </div> */}
            </div>
        </Container>
        </div>
        </>
    )
}
export default Banner
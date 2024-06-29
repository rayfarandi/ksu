/* eslint-disable no-unused-vars */
import React from 'react'
import { IoLocation } from 'react-icons/io5';

import HeroBg from '../assets/home.jpg'
import Container from './Container';
import Button from './Button';
import { NAV_LINKS } from '../../data';
import { LiaAnkhSolid } from 'react-icons/lia';
const Hero = () =>{
    const hendeleClick = (url)=>{
        window.open(url,"_blank")
    }
    return(
        <>
         <div className='w-full flex flex-col min-h-screen relative '>
            <img 
            src={HeroBg} 
            alt=""
            className='absolute w-full h-full object-cover brightness-[0.2]' />
            <Container classes='flex-1 relative pt-24 pb-10 flex flex-col gap-4 md:gap-10 justify-center'>
                <h1 className='text-6xl font-semibold text-primary-500 max-w-3xl'>
                    Perusahaan  <span className='text-accent-500'>Kontraktor Terbaik</span> Untuk Bangunan & Arsitektur
                </h1>
                <p className='text-xl max-w-xl text-primary-100'>Perusahaan Jasa kontraktor resmi bersertifikasi, bergaransi dan berpengalaman dalam menangani Kantor, Gedung, Rumah, Apartemen, Hotel, & Cafe Di Kota Jakarta, Bogor, Depok, Tangerang & Bekasi</p>
                <div className='flex items-center max-w-xl'>
                {NAV_LINKS.map((link,index)=>(
                    (link.name === 'WhatsApp' && (
                            <Button key={index} onClick={()=>hendeleClick(link.url)}> Konsultasi Sekarang </Button>
                    ))
                ))}
                </div>
            </Container>
        </div>
        </>
    )
}

export default Hero;
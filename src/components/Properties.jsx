/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import Container from './Container'
import { PROPERTIES } from '../../data'
import Kontraktor from '../assets/karyasentosa.jpg'

const Properties = () =>{
    return(
        <>
        <div className='bg-background-1 py-32 '>
           <Container classes='grid md:grid-cols-2 grid-cols-1'>
            <div className='flex flex-col justify-center content-center px-6 leading-[60px] gap-5 '>
                <p className='text-3xl font-semibold text-accent-500 '>Mengapa Memilih Kami Sebagai Jasa Kontraktor Bangunan Anda</p>
                <p className='text-xl'>Karena kami sudah berpengalaman dalam menangani projek pembangunan baik skala kecil, menengah ataupun skala besar sehingga kami sangat mengetahui kebutuhan konsumen kami, karena kami mengedepankan Profesional dan loyalitas.</p>
                <div className='h-[300px]  relative group overflow-hidden shadow-md rounded-tl-3xl rounded-br-3xl hover:shadow-lg'>
                <img src={Kontraktor} alt="Jasa Kontraktor Terbaik PT KSU" className='w-full h-full absolute object-cover group-hover:scale-150 transition-all duration-1000 brightness-50 hover:brightness-100' />
                
                </div>
                
            </div>

            <div className='mt-20 grid gap-10 grid-cols-1 lg:grid-cols-2'>
                {PROPERTIES.map((property,index)=>(
                    <div key={index} className='bg-primary-500 flex flex-col items-center content-center p-10 shadow-md hover:shadow-xl transition-all duration-300 text-wrap'>
                        <property.icon className='text-5xl text-accent-500' />
                        <h3 className='text-xl texti-secondary-500 font-semibold mt-5 text-center'>{property.type}</h3>
                        <p className='mt-2 text-secondary-100 text-center'>{property.count}</p>
                    </div>
                ))}
            </div>
            </Container> 
        </div>
        </>
    )
}

export default Properties;
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import Container from './Container'
import Button from './Button'
import { NAV_LINKS } from '../../data';

import IMG from '../assets/join_karyasentosaunggul.png'



const AboutAs = ({data}) =>{
    const hendeleClick= (url) =>{
        window.open(url,"_blank")
    }

    return(
        <>
        {data.map((item, index) =>(
            <div key={index} className='grid grid-cols-1 gap-20 md:grid-cols-2 text-center'>
                {item.id === 'about' && (
                    <>
                    <div className='text-5xl leading-[60px] font-semibold text-secondary-500'>
                    {item.isi1}
                    <span className='text-accent-500'> {item.isi2}</span>
                    </div>
                    <div className='justify-items-center'>
                        <p className='text-lg text-secondary-100'>
                            {item.isi3}
                        </p>
                        <Button classes='mt-10'>About Us</Button>
                    </div>
                    </>
                )}
                {item.id === 'konsul' &&(
                 <>
                    <div className='h-[400px] relative group overflow-hidden shadow-md rounded-tl-3xl rounded-br-3xl hover:shadow-lg'>
                    <img src={IMG} alt="Jasa Kontraktor Terbaik PT KSU" className='w-full h-full absolute object-cover group-hover:scale-125 transition-all duration-1000 ' />
                
                    </div>
                    <div className='items-center content-center'>
                        <div className='text-2xl leading-[60px] font-semibold text-secondary-500'>
                            {item.isi1}
                        </div>
                        <p className='text-lg text-secondary-100'>
                            {item.isi2}
                        </p>
                        <div className='my-5 items-center max-w-xl'>
                            {NAV_LINKS.map((link, linkIndex) => (
                                link.name === 'WhatsApp' && (
                                    <Button key={linkIndex} onClick={() => hendeleClick(link.url)}> Konsultasi Sekarang </Button>
                                )
                            ))}
                        </div>
                    </div>
                </>
                )}
        </div>

        ))}
        </> 
    ) 
}



const About = ({id}) =>{
    
    const [isiAbout,setIsiAbout] = useState([
        {
            id:"about",
            isi1:"We build quality contruction project",
            isi2:"Since 2008",
            isi3:"PT Karya Sentosa Unggul Sebagai salah satu perusahaan konstruksi di Kota Depok , memenuhi harapan klien, menawarkan manajemen proyek yang tepat untuk memastikan kualitas selalu tercapai dan perhatian pada biaya dan anggaran."

        },
        {
            id:"konsul",
            isi1:"Wujudkan Hunian Ternyaman anda",
            isi2:"Kami Siap Menemani Pembangunan dan Konstruksi Anda Dari Nol",
        }
    ])

    const filterData =isiAbout.filter(item => item.id === id)

    return (
        <>
        <Container classes='py-32'>
            <AboutAs data={filterData}/>
        </Container>
        </>
    )
}

export default About
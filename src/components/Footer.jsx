/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { NAV_LINKS } from "../../data";
import Button from "./Button";

const Footer = () => {
    return(
        <>
        <div className="pt-28 pd-10 bg-secondary-500">
            <Container>
            <div className="flex flex-col md:flex-row gap-16">
                <div className="flex flex-col w-full justify-center items-center mx-auto md:items-start sm:max-w-[400px]">
                    <Logo />
                    <div className="text-primary-100 mt-6 text-center md:text-start w-full">Wujudkan Impian Anda Bersama Kami, Karya Sentosa Unggul Siap Membantu Anda</div>
                    <div className="flex gap-6 text-accent-500 mt-6">
                    <a href="#">
                        <AiFillFacebook size={30} />    
                    </a>
                    <a href="#">
                        <AiFillInstagram size={30} />    
                    </a>
                    <a href="#">
                        <AiFillLinkedin size={30} />    
                    </a>
                    </div>
                    <ul className="flex items-center gap-4 mt-6">
                        {
                            NAV_LINKS.map((link,index)=>(
                                <li key={index} className='capitalize hover:text-accent-500 text-primary-500'>
                                    <a href={link.url}>{link.name}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="flex flex-col">
                    <div className="flex w-full flex-col gap-6">
                        <p className="text-primary-100 text-xl">Contact</p>
                        <div className="gap-3">
                            <p className="text-primary-100 text-lg">email: karyasentoaunggul@gmail.com</p>
                            <p className="text-primary-100 text-lg">WA: +62 878-7514-5832</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex w-full flex-col gap-6">
                        <p className="text-primary-100 text-xl">Office</p>
                        <div className="flex gap-3">
                            <p className="text-primary-100 text-lg">Jl. Raya Sawangan Ruko CBD Maharaja No.12A Rt 001 Rw 001 Kel. Mampang Kec. Pancoran Mas</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-primary-100 text-center mt-12 text-sm">Copyright © 2024 PT KARYA SENTOSA UNGGUL . All rights reserved.</div>
            </Container>
        </div>
        </>
    )
}
export default Footer
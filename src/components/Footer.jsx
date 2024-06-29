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
                    <div className="text-primary-100 mt-6 text-center md:text-start w-full">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, fugiat.</div>
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
                <div className="flex-grow">
                    <form className="w-full flex flex-col gap-6">
                        <div className="flex gap-6 flex-col w-full ">
                            <input type="text" placeholder="Name" className="flex-1 h-10 text-primary-100 w-full py-4 outline-none bg-transparent border-b border-primary-100" />
                            <input type="email" placeholder="Email" className="flex-1 h-10 text-primary-100 w-full py-4 outline-none bg-transparent border-b border-primary-100" />
                            <textarea placeholder="Message" className="flex-1 h-10 text-primary-100 w-full py-4 outline-none bg-transparent border-b border-primary-100" id=""></textarea>
                            <Button>Send</Button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="text-primary-100 text-center mt-12 text-sm">Copyright © 2024 Se Home. All rights reserved.</div>
            </Container>
        </div>
        </>
    )
}
export default Footer
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import { NAV_LINKS } from '../../data';
import Button from './Button';
import { CgClose } from 'react-icons/cg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [isNavClosed, setIsNavClosed] = useState(true);
    const [navBg, setNavBg] = useState('');
    const navigate = useNavigate()

    const handleClick = (url) => {
        console.log(`Opening URL: ${url}`);
        window.open(url, "_blank");
    };

    const handleLinkClick = (event, url) => {
        event.preventDefault();
        console.log(`Navigating to: ${url}`)
        navigate(url)
        
        
    };

    useEffect(() => {
        const urlMenu = window.location.href;
        console.log(urlMenu);
        const urlNotBlank = urlMenu.endsWith('/');
        setNavBg(urlNotBlank ? '' : 'bg-secondary-500');

        //Add google Tag Manager
        
        const script = document.createElement('script');
        script.src = "https://www.googletagmanager.com/gtag/js?id=G-TSE0B6ME3H";
        script.async = true;
        document.head.appendChild(script);

        const script2 = document.createElement('script');
        script2.innerHTML = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TSE0B6ME3H');
        `;
        document.head.appendChild(script2);

        return () => {
            document.head.removeChild(script);
            document.head.removeChild(script2);
        }
    }, []);

    return (
        <>
        <header className={`absolute w-full h-24 z-10 ${navBg}`}>
            <nav className='h-full max-w-screen-xl mx-auto px-10 flex justify-between items-center'>
                <Logo />
                <ul className='hidden md:flex items-center gap-10'>
                    {NAV_LINKS.map((link, index) => (
                        <li key={index} className='capitalize hover:text-accent-500 text-primary-500'>
                            {link.name === "WhatsApp" ? (
                                <Button
                                    onClick={() => handleClick(link.url)}
                                    classes='bg-transparent hover:bg-green-500 border border-green-400 text-xs flex flex-row gap-1 content-center items-center'
                                >
                                    <FaWhatsapp size={25} />{link.name}
                                </Button>
                            ) : (
                                <a href={link.url} onClick={(e) => handleLinkClick(e, link.url)}>{link.name}</a>
                            )}
                        </li>
                    ))}
                </ul>
                <button onClick={() => setIsNavClosed(!isNavClosed)} className='md:hidden text-4xl text-primary-500 z-40'>
                    {isNavClosed ? (
                        <GiHamburgerMenu />
                    ) : (
                        <CgClose className='text-secondary-500' />
                    )}
                </button>
            </nav>
            <ul className={`flex flex-col md:hidden items-center gap-10 top-0 right-0 z-10 h-screen text-2xl w-80 pt-32 pl-10 absolute transition-all duration-500 bg-primary-500 ${isNavClosed ? "translate-x-full" : "translate-x-0"}`}>
                {NAV_LINKS.map((link, index) => (
                    <li key={index} className='capitalize hover:text-accent-500 text-secondary-500'>
                        {link.name === "WhatsApp" ? (
                            <Button
                                onClick={() => handleClick(link.url)}
                                classes='bg-green-300 hover:bg-green-500 border border-green-400 text-xs flex flex-row gap-1 content-center items-center'
                            >
                                <FaWhatsapp size={25} />{link.name}
                            </Button>
                        ) : (
                            <a href={link.url} onClick={(e) => handleLinkClick(e, link.url)}>{link.name}</a>
                        )}
                    </li>
                ))}
            </ul>
        </header>
        </>
    );
}

export default Header;

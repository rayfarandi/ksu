
import { FaBuilding} from "react-icons/fa";

import { GiHouse } from "react-icons/gi";
import { MdHouse, MdOutlineVilla } from "react-icons/md";

//IMG
import jasaArsitek from './src/assets/jasaArsitek.png'
import jasaDesain from './src/assets/jasaDesain.png'
import jasaKontraktor from './src/assets/jasaKontraktor.png'
import jasaRenovasi from './src/assets/jasaRenovasi.png'



export const NAV_LINKS = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Portofolio",
    url: "/portofolio",
  },
  {
    name: "Kontak",
    url: "/kontak",
  },
  {
    name: "WhatsApp",
    url: "https://api.whatsapp.com/send?phone=6287875145832&text=Hallo%20PT%20KSU",
  },
];

export const PROPERTIES = [
  {
    icon: GiHouse,
    type: "Profesional",
    count: "Kontraktor Jasa Konstruksi Terbaik , Profesional dan Bersertifikat",
  },
  {
    icon: MdOutlineVilla,
    type: "Berpengalaman",
    count: "Memiliki Banyak Pengalaman Dalam Mengerjakan Berbagai Bidang Konstruksi dan SDM yang Berpengalaman",
  },
  {
    icon: FaBuilding,
    type: "Tenaga Ahli",
    count: "Kami mempunyai orang-orang yang ahli dan profesional dibidangnya masing-masing.",
  },
  {
    icon: MdHouse,
    type: "Terpercaya",
    count: "Tentu modal pertama perusahaan kami berdiri adalah karena kepercayaan dari para konsumen kami.",
  },
];

export const FEATURED = [
  {
    link: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "House on Jakarta",
    price: "1400 USD/month",
    tag: "Featured",
  },
  {
    link: "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Villa on Bogor",
    price: "1000 USD/month",
    tag: "Popular",
  },
  {
    link: "https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Renovation on UI",
    price: "1200 USD/month",
    tag: "Popular",
  },
  {
    link: "https://images.unsplash.com/photo-1600047509782-20d39509f26d?q=80&w=2002&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Renovation on PTPN3",
    price: "800 USD/month",
    tag: "Featured",
  },
  {
    link: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Renovation on UI Salemba",
    price: "1500 USD/month",
    tag: "Featured",
  },
  {
    link: "https://images.unsplash.com/photo-1430285561322-7808604715df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Ruko on Depok",
    price: "1800 USD/month",
    tag: "Popular",
  },
];


export const QUALITIES = [
  {
    title: "Jasa Kontraktor",
    img: jasaKontraktor,
  },

  {
    title: "Jasa Arsitek",
    img:  jasaArsitek,
  },
  {
    title: "Jasa Renovasi",
    img: jasaRenovasi
  },
  {
    title: "Jasa Desain & Interior",
    img:  jasaDesain
  },
];

export const DESTINATIONS = [
  {
    link: "https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "New York",
  },
  {
    link: "https://images.unsplash.com/photo-1634400139456-292e44ca5327?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxhcyUyMHZlZ2FzfGVufDB8fDB8fHww",
    text: "Las Vegas",
  },
  {
    link: "https://images.unsplash.com/photo-1540155945626-66eacf57fcb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxvcyUyMGFuZ2VsZXN8ZW58MHx8MHx8fDA%3D",
    text: "Los Angeles",
  },
  {
    link: "https://images.unsplash.com/photo-1534050359320-02900022671e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2FuJTIwZnJhbnNpY298ZW58MHx8MHx8fDA%3D",
    text: "San Francisco",
  },
];

export const TESTIMONIALS = [
  {
    text: "Sehome Real Estate made our home buying experience incredible. Their team was not only professional but also incredibly knowledgeable about the local market. We found our dream home, and the entire process was seamless. Thank you, Sehome Real Estate!",
    name: "Pablo Montaya",
    src: "https://cdn.pixabay.com/photo/2018/01/21/14/16/woman-3096664_640.jpg",
    company: "CEO - Bella Homes",
  },
  {
    text: "I can't speak highly enough about Sehome Real Estate. As a first-time homebuyer, I had many questions, and their team patiently guided me through every step. Their commitment to client satisfaction and expertise in the real estate market set them apart.",
    name: "Aditya Mishra",
    src: "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg",
    company: "Founder - Eden Ajency",
  },
  {
    text: "Selling our property with Sehome Real Estate was the best decision we made. Their marketing strategies are innovative, and their negotiation skills are top-notch. We not only got a great deal but also felt supported throughout the entire process. Highly recommend!",
    name: "Sam Udotonga",
    src: "https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_640.jpg",
    company: "Founder - Castle Lane Pvt. Ltd",
  },
];

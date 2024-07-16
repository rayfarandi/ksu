import Header from "../components/Header"
import Footer from "../components/Footer"
import Container from "../components/Container"
import Map from "../components/Map"
import { FaMapLocation } from "react-icons/fa6";
import { Helmet } from "react-helmet"

const Kontak = ()=>{
    return(
        <>
        <Helmet>
            <title>Karya Sentosa Unggul - Kontak</title>
            <meta name='description' content='Karya Sentosa Unggul - Kontak' />
            <meta name='keywords' content='Kontak Pt KSU' />
            <link rel="canonical" href="https://karya-sentosa-unggul.co.id/kontak" />
        </Helmet>
        <Header/>
            <Container>
                {/* <!--Contact--> */}
                <div className="py-32 max-w-screen-xl mx-auto lg:px-20" id="contact">
                <Map/>
                <form action="" method="post">
                    <div className="w-full p-8 my-4 mr-auto shadow-2xl md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 rounded-2xl">
                    <div className="flex flex-col gap-6">
                        <h1 className="text-5xl textaccent-500 font-bold ">Hubungi Kami</h1>
                        <p className="text-md text-primary-100 font-bold ">Silakan isi Form Dibawah ini</p>
                    </div>
                    <div className="grid grid-cols-1 gap-5 mt-5">
                        <input className="w-full p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:border-outline" type="text" placeholder="Nama" name="name" autoComplete="name" />
                        <input className="w-full p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline" type="email" placeholder="Email" name="email" autoComplete="email" />
                        <input className="w-full p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline" type="tel" placeholder="Phone" name="phone" autoComplete="tel" />
                    </div>
                    <div className="my-4">
                        <textarea placeholder="Message" className="w-full h-32 p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline" name="message" autoComplete="message"></textarea>
                    </div>
                    <div className="w-1/2 my-2 lg:w-1/4">
                        <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide text-gray-100 uppercase bg-[#A12347] rounded rounded-xl hover:bg-blue-700-lg focus:outline-none focus:shadow-outline">
                                        Send Message
                                    </button>
                    </div>
                    </div>
                </form>
                <div className="w-full px-8 py-12 ml-auto bg-[#1B6485] lg:-mt-96 lg:w-2/6 rounded-2xl">
                    <div className="flex flex-col text-white">
                    <div className="flex flex-row my-4 ">
                        <FaMapLocation className="flex w-1/4" size={30} />
                        <div className="flex-1 flex-col">
                        <h2 className="text-2xl">Office</h2>
                        <p className="text-gray-200">Jl. Raya Sawangan Ruko CBD Maharaja No.12A Rt 001 Rw 001 Kel. Mampang Kec. Pancoran Mas</p>
                        </div>
                    </div>
                    <div className="flex flex-row my-4 ">
                    <FaMapLocation className="flex w-1/4" size={30} />
                    <div className="flex-1 flex-col">
                        <h2 className="text-2xl">Call</h2>
                        <p className="text-gray-200">Tel: +62 878-7514-5832</p>
                        </div>
                    </div>
                    <div className="flex flex-row my-4 ">
                    <FaMapLocation className="flex w-1/4" size={30} />
                    <div className="flex-1 flex-col">
                        <h2 className="text-2xl">Email</h2>
                        
                        </div>
                    </div>
                    <p className="text-gray-200 text-center">karyasentoaunggul@gmail.com</p>
                    
                    </div>
                </div>
                </div>
            {/* <!--End Contact--> */}
            </Container>
        <Footer/>
        </>
    )
}
export default Kontak
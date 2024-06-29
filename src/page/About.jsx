/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import Header from "../components/Header";
import Container from '../components/Container';
import Footer from "../components/Footer";
import Button from '../components/Button'
import { NAV_LINKS } from '../../data';


// img
import IMG from '../assets/karyasentosa_about_page.jpg'

const Abouts = ()=> {

    const hendeleClick= (url) =>{
        window.open(url,"_blank")
    }
    return(
        <>
        <div className="w-full min-h-screen overflow-x-hidden relative">
            <Header/>
            
            {/* <!-- about us --> */}
            <Container>
            <section className="bg-gray-100 my-32" id="aboutus">
                <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                        <div className="max-w-lg">
                            <h3 className="text-xl mb-8 text-blue-500 ">About Us</h3>
                            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Siapa Pt. Karya Sentosa Unggul?</h2>

                            <p className="mt-4 text-gray-600 text-lg">
                            Awal mula usaha kami dimulai pada tahun 2008 dengan modal referensi dari beberapa pelanggan yang sudah lama memakai jasa kami maupun dengan cara canvassing atau door to door  memperkenalkan usaha kami kepada para calon pelanggan baru. Seiring berjalannya waktu teknologi marketing online semakin maju dan sangat memudahkan dalam hal penjualan maupun jasa. Untuk itu kamipun ambil bagian dalam menawarkan usaha kami melalui beberapa jasa marketing online kepada para calon pelanggan baru.</p>

                            <p className="mt-4 text-gray-600 text-lg">Saat ini usaha kami sudah menjangkau hampir di seluruh wilayah Jabodetabek dengan tentunya tetap menjalin kemitraan kepada beberapa perusahaan aplikasi  marketing online dan team vendor yang ada.</p>
                        </div>
                        <div className="mt-12 md:mt-0">
                            <img src={IMG} alt="About Us Image" className="object-cover rounded-lg shadow-md"/>
                        </div>
                    </div>

                    {/* <!-- Our Vision n mission --> */}
                    <div className="grid pt-10 grid-cols-1 md:grid-cols-2 items-center gap-8">
                        <div className="max-w-lg">
                            <h3 className="text-xl mb-8 text-blue-500 ">TEMUKAN JAWABAN</h3>
                            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Wujudkan Impian Anda Bersama Kami</h2>

                            <p className="mt-4 text-gray-600 text-lg">
                            Silakan Konsultasikan Kebutuhan Bangun atau Renovasi Anda Kepada Kami, Kami Akan Melayani Sepenuh Hati!
                            </p>
                            <div className="items-center flex justify-center">
                            {NAV_LINKS.map((link, linkIndex) => (
                                link.name === 'WhatsApp' && (
                                    <Button classes='mt-10' key={linkIndex} onClick={() => hendeleClick(link.url)}> Konsultasi Sekarang </Button>
                                )
                            ))}
                            </div>
                        </div>
                        <div className="mt-12 md:mt-0">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Visi</h2>
                            <p className="mt-4 text-gray-600 text-lg">
                            Menjadi sebuah perusahaan jasa yang maju, berkembang dan selalu siap berkompetisi di bidangnya.
                            </p>

                            <h2 className="text-3xl font-bold mt-8 text-gray-800 mb-8 text-center">Misi</h2>
                            <p className="mt-4 text-gray-600 text-lg">
                            Selalu memberikan pelayanan yang maksimal dan terpercaya sehingga dapat menjadi referensi terbaik bagi para pelanggan.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            
            
                   
            

            </Container>
            
            
            <Footer />
        </div>
        </>
    )
}

export default Abouts
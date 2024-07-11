/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {useState} from 'react'
import Header from "../components/Header";
import Container from '../components/Container';
import Footer from "../components/Footer";
import Button from '../components/Button'
import { NAV_LINKS } from '../../data';
import Map from '../components/Map';


// img
import IMG from '../assets/karyasentosa_about_page.jpg'


const Abouts = ()=> {
    const [activeSection, setActiveSection] = useState('visimisi')

    const toogleSection = (section) => {
        setActiveSection(section)
    }

    const hendeleClick= (url) =>{
        window.open(url,"_blank")
    }
    return(
        <>
        <div className="w-full min-h-screen overflow-x-hidden relative">
            <Header/>
            
            {/* <!-- about us --> */}
            <Container>
            <section className="bg-gray-100 mt-32" id="aboutus">
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
                        <div className="mt-12 md:mt-0 ">
                            <table className='w-full border border-gray-300 '>
                             <thead>
                              <tr className='bg-gray-200  '>
                                    <th className='px-2 cursor-pointer w-1/2' onClick={() => toogleSection('visimisi')}>Visi & Misi</th>
                                    <th className='px-2 cursor-pointer w-1/2' onClick={() =>toogleSection('sertifikasi')}>Sertifikasi</th>
                              </tr>
                             </thead>
                            
                            {activeSection === 'visimisi' && (
                                <td colSpan={2} >
                                <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Visi</h2>
                                <p className="mt-4 text-gray-600 text-lg text-center">
                                Menjadi sebuah perusahaan jasa yang maju, berkembang dan selalu siap berkompetisi di bidangnya.
                                </p>
    
                                <h2 className="text-2xl font-bold mt-8 text-gray-800 mb-8 text-center">Misi</h2>
                                <p className="mt-4 text-gray-600 text-lg text-center">
                                Selalu memberikan pelayanan yang maksimal dan terpercaya sehingga dapat menjadi referensi terbaik bagi para pelanggan.
                                </p>
                                </td>
                            )}
                            {activeSection === 'sertifikasi' && (
                                <td colSpan={2}>
                                <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">Sertifikasi Perusahaan</h2>
                                <h3 className="text-xl font-bold text-gray-700 mb-2 text-center">Akta Pendirian Perusahaan</h3>
                                <p className="mt-1 text-gray-600 text-md text-center">
                                Notaris- Arfiana Purbohadi, SH (19 September 2007)</p>
                                <p className="mt-1 text-gray-600 text-md text-center">
                                Akta Perubahan 
                                Notaris- Nurwahidah Z.Isnaini, SH (11 Oktober 2016)

                                </p>
                                <h2 className="text-xl font-bold text-gray-700 mb-2 text-center">Ijin Usaha Konstruksi</h2>
                                <p className="mt-1 text-gray-600 text-md text-center">
                                602/0069/DPMPTSP/PK.-I.U.J.K/V/2019
                                </p>
                                <h2 className="text-xl font-bold text-gray-700 mb-2 text-center">Ahli K3</h2>
                                <p className="mt-1 text-gray-600 text-md text-center">
                                No.Reg. 44551/PK3/AJ/32/2017/PO
                                </p>
                                </td>
                            )}
                        </table>
                        </div>
                    </div>
                </div>
            </section>

            
            
                   
            
            <div className='py-10'>
            <h1 className='text-4xl font-semibold text-secondary-500 text-center mb-8'>Kantor Kami</h1>
            <Map />
            </div>
            </Container>
            
            
            <Footer />
        </div>
        </>
    )
}

export default Abouts
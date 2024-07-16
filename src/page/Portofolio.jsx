import Featured from '../components/Featured'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet'

const Portofolio = () => {
    return (
        <>
        <Helmet>
            <title>Karya Sentosa Unggul - Portofolio</title>
            <meta name='description' content='Karya Sentosa Unggul - Portofolio' />
            <meta name='keywords' content='Portofolio PT KSU' />
            <link rel="canonical" href="https://karyasentosaunggul.co.id/portofolio" />
        </Helmet>
        <div className="w-full min-h-screen overflow-x-hidden relative">
        <Header />
        <Featured />
        <Footer />
        </div>
            
        </>
    )
}

export default Portofolio
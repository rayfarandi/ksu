import React from 'react'

const Map = () =>{
    return(
        <div id="map" className="relative h-[400px] overflow-hidden bg-cover bg-[50%] bg-no-repeat">
            <iframe className="w-full h-[600px] object-cover"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.9978508525337!2d106.79173317409887!3d-6.39427731253914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e947879bdda5%3A0x6f44d1c80cde7d26!2sRuko%20CBD%2C%20Jl.%20Raya%20Sawangan%2C%20Mampang%2C%20Kec.%20Pancoran%20Mas%2C%20Kota%20Depok%2C%20Jawa%20Barat!5e0!3m2!1sen!2sid!4v1720627777865!5m2!1sen!2sid"
                    >

            </iframe>
                    
        </div>
    )
}

export default Map
import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div className="main-banner-v2">            
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">                            
                            <div className="main-banner-content">
                                <h1>Potenciando la educacion y desarrollo en LatAm con la technologia Blockchain</h1>
                                
                                <Link href="/profile-authentication">
                                    <a className="btn-mainBanner">Inscribete ahora! <span></span></a>
                                </Link>
                            </div>
                        </div>    
                        <div className="col-lg-6 col-md-12">                            
                           <div className='imageBanner'>
                            <img src="/images/home/HeroImage_City_Rev01.png" alt="image"/> 
                           </div>
                        </div>                      
                    </div>
                </div>
           
        </div>
    )
}

export default MainBanner;
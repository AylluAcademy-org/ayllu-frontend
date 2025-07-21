import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    margin: 60,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    navText: [
        "<i class='bx bx-chevron-left'></i>",
        "<i class='bx bx-chevron-right'></i>"
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
};

const Partner = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <div className="partner-area bg-6ba292 ptb-70">
            <div className="container">
                {display ? <OwlCarousel 
                    className="partner-slides owl-carousel owl-theme"
                    {...options}
                >
                    <div className="single-partner-item">
                        <img src="/images/partner/partner7.png" alt="image" />
                    </div>
                
                    <div className="single-partner-item">
                        <img src="/images/partner/partner8.png" alt="image" />
                    </div>
                
                    <div className="single-partner-item">
                        <img src="/images/partner/partner9.png" alt="image" />
                    </div>
                
                    <div className="single-partner-item">
                        <img src="/images/partner/partner10.png" alt="image" />
                    </div>
            
                    <div className="single-partner-item">
                        <img src="/images/partner/partner11.png" alt="image" />
                    </div>
        
                    <div className="single-partner-item">
                        <img src="/images/partner/partner12.png" alt="image" />
                    </div>
                    
                    <div className="single-partner-item">
                        <img src="/images/partner/partner8.png" alt="image" />
                    </div>
                </OwlCarousel> : ''}
            </div>
        </div>
    )
}

export default Partner;
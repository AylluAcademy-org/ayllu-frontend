
import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 30,
    navText: [
        "<i class='bx bx-chevron-left'></i>",
        "<i class='bx bx-chevron-right'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 2,
        },
        768: {
            items: 2,
        },
        992: {
            items: 3,
        }
    }
};

const EventParticipants = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <div className="advisor-area bg-f9f9f9 ptb-100">
            <div className="container">
                <div className="section-title">
                    <h2>Event Participants</h2>
                </div>

                {display ? <OwlCarousel 
                    className="advisor-slides-two owl-carousel owl-theme"
                    {...options}
                >  
                    <div className="single-advisor-item">
                        <div className="advisor-image">
                            <img src="/images/advisor/advisor4.jpg" alt="image" />

                            <ul className="social-link">
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                            </ul>
                        </div>

                        <div className="advisor-content">
                            <h3>
                                <Link href="#">
                                    <a>James Andy</a>
                                </Link>
                            </h3>
                            <span>Project Management Expert</span>
                        </div>
                    </div>

                    <div className="single-advisor-item">
                        <div className="advisor-image">
                            <img src="/images/advisor/advisor5.jpg" alt="image" />

                            <ul className="social-link">
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                            </ul>
                        </div>

                        <div className="advisor-content">
                            <h3>
                                <Link href="#">
                                    <a>Jassica Hische</a>
                                </Link>
                            </h3>
                            <span>Illustrator Expert</span>
                        </div>
                    </div>

                    <div className="single-advisor-item">
                        <div className="advisor-image">
                            <img src="/images/advisor/advisor6.jpg" alt="image" />

                            <ul className="social-link">
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                            </ul>
                        </div>

                        <div className="advisor-content">
                            <h3>
                                <Link href="#">
                                    <a>Alister Cock</a>
                                </Link>
                            </h3>
                            <span>QA Project Expert</span>
                        </div>
                    </div>

                    <div className="single-advisor-item">
                        <div className="advisor-image">
                            <img src="/images/advisor/advisor7.jpg" alt="image" />

                            <ul className="social-link">
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                            </ul>
                        </div>

                        <div className="advisor-content">
                            <h3>
                                <Link href="#">
                                    <a>Lina Ninja</a>
                                </Link>
                            </h3>
                            <span>QA Project Expert</span>
                        </div>
                    </div>
                </OwlCarousel> : ''}
            </div>
        </div>
    )
}

export default EventParticipants;
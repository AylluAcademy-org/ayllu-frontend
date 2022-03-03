import Link from 'next/link';
import React from 'react';
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

const CoursesAreaStyleTwo = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="advisor-area bg-f9f9f9 ptb-100">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Course Advisor</span>
                    <h2>Meet Our World-class Instructors</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
                                <Link href="/profile">
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
                                <Link href="/profile">
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
                                <Link href="/profile">
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
                                <Link href="/profile">
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

export default CoursesAreaStyleTwo;
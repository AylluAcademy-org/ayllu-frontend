import React from 'react';
import Link from 'next/link';
import FunFacts from './FunFacts';
import IntoVideo from './IntoVideo';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    animateOut: 'fadeOut',
    items: 1,
    navText: [
        "<i class='bx bx-chevron-left'></i>",
        "<i class='bx bx-chevron-right'></i>"
    ],
};

const FeedbackSliderWithFunFacts = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="funfacts-and-feedback-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="feedback-content">
                            <span className="sub-title">Distance learning</span>
                            <h2>Flexible Study at Your Own Pace, According to Your Own Needs</h2>
                            <p>With the eDemy, you can study whenever and wherever you choose. We have students in over 175 countries and a global reputation as a pioneer in the field of flexible learning. Our teaching also means, if you travel often or need to relocate, you can continue to study wherever you go.</p>

                            {display ? <OwlCarousel 
                                className="feedback-slides owl-carousel owl-theme"
                                {...options}
                            >  
                                <div className="single-feedback-item">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                                    <div className="client-info d-flex align-items-center">
                                        <img src="/images/user1.jpg" className="rounded-circle" alt="image" />
                                        <div className="title">
                                            <h3>John Smith</h3>
                                            <span>Python Developer</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="single-feedback-item">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                                    <div className="client-info d-flex align-items-center">
                                        <img src="/images/user2.jpg" className="rounded-circle" alt="image" />
                                        <div className="title">
                                            <h3>Sarah Taylor</h3>
                                            <span>PHP Developer</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="single-feedback-item">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                                    <div className="client-info d-flex align-items-center">
                                        <img src="/images/user1.jpg" className="rounded-circle" alt="image" />
                                        <div className="title">
                                            <h3>David Warner</h3>
                                            <span>QA Developer</span>
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel> : ''}

                            <div className="feedback-info">
                                <p>Not a member yet?​ <Link href="/profile-authentication"><a>Register Now</a></Link></p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <FunFacts />
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <IntoVideo />
                    </div>
                </div>
            </div>

            <div className="shape2">
                <img src="/images/shape2.png" alt="image" />
            </div>
            <div className="shape3">
                <img src="/images/shape3.png" alt="image" />
            </div>
            <div className="shape4">
                <img src="/images/shape4.png" alt="image" />
            </div>
            <div className="shape9">
                <img src="/images/shape8.svg" alt="image" />
            </div>
        </div>
    )
}

export default FeedbackSliderWithFunFacts;
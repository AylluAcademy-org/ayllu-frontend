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
            items: 1,
        },
        768: {
            items: 2,
        },
        1200: {
            items: 2,
        }
    }
};

const FeedbackSlider = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <div className="feedback-area bg-6ba292 ptb-100">
            <div className="container">
                {display ? <OwlCarousel 
                    className="feedback-slides-two owl-carousel owl-theme"
                    {...options}
                >
                    <div className="single-feedback-box">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum  ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed tempor incididunt ut labore et dolore.</p>

                        <div className="client-info d-flex align-items-center">
                            <img src="/images/user1.jpg" className="rounded-circle" alt="image" />
                            <div className="title">
                                <h3>John Smith</h3>
                                <span>Python Developer</span>
                            </div>
                        </div>
                    </div>

                    <div className="single-feedback-box">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum  ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed tempor incididunt ut labore et dolore.</p>

                        <div className="client-info d-flex align-items-center">
                            <img src="/images/user2.jpg" className="rounded-circle" alt="image" />
                            <div className="title">
                                <h3>Sarah Taylor</h3>
                                <span>PHP Developer</span>
                            </div>
                        </div>
                    </div>

                    <div className="single-feedback-box">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum  ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed tempor incididunt ut labore et dolore.</p>

                        <div className="client-info d-flex align-items-center">
                            <img src="/images/user1.jpg" className="rounded-circle" alt="image" />
                            <div className="title">
                                <h3>David Warner</h3>
                                <span>QA Developer</span>
                            </div>
                        </div>
                    </div>
                </OwlCarousel> : ''}
            </div>
            
            <div className="divider2"></div>
            <div className="divider3"></div>
            <div className="tree-shape">
                <img src="/images/tree-shape.png" alt="image" />
            </div>
        </div>
    )
}

export default FeedbackSlider;
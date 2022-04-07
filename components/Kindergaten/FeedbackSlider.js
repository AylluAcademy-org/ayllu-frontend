import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 0,
    navText: [
        "<i class='flaticon-chevron'></i>",
        "<i class='flaticon-right-arrow'></i>"
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
        },
        1200: {
            items: 4,
        },
        1550: {
            items: 5,
        }
    }
};

const FeedbackSlider = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <div className="feedback-area bg-6dbbbd pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Testimonials</span>
                    <h2 className="font-weight-black">Our Guardian Feedback</h2>
                    <p>We always give extra care to our student's skills improvements and feel excited to share our latest research and learnings!</p>
                </div>
            </div>

            <div className="container-fluid">
                {display ? <OwlCarousel 
                    className="feedback-slides-three owl-carousel owl-theme"
                    {...options}
                >  
                    <div className="single-kindergarten-feedback-item">
                        <div className="content">
                            <img src="/images/feedback-shape.png" alt="image" />
                            <p>Lorem ipsum dolor sit aadamet45, consectetur adipiscing elit elit3, sed do eiusmod tempor incididunt ut labore et dolore magna. Eiusmod incididunt.</p>
                        </div>

                        <div className="client-info">
                            <img src="/images/user1.jpg" alt="image" />
                            <h3 className="font-weight-black">John Smith</h3>
                            <span>Guardian</span>
                        </div>
                    </div>

                    <div className="single-kindergarten-feedback-item">
                        <div className="content">
                            <img src="/images/feedback-shape.png" alt="image" />
                            <p>Lorem ipsum dolor sit aadamet45, consectetur adipiscing elit elit3, sed do eiusmod tempor incididunt ut labore et dolore magna. Eiusmod incididunt.</p>
                        </div>

                        <div className="client-info">
                            <img src="/images/user2.jpg" alt="image" />
                            <h3 className="font-weight-black">Sarah Taylor</h3>
                            <span>Guardian</span>
                        </div>
                    </div>

                    <div className="single-kindergarten-feedback-item">
                        <div className="content">
                            <img src="/images/feedback-shape.png" alt="image" />
                            <p>Lorem ipsum dolor sit aadamet45, consectetur adipiscing elit elit3, sed do eiusmod tempor incididunt ut labore et dolore magna. Eiusmod incididunt.</p>
                        </div>

                        <div className="client-info">
                            <img src="/images/user3.jpg" alt="image" />
                            <h3 className="font-weight-black">David Smith</h3>
                            <span>Guardian</span>
                        </div>
                    </div>

                    <div className="single-kindergarten-feedback-item">
                        <div className="content">
                            <img src="/images/feedback-shape.png" alt="image" />
                            <p>Lorem ipsum dolor sit aadamet45, consectetur adipiscing elit elit3, sed do eiusmod tempor incididunt ut labore et dolore magna. Eiusmod incididunt.</p>
                        </div>

                        <div className="client-info">
                            <img src="/images/user4.jpg" alt="image" />
                            <h3 className="font-weight-black">James Andy</h3>
                            <span>Guardian</span>
                        </div>
                    </div>

                    <div className="single-kindergarten-feedback-item">
                        <div className="content">
                            <img src="/images/feedback-shape.png" alt="image" />
                            <p>Lorem ipsum dolor sit aadamet45, consectetur adipiscing elit elit3, sed do eiusmod tempor incididunt ut labore et dolore magna. Eiusmod incididunt.</p>
                        </div>

                        <div className="client-info">
                            <img src="/images/user5.jpg" alt="image" />
                            <h3 className="font-weight-black">Max Lucy</h3>
                            <span>Guardian</span>
                        </div>
                    </div>

                    <div className="single-kindergarten-feedback-item">
                        <div className="content">
                            <img src="/images/feedback-shape.png" alt="image" />
                            <p>Lorem ipsum dolor sit aadamet45, consectetur adipiscing elit elit3, sed do eiusmod tempor incididunt ut labore et dolore magna. Eiusmod incididunt.</p>
                        </div>

                        <div className="client-info">
                            <img src="/images/user6.jpg" alt="image" />
                            <h3 className="font-weight-black">Harry Zayn</h3>
                            <span>Guardian</span>
                        </div>
                    </div>
                </OwlCarousel> : ''}
            </div>

            <div className="kindergarten-shape13">
                <img src="/images/kindergarten-shape/k-shape13.png" alt="image" />
            </div>
            <div className="kindergarten-shape14">
                <img src="/images/kindergarten-shape/k-shape14.png" alt="image" />
            </div>
        </div>
    )
}

export default FeedbackSlider;
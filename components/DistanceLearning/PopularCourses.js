import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
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
        992: {
            items: 3,
        }
    }
};

const PopularCourses = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="courses-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Go At Your Own Pace</span>
                    <h2>Our Popular Courses</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                {display ? <OwlCarousel 
                    className="courses-slides owl-carousel owl-theme"
                    {...options}
                > 
                    <div className="single-courses-box">
                        <div className="courses-image">
                            <Link href="/single-courses-2">
                                <a className="d-block image">
                                    <img src="/images/courses/courses1.jpg" alt="image" />
                                </a>
                            </Link>
                            <a href="#" className="fav">
                                <i className="flaticon-heart"></i>
                            </a>
                            <div className="price shadow">$39</div>
                        </div>
                        <div className="courses-content">
                            <div className="course-author d-flex align-items-center">
                                <img src="/images/user1.jpg" className="rounded-circle" alt="image" />
                                <span>Alex Morgan</span>
                            </div>
                            <h3>
                                <Link href="/single-courses-2">
                                    <a>The Data Science Course 2020: Complete Data Science Bootcamp</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                            <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                <li>
                                    <i className='flaticon-agenda'></i> 15 Lessons
                                </li>
                                <li>
                                    <i className='flaticon-people'></i> 145 Students
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="single-courses-box">
                        <div className="courses-image">
                            <Link href="/single-courses-2">
                                <a className="d-block image">
                                    <img src="/images/courses/courses2.jpg" alt="image" />
                                </a>
                            </Link>
                            <a href="#" className="fav">
                                <i className="flaticon-heart"></i>
                            </a>
                            <div className="price shadow">$49</div>
                        </div>
                        <div className="courses-content">
                            <div className="course-author d-flex align-items-center">
                                <img src="/images/user2.jpg" className="rounded-circle" alt="image" />
                                <span>Sarah Taylor</span>
                            </div>
                            <h3>
                                <Link href="/single-courses-2">
                                    <a>Java Programming MasterclassName for Software Developers</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                            <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                <li>
                                    <i className='flaticon-agenda'></i> 20 Lessons
                                </li>
                                <li>
                                    <i className='flaticon-people'></i> 100 Students
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="single-courses-box">
                        <div className="courses-image">
                            <Link href="/single-courses-2">
                                <a className="d-block image">
                                    <img src="/images/courses/courses3.jpg" alt="image" />
                                </a>
                            </Link>
                            <a href="#" className="fav">
                                <i className="flaticon-heart"></i>
                            </a>
                            <div className="price shadow">$59</div>
                        </div>
                        <div className="courses-content">
                            <div className="course-author d-flex align-items-center">
                                <img src="/images/user3.jpg" className="rounded-circle" alt="image" />
                                <span>David Warner</span>
                            </div>
                            <h3>
                                <Link href="/single-courses-2">
                                    <a>Deep Learning A-Z™: Hands-On Artificial Neural Networks</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                            <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                <li>
                                    <i className='flaticon-agenda'></i> 20 Lessons
                                </li>
                                <li>
                                    <i className='flaticon-people'></i> 150 Students
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="single-courses-box">
                        <div className="courses-image">
                            <Link href="/single-courses-2">
                                <a className="d-block image">
                                    <img src="/images/courses/courses4.jpg" alt="image" />
                                </a>
                            </Link>
                            <a href="#" className="fav">
                                <i className="flaticon-heart"></i>
                            </a>
                            <div className="price shadow">$54</div>
                        </div>
                        <div className="courses-content">
                            <div className="course-author d-flex align-items-center">
                                <img src="/images/user4.jpg" className="rounded-circle" alt="image" />
                                <span>Andy Smith</span>
                            </div>
                            <h3>
                                <Link href="/single-courses-2">
                                    <a>Python for Finance: Investment Fundamentals & Data Analytics</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                            <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                <li>
                                    <i className='flaticon-agenda'></i> 14 Lessons
                                </li>
                                <li>
                                    <i className='flaticon-people'></i> 211 Students
                                </li>
                            </ul>
                        </div>
                    </div>
                </OwlCarousel> : ''}

                <div className="courses-info">
                    <p>Get the most dedicated consultation for your life-changing course. Earn a certification for your effort and passion <Link href="/profile-authentication"><a>Join Free Now</a></Link>.</p>
                </div>
            </div>
        </div>
    )
}

export default PopularCourses;
import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div className="main-banner">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="main-banner-content">
                            <h1>Potenciando la educacion y desarrollo en LatAm con la technologia Blockchain</h1>
                            <p>Adquiere incentivo socio-económico por crear, o consumir contenido educativo.</p>

                            <Link href="/profile-authentication">
                                <a className="default-btn">
                                    <i className="flaticon-user"></i> Inscribete ahora! <span></span>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="main-banner-courses-list">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="single-courses-box">
                                        <div className="courses-image">
                                            <Link href="/single-courses-1">
                                                <a className="d-block image">
                                                    <img src="/images/courses/courses4.jpg" alt="image" />
                                                </a>
                                            </Link>

                                            <Link href="#">
                                                <a className="fav"><i className="flaticon-heart"></i></a>
                                            </Link>

                                            <div className="price shadow">$39</div>
                                        </div>

                                        <div className="courses-content">
                                            <div className="course-author d-flex align-items-center">
                                                <img src="/images/user6.jpg" className="rounded-circle" alt="image" />
                                                <span>Alex Morgan</span>
                                            </div>

                                            <h3>
                                                <Link href="/single-courses-1">
                                                    <a>Introducción a haskell</a>
                                                </Link>
                                            </h3>

                                            <p>Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

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
                                </div>
            
                                <div className="col-lg-6 col-md-6">
                                    <div className="single-courses-box">
                                        <div className="courses-image">
                                            <Link href="/single-courses-1">
                                                <a className="d-block image">
                                                    <img src="/images/courses/courses5.jpg" alt="image" />
                                                </a>
                                            </Link>

                                            <Link href="#">
                                                <a className="fav"><i className="flaticon-heart"></i></a>
                                            </Link>

                                            <div className="price shadow">$49</div>
                                        </div>

                                        <div className="courses-content">
                                            <div className="course-author d-flex align-items-center">
                                                <img src="/images/user5.jpg" className="rounded-circle" alt="image" />
                                                <span>Sarah Taylor</span>
                                            </div>

                                            <h3>
                                                <Link href="/single-courses-1">
                                                    <a>Scala 0 a 100</a>
                                                </Link>
                                            </h3>

                                            <p>Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

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
                                </div>
                            </div>

                            <div className="banner-shape1">
                                <img src="/images/banner-shape1.png" alt="image" />
                            </div>
                            <div className="banner-shape2">
                                <img src="/images/banner-shape2.png" alt="image" />
                            </div>
                            <div className="banner-shape3">
                                <img src="/images/banner-shape3.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBanner;
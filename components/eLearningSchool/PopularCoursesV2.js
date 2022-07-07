import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    animateOut: 'fadeOut',
    margin:20,
    items: 2,
    navText: [
        "<i class='bx bx-caret-left'></i>",
        "<i class='bx bx-caret-right'></i>"
    ],
};

const PopularCoursesV2 = () => {

    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="popularCourses-area ptb-100">
            <div className="container">
                <div className="row ">                 

                    <div className="col-lg-7 col-md-12 ">
                        <div className='carrouselPopular'>
                            <h2>Cursos Populares</h2>
                            <p>Explora los cursos y elige los que sean más alineados con tus intereses y motivaciones.</p>
                            <p>Empieza ya!</p>
                        </div>

                        {display ? <OwlCarousel 
                                className="feedback-slides owl-carousel owl-theme"
                                {...options}
                            >  
                                <div className="single-courses-box">
                            <div className="courses-image">
                                <Link href="/single-courses-1">
                                    <a className="d-block image">
                                        <img src="/images/courses/courses1.jpg" alt="image" />
                                    </a>
                                </Link>

                                <Link href="#">
                                    <a className="fav"><i className="flaticon-heart"></i></a>
                                </Link>

                                <div className="price shadow">$39</div>
                            </div>

                            <div className="courses-content">
                                <div className="course-author d-flex align-items-center">
                                    <img src="/images/user1.jpg" className="rounded-circle" alt="image" />
                                    <span>Alex Morgan</span>
                                </div>

                                <h3>
                                    <Link href="/single-courses-1">
                                        <a>Deep Learning a-z™: Hands-on Artificial Neural Networks</a>
                                    </Link>
                                </h3>
                                
                                <p>This master level course is for you if you are looking to learn the DL & ANN topics in and out within a short time!</p>

                                <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                    <li>
                                        <i className='flaticon-agenda'></i> 15 Lessons
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>

                        <div className="single-courses-box">
                            <div className="courses-image">
                                <Link href="/single-courses-1">
                                    <a className="d-block image">
                                        <img src="/images/courses/courses1.jpg" alt="image" />
                                    </a>
                                </Link>

                                <Link href="#">
                                    <a className="fav"><i className="flaticon-heart"></i></a>
                                </Link>

                                <div className="price shadow">$78</div>
                            </div>

                            <div className="courses-content">
                                <div className="course-author d-flex align-items-center">
                                    <img src="/images/user1.jpg" className="rounded-circle" alt="image" />
                                    <span>Alex Morgan</span>
                                </div>

                                <h3>
                                    <Link href="/single-courses-1">
                                        <a>Deep Learning a-z™: Hands-on Artificial Neural Networks</a>
                                    </Link>
                                </h3>
                                
                                <p>This master level course is for you if you are looking to learn the DL & ANN topics in and out within a short time!</p>

                                <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                    <li>
                                        <i className='flaticon-agenda'></i> 15 Lessons
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>

                        <div className="single-courses-box">
                            <div className="courses-image">
                                <Link href="/single-courses-1">
                                    <a className="d-block image">
                                        <img src="/images/courses/courses1.jpg" alt="image" />
                                    </a>
                                </Link>

                                <Link href="#">
                                    <a className="fav"><i className="flaticon-heart"></i></a>
                                </Link>

                                <div className="price shadow">$50</div>
                            </div>

                            <div className="courses-content">
                                <div className="course-author d-flex align-items-center">
                                    <img src="/images/user1.jpg" className="rounded-circle" alt="image" />
                                    <span>Alex Morgan</span>
                                </div>

                                <h3>
                                    <Link href="/single-courses-1">
                                        <a>Deep Learning a-z™: Hands-on Artificial Neural Networks</a>
                                    </Link>
                                </h3>
                                
                                <p>This master level course is for you if you are looking to learn the DL & ANN topics in and out within a short time!</p>

                                <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                    <li>
                                        <i className='flaticon-agenda'></i> 15 Lessons
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                            </OwlCarousel> : ''}
                      
 
                    </div>

                    <div className="col-lg-5 col-md-12 ">
                        <div className="section-title ">
                            <h2>Elige Tu Curso</h2>
                            <p>El proceso comienza aquí!</p>
                            <p>Elige un curso alineado con tus intereses, y luego podrás elegir el ritmo al que deseas consumirlo.</p>
                        </div>
                    </div>

                   

                    
                </div>
               

                
            </div>
        </div>
    )
}

export default PopularCoursesV2;
import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Link from 'next/link';
import Footer from '../components/_App/Footer';

const CoursesGrid01 = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Listado de Cursos" 
                homePageUrl="/" 
                homePageText="Inicio" 
                activePageText="Listado de Cursos" 
            />  

            <div className="courses-area courses-section pt-100 pb-70">
                <div className="container">
                    <div className="Ayllu-grid-sorting row align-items-center">
                        <div className="col-lg-8 col-md-6 result-count">
                            <p>Encontramos <span className="count">12</span> cursos disponibles para ti</p>
                        </div>

                        <div className="col-lg-4 col-md-6 ordering">
                            <div className="select-box">
                                <select className="form-control">
                                    <option>Ordenar por</option>
                                    <option>Popularidad</option>
                                    <option>Más recientes</option>
                                    <option>Precio: bajo a alto</option>
                                    <option>Precio: alto a bajo</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-courses-box">
                                <div className="courses-image">
                                    <Link href="/single-courses-1">
                                        <a className="d-block image">
                                            <img src="/images/courses/courses1.jpg" alt="image" />
                                        </a>
                                    </Link>
                                    {/* <a href="#" className="fav">
                                        <i className="flaticon-heart"></i>
                                    </a> */}
                                    {/* <div className="price shadow">$39</div> */}
                                </div>
                                <div className="courses-content">
                                    <div className="course-author d-flex align-items-center">
                                        <img src="/images/user1.jpg" className="rounded-circle" alt="image" />
                                        <span>Juán Perez</span>
                                    </div>

                                    <h3>
                                        <Link href="/single-courses-1">
                                            <a>Introducción a Haskell</a>
                                        </Link>
                                    </h3>
                                    
                                    <p>Aprende a desarrollar programas con el lenguaje Scala desde cero hasta conceptos avanzados</p>
                                    <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                        <li>
                                            <i className='flaticon-agenda'></i> 15 Lecciones
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>







                    </div>
                </div>
            </div>
     
            <Footer />
        </React.Fragment>
    )
}

export default CoursesGrid01;
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Link from 'next/link';
import Footer from '../components/_App/Footer';
import {getAllCourses} from '../pages/api/Courses/courses';

const CoursesGrid01 = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [user, setUser] = useState('');
    const [userId, setUserId] = useState('');
    const [total, setTotal] = useState(0);

    useEffect(() => {
        /** Get userID from state */
        const userId = localStorage.getItem('userId');
        /**Get list of courses */
        getAllCourses().then(response => {
            if (response.status === 200) {
                setCourses(response.data);
                /**Count courses*/
                setTotal(response.data.length);
                setLoading(false);
            } else {
                setError(true);
                setErrorMessage(response.data.message);
                setLoading(false);
            }
        }   ).catch(error => {
            setError(true);
            setErrorMessage(error.message);
            setLoading(false);
        }
        );}, []);
        
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
                            <p>Encontramos <span className="count">{total}</span> cursos disponibles para ti</p>
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
                         {courses.map((course, index) => {
                        <div className="col-lg-4 col-md-6">
                            <div className="single-courses-box">
                                <div className="courses-image">
                                    <Link href="/single-courses-1">
                                        <a className="d-block image">
                                            <img src={course.image} alt="image" />
                                        </a>
                                    </Link>
                                    {/* <a href="#" className="fav">
                                        <i className="flaticon-heart"></i>
                                    </a> */}
                                    {/* <div className="price shadow">$39</div> */}
                                </div>
                                {/**Loop through courses  */}
                               
                                    <div className="courses-content">
                                    <div className="course-author d-flex align-items-center">
                                        <img src={course.image} className="rounded-circle" alt="image" />
                                        <span>{course.teacher}</span>
                                    </div>

                                    <h3>
                                        <Link href="/single-courses-1">
                                            <a>{course.name}</a>
                                        </Link>
                                    </h3>
                                    
                                    <p>{course.description}</p>
                                    <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                        <li>
                                            <i className='flaticon-agenda'></i> {course.lessons} Lecciones
                                        </li>

                                    </ul>
                                </div>
                         
                        
                            </div>
                        </div>
       })}
                                        






                    </div>
                </div>
            </div>
     
            <Footer />
        </React.Fragment>
    )
}

export default CoursesGrid01;
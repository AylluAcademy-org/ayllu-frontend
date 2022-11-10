import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/SingleCourses/PageBanner';
import CoursesDetailsSidebar from '../components/SingleCourses/CoursesDetailsSidebar';
import YouMightLikeTheCourses from '../components/Courses/YouMightLikeTheCourses';
import Footer from '../components/_App/Footer';
import { useEffect, useState } from 'react';
import { getCourseById } from '../pages/api/Courses/courses';
import { resetIdCounter, Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useRouter } from 'next/router';
resetIdCounter();
import axios from 'axios';

const SingleCourses = () => {
    const API_URL = "https://oh6s1ltanb.execute-api.us-east-1.amazonaws.com/dev/";
    const router = useRouter();
    const [cursoActual, setCursoActual] = useState(router.query.idCourse);
    /**Get couse by id */
    const [course, setCourse] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    //const [couseid, setCouseid] = useState(localStorage.getItem('courseId') || "19");  // 1 is default


    /**Get course by Id with AXIOS with parameters*/
    const getCourse = async () => {
        try {
            /**
             * TODO: 
             * 1. Get course by id from REDUX store
             * 2. Get course by id from API
             */
            const response = await axios.get(API_URL +`courses/getById?course_id=${cursoActual}`);
            console.log("data",response.data);
            setCourse(response.data);
            setLoading(false);
        } catch (error) {
            setError(true);
            setErrorMessage(error.message);
            setLoading(false);
        }
    }

    useEffect(async () => {
        /** Get course by Id */
       await getCourse();
    }, []);

    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle={course.name}
                homePageUrl="/" 
                homePageText="Home" 
                innerPageUrl="/courses-1" 
                innerPageText="Courses" 
                activePageText={course.name}
            />  

            <div className="courses-details-area pb-100">
                <div className="courses-details-image w-4/5">
                    <img src={course.image} alt="image"  />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="courses-details-desc">
                                <Tabs>
                                    <TabList>
                                        <Tab>Generalidades</Tab>
                                        <Tab>Curriculum</Tab>
                                        <Tab>Instructor</Tab>
                                        <Tab>Reviews</Tab>
                                    </TabList>
                                
                                    <TabPanel>
                                        <div className="courses-overview">
                                            <h3>Descripcion</h3>
                                            <p>{course.description}</p>
                                            {/* <h3>Certification</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                            <h3>Who this course is for</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p> */}
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                        <div className="courses-curriculum">
                                            <h3>{course.name}</h3>
                                            <ul>
                                                <li>
                                                    <a href="#" className="d-flex justify-content-between align-items-center">
                                                        <span className="courses-name">{course.name}</span>
                                                        <div className="courses-meta">
                                                            <span className="questions">{course.lesson} lecciones</span>
                                                            <span className="duration">{course.duration} Horas</span>                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>

                                            <h3>Breve descripcion de que es haskel</h3>
                                            <ul>
                                                <li>
                                                    <a href="#" className="d-flex justify-content-between align-items-center">
                                                        <span className="courses-name">Qué es Cardano</span>
                                                    </a>
                                                </li>
                                           
                                            </ul>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                        <div className="courses-instructor">
                                            <div className="single-advisor-box">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4 col-md-4">
                                                        <div className="advisor-image">
                                                            <img src="/images/advisor/advisor2.jpg" alt="image" />
                                                        </div>
                                                    </div>
                        
                                                    <div className="col-lg-8 col-md-8">
                                                        <div className="advisor-content">
                                                            <h3>David Quintanilla</h3>
                                                            <p>Email: {'dave@gmail.com'}</p>
                                                         
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                        <div className="courses-reviews">
                                            <h3>Course Rating</h3>
                                            <div className="rating">
                                                <span className="bx bxs-star "></span>
                                                <span className="bx bxs-star "></span>
                                                <span className="bx bxs-star "></span>
                                                <span className="bx bxs-star "></span>
                                                <span className="bx bxs-star"></span>
                                            </div>
                                            <div className="rating-count">
                                                <span>{course.rating}.</span>
                                            </div>

                                        </div>
                                        

                                    </TabPanel>
                                </Tabs>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <CoursesDetailsSidebar currentCourseId={cursoActual} />
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </React.Fragment>
    )
}

export default SingleCourses;
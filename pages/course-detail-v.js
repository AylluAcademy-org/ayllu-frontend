import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/SingleCourses/PageBanner';
import CoursesDetailsSidebar from '../components/SingleCourses/CoursesDetailsSidebar';
import YouMightLikeTheCourses from '../components/Courses/YouMightLikeTheCourses';
import Footer from '../components/_App/Footer';
import { resetIdCounter, Tab, Tabs, TabList, TabPanel } from 'react-tabs';
resetIdCounter();
import {useState, useEffect} from 'react';
import ReactPlayer from 'react-player'


import axios from 'axios';
const SingleCourses = () => {
     const API_URL = "https://oh6s1ltanb.execute-api.us-east-1.amazonaws.com/dev/";

    /**Get couse by id */
    const [course, setCourse] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [couseid, setCouseid] = useState(3);


    /**Get course by Id with AXIOS with parameters*/
    const getCourse = async () => {
        try {
            /**
             * TODO: 
             * 1. Get course by id from REDUX store
             * 2. Get course by id from API
             */
            const response = await axios.get(API_URL +'courses/getById?course_id=2');
            console.log("data",response.data);
            setCourse(response.data);
            setLoading(false);
        } catch (error) {
            setError(true);
            setErrorMessage(error.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        /** Get course by Id */
        getCourse();
    }, []);
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle={course.title}
                homePageUrl="/" 
                homePageText="Home" 
                innerPageUrl="/courses-1" 
                innerPageText="Courses" 
                activePageText="Introducción a Haskell" 
            />  
            
            <div className="courses-details-area pb-80">

                <div className="container">
                <div className='row'>
                        <div className="col mt-5">
                            <ReactPlayer controls width='750px' height='600px' url='https://bckt-front.s3.us-east-1.amazonaws.com/videos/Curso%20de%20Haskell%20desde%20cero%20_%201%20-%20Primeros%20pasos%20_%20Funciones.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMiJHMEUCIQD9dvc%2BCOkBbx1Qj9tTFG%2BeMOCxZAk1%2BPfyvfS%2FH7nx%2FwIgJSOwXiYzFwSz%2FXbUB1sVQ0U9GKsUBa9vgjhZOSIqmJcqhAMI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwzODY0MDQ3MzY1MjQiDEhJ8NtXXOJnI%2BIWqSrYAooJcTpcn%2B%2BnlnVp1B9eYS80LnRA5eXj9eGEYCSKBVBoR3Alj7hG3X8Bt6jedNl%2FwYEG4cNxjkaym6kRyYiNfxZ2uAJ3MN7J0yKos2cLmemEgSHY7LdJ4l2u9N3P9LIXE%2F9Q%2FmGjN9dX%2BwmIQQ%2FCC%2BvnrQqERHndJqepRTSUwdOzmng33Aji2L4cJYhtchQZOZh9uXKCFea95nP3s6wdYaYzjh9RN6OvzGQz9UAvLSZOtpcwj3PeHE5SPs%2FmpmtA7%2FK%2BBD%2BBZ%2Fwp1C5LjuJSuqUZ1LB8WRg7DJVlIci0tHBjTI5V1h1qxtq%2B%2Bpum3b0Q5rH40b7DfohrtJd1mzqSAcIsUqbR300TquU82h5oy%2FhI8NL5TdmG54Ywe6pBklizaTBQ%2FN%2B3ue8kXt2ACwkonallufUlSAYHq1cSxYDxoGuR%2FFRUxGXFIDER8XS%2FqBP8l8J1h%2Fy15yC%2BMMDW9JcGOrMCBYLc30sy%2FfRSRkjKCgeuthxc3Bod2IJLs1LdOnvUYyG6xHeoXugvkoHhzmv72vvnFEeQAX%2B%2FfDl6KT2jRtT5kWplevOe%2BymY%2FfxMx5QvQFawszS6N1wjZDpWIHMyT0XnvlreiPhxO7LWexAzbwPJCFWFCZQ2zb9oHHZg8QNwYPnfRY944SzU1NV410xNQWLnmGmhlzl8yD%2BB77cfJ2nrs5VtT5l0egsKnk2WyLEixPR4xSKnJeNvuqYg%2FqHkneTVZ2jgUTLyw09Rc1rTlDT0xitH3536GxB%2FBWmYwremqsQRhxlqYntcjWcsG%2BtM0Ck3DCd1eBAhNObBDwscDXDVlVtnwEdeTPfBojiB3L9yWmUPtKkNZzA%2BAM9BIrhnQhVkhaGSF7PwDSu1VQFm%2B047A8BYuw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220818T011606Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAVT54ELYGFSMVHENQ%2F20220818%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d1dd2f9d7a6ebdc95e5540879a9882bbcdfbd45025a3aff2fe81319b61898521'/>
                                    {/* <video width="750" height="600" controls>
  <source src="hhttps://www.youtube.com/watch?v=CaGHPGvxzPM&ab_channel=AMPTech" type="video/mp4"></source>
                                    </video> */}
                        </div>
                        <div className="col">
                            <div className=" courses-details-desc">
                                    <Tabs>


                                        <TabPanel>
                                            <div className="courses-curriculum">
                                                <h3>Haskell Modulo 1</h3>
                                                <ul>
                                                    <li>
                                                        <a href="#" className="d-flex justify-content-between align-items-center">
                                                            <span className="courses-name">Python Introduction</span>
                                                            <div className="courses-meta">
                                                                <span className="duration">01 Hour</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <h3>Haskell Modulo 2</h3>
                                                <ul>
                                                    <li>
                                                        <a href="#" className="d-flex justify-content-between align-items-center">
                                                            <span className="courses-name">NumPy Introduction</span>
                                                            <div className="courses-meta">
                                                                <span className="duration">15 Min</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="d-flex justify-content-between align-items-center">
                                                            <span className="courses-name">NumPy Getting Started</span>
                                                            <div className="courses-meta">
                                                                <span className="duration">30 Min</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="d-flex justify-content-between align-items-center">
                                                            <span className="courses-name">NumPy Creating Arrays</span>
                                                            <div className="courses-meta">
                                                                <span className="duration">45 Min</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="d-flex justify-content-between align-items-center">
                                                            <span className="courses-name">NumPy Array Indexing</span>
                                                            <div className="courses-meta">
                                                                <span className="duration">1 Hour</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="d-flex justify-content-between align-items-center">
                                                            <span className="courses-name">NumPy Array Slicing</span>
                                                            <div className="courses-meta">
                                                                <span className="duration">1.5 Hour</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>

                                            </div>
                                        </TabPanel>


                                    </Tabs>
                                </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 mb-5">
                            <div className="courses-details-desc">
                                <Tabs>
                                    <TabList>
                                        <Tab>Overview</Tab>
                                        <Tab>Instructor</Tab>
                                        <Tab>Reviews</Tab>
                                        <Tab>Interactive Session</Tab>

                                    </TabList>
                                
                                    <TabPanel>
                                        <div className="courses-overview">
                                            <h3>Course Description</h3>
                                            <p>Aprende a desarrollar programas con el lenguaje Scala desde cero hasta conceptos avanzados</p>
                                            {/* <h3>Certification</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                            <h3>Who this course is for</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p> */}
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
                                                            <h3>Sarah Taylor</h3>
                                                            <span className="sub-title">Agile Project Expert</span>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                            
                                                            <ul className="social-link">
                                                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                                                            </ul>
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
                                                <span className="bx bxs-star checked"></span>
                                                <span className="bx bxs-star checked"></span>
                                                <span className="bx bxs-star checked"></span>
                                                <span className="bx bxs-star checked"></span>
                                                <span className="bx bxs-star"></span>
                                            </div>
                                            <div className="rating-count">
                                                <span>4.1 average based on 4 reviews.</span>
                                            </div>
                                            <div className="row">
                                                <div className="side">
                                                    <div>5 star</div>
                                                </div>
                                                <div className="middle">
                                                    <div className="bar-container">
                                                        <div className="bar-5"></div>
                                                    </div>
                                                </div>
                                                <div className="side right">
                                                    <div>02</div>
                                                </div>
                                                <div className="side">
                                                    <div>4 star</div>
                                                </div>
                                                <div className="middle">
                                                    <div className="bar-container">
                                                        <div className="bar-4"></div>
                                                    </div>
                                                </div>
                                                <div className="side right">
                                                    <div>03</div>
                                                </div>
                                                <div className="side">
                                                    <div>3 star</div>
                                                </div>
                                                <div className="middle">
                                                    <div className="bar-container">
                                                        <div className="bar-3"></div>
                                                    </div>
                                                </div>
                                                <div className="side right">
                                                    <div>04</div>
                                                </div>
                                                <div className="side">
                                                    <div>2 star</div>
                                                </div>
                                                <div className="middle">
                                                    <div className="bar-container">
                                                        <div className="bar-2"></div>
                                                    </div>
                                                </div>
                                                <div className="side right">
                                                    <div>05</div>
                                                </div>
                                                <div className="side">
                                                    <div>1 star</div>
                                                </div>
                                                <div className="middle">
                                                    <div className="bar-container">
                                                        <div className="bar-1"></div>
                                                    </div>
                                                </div>
                                                <div className="side right">
                                                    <div>00</div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="courses-review-comments">
                                            <h3>3 Reviews</h3>
                                            <div className="user-review">
                                                <img src="/images/user1.jpg" alt="image" />
                                                
                                                <div className="review-rating">
                                                    <div className="review-stars">
                                                        <i className='bx bxs-star checked'></i>
                                                        <i className='bx bxs-star checked'></i>
                                                        <i className='bx bxs-star checked'></i>
                                                        <i className='bx bxs-star checked'></i>
                                                        <i className='bx bxs-star checked'></i>
                                                    </div>

                                                    <span className="d-inline-block">James Anderson</span>
                                                </div>

                                                <span className="d-block sub-comment">Excellent</span>
                                                <p>Very well built theme, couldn't be happier with it. Can't wait for future updates to see what else they add in.</p>
                                            </div>

                                            <div className="user-review">
                                                <img src="/images/user2.jpg" alt="image" />
                                                
                                                <div className="review-rating">
                                                    <div className="review-stars">
                                                        <i className='bx bxs-star checked'></i>
                                                        <i className='bx bxs-star checked'></i>
                                                        <i className='bx bxs-star checked'></i>
                                                        <i className='bx bxs-star'></i>
                                                        <i className='bx bxs-star'></i>
                                                    </div>

                                                    <span className="d-inline-block">Sarah Taylor</span>
                                                </div>

                                                <span className="d-block sub-comment">Video Quality!</span>
                                                <p>Was really easy to implement and they quickly answer my additional questions!</p>
                                            </div>

                                            <div className="user-review">
                                                <img src="/images/user3.jpg" alt="image" />
                                                
                                                <div className="review-rating">
                                                    <div className="review-stars">
                                                        <i className='bx bxs-star checked'></i>
                                                        <i className='bx bxs-star checked'></i>
                                                        <i className='bx bxs-star checked'></i>
                                                        <i className='bx bxs-star checked'></i>
                                                        <i className='bx bxs-star checked'></i>
                                                    </div>

                                                    <span className="d-inline-block">David Warner</span>
                                                </div>

                                                <span className="d-block sub-comment">Perfect Coding!</span>
                                                <p>Stunning design, very dedicated crew who welcome new ideas suggested by customers, nice support.</p>
                                            </div>

                                            <div className="user-review">
                                                <img src="/images/user4.jpg" alt="image" />
                                                
                                                <div className="review-rating">
                                                    <div className="review-stars">
                                                        <i className='bx bxs-star checked'></i>
                                                        <i className='bx bxs-star checked'></i>
                                                        <i className='bx bxs-star checked'></i>
                                                        <i className='bx bxs-star checked'></i>
                                                        <i className='bx bxs-star'></i>
                                                    </div>

                                                    <span className="d-inline-block">King Kong</span>
                                                </div>

                                                <span className="d-block sub-comment">Perfect Video!</span>
                                                <p>Stunning design, very dedicated crew who welcome new ideas suggested by customers, nice support.</p>
                                            </div>
                                        </div>
                                    </TabPanel>
                                </Tabs>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <Footer />
        </React.Fragment>
    )
}

export default SingleCourses;
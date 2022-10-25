import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/SingleCourses/PageBanner';
import Footer from '../components/_App/Footer';
import { useEffect, useState, useRef } from "react";
import { resetIdCounter, Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Router from 'next/router'
resetIdCounter();
import axios from "axios";
const SingleCourses = () => {
    const [cursoInfo, setCursoInfo] = useState([]);
    const [cursoModules, setCursoModules] = useState([]);    
    const [ventana, setVentana] = useState("VerVideo");
    const [infoContainer, setInfoContainer] = useState(0);
    const [testId, setTestId] = useState(0);
    const [videoUrl, setVideoUrl] = useState("");
    const [author, setAuthor] = useState("");
    const course=1;
    const getCourseInfo = (course_id) => {
        axios.get('https://oh6s1ltanb.execute-api.us-east-1.amazonaws.com/dev/courses/GetAllCourseInfo', {
                params: {
                    'course_id':`${course_id}`
                }
            })
            .then((response) => {
                setCursoInfo(response.data[0]);
                setCursoModules(response.data[0].modules);
                setVideoUrl(response.data[0].video);
                setAuthor(response.data[0].author);
                console.log(response.data);
                
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    };
    useEffect(() => {
        getCourseInfo(course);       
    }, []);

    const renderComponent=() => {
        switch(ventana) { 
        case "VerTest":
          return (
          <div className="col mt-5 col-lg-7">
            <h2 className='title-test-banner'>Module 3: Exam</h2>      
                            <div className=' row'>
                                <div className='image-test col-lg-6 col-sm-12'>
                                    <img src="/images/courses/student-test.jpg" alt="image"/>                                
                                    
                                </div>
                                <div className='info-test col-lg-6 col-sm-12'>
                                    <div className='list-title-test'><p>Excellent, you will validate everything you learned</p></div>
                                    <div className='list-info-test'><ul>
                                        <li>The exam consist of 10 questions.</li>
                                        <li>The exam consist of 10 questions.</li>
                                        <li>The exam consist of 10 questions.</li>
                                    </ul></div>
                                    <div>
                                        
                                         <a onClick={()=>sendProps()} className="btn-test">Take Exam <span></span></a>
                                       
                                    </div>
                                </div>

                            </div>
                            </div>)
        case "VerVideo":
          return (<div className="col mt-5">
          <video src={videoUrl} width="750" height="600" controls> </video>
          </div>)
      }
    };

    

    function sendProps(){
        Router.push({
            pathname:"/course-test-v2",
            query:{
                test:testId,
            }
        });
    }
    function viewTest(test){
        setVentana("VerTest"); 
        setTestId(test);
        console.log(test);
    }

    function viewLesson(video){
        setVentana("VerVideo");
        setVideoUrl(video);
        console.log(video);
    }

    return (
        <React.Fragment>
            <Navbar />
            <PageBanner
                pageTitle="Introducción a Haskell"
                homePageUrl="/"
                homePageText="Home"
                innerPageUrl="/courses-1"
                innerPageText="Courses"
                activePageText="Introducción a Haskell"
            />

            <div className="courses-details-area pb-80">

                <div className="container">
                    <div className='row'>                          
                            { renderComponent() }
                        
                        <div className="col">
                            <div className=" courses-details-desc">
                                <Tabs>


                                    <TabPanel>
                                     
                                    <div className="courses-curriculum">
                                    {cursoModules.map((item) => (
                                        <div>
                                          <h3>{item.name}</h3>
                                          <div>
                                            <ul>
                                          {item.lessons.map((item2) => (
                                                <li>
                                                    <a onClick={()=>viewLesson(item2.video)} className="d-flex justify-content-between align-items-center">
                                                        <span className="courses-name">{item2.name}</span>
                                                       
                                                    </a>
                                                </li>
                                            ))}
                                            </ul>
                                          </div>
                                          <div>
                                            <ul>
                                          {item.test.map((test,index) => (
                                                <li>
                                                    <a onClick={()=>viewTest(test.test_id)} className="d-flex justify-content-between align-items-center">
                                                        <span className="courses-name">Test {index+1} {item.name} </span>
                                                       
                                                    </a>
                                                </li>
                                            ))}
                                            </ul>
                                          </div>
                                        </div>
                                    ))}                                
                                    </div>
                                        {/*   prueba  
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
                                        */}
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
                                            <p>{cursoInfo.description}</p>
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
                                                            <h3>{author.name}</h3>
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
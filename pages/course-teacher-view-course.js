import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import SeeModules from '../components/NewCourse/seeModules';
import InfoCourse from '../components/NewCourse/infoCourse';
import NewModule from '../components/NewCourse/newModule';
import NewLesson from '../components/NewCourse/newLesson';
import SeeCourses from '../components/NewCourse/seeCourses';
import Modal from "react-modal";
import { resetIdCounter, Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { useEffect, useState } from "react";
import {useRouter} from "next/router";
import axios from "axios";

import { useToken } from '../utils/TokenContext';
import baseUrl from "../utils/baseUrl";
import { blue } from '@mui/material/colors';

const Profile = () => {
    const router = useRouter();
    const [cursoActual, setCursoActual] = useState(router.query.idCourse);
    const [moduloActual, setModuloActual] = useState(router.query.idModule);
    const [ventanaCourse, setVentanaCourse] = useState("SeeModules");
    const [infoCurso, setInfoCurso] = useState([]);
    const [course, setCourse] = useState({});
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');    
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false); 
    const [isLessonModalOpen, setIsLessonModalOpen] = useState(false);

    const { token } = useToken(); 
    const apiRoute = "courses/";
    const apiCursoById = "courses/getById";
    const apiModuleById = "modules/getById";
    const API_URL = `${baseUrl}${apiRoute}`;
    const API_CURSOBYID = `${baseUrl}${apiCursoById}`;
    const API_MODULEBYID = `${baseUrl}${apiModuleById}`;

    const crearModulo =() => {      
      setVentanaCourse("CrearModulo");     
      
    };

    const verModulos =() => {
      setVentanaCourse("VerModulos");     
      
    };

    const renderComponent=() => { 

      const router = useRouter();
      const moduloActual = router.query.idModule;
      if (moduloActual) {
        return <SeeLessons moduleId={moduloActual} />;
      } 
      else{    
        switch(ventanaCourse) { 
        case "CrearModulo":
          return <NewModule courseId={cursoActual} />
        case "VerModulos":        
          return <SeeModules 
          currentCourse={cursoActual}/>
      }}
  };

  /**Get course by Id with AXIOS with parameters*/
  const getCourse = async (id) => {        
    try {
        /**
         * TODO: 
         * 1. Get course by id from REDUX store
         * 2. Get course by id from API
         */
        const response = await axios.get(`${API_CURSOBYID}?course_id=${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
      
        setCourse(response.data);   
        console.log(response.data);    
        setLoading(false);
    } catch (error) {
        setError(true);
        setErrorMessage(error.message);
        setLoading(false);
    }
  }

  const openModuleModal = () => {
    setIsModalOpen(true); // Abre el modal al hacer clic en "Nuevo Módulo"
  };
  const closeModuleModal = () => {
    setIsModalOpen(false);
  };

  const openLessonModal = (moduleId) => {
    setModuloActual(moduleId);
    setIsLessonModalOpen(true);
  };
  const closeLessonModal = () => {
    setIsLessonModalOpen(false);
  };


const responseModule =(moduleId) => { 
  console.log('modulo' + moduleId);
  axios.get(API_MODULEBYID, {
  params: {
      'module_id': moduleId
  },
  headers: {
    Authorization: `Bearer ${token}`
  }
}).then((response) => {
  console.log("entro al modulo");
  console.log(response.data);
  //setInfoCurso(response.data);
})
.catch((error) => {
  console.log(error);
});
};


useEffect(() => {
  if (cursoActual) {     
    setCursoActual(cursoActual);
    getCourse(cursoActual)
  }
}, [cursoActual]); 

useEffect(() => {
  
  if (moduloActual) {   
    setModuloActual(moduloActual);
  }
}, [moduloActual]); 
    

    return (
        <React.Fragment>
           <div className={isModalOpen|| isLessonModalOpen ? 'navbar-area navbar-fixed' : 'navbar-area'}>
        <Navbar />
        {!isModalOpen && !isLessonModalOpen && (
        <PageBanner 
          pageTitle="Información del Curso" 
          homePageUrl="/" 
          homePageText="Inicio" 
          activePageText="Perfil" 
        />
      )}
      </div>


<div className="courses-details-area pb-100">
                <div className="courses-details-image w-4/5">
                
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
                                    {loading ? (
                                        <p>Cargando...</p>
                                      ) : error ? (
                                        <p>Ocurrió un error: {errorMessage}</p>
                                      ) : (
                                        <>
                                          <h3>Descripción</h3>
                                          <p>{course.description}</p>
                                        </>
                                      )}
                                    </TabPanel>

                                    <TabPanel>
                                        <div className="courses-curriculum">
                                        <button onClick={openModuleModal}>Nuevo Módulo</button>
                                        {loading?(
                                              <p>Cargando..</p>
                                            ):error ?(
                                              <p>Ocurrió un error: {errorMessage}</p>
                                            ):(
                                              
                                              course.modules.map((modulo, index) => (
                                                <div key={index}>

                                            <a href="#" className="d-flex justify-content-between align-items-center">
                                                <span className="courses-name">Módulo Nro.{index+1} : {modulo.name}</span>
                                                <div className="courses-meta">
                                                    <span className="questions">
                                                    <button onClick={() => {
                                                        openLessonModal(modulo.module_id);
                                                    }}>Nueva Lección</button>
                                                    {isLessonModalOpen && (
  <Modal
    isOpen={isLessonModalOpen}
    onRequestClose={closeLessonModal}
    style={{
      overlay: {
        backgroundColor: "rgba(255, 255, 255, 0.9)", // Fondo del modal
      },
      content: {
        top: "50%", // Posiciona el modal en el centro vertical
        left: "50%", // Posiciona el modal en el centro horizontal
        transform: "translate(-50%, -50%)", // Centra el modal
        width: "100%", // Ancho del modal
        maxWidth: "900px", // Ancho máximo del modal
        height:"490px",
        zIndex: 2001
      },
    }}
  >
    
    
    {modulo.module_id}
    <NewLesson moduleId={moduloActual}/>
  </Modal>
)}
                                                    </span>                                                   
                                                </div>
                                            </a>
                                            
                                             <ul>
                                                    {modulo.lessons.map((leccion, leccionIndex) => (
                                                      <li key={leccionIndex}>
                                                        <a href="#" className="d-flex justify-content-between align-items-center">
                                                          <span className="courses-name">{leccion.name}</span>
                                                        </a>
                                                        
                                                      </li>
                                                    ))}
                                                  </ul>


{/* Define el modal */}
<Modal
  isOpen={isModalOpen}
  onRequestClose={() => setIsModalOpen(false)}
  style={{
    overlay: {
      backgroundColor: "rgba(255, 255, 255, 0.9)", // Fondo del modal
    },
    content: {
      top: "50%", // Posiciona el modal en el centro vertical
      left: "50%", // Posiciona el modal en el centro horizontal
      transform: "translate(-50%, -50%)", // Centra el modal
      width: "100%", // Ancho del modal
      maxWidth: "1300px", // Ancho máximo del modal
      height:"600px",
      zIndex: 2001
    },
  }}
>
<button onClick={closeModuleModal} className="default-btn" style={{ backgroundColor:'#2196f3' }}>
          Cerrar
        </button>
          {/* Contenido del modal */}
          <NewModule courseId={course.course_id}/>
          
          </Modal>

                                                </div>
                                              ))                                              
                                            )}                                               
                                            
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
                                                            <h3>Ayllu</h3>
                                                            <span className="sub-title">Ayllu Academy</span>
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
 

        

            <div>
              { renderComponent() }
            </div>



            
            <Footer />
        </React.Fragment>
    )
}

export default Profile;
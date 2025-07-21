import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/SingleCoursesTwo/PageBanner';
import YouMightLikeTheCourses from '../components/Courses/YouMightLikeTheCourses';
import ContentDetail from '../components/SingleCoursesTwo/ContentDetail';
import VideoPlayer from '../components/Video/VideoPlayer';
import Footer from '../components/_App/Footer';
import Link from 'next/link';
import Swal from "sweetalert2";
import baseUrl from "../utils/baseUrl";
import { useToken } from "../utils/TokenContext";
import { useEffect, useState } from 'react';
import { Router, useRouter } from 'next/router'
import { resetIdCounter, Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import axios from "axios";

const apiRouteCourById = "courses/getById";
const API_URL_COURBYID = `${baseUrl}${apiRouteCourById}`;

const apiNewMatricula = "usersOnCourses";
const API_URL_NEWMATRICULA = `${baseUrl}${apiNewMatricula}`;

const apiCheckMatricula = "usersOnCourses/getUserOnCourseByCourseIdUserId";
const API_URL_CHECKMATRICULA = `${baseUrl}${apiCheckMatricula}`;

// Nuevo endpoint para obtener información de la sesión/lección
const apiGetLesson = "lessons/getById";
const API_URL_GETLESSON = `${baseUrl}${apiGetLesson}`;

const SingleCourses = () => {
    const router = useRouter();
    const [dataCourse, setDataCourse] = useState(null);
    const [dataCheckMatricula, setCheckMatricula] = useState(null);
    const [courseActual, setcourseActual] = useState(null);
    const { loggedIn, token, logout, userName, userID } = useToken();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [isBannerVisible, setIsBannerVisible] = useState(true);

    // Nuevos estados para manejo de sesiones
    const [currentSession, setCurrentSession] = useState(null);
    const [sessionLoading, setSessionLoading] = useState(false);
    const [sessionError, setSessionError] = useState(false);

    const authorId = userID;
     const userOnCourseId = router.query.userOnCourseId;

    const botonClickHandler = () => {
        console.log("botonClickHandler ejecutado");
        console.log("dataCheckMatricula", dataCheckMatricula);

        if (dataCheckMatricula && dataCheckMatricula.length > 0) {
            console.log("Continuar Curso");
            continuarCurso();
        } else {
            console.log("Crear Matrícula");
            crearMatricula();
        }
    };

    const labelClickHandler =
        dataCheckMatricula && dataCheckMatricula.length > 0
            ? "Ir al curso"
            : "Matricúlate";

    const [newMatriculaC, setMatriculaC] = useState({
        userId: "",
        courseId: "",
        progress: 0,
        ended: false,
        grade: 0,
        rating: 0,
        review: '',
        reward: 0
    });

    const [newMatriculaR, setMatriculaR] = useState({
        userId: "",
        courseId: ""
    });

    // Función para obtener información de la sesión
    const getSessionById = async (sessionId) => {
        setSessionLoading(true);
        setSessionError(false);
        try {
            console.log("Obteniendo sesión con ID:", sessionId);

            const response = await axios.post(API_URL_GETLESSON,
                { lesson_id: parseInt(sessionId) },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setCurrentSession(response.data);
            console.log("✅ Session data:", response.data);

        } catch (error) {
            console.error('❌ Error al obtener la sesión:', error);
            setSessionError(true);
        } finally {
            setSessionLoading(false);
        }

    };

    useEffect(() => {
        const courseId = router.query.id;
        const sessionId = router.query.sessionId; // Nuevo parámetro para la sesión
       

        if (loggedIn) {
            if (courseId) {
                getCourseById(courseId);
                setcourseActual(courseId);
                getCheckMatricula(courseId, userID);
                // Si hay sessionId, obtener información de la sesión
                if (sessionId) {
                    console.log("Session ID encontrado:", sessionId);
                    getSessionById(sessionId);
                } else {
                    // Si no hay sessionId, limpiar la sesión actual
                    setCurrentSession(null);
                    setSessionLoading(false);
                    setSessionError(false);
                }
            }
        } else {
            router.push(`/`);
        }
    }, [router.query.id, router.query.sessionId, loggedIn, userID]);

    useEffect(() => {
        const handleScroll = () => {
            setIsBannerVisible(window.scrollY < 80);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const continuarCurso = async () => {
        try {
            Swal.fire({
                title: "Ayllu",
                text: "Listo!! empezamos",
                icon: "success",
                showConfirmButton: false,
                timer: 1500,
            });
        } catch (error) {
            console.error('Error al crear la lección:', error);
        }
    };

    const crearMatricula = async () => {
        try {
            const matriculaData = {
                ...newMatriculaC,
                userId: parseInt(userID),
                courseId: parseInt(courseActual),
                progress: 0,
                ended: false,
                grade: 0,
                rating: 0,
                review: '',
                reward: 0
            };
            console.log(matriculaData);

            const response = await axios.post(API_URL_NEWMATRICULA, matriculaData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            Swal.fire({
                title: "Ayllu",
                text: "Listo!! matrícula registrada",
                icon: "success",
                showConfirmButton: false,
                timer: 1500,
            });
        } catch (error) {
            console.error('Error al crear la lección:', error);
        }
    };

    const getCourseById = (courseId) => {
        axios.get(`${API_URL_COURBYID}?course_id=${courseId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((response) => {
                setDataCourse(response.data);
                console.log(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    };

    const getCheckMatricula = async (courseId, userID) => {
        try {
            const matriculaData = {
                ...newMatriculaR,
                userId: parseInt(userID),
                courseId: parseInt(courseId),
            };
            const response = await axios.post(API_URL_CHECKMATRICULA, matriculaData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log("Respuesta de verificación de matrícula:", response.data);
          
            setCheckMatricula(response.data);
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    // Componente para mostrar la información de la sesión
    const SessionViewer = () => {
        if (sessionLoading) {
            return (
                <div style={{ padding: '20px', textAlign: 'center' }}>
                    <p>Cargando sesión...</p>
                </div>
            );
        }

        if (sessionError) {
            return (
                <div style={{ padding: '20px', textAlign: 'center' }}>
                    <p>Error al cargar la sesión. Por favor, intenta de nuevo.</p>
                    <button
                        onClick={() => router.push(`/courses/${courseActual}`)}
                        style={{
                            background: '#fe4a55',
                            color: 'white',
                            border: 'none',
                            padding: '10px 15px',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            marginTop: '10px'
                        }}
                    >
                        Volver al curso
                    </button>
                </div>
            );
        }

        if (!currentSession) {
            return (
                <div style={{ padding: '20px', textAlign: 'center' }}>
                    <p>No se encontró la sesión solicitada.</p>
                </div>
            );
        }

        return (
            <div>
                <div style={{ marginBottom: '20px' }}>
                    <button
                        onClick={() => {
                            const { sessionId, ...queryWithoutSession } = router.query;
                            router.push({
                                pathname: router.pathname,
                                query: queryWithoutSession
                            });
                        }}
                        style={{
                            background: '#6c757d',
                            color: 'white',
                            border: 'none',
                            padding: '8px 12px',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '14px'
                        }}
                    >
                        ← Volver al curso
                    </button>
                </div>

                <h1>{currentSession.name || currentSession.title}</h1>

                {currentSession.video && (
                    <div style={{ marginTop: '20px' }}>
                        <VideoPlayer
                            bucket="bucket-media-ayllu-haskell-plutus"
                            keyVideo={currentSession.video}
                        />
                    </div>
                )}

                {currentSession.description && (
                    <div style={{ marginTop: '20px' }}>
                        <h3>Descripción</h3>
                        <p>{currentSession.description}</p>
                    </div>
                )}

                {currentSession.content && (
                    <div style={{ marginTop: '20px' }}>
                        <h3>Contenido</h3>
                        <div dangerouslySetInnerHTML={{ __html: currentSession.content }} />
                    </div>
                )}

                {currentSession.resources && currentSession.resources.length > 0 && (
                    <div style={{ marginTop: '20px' }}>
                        <h3>Recursos</h3>
                        <ul>
                            {currentSession.resources.map((resource, index) => (
                                <li key={index}>
                                    <a href={resource.url} target="_blank" rel="noopener noreferrer">
                                        {resource.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

              <br />
              <br />
                <br /> <br /> <br /> <br /> <br /> <br />
                
            </div>
            
        );
    };

    // Componente para mostrar la información general del curso
    const CourseOverview = () => {
        return (
            <div>
                <h3>{dataCourse.name}</h3>
                <div className="col-lg-9 col-md-12">
                    <VideoPlayer
                        bucket="bucket-media-ayllu-haskell-plutus"
                        keyVideo="Haskell Course/Chapter 02/Haskell Course - Ch02_Mod01.mp4"
                    />
                </div>
                <div className="courses-details-desc">
                    <Tabs>
                        <TabList>
                            <Tab>Generalidades</Tab>
                            <Tab>Curriculum</Tab>
                            <Tab>Comentarios</Tab>
                            <Tab>Recursos</Tab>
                        </TabList>

                        <TabPanel>
                            <div className="courses-overview">
                                <h3>Descripción</h3>
                                {dataCourse.description}
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

                        <TabPanel>
                            <div className="courses-resources">
                                <h3>Recursos del Curso</h3>
                                <p>Aquí puedes encontrar recursos adicionales para el curso.</p>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        );
    };

    return (
        <React.Fragment>
            {isBannerVisible && (
                <Navbar />
            )}

            {dataCourse && (
                <div className="courses-details-area ptb-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12">
                                {/* Mostrar SessionViewer si hay una sesión, sino mostrar CourseOverview */}
                                {console.log("currentSession:", currentSession)}
                                {currentSession ? <SessionViewer /> : <CourseOverview />}
                            </div>
                            <div className="col-lg-4 col-md-12" style={{ position: 'fixed', top: '100px', right: '20px' }}>
                                <ContentDetail
                                    loading={loading}
                                    error={error}
                                    errorMessage={'errorMessage'}
                                    dataCourse={dataCourse}
                                    userID={userID}
                                    userOnCourseId={userOnCourseId}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </React.Fragment>
    )
}

export default SingleCourses;
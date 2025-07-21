import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/SingleCoursesTwo/PageBanner';
import YouMightLikeTheCourses from '../components/Courses/YouMightLikeTheCourses';
import CoursesDetailsSidebar from '../components/SingleCoursesTwo/CoursesDetailsSidebar';
import Footer from '../components/_App/Footer';
import Link from 'next/link';
import Swal from "sweetalert2";
import baseUrl from "../utils/baseUrl";
import { useToken } from "../utils/TokenContext";
import { useEffect,useState } from 'react';
import {Router,useRouter }  from 'next/router'


import axios from "axios";
const apiRouteCourById= "courses/getById";
const API_URL_COURBYID = `${baseUrl}${apiRouteCourById}`;

const apiRouteCourByIdPublic= "courses/getByIdPublic";
const API_URL_COURBYIDPUBLIC = `${baseUrl}${apiRouteCourByIdPublic}`;

const apiNewMatricula = "usersOnCourses";
const API_URL_NEWMATRICULA = `${baseUrl}${apiNewMatricula}`;

const apiCheckMatricula = "usersOnCourses/getUserOnCourseByCourseIdUserId";
const API_URL_CHECKMATRICULA = `${baseUrl}${apiCheckMatricula}`;



const SingleCourses = () => {
    const router = useRouter(); // Obtén el objeto router de Next.js
    const [dataCourse, setDataCourse] = useState(null);
    const [dataCheckMatricula, setCheckMatricula] = useState(null);
    const [courseActual, setcourseActual] = useState(null);
    const { loggedIn, token,logout, userName, userID } = useToken();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const authorId =userID;
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
        userId : "", 
        courseId : "", 
        progress: 0, 
        ended: false,
        grade: 0,
        rating: 0,
        review: '',
        reward: 0          
        });
    const [newMatriculaR, setMatriculaR] = useState({
            userId : "", 
            courseId : ""                    
            });

    useEffect(() => {
        // Obtén el 'id' del query de la URL
        const courseId = router.query.id;       
        // Asegúrate de que courseId esté definido y no sea nulo
        if (courseId) {
            getCourseById(courseId);
            setcourseActual(courseId);
            getCheckMatricula(courseId,userID);
        }
    }, [router.query.id]);

    const continuarCurso = async () => {
        try {  
            //redireccion al este direccion al curso
            router.push(`/single-courses-profile?id=${courseActual}&userOnCourseId=${dataCheckMatricula[0].useroncourse_Id}`);
              
        } catch (error) {
            console.error('Error al crear la lección:', error);
        }
    }; 

    const crearMatricula = async () => {
        try {
            if(loggedIn){
            const matriculaData = {
                ...newMatriculaC,
                userId : parseInt(userID), 
                courseId : parseInt(courseActual), 
                progress: 0, 
                ended: false,
                grade: 0,
                rating: 0,
                review: '',
                reward: 0  
            };
            console.log(matriculaData);
            // Hacer una solicitud POST al endpoint
            
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
            }
            else
            {
                Swal.fire({
                    title: "Ayllu",
                    text: "Primero debes conectar una billeterea!!",
                    icon: "error",
                    showConfirmButton: false,
                    timer: 1500,
                  });
            }
        } catch (error) {
            console.error('Error al registrar la matrícula:', error);
        }
    }; 

    const getCourseById = (courseId) => {
        if (loggedIn)
        {
            axios.get(`${API_URL_COURBYID}?course_id=${courseId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then((response) => {
                setDataCourse(response.data);
                setLoading(false);
            })
            .catch((error) => { 
                console.log('error en getCourseById');
                console.log(error);
                setLoading(false);
            });

        }
        else
        {
            axios.get(`${API_URL_COURBYIDPUBLIC}?course_id=${courseId}`)
            .then((response) => {
                setDataCourse(response.data);
                setLoading(false);
            })
            .catch((error) => { 
                console.log('error en getCourseById');
                console.log(error);
                setLoading(false);
            });
        }
        
    };

    const getCheckMatricula = async (courseId,userID) => {
        try {
            const matriculaData = {
                ...newMatriculaR,
                userId : parseInt(userID), 
                courseId : parseInt(courseId), 
                
            };
            const response = await axios.post(API_URL_CHECKMATRICULA, matriculaData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });     
            console.log("getCheckMatricula response:", response.data);
            
          setCheckMatricula(response.data);
         
          
        } catch (error) {    
          console.log(error);     
          throw error; // Lanzar el error para que pueda ser capturado en el lugar donde se llama loginUser
        }
      };

    
    return (
        <React.Fragment>
            <Navbar />
            {dataCourse && (
            <PageBanner 
                pageTitle={dataCourse.name}
                homePageUrl="/" 
                homePageText="Home" 
                innerPageUrl="/courses-1" 
                innerPageText="Courses" 
                activePageText="Introducción a haskell" 
            />  
            )}
            {dataCourse && (

            <div className="courses-details-area ptb-100">
                <div className="container">
                    <div className="courses-details-header">
                        <div className="row align-items-center">
                            <div className="col-lg-8 col-md-12">
                                {/* <div className="courses-title">
                                    <p>+++++Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                </div>*/}
                                <div className="courses-meta">
                                    <ul>
                                        <li>
                                            <i className='bx bx-folder-open'></i>
                                            <span>Categoría</span>
                                            <Link href="#"><a>{dataCourse.category.name}</a></Link>
                                        </li>
                                        <li>
                                            <i className='bx bx-group'></i>
                                            <span>Estudiantes</span>
                                            <Link href="#"><a>001</a></Link>
                                        </li>
                                        <li>
                                            <i className='bx bx-calendar'></i>
                                            <span>ÚLTIMA ACTUALIZACIÓN</span>
                                            <Link href="#"><a>{new Date(dataCourse.updatedAt).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: '2-digit',
                                            day: '2-digit'
                                            })}</a></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-12">
                                <div className="courses-price">
                                    <div className="courses-review">
                                        <div className="review-stars">
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                        </div>
                                        <span className="reviews-total d-inline-block">(3 reviews)</span>
                                    </div>

                                    <div className="price">${dataCourse.price}</div>
                                  
                                    
                                    <Link href="#">
                                        <a className="default-btn" onClick={botonClickHandler}>
                                        <i className="flaticon-user"></i> {labelClickHandler} <span></span>
                                        </a>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="courses-details-image-style-two text-center">
                                <img src={`/images/courses/courseAyllu${dataCourse.course_id}.jpg`} alt="image" />
                            </div>

                            <div className="courses-details-desc-style-two">
                                <h3>Descripción</h3>
                                {dataCourse.description}

                                <h3>Contenido</h3>
                                <div className="courses-curriculum">
                                
                                {loading?(
                                              <p>Cargando..</p>
                                            ):error ?(
                                              <p>Ocurrió un error: {errorMessage}</p>
                                            ):(
                                                
                                                dataCourse.modules.map((modulo, index) => (
                                                    <div key={index}>
                                                    <h3 >
                                                    {modulo.name}                                                       
                                                    </h3> 
                                                    <ul>

                                                    {modulo.lessons.map((leccion, leccionIndex) => (
                                                         <li key={leccionIndex}>
                                                         <a href="#" className="d-flex justify-content-between align-items-center">
                                                             <span className="courses-name">{leccion.name}</span>
                                                             {/* <div className="courses-meta">
                                                                <span className="status">Preview</span>
                                                             </div> */}
                                                         </a>
                                                     </li>

                                                    ))}
                                                   
                                                    </ul>
                                                    </div>
                                                ))                                                   
                                            )}

                                    
                                </div>

                                <h3>Lo que aprenderás</h3>
                                <div className="why-you-learn">
                                    <ul>
                                        <li>
                                            <span>
                                                <i className='flaticon-tick'></i>
                                                Fundamentos de blockchain
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className='flaticon-tick'></i>
                                                Cardado blockchain
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className='flaticon-tick'></i>
                                                Lenguaje de programación Haskell
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className='flaticon-tick'></i>
                                                Lenguaje de programación Plutus
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className='flaticon-tick'></i>
                                               Mecanismos deconsenso
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className='flaticon-tick'></i>
                                                Prueba de participación
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className='flaticon-tick'></i>
                                                Proyecto catalyst
                                            </span>
                                        </li>                                        
                                    </ul>
                                </div>

                                <h3>Requirements</h3>
                                <ul className="requirements-list">
                                    <li>Contrary to popular belief, Lorem Ipsum is not simply random text.</li>
                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</li>
                                    <li>The standard Lorem Ipsum passage, used since the 1500s.</li>
                                </ul>

                                <h3>¿Para quién es este curso?:</h3>
                                <ul className="audience-list">
                                    <li>Entuciastas de la tecnología BlockChain</li>
                                    <li>Principiantes en programación y ciencia de datos.</li>
                                    <li>Candidatos que deseen mejorar su currículum aprendiendo cómo combinar el conocimiento de BlockChain y Haskell.</li>
                                 </ul>
                           </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <CoursesDetailsSidebar instructor={dataCourse.author.name}  duration={dataCourse.duration} lessons={dataCourse.lesson} />
                        </div>
                    </div>
                </div>
            </div>
            )}
 
            <YouMightLikeTheCourses />

            <Footer />
        </React.Fragment>
    )
}

export default SingleCourses;
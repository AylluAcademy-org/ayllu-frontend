import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import axios from "axios";

import { useToken } from '../../utils/TokenContext';
import baseUrl from "../../utils/baseUrl";

const apiRouteCour = "courses";
const apiRouteCourPublic = "courses/public";
const API_URL_COUR = `${baseUrl}${apiRouteCour}`;
const API_URL_COUR_PIBLIC = `${baseUrl}${apiRouteCourPublic}`;

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

    const [cursosList, setCursosList] = useState([]);
    const [display, setDisplay] = React.useState(false);
    const { loggedIn, token,logout, userName, userID } = useToken();

    const getCursosList = async () => {     
        if(loggedIn){
            console.log("loeado");   
            axios
          .get(API_URL_COUR_PIBLIC, {
            headers: {
              Authorization: `Bearer ${token}`
            }
        })
          .then((response) => {           
            console.log(response.data);
            setCursosList(response.data);
          })
          .catch((error) => {
            console.log(error);
            return error;
          });
        }   
        else{
            axios
          .get(API_URL_COUR_PIBLIC)
          .then((response) => {     
            console.log("publico");      
            console.log(response.data);
            setCursosList(response.data);
          })
          .catch((error) => {
            console.log(error);
            return error;
          })
        
      };
    }

    React.useEffect(() => {
        getCursosList();
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

                                {cursosList.map((item) => ( 
                                    
                                                                
                                                               
                                    <div className="single-courses-box">
                                    <div className="courses-image">
                                       <Link key={item.course_id} href={`/single-courses-1?id=${item.course_id}`}>
                                                <a className="d-block image">
                                                    <img src={`/images/courses/courseAyllu${item.course_id}.jpg`} alt="image" />
                                                </a>
                                            </Link>
        
                                        <Link href="#">
                                            <a className="fav"><i className="flaticon-heart"></i></a>
                                        </Link>
        
                                        <div className="price shadow">${item.price}</div>
                                    </div>
        
                                    <div className="courses-content">
                                        <div className="course-author d-flex align-items-center">
                                            <img src="/images/ayllu_logo.png" className="rounded-circle" alt="image" />
                                            <span>{item.author.name}</span>
                                        </div>
        
                                        <h3>
                                        <Link href={`/single-courses-2?id=${item.course_id}`}>
                                            <a>{item.name}</a>
                                        </Link>

                                        </h3>
                                        
                                        <p>{item && (item.description.length > 100 ? item.description.substring(0, 100) + '...' : item.description)}</p>

        
                                        <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                            <li>
                                                <i className='flaticon-agenda'></i> {item.lesson} Lessons
                                            </li>
                                            
                                        </ul>
                                    </div>
                                </div>
                                                                
                                 ))} 

                        
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
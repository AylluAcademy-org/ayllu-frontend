import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import {useState, useEffect} from 'react';
import { getCourseById } from '../../pages/api/Courses/courses';
import { useToken } from '../../utils/TokenContext';
import baseUrl from "../../utils/baseUrl";
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});
import axios from 'axios';
const CoursesDetailsSidebar = () => {
       /**Get couse by id */
    const [course, setCourse] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [couseid, setCouseid] = useState(2);
    const { token } = useToken(); 
    const apiRoute = "courses/";
    const API_URL = `${baseUrl}${apiRoute}`;


    /**Get course by Id with AXIOS with parameters*/
    const getCourse = async () => {
        try {
            /**
             * TODO: 
             * 1. Get course by id from REDUX store
             * 2. Get course by id from API
             */
        
            const response = await axios.get(API_URL +'getById?course_id=11',{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log("data",response.data);
            //setCourse(response.data);
            //setLoading(false);
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


    // Popup Video
	const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }
    return (
        <React.Fragment>
            {/* If you want to change the video need to update videoID */}
            <ModalVideo 
                channel='youtube' 
                isOpen={!isOpen} 
                videoId='Qa8IfEeBJqk' 
                onClose={() => setIsOpen(!isOpen)} 
            />
            
            <div className="courses-details-info">
                <div className="image">
                  
                    <img src={course.image} alt="image" />

                    <Link href="#play-video">
                        <a
                            onClick={e => {e.preventDefault(); openModal()}}
                            className="link-btn popup-youtube"
                        ></a>
                    </Link>

                    <div className="content">
                        <i className="flaticon-play"></i>
                        <span>Course Preview</span>
                    </div>
                </div>

                <ul className="info">
               
                    <li>
                        <div className="d-flex justify-content-between align-items-center">
                            <span><i className="flaticon-teacher"></i> Instructor</span>
                            {course.authorId}
                        </div>
                    </li>
                    <li>
                        <div className="d-flex justify-content-between align-items-center">
                            <span><i className="flaticon-time"></i> Duración</span>
                            {course.duration} hrs
                        </div>
                    </li>
                    <li>
                        <div className="d-flex justify-content-between align-items-center">
                            <span><i className="flaticon-distance-learning"></i> Lecciones</span>
                            {course.lesson}
                        </div>
                    </li>
                     <li>
                        <div className="d-flex justify-content-between align-items-center">
                            <span><i className="flaticon-distance-learning"></i> Lecciones</span>
                            {course.lesson}
                        </div>
                    </li>


                    <li>
                        <div className="d-flex justify-content-between align-items-center">
                            <span><i className="flaticon-lock"></i> Precio: </span>
${course.price}                        </div>
                    </li>
                </ul>

                <div className="btn-box">

                    <Link href="#">
                        <a className="default-btn">
                            <i className="flaticon-tag"></i> Comprar ahora <span></span>
                        </a>
                    </Link>
                </div>

            
            </div>
        </React.Fragment>
    )
}

export default CoursesDetailsSidebar;
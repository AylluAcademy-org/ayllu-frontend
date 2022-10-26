import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import {useState, useEffect} from 'react';
import { getCourseById } from '../../pages/api/Courses/courses';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});
import Swal from 'sweetalert2';
import axios from 'axios';
import { Router, useRouter } from 'next/router'

const CoursesDetailsSidebar = () => {
    const API_URL = "https://oh6s1ltanb.execute-api.us-east-1.amazonaws.com/dev/";
    const router = useRouter();

    /**Get couse by id */
    const [course, setCourse] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    //const [couseid, setCouseid] = useState(localStorage.getItem('courseId'));

    //Load page after the api has been called


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

    //Swal alert for the button "Comprar"
    const buyCourse = () => {
        Swal.fire({
            title: '¿Estás seguro que deseas comprar este curso?',
            text: "¡No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '¡Sí, comprar!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    '¡Comprado!',
                    'El curso ha sido comprado.',
                    'success'
                ).then((result) => {
                    if (result.isConfirmed) {
                        router.push('/profile');
                    }
                })
            }
        })
    }



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
                            <span><i className="flaticon-distance-learning"></i> Categoria</span>
                            Blockchain
                        </div>
                    </li>


                    <li>
                        <div className="d-flex justify-content-between align-items-center">
                            <span><i className="flaticon-lock"></i> Precio: </span>
${course.price}                        </div>
                    </li>
                </ul>

                <div className="btn-box">

                    <a className="default-btn"  onClick={()=>buyCourse()}>
                        <i className="flaticon-tag"></i> Comprar ahora <span></span>
                    </a>
                </div>

            
            </div>
        </React.Fragment>
    )
}

export default CoursesDetailsSidebar;
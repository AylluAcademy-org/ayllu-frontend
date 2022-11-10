import React from 'react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getUsersOnCourse } from '../../pages/api/Courses/usersoncourse';
import axios from 'axios';
import { Router, useRouter } from 'next/router' 


const Courses = () => {
    /**get users on Course */
    const API_URL = "https://oh6s1ltanb.execute-api.us-east-1.amazonaws.com/dev/";
    const router = useRouter();
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [user, setUser] = useState('');
    const [userId, setUserId] = useState('');

    //Get courses active from API
    const getCourses = async () => {
        try {
            const response = await axios.get(API_URL + "usersOnCourses/userCoursesActive?user_id=2");
          
            //Add field to responde.data and create a new array
            
            setCourses(response.data);
            setLoading(false)
        } catch (error) {
            console.log("error",error);
            setError(true);
            setErrorMessage(error.message);
            setLoading(false);
        }
    }

    //Get course by ID from API
    const getCourseById = async (courseId) => {
        try {
            const response = await axios.get(API_URL + "courses/getById?course_id=" + courseId);
            return "CURSO";
        }
        catch (error) {
            console.log("error",error);
        }
    }

    useEffect(() => {
        /** Get userID from state */
        const userId = localStorage.getItem('userId');

        /**Get list of courses */
        console.log("Getting Courses");
        getCourses();
        console.log("Courses",courses);

    }, []);

    const seeIndividualCourse = (item) => {
        router.push({
            pathname: "/course-detail-v2",
            asPath: "/course-detail-v2",
            query: {
                idCourse: item.courseId,
            }
        });
        
    };

    return (
        <div className="profile-quizzes pb-70">
            <h3 className="title">Historial de cursos</h3>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Nombre de curso</th>
                            <th>Progreso</th>
                            <th>Rewards</th>
                            <th>Certificado</th>
                        </tr>
                    </thead>

                    <tbody>
                        {loading ? (<h1 className='ml-3'>Loading....</h1>):(
                        <>
                        {courses.map((course, id) => {
                            return    <tr key={id}>
                                <td>
                                        <div onClick={() => seeIndividualCourse(course)} >
                                        <a >{course.courseId}</a>
                                        </div>
                                </td>
                                <td><span className="progress pending">{course.progress}%</span></td>
                                <td>{course.reward} AYLLU</td>
                                <td><button type="button" class="btn btn-secondary btn-sm">Descargar certificado</button>
                                </td>
                                
                            </tr>
                         })}
                         </>
                         )}
                        


                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Courses;
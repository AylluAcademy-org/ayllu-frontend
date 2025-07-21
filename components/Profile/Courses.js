import React from 'react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getUsersOnCourse } from '../../pages/api/Courses/usersoncourse';


const Courses = () => {
    /**get users on Course */
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [user, setUser] = useState('');
    const [userId, setUserId] = useState('');

    useEffect(() => {
        /** Get userID from state */
        const userId = localStorage.getItem('userId');

        getUsersOnCourse(userId).then(response => {
            if (response.status === 200) {
                setCourses(response.data);
                setLoading(false);
            } else {
                setError(true);
                setErrorMessage(response.data.message);
                setLoading(false);
            }
        }
        ).catch(error => {
            setError(true);
            setErrorMessage(error.message);
            setLoading(false);
        }
        );}, []);

    return (
        <div className="profile-quizzes pb-70">
            <h3 className="title">Historial de cursos</h3>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Nombre de curso</th>
                            <th>Instructor</th>
                            <th>Progreso</th>
                            <th>Rewards</th>
                            <th>Certificado</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <Link href="#">
                                    <a>{courses.courseId}</a>
                                </Link>
                            </td>
                            <td>Carlos Pérez</td>
                            <td><span className="progress pending">{courses.progress}</span></td>
                            <td>{courses.reward} AYLLU</td>
                            <td><button type="button" class="btn btn-secondary btn-sm">Descargar certificado</button>
</td>
                            
                        </tr>


                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Courses;
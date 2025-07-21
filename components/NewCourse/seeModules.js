import React from 'react';
import { resetIdCounter, Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useEffect, useState, useRef } from "react";
import { Router, useRouter } from 'next/router'
import { useToken } from '../../utils/TokenContext';
import baseUrl from "../../utils/baseUrl";
import NewModule from './newModule';
import SeeLessons from './seeLessons';
import NewLesson from './newLesson';





resetIdCounter();
import axios from "axios";



const SeeModules = ({ courseId }) => {

    const [modList, setModList] = useState([]);
    const router = useRouter();

    const { token } = useToken();
    const apiModules = "modules/getByCourse";
    const API_URL = `${baseUrl}${apiModules}`;
    const [showNewModuleForm, setShowNewModuleForm] = useState(false);
    const [activeLessonForm, setActiveLessonForm] = useState(null); // module_id actual
    const [lessonRefreshKey, setLessonRefreshKey] = useState({});


    const fetchModules = () => {
        getModules(courseId);
    };

    ///function to get the couses By Category
    const getModules = (courseId) => {
        const requestData = {
            courseId: parseInt(courseId),
        };
        axios.post(`${API_URL}`, requestData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((response) => {
                setModList(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };




    useEffect(() => {
        getModules(courseId);

    }, []);


    /*
        const seeIndividualCourse = (item) =>{
            console.log('click aqui'+item.name);
            router.push('/course-teacher-view-course',item.course_id
           
            );
    
            router.push({            
                pathname:"/course-teacher-view-course",
                asPath: "/courseview",
                query:{
                    idCourse:item.course_id,
                }
            });
        };*/
    const seeIndividualModule = (item) => {
        router.push({
            pathname: "/course-teacher-view-course",
            query: {
                idModule: item.module_id,
            }
        });
    };

    return (

        <React.Fragment>

            <div className="profile-area">
                <div className="container">

                    <div className="profile-box ptb-100">
                        <div className="courses-curriculum">
                            {modList.length === 0 ? (
                                <p className="text-muted">No hay módulos disponibles para este curso.</p>
                            ) : (
                                modList.map((modulo) => (
                                    <div key={modulo.module_id} className="mb-4">
                                        <h4 className="fw-bold text-dark">{modulo.name}</h4>

                                        {/* Listado de lecciones */}
                                       
                                        <SeeLessons
  moduleId={modulo.module_id}
  refreshFlag={lessonRefreshKey[modulo.module_id]}
/>


                                        {/* Botón para agregar nueva lección */}
                                        <div className="mt-2">
                                        <button
  className="btn btn-outline-primary"
  onClick={() => setActiveLessonForm(modulo.module_id)}
>
  ➕ Nueva lección
</button>

{activeLessonForm === modulo.module_id && (
 <NewLesson
 moduleId={modulo.module_id}
 onLessonCreated={() => {
   setActiveLessonForm(null);
   setLessonRefreshKey(prev => ({
     ...prev,
     [modulo.module_id]: (prev[modulo.module_id] || 0) + 1
   }));
 }}
/>

)}

                                        </div>
                                    </div>
                                ))
                            )}
                        </div>


                        {!showNewModuleForm && (
                            <button className="default-btn" onClick={() => setShowNewModuleForm(true)}>
                                Nuevo módulo
                            </button>
                        )}

                        {showNewModuleForm && (
                            <NewModule
                                courseId={courseId}
                                onModuleCreated={() => {
                                    setShowNewModuleForm(false);
                                    fetchModules();
                                }}
                            />
                        )}
                    </div>
                </div>
            </div>


        </React.Fragment>

    )
}

export default SeeModules;
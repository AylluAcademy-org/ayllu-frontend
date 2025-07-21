import React from 'react';
import { resetIdCounter, Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useEffect, useState, useRef } from "react";
import { Router, useRouter } from 'next/router'
import { useToken } from '../../utils/TokenContext';
import baseUrl from "../../utils/baseUrl";
import SeeLessons from '../NewCourse/seeLessons';
import NewTest from './newTest';

resetIdCounter();
import axios from "axios";



const SeeTests = ({ courseId }) => {

    const [modList, setModList] = useState([]);
    const router = useRouter();

    const { token } = useToken();
    const apiModules = "modules/getByCourse";
    const apiTest = "tests/getTestByModuleId";
    const API_URL = `${baseUrl}${apiModules}`;
    const API_URL_TEST = `${baseUrl}${apiTest}`;
    const [showNewModuleForm, setShowNewModuleForm] = useState(false);
    const [activeLessonForm, setActiveLessonForm] = useState(null); // module_id actual
    const [lessonRefreshKey, setLessonRefreshKey] = useState({});
    const [testsPorModulo, setTestsPorModulo] = useState({});



    const fetchModules = () => {
        getModules(courseId);
    };

    ///function to get the couses By Category
    const getModules = async (courseId) => {
        const requestData = { courseId: parseInt(courseId) };
        try {
            const res = await axios.post(API_URL, requestData, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setModList(res.data);
            fetchTestsPorModulo(res.data); // 👈 cargar tests por módulo
        } catch (error) {
            console.error(error);
        }
    };



    const getCourse = (modeuleId) => {
        const requestData = {
            moduleId: parseInt(modeuleId),
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


    const seeIndividualModule = (item) => {
        router.push({
            pathname: "/course-teacher-view-course",
            query: {
                idModule: item.module_id,
            }
        });
    };

    const fetchTestsPorModulo = async (modulos) => {
        const nuevosTests = {};
        for (const mod of modulos) {
            try {
                const res = await axios.post(API_URL_TEST, {
                    moduleId: mod.module_id
                }, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                nuevosTests[mod.module_id] = res.data !== null && res.data !== undefined && res.data.length !== 0;// true si hay test
            } catch (err) {
                console.error("Error al obtener tests para módulo:", mod.module_id, err);
                nuevosTests[mod.module_id] = false;
            }
        }
        setTestsPorModulo(nuevosTests);
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

                                       

                                        {/* Botón para agregar nueva lección */}
                                        <div className="mt-2">
                                            {testsPorModulo[modulo.module_id] ? (
                                                <button
                                                    className="btn btn-outline-secondary"
                                                    onClick={() => console.log("Mostrar test de módulo", modulo.module_id)}
                                                >
                                                    Ver Test
                                                </button>
                                            ) : (
                                                <button
                                                    className="btn btn-outline-primary"
                                                    onClick={() => setActiveLessonForm(modulo.module_id)}

                                                >
                                                    Crear Test
                                                </button>

                                            )}
                                            {activeLessonForm === modulo.module_id && (
                                                <NewTest
                                                    moduleId={modulo.module_id}
                                                    onTestSaved={() => {
                                                        setActiveLessonForm(null);
                                                        fetchTestsPorModulo(modList);
                                                    }}
                                                />
                                            )}
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>


        </React.Fragment>

    )
}

export default SeeTests;
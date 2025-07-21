import React, { useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/_App/Navbar';
import Progressbar from '../components/TestModule/Progress_bar';
import TestView from '../components/TestModule/TestView';
import Link from '../utils/ActiveLink';
import { resetIdCounter, Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useState, useRef } from "react";
import { display } from '@mui/system';
import { TempleBuddhist } from '@mui/icons-material';
import baseUrl from "../utils/baseUrl";
import { useToken } from "../utils/TokenContext";
import { useRouter } from 'next/router'

const apiRouteTestReviewed = "testAnswers/getTestReviewed";
const API_URL_TESTREVIEWED = `${baseUrl}${apiRouteTestReviewed}`;
const sendTokenAPI = "transactions/send-ayllu-token";

resetIdCounter();

const CouseTestResult = () => {
    const router = useRouter();
    const [test, setTest] = useState([]);
    const { loggedIn, token, logout, userName, userID } = useToken();
    const [newTestR, setTestR] = useState({
        userOnCourse_id: "",
        test_id: ""
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const pageTitle = "Resultados del examen";
    const nameModule = "";
    const resultArray = [{ quest: '¿Esta es la pregunta 1?', answ: 'Answer 3', isCorrect: false }, { quest: '¿Esta es la pregunta 2?', answ: 'Answer 1', isCorrect: false }, { quest: '¿Esta es la pregunta 3?', answ: 'Answer 4', isCorrect: true }, { quest: '¿Esta es la pregunta 4?', answ: 'Answer 2', isCorrect: true }];
    const numberQ = resultArray.length;
    const minGrade = 3;

    //const { userOnCourse_id, test_id } = { userOnCourse_id: 9, test_id: 1 };


  const [userOnCourse_id, setUserOnCourse_id] = useState(null);
  const [test_id, setTest_id] = useState(null);
  const [courseId, setCourseId] = useState(null);

      useEffect(() => {
  if (router.isReady) {
    setUserOnCourse_id(router.query.userOnCourseId);
    setTest_id(router.query.testId);
    setCourseId(router.query.courseId);
  }
}, [router.isReady]);

    const getTests = async () => {
        try {
            const testData = {
                ...newTestR,
                userOnCourse_id: Number(userOnCourse_id),
                test_id: Number(test_id)
            };

            const response = await axios.post(API_URL_TESTREVIEWED, testData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setTest(response.data);
        } catch (error) {
            console.log(error);
            setError(true);
            setErrorMessage(error.message);
            setLoading(false);
        }
    }
    const botonClickHandler = () => {
        console.log("Botón clickeado");
        router.push({
            pathname: '/single-courses-profile',
            query: { 
                id: courseId ,
            userOnCourseId: userOnCourse_id }
        });
    }

    useEffect(() => {
        if (loggedIn && userOnCourse_id && test_id) {
            getTests();
            sendToken();
        }
    }, [loggedIn, userOnCourse_id, test_id]);

    const getNumberCorrect = arr => {
        if (test && test.questions) {
            const correctQuestions = test.questions.filter(question => question.isCorrect);
            return correctQuestions.length;
        } else {
            return 0;
        }
    };

    const Message = (minG, grade) => {
        let mess = {};
        if (grade >= minG) {
            mess = {
                mess1: '¡Lo lograste!',
                mess2: `Obtuviste una calificación mayor o igual a ${minG}`
            };
        } else {
            mess = {
                mess1: '¡No te rindas!',
                mess2: `Necesitas una calificación minima de ${minG} para aprobar`
            };
        };
        return mess;
    }

    const numberCorrect = getNumberCorrect(resultArray);
    const grade=(numberCorrect*10)/resultArray.length;
    const message = Message(minGrade, grade);

    //metodo getToken   que devuelve api_key 
    
const getToken = async () => {
    try {
        const response = await axios.get('https://nyhmzf5maa.us-east-1.awsapprunner.com/generate-api-key');
        console.log(response.data);
    } catch (error) {
        console.error('Error al obtener el token:', error);
    }
};

    const sendToken = async () => {
        try {
            //llamar a getTOKEN para luefo crear la cacebera de la nueva peticion
            getToken();
            //llamar a la API para enviar el token
            const address='addr_test1qpd7qhar0kcvkannh9q2hd9z47e0ed2addc3ygu37y3w206xa3760a5zdthtxfm6pt47dqnz3mlm0y8gel6syhuyekpqenezxq';
            const response = await axios.get(`https://nyhmzf5maa.us-east-1.awsapprunner.com/api/v1/transactions/send-ayllu-token/?destinAddress=${address}&token_quantity=20`);
            console.log(response.data);
        } catch (error) {
            console.error('Error al enviar el token:', error);
        }
    };

    return (
        <React.Fragment>
            <Navbar />
            <div className="test-result-area">
                <div className="test-title-course-module">
                    <h4>{pageTitle} - {nameModule}</h4>
                </div>
                <div className='result-area-message'>
                    <div className='area-message'>
                        <h3>{message.mess1}</h3>
                        <h4>{message.mess2}</h4>
                    </div>
                    <div className='area-grade'>
                        <div className='area-grade-box ' >
                            <h3>{grade.toFixed(2)}</h3>
                            <p>Calificación</p>
                        </div>
                        <div className='area-grade-box-sep'></div>
                        <div className='area-grade-box '>
                            <h3>{numberCorrect} <span className='grade-numberQ'>/ {numberQ}</span></h3>
                            <p>Aciertos</p>
                        </div>
                    </div>
                </div>
                <div className='area-response-result'>
                    <div className='area-showQ'>
                        {test.questions && test.questions.length > 0 ? (
                            test.questions.map((preg, index) => (
                                <div className='showQ' key={index}>
                                    <div className='showQ-question-area'>
                                        <div className='showQ-question-number'><p>{index + 1}.  </p></div>
                                        <div className='showQ-question-q'><p>{preg.text}</p></div>
                                    </div>
                                    <div className='showQ-answer-area'>
                                        {preg.isCorrect ? (
                                            <div className='showQ-answer-correct'>
                                                <p className='showQ-answer'> {preg.Respuesta}</p>
                                                <p className='showQ-answer-mark'>✓</p>
                                            </div>
                                        ) : (
                                            <div className='showQ-answer-incorrect'>
                                                <p className='showQ-answer'> {preg.Respuesta} </p>
                                                <p className='showQ-answer-mark'>X</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No hay preguntas disponibles</p>
                        )}
                    </div>
                    {/* Botón de regresar debe estar fina del div */}
                    <div className='area-button-back' style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                        <Link href="#">
                                                            <a className="default-btn" onClick={() => botonClickHandler()} >
                                                            <i className="flaticon-user"></i> {"regresar"} <span></span>
                                                            </a>
                                                        </Link>
                                                        </div>
                </div>
                 
            </div>
           
        </React.Fragment>
    );
}

export default CouseTestResult;

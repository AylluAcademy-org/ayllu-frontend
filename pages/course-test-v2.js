import React from 'react';
import Navbar from '../components/_App/Navbar';
import Progressbar from '../components/TestModule/Progress_bar';
import TestView from '../components/TestModule/TestView';
import Link from '../utils/ActiveLink';
import Swal from "sweetalert2";
import { resetIdCounter, Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useEffect, useState,useRef } from "react";
import { display } from '@mui/system';



import baseUrl from "../utils/baseUrl";
import { useToken } from "../utils/TokenContext";
import {Router,useRouter }  from 'next/router'

resetIdCounter();
const apiRouteQuestionByTest= "questions/getQuestionsByTest";
const API_URL_QUESTIONSBYTEST = `${baseUrl}${apiRouteQuestionByTest}`;

const apiRouteSaveTest= "testAnswers/createUserTestAnswers";
const API_URL_SAVETEST = `${baseUrl}${apiRouteSaveTest}`;

const apiRouteGetRewards= "rewards/getRewardsByUserAndTest";
const API_URL_GETREWARDS = `${baseUrl}${apiRouteGetRewards}`;
import axios from "axios";

const CouseTestV2 = () => {
    const pageTitle="Introducción a Haskell";
    const titlePageUrl="/single-courses-1";
    const nameModule="Exam module 3";
    const [testArr, setTestArr] = useState([]);
    const numberQ=testArr.length;
    const [idQuestionactual, setIdQActual] = useState(0);
    const [textQuestionactual, setTextqActual] = useState('');
    const [actualQ, setActualQ] = useState(1);
    const [showN, setShowN] = useState(true); 
    const porcNQ = (idQuestionactual*100)/numberQ;
    const {loggedIn, token,logout, userName, userID } = useToken();
    const [userTestAnswers, setUserTestAnswers] = useState([]);
    const [PrimerAcceso, setPrimerAcceso] = useState(false);

    const router = useRouter();

    const {
        query:{testId, courseId, userOnCourseId},
    } = router;

    const props = {
        testId,
        courseId,
        userOnCourseId,
    };

    const examid= props.testId;
    const courseid= props.courseId;
    const userOnCourseid= props.userOnCourseId;
    useEffect(()=> {
        getRewardsByUserAndTest(userOnCourseid, examid);
        getResponseQ(examid);        
    },[]);

    const fetchQuestions =  (testId) => {
        axios
        .post(API_URL_QUESTIONSBYTEST, {
            params: {
              testId: testId,
            },
          })
          .then((res) => {
            setTestArr(res.data);   

          })
          .catch((error) => {
            console.log(error);
          });
      };
    

    const getResponseQ = (testId)=>{ 
        axios.post(
            API_URL_QUESTIONSBYTEST,
            `{\n    "testId": ${testId}\n}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
    ).then((response) => {        
        setTestArr(response.data); 
        if (response.data && response.data.length > 0) {              
            setIdQActual(response.data[0].question_id);                                            
            setTextqActual(response.data[0].text);             
        }      

      })
      .catch((error) => {
        console.log(error);
      });
    };
    
    const getRewardsByUserAndTest = async (userId, testId) => {
         axios.post(
            API_URL_GETREWARDS,
            `{\n    "test_id": ${testId},\n"student_id": ${userId}\n}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
    ).then((response) => {   
            console.log("Respuesta de recompensas:+++++", response.data.hasReward);   
            if (response.data.hasReward) {
                Swal.fire({
                    title: "Ayllu",
                    text: "Ya has completado este test, puedes revisar tus resultados.",
                    icon: "info",
                    showConfirmButton: false,
                    timer: 1800
                });
                 setTimeout(() => {
          router.push({
            pathname: '/single-courses-profile',
            query: {
              id: courseid,
                userOnCourseId: userOnCourseid,
                userId: userID
            },
          });
        }, 1800);
            }
         

      })
      .catch((error) => {
        console.log(error);
      });
    };

    const printSelectedOptions = () => {
        console.log("Preguntas con opciones seleccionadas:");
        indexBtnClicked.forEach((item, index) => {
          console.log(`Pregunta ${index + 1}: ${item.quest}`);
          console.log(`Respuesta seleccionada: ${item.ans.text}`);
          console.log("-----");
        });
      };
      
    
    


    const [indexBtnClicked, setIndexBtnClicked] = useState([]);
    

    const handleClick = index => {     
    const currentQuestionId = testArr[actualQ - 1].question_id;

    // Verificar si ya hay una respuesta para la pregunta actual
    const questionAlreadyAnswered = userTestAnswers.some(answer => answer.question_id === currentQuestionId);


    if (!questionAlreadyAnswered) {
        const answer = {
            userOnCourse_id:  Number(userOnCourseid) , 
            test_id: Number(testId), // Reemplaza con el valor correcto
            question_id: currentQuestionId,
            optionSelected: index.id,
            value: false, // Reemplaza con el valor correcto
        };
        console.log(answer);

        setUserTestAnswers(prevAnswers => [...prevAnswers, answer]);
    } else {
        // La pregunta ya tiene una respuesta, se debe actualizar la respuesta de la pregunta actual
        const updatedAnswers = userTestAnswers.map(answer => {
            if (answer.question_id === currentQuestionId) {
                return {
                    ...answer,
                    optionSelected: index.id,
                };
            }
            return answer;
        } )
    }
        
        setIndexBtnClicked(indexBtnClicked => {
            const existingQuestion = indexBtnClicked.find(item => item.quest === testArr[actualQ-1].question_id);
          
            if (existingQuestion) {
              // Si la pregunta ya está en el arreglo, actualiza el valor de ans
              existingQuestion.ans = index;
              return [...indexBtnClicked];
            } else {
              // Si la pregunta no está en el arreglo, agrégala
              return [...indexBtnClicked, { quest: testArr[actualQ-1].question_id, ans: index }];
            }
          });
          
    }

    

    function btnPreviousQ() {
        setActualQ((prevQ) => Math.max(prevQ - 1, 1)); // Asegurarse de que no sea menos de 1
        if (actualQ === 1) {
            // Si se está en la primera pregunta, no hacer nada
            return;
        }
        else{
            const newQuestion = testArr[actualQ - 2];
            setIdQActual(newQuestion.question_id);
            setTextqActual(newQuestion.text);
            setShowN(true);
        }
        
    }
    

    
   

    function btnNextQ() {
        setActualQ((prevActualQ) => {
            const newActualQ = prevActualQ + 1;
            if (newActualQ <= numberQ) {
                // Actualiza la pregunta actual
                const newQuestion = testArr[newActualQ - 1];
                setIdQActual(newQuestion.question_id);
                setTextqActual(newQuestion.text);
    
                // Muestra o esconde el botón "Terminar"
                setShowN(newActualQ !== numberQ);
    
                return newActualQ;
            } else {
                // Retornar el valor actual sin hacer cambios si se ha alcanzado la última pregunta
                return prevActualQ;
            }
        });
    }



    function btnFiQ() {
        printSelectedOptions();
        // Verificar si todas las preguntas tienen respuestas
        const todasLasPreguntasRespondidas = numberQ > 0 && indexBtnClicked.length === numberQ;
    
        const enviarRespuestas = async () => {
            if (todasLasPreguntasRespondidas) {
                console.log("este es el token:", token);
                try {
                    const response = await axios.post(API_URL_SAVETEST, userTestAnswers, {
                        headers: {
                            Authorization: `Bearer ${token}`,  // Reemplaza con tu lógica para obtener el token
                        },
                    });
                    console.log('Respuesta del servidor:', response.data);
                    //mostrar mensaje de que el test se guardo correctamente
                    Swal.fire({
                        title: "Ayllu",
                        text: "Listo!! test guardado",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1800
                    });

                   
                    
                    // Actualizar el estado o realizar otras acciones según sea necesario
                    
                    router.push({
                       pathname: '/course-test-result',
                        query: {
                            userOnCourseId: userOnCourseId,
                            userID: userID,
                            courseId: courseid,
                            testId: examid
                        },
                    });

                } catch (error) {
                    console.error('Error al hacer la solicitud:', error);
                    // Manejar el error, por ejemplo, redireccionar a una página de error o mostrar un mensaje al usuario.
                }
            } else {
                // Mostrar mensaje de error
                Swal.fire({
                    title: "Ayllu",
                    text: "Por favor, responde todas las preguntas antes de terminar.",
                    icon: "warning",
                    showConfirmButton: false,
                    timer: 1800,
                });
            }
        };
    
        // Llamar a la función asincrónica
        enviarRespuestas();
    }
    


        
        
    return (
        
        <React.Fragment>

            <Navbar />
            <div className="test-title-area">
                <div className="test-title-course">    
                        <Link href={titlePageUrl}>
                            <h2>{pageTitle}</h2> 
                        </Link>                               
                      
                    <div className='test-moduleQ'>
                        <h4>{nameModule}</h4>
                        <h5>Pregunta {idQuestionactual} de {numberQ}</h5>                        
                    </div>

                    <div className='test-progressbar'>
                        <Progressbar bgcolor="#fe4a55" progress={porcNQ}  height={5} />
                    </div>               
                              
                                                       
                </div>

                <TestView
                    onClick={handleClick} 
                    currentQ={{ id: idQuestionactual, text: textQuestionactual }}
                />

                
            <div className='testAreaButton'>                
                 
                <button onClick={btnPreviousQ} disabled={actualQ === 1} className="btn-test-previous">  Anterior</button>
                 
                                
                {showN ? (
                    <button onClick={btnNextQ} className="btn-test-next">Siguiente</button> 
                    ) : (

                        //<Link href="/course-test-result">
                            <button onClick={btnFiQ} className="btn-test-next">Terminar</button>
                        //</Link>
                        
                    )}           
            </div> 

                  
            </div>          
                   
                  
        </React.Fragment>
        
    )
}

export default CouseTestV2;
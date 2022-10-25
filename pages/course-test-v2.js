import React from 'react';
import Navbar from '../components/_App/Navbar';
import Progressbar from '../components/TestModule/Progress_bar';
import TestView from '../components/TestModule/TestView';
import Link from '../utils/ActiveLink';
import { resetIdCounter, Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useEffect, useState,useRef, componentDidMount } from "react";
import { display } from '@mui/system';
import {getTestByModuleId} from "./api/Tests/test";
import {createUserTestAnswers} from "./api/Tests/answers";
import {useRouter} from "next/router";
import {getQuestionsByTestId} from './api/Tests/questions';
resetIdCounter();
import axios from "axios";
const API_URL = "https://oh6s1ltanb.execute-api.us-east-1.amazonaws.com/dev/";


const CouseTestV2 = () => {
    const [testArr, setTestArr] = useState([]);
    const pageTitle="Introducción a Haskell";
    const titlePageUrl="/single-courses-1";
    const nameModule="Exam module 3";
    //const questionArray=[{quest:'Esta es la pregunta 1?',answ:['Answer 1','Answer 2','Answer 3','Answer 4']},{quest:'Esta es la pregunta 2?',answ:['Answer 1','Answer 2']},{quest:'Esta es la pregunta 3?',answ:['Answer 1','Answer 2','Answer 3','Answer 4']}];
    const responseTest= [{
          "question_id": 1,
          "text": "En que año y por quienes fue creado Haskell?",
          "order": 1,
          "status": true,
          "testId": 2,
          "createdAt": "2022-06-02T02:53:47.850Z",
          "updatedAt": "2022-06-02T02:53:47.850Z",
          "options": [
            {
              "text": "option 1",
              "order": 1
            },
            {
              "text": "option 2",
              "order": 2
            }]
        },
        {
          "question_id": 2,
          "text": " Haskell?",
          "order": 2,
          "status": true,
          "testId": 2,
          "createdAt": "2022-06-02T02:56:32.284Z",
          "updatedAt": "2022-06-02T02:56:32.284Z",
          "options": [ {
            "text": "option 1 q2",
            "order": 1
          },
          {
            "text": "option 2 q2",
            "order": 2
          }]
        }];
    
    const numberQ=testArr.length;
    const [actualQ, setActualQ] = useState(0);
    const [showN, setShowN] = useState(true); 
    
    const porcNQ = (actualQ*100)/numberQ;
    const router = useRouter();
    const [actualP, setActualP] = useState(0);
    const {
        query:{test},
    } = router;

    const props = {
        test
    };



    const examid= props.test;

    


    const getResponseQ = (testId)=>{ 
        axios.post(
            'https://oh6s1ltanb.execute-api.us-east-1.amazonaws.com/dev/questions/getQuestionsByTest',
            `{\n    "testId": ${testId}\n}`,
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
    ).then((response) => {
        console.log(response.data);
        setTestArr(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    };

    
    useEffect(()=> {
        getResponseQ(examid); 
        
    },[]);


    useEffect(()=> {
        setActualP(testArr.find(questionActual => questionActual.order===actualQ)); 
              
    },[actualQ]);

    
    

    
    
   /*
    const getTestArr = async (examid) => {
        const testArr = await getQuestionsByTestId(examid);
        console.log(testArr);

        getTestArr(examid);

        
    useEffect(() => {
        getQuestionsByTestId("testId:examid").then(response => {
            setTestArr(response.data);
            
            if (response.status === 200) {
                setTestArr(response.data);
                console.log("hola");
                console.log(response.data);
                console.log("adios");
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
    };
    */
      
    const actualObject = responseTest.find(questionActual => questionActual.order===actualQ);


    var actualObject2 = testArr.find(questionActual => questionActual.order===actualQ);
    
  
    
    //Save response.data in local storage called arrPregAct
    //localStorage.setItem("arrPregAct", JSON.stringify(testArr.find(questionActual => questionActual.order===actualQ)));
    //console.log(actualObject2);
    //setTestArr(getQuestionsByTestId(examid))
    //console.log(actualObject);

    const [indexBtnClicked, setIndexBtnClicked] = useState([]);
    const handleClick = index => {
        //setIndexBtnClicked(indexBtnClicked => [...indexBtnClicked, {quest:questionArray[actualQ-1].quest,ans:index}]);       
        setIndexBtnClicked(indexBtnClicked => [...indexBtnClicked, {quest:actualObject2,ans:index}]);  
    }


    

    function btnPreviousQ () {
        setActualQ(actualQ -1);        
        if(!showN ===true){
            setShowN(!showN);
        };
    };

   

    function btnNextQ () {
        setActualQ(actualQ + 1);  
        if(actualQ + 1 === numberQ){
            setShowN(!showN);
        };
    };

    function btnStart () {
        setActualQ(actualQ + 1);  
        console.log("debugging hola 2"); 
        console.log(testArr);
        console.log("debugging");   
        setActualP(0);  
        console.log(actualP);
    };

    function btnFiQ () {
        console.log('Fin de la prueba');
        console.log(indexBtnClicked);       
        
    };
    
    function mostrarBoton (){
        if (actualQ == 0){
            return <button onClick={btnStart} className="btn-test-next">Iniciar examen</button>
        }else  if (showN === true) {
            return <button onClick={btnNextQ} className="btn-test-next">Siguiente</button> 
        }{
            return <Link href="/course-test-result"><a onClick={btnFiQ} className="btn-test-next">Terminar</a></Link>
        }
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
                        <h5>Pregunta {actualQ} de {numberQ}</h5>                        
                    </div>

                    <div className='test-progressbar'>
                        <Progressbar bgcolor="#fe4a55" progress={porcNQ}  height={5} />
                    </div>               
                              
                                                       
                </div>

                <TestView
                    onClick={handleClick} 
                    actualP={actualQ}
                    testArr={testArr}
                />

                
            <div className='testAreaButton'>                
                {/*<button onClick={btnPreviousQ}  disabled={actualQ ===1 }className="btn-test-previous">Anterior</button>  */  }                
                 {/*}               
                {showN ?  (
                    <button onClick={btnNextQ} className="btn-test-next">Siguiente</button> 
                    ) : (

                        <Link href="/course-test-result">
                            <a onClick={btnFiQ} className="btn-test-next">Terminar</a>
                        </Link>
                        
                    )}    */}    
                {mostrarBoton()}   
            </div> 

                  
            </div>          
                   
                  
        </React.Fragment>
        
    )
}

export default CouseTestV2;
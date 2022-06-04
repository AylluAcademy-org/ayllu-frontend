import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/SingleCourses/PageBanner';
import CoursesDetailsSidebar from '../components/SingleCourses/CoursesDetailsSidebar';
import YouMightLikeTheCourses from '../components/Courses/YouMightLikeTheCourses';
import Progressbar from '../components/TestModule/Progress_bar';
import TestView from '../components/TestModule/TestView';
import Link from '../utils/ActiveLink';
import { resetIdCounter, Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useEffect, useState,useRef } from "react";
import { display } from '@mui/system';
resetIdCounter();


const CouseTestV2 = () => {
    const pageTitle="Introducción a Haskell";
    const titlePageUrl="/single-courses-1";
    const nameModule="Exam module 3";
    const questionArray=[{quest:'Esta es la pregunta 1?',answ:['Answer 1','Answer 2','Answer 3','Answer 4']},{quest:'Esta es la pregunta 2?',answ:['Answer 1','Answer 2']},{quest:'Esta es la pregunta 3?',answ:['Answer 1','Answer 2','Answer 3','Answer 4']}];
    const numberQ=questionArray.length;
    const [actualQ, setActualQ] = useState(1);
    const [showN, setShowN] = useState(true);    
    const porcNQ = (actualQ*100)/numberQ;
    
    

    const [indexBtnClicked, setIndexBtnClicked] = useState([]);
    const handleClick = index => {
        setIndexBtnClicked(indexBtnClicked => [...indexBtnClicked, {quest:questionArray[actualQ-1].quest,ans:index}]);       
    }


    

    function btnPreviousQ () {
        setActualQ(actualQ -1);        
        if(!showN ===true){
            setShowN(!showN);
        }
    };

   

    function btnNextQ () {
        setActualQ(actualQ + 1);  
        if(actualQ + 1 === numberQ){
            setShowN(!showN);
        };

        
        
        
    };

    function btnFiQ () {
        console.log('Fin de la prueba');
        console.log(indexBtnClicked);       
        
    };

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
                    currentQ={questionArray[actualQ-1]}
                />

                
            <div className='testAreaButton'>                
                <button onClick={btnPreviousQ}  disabled={actualQ ===1 }className="btn-test-previous">Anterior</button>                    
                                
                {showN ? (
                    <button onClick={btnNextQ} className="btn-test-next">Siguiente</button> 
                    ) : (

                        <Link href="/course-test-result">
                            <a onClick={btnFiQ} className="btn-test-next">Terminar</a>
                        </Link>
                        
                    )}           
            </div> 

                  
            </div>          
                   
                  
        </React.Fragment>
        
    )
}

export default CouseTestV2;
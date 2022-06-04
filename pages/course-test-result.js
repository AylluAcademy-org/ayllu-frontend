import React from 'react';
import Navbar from '../components/_App/Navbar';
import Progressbar from '../components/TestModule/Progress_bar';
import TestView from '../components/TestModule/TestView';
import Link from '../utils/ActiveLink';
import { resetIdCounter, Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useEffect, useState,useRef } from "react";
import { display } from '@mui/system';
import { TempleBuddhist } from '@mui/icons-material';
resetIdCounter();


const CouseTestResult = () => {
    const pageTitle="Introducción a Haskell";
    const titlePageUrl="/single-courses-1";
    const nameModule="Exam module 3";
    const resultArray=[{quest:'¿Esta es la pregunta 1?',answ:'Answer 3',isCorrect:false},{quest:'¿Esta es la pregunta 2?',answ:'Answer 1',isCorrect:false},{quest:'¿Esta es la pregunta 3?',answ:'Answer 4',isCorrect:true},{quest:'¿Esta es la pregunta 4?',answ:'Answer 2',isCorrect:true}];
    const numberQ=resultArray.length;
    const minGrade=5.0;    
    const grade=5;

    const getNumberCorrect =arr =>{
        let contG=0;
        for(let i=0;i<numberQ;i++){
            if(arr[i].isCorrect) contG++
        };
        return contG;

    };

    const Message = (minG,grade)=>{
        let mess ={};
        if(grade >= minG){
            mess={
                mess1:'¡Lo lograste!',
                mess2:`Obtuviste una calificacion mayor o igual a ${minG}`
            };
        }else{
            mess={
                mess1:'¡No te rindas!',
                mess2:`Necesitas una calificacion minima de ${minG} para aprobar`
            };
        };
        return mess;
    }
    
    const numberCorrect=getNumberCorrect(resultArray);
    const message =Message(minGrade,grade);
        
  
    

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
                            {resultArray.map((item,index) => (     
                                <div className='showQ'>
                                    <div className='showQ-question-area' >
                                        <div className='showQ-question-number' ><p>{index+1}.  </p> </div>
                                        <div className='showQ-question-q' ><p>{item.quest}</p></div>
                                    </div>
                                    
                                    {item.isCorrect? (
                                            <div className='showQ-answer-correct'>
                                                <p className='showQ-answer'> {item.answ}</p>
                                                <p className='showQ-answer-mark'>✓</p>
                                            </div>
                                        ) : (
                                            <div className='showQ-answer-incorrect'>
                                                <p className='showQ-answer'> {item.answ} </p>
                                                <p className='showQ-answer-mark'>X</p>
                                            </div>                        
                                        )}  
                                </div>                                                    
                                
                            ))} 
                    </div>
                </div>               
            </div>          
                   
                  
        </React.Fragment>
        
    )
}

export default CouseTestResult;
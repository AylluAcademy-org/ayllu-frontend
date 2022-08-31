import React from 'react';
import { useEffect, useState } from "react";
import { getOptions } from '../../pages/api/Tests/options';
import axios from "axios";
const API_URL = "https://oh6s1ltanb.execute-api.us-east-1.amazonaws.com/dev/";

const TestView = ( { onClick,currentQ}) => {
    let contL=0;
    const AB=['A','B','C','D','E','F','G','H','I'];
    const [options, setOptions] = useState([]);
    const [options2, setOptions2] = useState([]);
    //console.log("hola");
    console.log(currentQ);
    
        /** Get questionId from state */
        //const qtId = currentQ.question_id;
        const qtId =7;
        useEffect(()=> {  
            const controller = new AbortController();                             
            getOptions(qtId);      
            return () => {
              controller.abort()
            };      
        },[]);

        const client = axios.create({
          baseURL: "https://oh6s1ltanb.execute-api.us-east-1.amazonaws.com/dev/" 
        });

        {/*
      
        const getOptions =  (question_id) => {
            
            client.post( "options/getOptionsByQuestion", {
              params: {
                questionId: question_id,
              },
            })
            .then((response) => {
              setOptions(response.data);
            })
            .catch((error) => {
              console.log(error);
              return error;
            });
          };
      */}

        
        console.log(options);
        //console.log(qtId);
        console.log(currentQ);
    return (
        
            <div className='test-part'>
               
                <div className='question-area'>
                    {/*<p>{currentQ.text}</p>
                     <p>{qt}</p>  */}
                    
                    <div className='answer-area '>
                        {options.map((item,index) => ( 
                                                      
                            <div ><button className='buttonUnAnswer'  onClick={()=> onClick(item)}><span>{AB[index]}</span>{item.text}</button></div>
                            
                        ))}                      
                      
                    </div>

                </div>                
            </div>
           
            
        
    );
}

export default TestView ;

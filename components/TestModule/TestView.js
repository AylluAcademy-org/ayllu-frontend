import React from 'react';
import { useEffect, useState } from "react";
//import { getOptions } from '../../pages/api/Tests/options';
import axios from "axios";
const API_URL = "https://oh6s1ltanb.execute-api.us-east-1.amazonaws.com/dev/";

const TestView = ( { onClick,currentQ}) => {
    let contL=0;
    const AB=['A','B','C','D','E','F','G','H','I'];
    const [options, setOptions] = useState([]);
    const [actualq, setActualq] = useState(currentQ);
    const [options2, setOptions2] = useState([]);
   
     
        /** Get questionId from state */
        //const qtId = currentQ.question_id;
        const qtId =1;
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

      const getOptions = (question_id)=>{ 
        axios.post(
          'https://oh6s1ltanb.execute-api.us-east-1.amazonaws.com/dev/options/getOptionsByQuestion',
          `{\n    "questionId": ${question_id}\n}`,
          {
              headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
              }
          }
    ).then((response) => {
        console.log(response.data);
        setOptions(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    };

        
        


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

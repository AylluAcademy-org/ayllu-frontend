import React from 'react';
import { useEffect, useState } from "react";
import { getOptions } from '../../pages/api/Tests/options';
import axios from "axios";
const API_URL = "https://oh6s1ltanb.execute-api.us-east-1.amazonaws.com/dev/";

const TestView = ( { onClick,currentQ}) => {
    let contL=0;
    const AB=['A','B','C','D','E','F','G','H','I'];
    const [options, setOptions] = useState([]);
    const [qt, setQt] = useState({});
    //console.log("hola");
    //console.log(currentQ.question_id);
    
        /** Get questionId from state */
        //const qtId = currentQ.question_id;
        const qtId =qt.question_id;
        useEffect(()=> {
            setQt(currentQ);
            fetchOptions(qtId);
        },[]);

        const fetchOptions =  (question_id) => {
            axios
              .post(API_URL + "options/getOptionsByQuestion", {
                params: {
                  questionId: question_id,
                },
              })
              .then((res) => {
                setOptions(res.data);
              })
              .catch((error) => {
                console.log(error);
              });
          };
        
        console.log(options);
        //console.log(qtId);
        console.log(qt);
    return (
        
            <div className='test-part'>
               
                <div className='question-area'>
                    {/*<p>{currentQ.text}</p> */}
                    <p>{qt.text}</p>
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

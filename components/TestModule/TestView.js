import React from 'react';
import { useEffect, useState } from "react";
//import { getOptions } from '../../pages/api/Tests/options';
import axios from "axios";
const API_URL = "https://oh6s1ltanb.execute-api.us-east-1.amazonaws.com/dev/";

const TestView = ({ onClick, actualP, testArr }) => {
  let contL = 0;
  const AB = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
  const [options, setOptions] = useState([]);
  const [QActual, setQActual] = useState("");
  const [actualq, setActualq] = useState([]);
  const [options2, setOptions2] = useState([]);

  //red arrPregAct from local storage
  //const arrPregAct = JSON.parse(localStorage.getItem("arrPregAct"));
  //console.log(arrPregAct);


  /** Get questionId from state */
  //const qtId = currentQ.question_id;
  const qtId = 1;
 
  useEffect(() => {
    setActualq(testArr.find(questionActual => questionActual.order===actualP)); 
    if (actualq === undefined) {
      setQActual("Iniciando la prueba")
    }else {
      setQActual(actualq.text);
      setOptions2(actualq.question_id);
      console.log(options2);
      
    }

    
  });
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

  const getOptions = (question_id) => {
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
  useEffect(() => {
    if(actualq !== undefined){
    getOptions(options2);
    console.log(options);
  }
}, [options2]);



  function showQ(){
    if(actualP===0){
      return <div className='question-area'><p>{QActual}</p></div>
    } else {
      return <div className='question-area'> 
                <p>{QActual}</p>
                <div className='answer-area '>
                  {options.map((item, index) => (
                    <div ><button className='buttonUnAnswer' onClick={() => onClick(item)}><span>{AB[index]}</span>{item.text}</button></div>
                  ))}
                </div>
             </div>

    }
  }



  return (

    <div className='test-part'>
      {showQ()}
      
    </div>



  );
}

export default TestView;

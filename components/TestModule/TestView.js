import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";

import baseUrl from "../../utils/baseUrl";
import { useToken } from "../../utils/TokenContext";
import {Router,useRouter }  from 'next/router'



const apiRouteOptionsByQuestion= "options/getOptionsByQuestion";
const API_URL_OPTIONSBYQUESTIONS = `${baseUrl}${apiRouteOptionsByQuestion}`;


const TestView = ({ onClick, currentQ }) => {
  const AB = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
  const [options, setOptions] = useState([]);
  const [actualq, setActualq] = useState(currentQ);
  const { loggedIn, token, logout, userName, userID } = useToken();

  useEffect(() => {
      const controller = new AbortController();
      if (currentQ.id) {
          getOptions(currentQ.id);
      }
      return () => {
          controller.abort();
      };
  }, [currentQ.id]);

  const getOptions = (question_id) => {
      axios
          .post(
              API_URL_OPTIONSBYQUESTIONS,
              `{\n    "questionId": ${question_id}\n}`,
              {
                  headers: {
                      Authorization: `Bearer ${token}`,
                  },
              }
          )
          .then((response) => {
              console.log(response.data);
              setOptions(response.data);
          })
          .catch((error) => {
              console.log(error);
          });
  };

  return (
      <div className="test-part">
          <div className="question-area">
              {options.length > 0 ? (
                  <p>{currentQ.text}</p>
              ) : (
                  <p>Cargando opciones...</p>
              )}

              <div className="answer-area">
                  {options.map((item, index) => (
                      <div key={index}>
                          <button
                              className="buttonUnAnswer"
                              onClick={() => onClick(item)}
                          >
                              <span>{AB[index]}</span>
                              {item.text}
                          </button>
                      </div>
                  ))}
              </div>
          </div>
      </div>
  );
};

export default TestView;

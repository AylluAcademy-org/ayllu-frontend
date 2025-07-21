import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useToken } from '../../utils/TokenContext';
import baseUrl from "../../utils/baseUrl";

const SeeLessons = ({ moduleId,refreshFlag = 0}) => {
  const [module, setModule] = useState({});
  const [lessons, setLessons] = useState([]);
  const router = useRouter();
  const { token } = useToken(); // Asume que ya tienes este contexto

  const apiModules = "modules/getById";   
  const API_URL_MODULE = `${baseUrl}${apiModules}`;

  const apiLessons = "lessons/getByModule";   
  const API_URL_LESSON = `${baseUrl}${apiLessons}`;


  const getModule = (moduleId) => {
    const requestData = {
        module_id: parseInt(moduleId),
    };
    axios.post(`${API_URL_MODULE}`, requestData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then((response) => {  
      setModule(response.data);
    })
    .catch((error) => {             
        console.log(error);
    });
};

const getLessons = (moduleId) => {
  const requestData = {
    moduleId: parseInt(moduleId),
  };

  console.log(requestData);
  axios.post(`${API_URL_LESSON}`, requestData, {
      headers: {
          Authorization: `Bearer ${token}`
      }
  })
  .then((response) => {  
    setLessons(response.data);
  })
  .catch((error) => {             
      console.log(error);
  });
};


useEffect(() => {
  getLessons(moduleId);
}, [moduleId, refreshFlag]); // 👈 detecta cambios




  useEffect(() => {
    // Realiza una solicitud para obtener detalles del módulo
    getModule(moduleId);

    // Realiza una solicitud para obtener las lecciones del módulo
 
    getLessons(moduleId)
  }, [moduleId, token]);

  return (
    <div>
     

     
      <ul>
        {lessons.map((lesson) => (
          <li key={lesson.id}>
            - {lesson.name} - {lesson.duration} minutos
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SeeLessons;

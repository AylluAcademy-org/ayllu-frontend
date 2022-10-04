import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import ProfileCourses from '../components/Profile/ProfileCourses';
import Courses from '../components/Profile/courses-teacher';
import SeeModules from '../components/NewCourse/seeModules';
import InfoCourse from '../components/NewCourse/infoCourse';
import NewModule from '../components/NewCourse/newModule';
import NewLesson from '../components/NewCourse/newLesson';
import SeeCourses from '../components/NewCourse/seeCourses';
import { useEffect, useState,useRef } from "react";
import {useRouter} from "next/router";
import axios from "axios";
const API_URL = "https://oh6s1ltanb.execute-api.us-east-1.amazonaws.com/dev/categories";
const Profile = () => {
    const router = useRouter();
    const [categorias, setCategorias] = useState([]);
    const [nCategoria, setNCategoria] = useState("");
    const [cursoActual, setCursoActual] = useState(router.query.idCourse);
    const [ventanaCourse, setVentanaCourse] = useState("VerModulos");
    const [infoCurso, setInfoCurso] = useState([]);
    const crearModulo =() => {
      console.log("Hola estas creando un modulo"); 
      setVentanaCourse("CrearModulo");     
      
    };

    const verModulos =() => {
      console.log("Hola estas creando una leccion"); 
      setVentanaCourse("VerModulos");     
      
    };

    const renderComponent=() => {
      switch(ventanaCourse) { 
      case "CrearModulo":
        return <NewModule currentCourseId={cursoActual} />
      case "VerModulos":
        return <SeeModules 
        currentCourse={cursoActual}/>
    }
  };

  const responseCourse =(courseId) => { axios.get('https://oh6s1ltanb.execute-api.us-east-1.amazonaws.com/dev/courses/getById', {
    params: {
        'course_id': courseId
    },
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then((response) => {
    console.log(response.data);
    setInfoCurso(response.data);
    //Save response.data in local storage called infocurso
    //localStorage.setItem("infocurso", JSON.stringify(response.data));

  })
  .catch((error) => {
    console.log(error);
  });
};

useEffect(()=> {
  responseCourse(cursoActual);
  //debug();
  
},[]);
    
//Create function called debug
const debug = () => {
  console.log("Debugging");
  console.log(cursoActual);
  console.log(infoCurso);
}







    

    

    return (
        <React.Fragment>
            <Navbar />
            
            <PageBanner 
                pageTitle="Información del Curso" 
                homePageUrl="/course-teacher-view" 
                homePageText="Tus Cursos" 
                activePageText={infoCurso.name}   
            />  

            <InfoCourse 
              currentCourse={infoCurso}
            />
           
           <div className='container'>
              <div>                               
                <a className="default-btn" onClick={verModulos}>Modulos</a>                                      
              </div>            
              <div>
                <a className="default-btn" onClick={crearModulo}>Crear Modulo</a>                                      
              </div>
            </div>
            

            <div>
              { renderComponent() }
            </div>
 
            <Footer />
        </React.Fragment>
    )
}

export default Profile;
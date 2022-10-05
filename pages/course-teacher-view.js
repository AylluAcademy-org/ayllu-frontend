import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import NewCourse from '../components/NewCourse/newCourse';
import NewModule from '../components/NewCourse/newModule';
import NewLesson from '../components/NewCourse/newLesson';
import SeeCourses from '../components/NewCourse/seeCourses';
import router from 'next/router';
import { useEffect, useState,useRef } from "react";
import axios from "axios";
const API_URL = "https://oh6s1ltanb.execute-api.us-east-1.amazonaws.com/dev/categories";
const Profile = () => {

    const [categorias, setCategorias] = useState([]);
    const [nCategoria, setNCategoria] = useState("");
    const [ventana, setVentana] = useState("VerCurso");
    const getCategories = async () => {
        axios
          .get(API_URL)
          .then((response) => {
            setCategorias(response.data);
          })
          .catch((error) => {
            console.log(error);
            return error;
          });
      };

      useEffect(()=> {
        getCategories();
        
    },[]);
{/**   const createCategory = async (category) => {
        axios
          .post(API_URL , category)
          .then((response) => {
            console.log(response.data);
            return response.data;
          })
          .catch((error) => {
            console.log(error);
            return error;
          });
      };
    
    
    const handleClick = () => {
        let inputValue = document.getElementById("newCat").value;       
        setNCategoria(inputValue);
        const newCategory = {
            name : nCategoria,
            status : true,
            image:"Image3"
        };

        createnewcat(newCategory);
        
    }

    const createnewcat=(nCat) => {
        console.log(nCat);
    }
    
    
    // get reference to button
    const btn = document.getElementById("myBtn");
    // add event listener for the button, for action "click"
    btn.addEventListener("click", handleClick);*/}
    const verCurso =() => {
      router.reload();    
      
    };

    const crearCurso =() => {
      console.log("Hola estas creando un curso"); 
      setVentana("CrearCurso");     
      
    };

    const crearModulo =() => {
      console.log("Hola estas creando un modulo"); 
      setVentana("CrearModulo");     
      
    };

    const crearLecciones =() => {
      console.log("Hola estas creando una leccion"); 
      setVentana("CrearLeccion");     
      
    };

    const renderComponent=() => {
      switch(ventana) {
      case "VerCurso":
        return <SeeCourses />
      case "CrearCurso":
        return <NewCourse />
      case "CrearModulo":
        return <NewModule />
      case "CrearLeccion":
        return <NewLesson />
    }
  };
  


    console.log(ventana);

    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Tus Cursos" 
                homePageUrl="/course-teacher-view" 
                homePageText="Tus Cursos" 
                activePageText={ventana} 
            />  
            <div className='container'>
            <div>
                <a className="default-btn pointer" onClick={verCurso}>Tus Cursos</a>                                      
              </div>
              <div>
                <a className="default-btn pointer" onClick={crearCurso}>Crear Curso</a>                                      
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
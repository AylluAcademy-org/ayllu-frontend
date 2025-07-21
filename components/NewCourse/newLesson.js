import React from 'react';
import { resetIdCounter, Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useEffect, useState,useRef } from "react";
import Swal from "sweetalert2";
import Router from 'next/router'
import { useToken } from '../../utils/TokenContext';
import baseUrl from "../../utils/baseUrl";
resetIdCounter();
import axios from "axios";
const apiNewLesson = "lessons";
const API_URL_NEWLESSON = `${baseUrl}${apiNewLesson}`;

const NewCourse = ({ moduleId,onLessonCreated }) => {
    const { loggedIn, token,logout, userName, userID } = useToken();
    const [categorias, setCategorias] = useState([]);
    const [nCategoria, setNCategoria] = useState(""); 
    const [newLessonC, setNewLessonC] = useState({
        name : "",  
        image: "",
        video: "https://bckt-front.s3.amazonaws.com/videos/Curso+de+Haskell+desde+cero+_+1+-+Primeros+pasos+_+Funciones.mp4",
        moduleId:""        
        });
    const [imgData, setImgData] = useState(null);
    const [videoData, setVideoData] = useState(null);
   

      useEffect(()=> {
        
        
    },[]);

    const onChangePicture = e => {
        if (e.target.files[0]) {
          //console.log("picture: ", e.target.files);
          const reader = new FileReader();
          reader.addEventListener("load", () => {
            setImgData(reader.result);
            console.log('value is:', reader.result);
          });
          reader.readAsDataURL(e.target.files[0]);
          
        }
      };

      const onChangePictureLink = e => {
        setImgData(e.target.value);
        setNewCourseC({...newCourseC, image: e.target.value})
        console.log('value is:', e.target.value);
      };

      
      const onChangeVideo = e => {
        if (e.target.files[0]) {
          //console.log("picture: ", e.target.files);
          const reader = new FileReader();
          reader.addEventListener("load", () => {
            setVideoData(reader.result);
            console.log('value is:', reader.result);
          });
          reader.readAsDataURL(e.target.files[0]);
          
        }
      };

      const onChangeVideoLink = e => {
        setVideoData(e.target.value);
        console.log('value is:', e.target.value);
        
      };


      const crearCurso =() => {
        console.log("Hola mundo"); 
                    
        console.log(newLessonC);
        Router.push({
            pathname:"/course-teacher-addLesson",
            
        });
      };


      const crearLesson = async () => {
        try {
            const lessonData = {
                ...newLessonC,
                name : newLessonC.name,                      
                status:newLessonC.status === 'true' ? true : false,               
                image:"",
                video:"",                
                moduleId: parseInt(moduleId)        
            };
            console.log(lessonData);
            // Hacer una solicitud POST al endpoint
            
            const response = await axios.post(API_URL_NEWLESSON, lessonData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
    
            Swal.fire({
                title: "Ayllu",
                text: "Lección creada correctamente",
                icon: "success",
                showConfirmButton: false,
                timer: 1500,
              });
              if (onLessonCreated) {
                onLessonCreated();
              }
              
        } catch (error) {
            console.error('Error al crear la lección:', error);
        }
    }; 

    return (
        
        <React.Fragment>

             <div className="profile-area">
                <div className="container">
              
                    <div className="profile-box ptb-30">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-md-7">
                                <div className="profile-details">
                                    <div className="form-group">
                                        <label>Nombre de la lección</label>
                                        <input type="text" className="form-control" placeholder="Nombre de la lección" onChange={e => setNewLessonC({...newLessonC, name: e.target.value})} value={newLessonC.name}/>
                                    </div>  
                                           
                                    <label>Portada del curso</label>
                                    <div className="form-group">
                                       <img alt="Course Image" class="img-preview" src={imgData} />

                                        <div class="custom-file">
                                            <input type="file" name="myImage" onChange={onChangePicture} className="custom-file-input" id="customFile"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Estatus  <input type="checkbox" onChange={e => setNewLessonC({...newLessonC, status: e.target.value})} value="true"/></label>
                                    </div>
                                </div>   

                            </div>

                            <div className="col-lg-3 col-md-3">
                                <div className="content">
                                <label>Video del curso</label>                               
                                
                                <video width="320" height="240" controls>
                                <source src="https://bckt-front.s3.amazonaws.com/videos/Curso+de+Haskell+desde+cero+_+1+-+Primeros+pasos+_+Funciones.mp4" alt="Course Image" type="video/mp4"/>
                                </video>
                                    <div class="custom-file">
                                        <input type="file" name="myImage" onChange={onChangeVideo} className="custom-file-input" id="customFile"/>
                                    </div>
                                    <div class="embed-link">
                                        <label>Link</label>
                                        <input type="text" name="myImage" onChange={onChangeVideoLink} value={videoData} className="custom-file-input" id="customFileLink"/>
                                    </div>
                                </div>
                            </div>

                                 <div>
                                        
                                    <a className="default-btn" onClick={crearLesson}>Crear Lección</a>
                                       
                                </div>
                        </div>

                        
                    </div>

                    
                </div>
            </div>
                   
                  
        </React.Fragment>
        
    )
}

export default NewCourse;
import React from 'react';
import { resetIdCounter, Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useEffect, useState,useRef } from "react";
import Router from 'next/router'
resetIdCounter();
import axios from "axios";
const API_URL = "https://oh6s1ltanb.execute-api.us-east-1.amazonaws.com/dev/categories";



const NewCourse = (currentCourseId) => {
    const [modulos, setModulos] = useState([]);
    const [nModulo, setNModulo] = useState(""); 
    const [newLessonC, setNewLessonC] = useState({
        "name" : "",
        "status" :true,
        "image" : "imagen1",
        "video" : "https://bckt-front.s3.amazonaws.com/videos/Curso+de+Haskell+desde+cero+_+1+-+Primeros+pasos+_+Funciones.mp4",
        "moduleId": ""
        
        });
    const [imgData, setImgData] = useState(null);
    const [videoData, setVideoData] = useState(null);

    const getModules = (courseId)=>{ 
        axios.post(
            'https://oh6s1ltanb.execute-api.us-east-1.amazonaws.com/dev/modules/getByCourse',
            `{\n    "courseId": ${courseId}\n}`,
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        ).then((response) => {
            setModulos(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
        };
    

      useEffect(()=> {
        getModules(parseInt(currentCourseId.currentCourseId));
        
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
        setNewLessonC({...newLessonC, image: e.target.value})
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

      const CreateLesson = (nwLesson) => {
        axios.post(
            'https://oh6s1ltanb.execute-api.us-east-1.amazonaws.com/dev/lessons',
            `{\n    "name": "${nwLesson.name}",\n    "status": ${nwLesson.status},\n    "image": "${nwLesson.image}",\n    "video": "${nwLesson.video}",\n    "moduleId": ${nwLesson.moduleId}\n}`,
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        ).then((response) => {
            console.log(response.data);
        })
            .catch((error) => {
                console.log(error);
            });
    };



      const crearLesson =() => {
        // parse int newLessonC.moduleId    
        newLessonC.moduleId = parseInt(newLessonC.moduleId);
        CreateLesson(newLessonC);
        Router.push({
            pathname:"/course-teacher-view-course",
            query:{
                idCourse:parseInt(currentCourseId.currentCourseId),
            }
        }); 


      };


    return (
        
        <React.Fragment>

             <div className="profile-area">
                <div className="container">

                    <div className="profile-box ptb-50">
                        <div className="row align-items-center">
                        <h3>Datos de la leccion</h3>

                            <div className="col-lg-9 col-md-9">
                                <div className="profile-details">
                                    <div className="form-group">
                                        <label>Nombre de la leccion</label>
                                        <input type="text" className="form-control" placeholder="Nombre " onChange={e => setNewLessonC({...newLessonC, name: e.target.value})} value={newLessonC.name}/>
                                    </div>
                                    <div className="form-group">
                                        <label  for="module">Modulo</label>
                                        <select onChange={e => setNewLessonC({...newLessonC, moduleId: e.target.value})}id="module" name="module">
                                        <option >Elige El Modulo</option> 
                                            {modulos.map((item) => ( 
                                                <option  value={item.module_id}>{item.name}</option>   
                                            ))}     
                                            
                                        </select>
                                    </div>
                                
                                    
                                </div>           
                   


                            </div>

                            <div className="col-lg-3 col-md-3">
                                <div className="content">
                                <label>Portada del curso</label>

                                <img alt="Course Image" class="img-preview" src={imgData} />

                                    <div class="custom-file">
                                        <input type="file" name="myImage" onChange={onChangePicture} className="custom-file-input" id="customFile"/>
                                    </div>
                                    <div class="embed-link">
                                        <label>Link</label>
                                        <input type="text" name="myImage" onChange={onChangePictureLink} value={imgData} className="custom-file-input" id="customFileLink"/>
                                    </div>
                                    
                                </div>

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
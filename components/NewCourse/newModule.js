import React from 'react';
import { resetIdCounter, Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useEffect, useState,useRef } from "react";
import Router from 'next/router'
resetIdCounter();
import axios from "axios";



const NewModule = (currentCourseId) => {
    
    const [imgData, setImgData] = useState(null);
    const [newModuleC, setNewModuleC] = useState({
        "name" : "",
        "description" : "",
        "status" : "true",
        "image" : "Image3",
        "class" : 0,
        "time" : 0,
        "courseId" : parseInt(currentCourseId.currentCourseId)
        });


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

    
     
    const CreateModule = (nwModule) => {
        axios.post(
            'https://oh6s1ltanb.execute-api.us-east-1.amazonaws.com/dev/modules',
            `{\n    "name": "${nwModule.name}",\n    "description": "${nwModule.description}",\n    "status": ${nwModule.status},\n    "image": "${nwModule.image}",\n    "class": ${nwModule.class},\n    "time": ${nwModule.time},\n    "courseId": ${nwModule.courseId}\n}`,
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

      const crearModulo =() => {
        newModuleC.class = parseInt(newModuleC.class);
        newModuleC.time = parseInt(newModuleC.time);     
        console.log(newModuleC);   
        console.log("Debbuging"); 
        CreateModule(newModuleC);    
        
        Router.push({
            pathname:"/course-teacher-view-course",
            query:{
                idCourse:newModuleC.courseId,
            }
        }); 

      };

     

    return (
        
        <React.Fragment>

             <div className="profile-area">
                <div className="container">

                    <div className="profile-box ptb-100">
                        <div className="row align-items-center">
                        <h3>Datos del modulo</h3>

                            <div className="col-lg-9 col-md-9">
                                <div className="profile-details">
                                    <div className="form-group">
                                        <label>Nombre del modulo</label>
                                        <input type="text" className="form-control" placeholder="Nombre " onChange={e => setNewModuleC({...newModuleC, name: e.target.value})} value={newModuleC.name}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Descripción</label>
                                        <textarea type="text" className="form-control" placeholder="Descripción del curso" onChange={e => setNewModuleC({...newModuleC, description: e.target.value})} value={newModuleC.description} />
                                    </div>
                                    <div className="form-group">
                                        <label>Clases</label>
                                        <input type="number" className="form-control" placeholder="Cantidad de clases" onChange={e => setNewModuleC({...newModuleC, class: e.target.value})} value={parseInt(newModuleC.class)} />
                                    </div>
                                    <div className="form-group">
                                        <label>Tiempo</label>
                                        <input type="number" className="form-control" placeholder="Tiempo del modulo" onChange={e => setNewModuleC({...newModuleC, time: e.target.value})} value={parseInt(newModuleC.time)} />
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

                               

                                
                                
                            </div>

                                 <div>
                                        
                                    <a className="default-btn" onClick={crearModulo}>Crear Modulo</a>
                                       
                                </div>
                        </div>

                        
                    </div>

                    
                </div>
            </div>
                   
                  
        </React.Fragment>
        
    )
}

export default NewModule;
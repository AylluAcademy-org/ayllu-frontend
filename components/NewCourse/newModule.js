import React from 'react';
import { resetIdCounter, Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useEffect, useState,useRef } from "react";
import Swal from "sweetalert2";
import Router from 'next/router'
import { useToken } from '../../utils/TokenContext';
import baseUrl from "../../utils/baseUrl";

resetIdCounter();
import axios from "axios";

const apiNewModule = "modules";
const API_URL_NEWMODULE = `${baseUrl}${apiNewModule}`;





const NewModule = ({ courseId ,onModuleCreated}) => {
    const { loggedIn, token,logout, userName, userID } = useToken();
    const [categorias, setCategorias] = useState([]);
    const [nCategoria, setNCategoria] = useState(""); 
    const [newCourseC, setNewCourseC] = useState({
        name : "",
        description : "",
        price : "",
        duration: "",
        image: "",
        video: "https://bckt-front.s3.amazonaws.com/videos/Curso+de+Haskell+desde+cero+_+1+-+Primeros+pasos+_+Funciones.mp4",
        lesson: "",
        likes:"",
        categoryId:"",
        authorId:"",
        status:"false"
        });

    const [newModuleC, setNewModuleC] = useState({
        name : "",
        description : "",        
        status:"false",
        image:"",
        class:"",
        time:"",
        courseId:parseInt(courseId)
    });

    const [imgData, setImgData] = useState(null);
    const [videoData, setVideoData] = useState(null);
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
       // getCategories();
        
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


      
const crearModulo = async () => {
    try {
        const moduleData = {
            ...newModuleC,

            name : newModuleC.name,
            description : newModuleC.description,        
            status:newModuleC.status === 'true' ? true : false,
            image:"",
            class:parseInt(newModuleC.class),
            time:parseFloat(newCourseC.time),
            courseId: parseInt(courseId)        
        };
       // console.log(moduleData);
        // Hacer una solicitud POST al endpoint
        
        const response = await axios.post(API_URL_NEWMODULE, moduleData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
console.log('data:', moduleData);
        Swal.fire({
            title: "Ayllu",
            text: "Módulo creado correctamente",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
          //getCategories();
          if (onModuleCreated) {
            onModuleCreated();
          }
    } catch (error) {
        console.error('Error al crear el módulo:', error);
    }
};

    return (
        
        <React.Fragment>

             <div className="profile-area">
                <div className="container">
                    <div className="profile-box ptb-10">
                        <div className="row align-items-center">                            
                        <h3>Datos del modulo</h3>
                           <div className="col-lg-9 col-md-9">
                                <div className="profile-details">
                                    <div className="form-group">
                                        <label>Nombre del módulo/</label>
                                        <input type="text" className="form-control" placeholder="Nombre del módulo" onChange={e => setNewModuleC({...newModuleC, name: e.target.value})} value={newModuleC.name}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Descripción</label>
                                        <textarea type="text" className="form-control" placeholder="Descripción del módulo" onChange={e => setNewModuleC({...newModuleC, description: e.target.value})} value={newModuleC.description} />
                                    </div>
                                    <div className="form-group">
                                        <label>Duración (min)</label>
                                        <input type="text" className="form-control" placeholder="Duración" onChange={e => setNewModuleC({...newModuleC, time: e.target.value})} value={newModuleC.time} />
                                    </div>
                                    <div className="form-group">
                                        <label>Cantidad de lecciones</label>
                                        <input type="text" className="form-control" placeholder="Cantidad de lecciones" onChange={e => setNewModuleC({...newModuleC, class: e.target.value})} value={newModuleC.class}/>
                                    </div>

                                     <div className="form-group">
                                       
                                        <label>Portada del módulo</label>

                                        <img alt="Course Image" class="img-preview" src={imgData} />

                                            <div class="custom-file">
                                                <input type="file" name="myImage" onChange={onChangePicture} className="custom-file-input" id="customFile"/>
                                            </div>
                                                     
                                    </div>                                   
                                    <div className="form-group">
                                        <label>Estatus  <input type="checkbox" onChange={e => setNewCourseC({...newModuleC, status: e.target.value})} value="true"/></label>
                                    </div>
                                </div>  
                            </div>

                            

                                 <div>
                                        
                                    <a className="default-btn" onClick={crearModulo}>Crear módulo</a>
                                       
                                </div>
                        </div>

                        
                    </div>

                    
                </div>
            </div>
                   
                  
        </React.Fragment>
        
    )
}

export default NewModule;
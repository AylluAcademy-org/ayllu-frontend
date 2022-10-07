import React from 'react';
import { resetIdCounter, Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useEffect, useState,useRef } from "react";
import Router from 'next/router'
resetIdCounter();
import axios from "axios";
const API_URL = "https://oh6s1ltanb.execute-api.us-east-1.amazonaws.com/dev/categories";



const NewCourse = () => {
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
        getCategories();
        
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
        {/**  
     setNewCourse({
        name : "",
        description : "",
        price : "",
        duration: "",
        image: "",
        video: "",
        lesson: "",
        likes:"",
        categoryId:"",
        authorId:"",
        status:""
        });
    */}      

       
        console.log(newCourseC);
        
      };

    return (
        
        <React.Fragment>

             <div className="profile-area">
                <div className="container">

                    <div className="profile-box ptb-100">
                        <div className="row align-items-center">
                        <h3>Datos del curso</h3>

                            <div className="col-lg-9 col-md-9">
                                <div className="profile-details">
                                    <div className="form-group">
                                        <label>Nombre del curso</label>
                                        <input type="text" className="form-control" placeholder="Nombre del curso" onChange={e => setNewCourseC({...newCourseC, name: e.target.value})} value={newCourseC.name}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Descripción</label>
                                        <textarea type="text" className="form-control" placeholder="Descripción del curso" onChange={e => setNewCourseC({...newCourseC, description: e.target.value})} value={newCourseC.description} />
                                    </div>
                                    <div className="form-group">
                                        <label>Precio</label>
                                        <input type="text" className="form-control" placeholder="Precio" onChange={e => setNewCourseC({...newCourseC, price: e.target.value})} value={newCourseC.price} />
                                    </div>
                                    <div className="form-group">
                                        <label>Duración</label>
                                        <input type="text" className="form-control" placeholder="Duración" onChange={e => setNewCourseC({...newCourseC, duration: e.target.value})} value={newCourseC.duration} />
                                    </div>
                                    <div className="form-group">
                                        <label>Cantidad de lecciones</label>
                                        <input type="text" className="form-control" placeholder="Cantidad de lecciones" onChange={e => setNewCourseC({...newCourseC, lesson: e.target.value})} value={newCourseC.lesson}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Numero de likes</label>
                                        <input type="text" className="form-control" placeholder="Numero de Likes" onChange={e => setNewCourseC({...newCourseC, likes: e.target.value})} value={newCourseC.likes}/>
                                    </div>
                                    <div className="form-group">
                                        <label  for="category">Categoria</label>
                                        <select onChange={e => setNewCourseC({...newCourseC, categoryId: e.target.value})}id="category" name="category">
                                        <option >Elige la categoria</option> 
                                            {categorias.map((item) => ( 
                                                <option  value={item.category_id}>{item.name}</option>    
                                                
                                                      
                                            ))}     
                                            
                                        </select>
                                    </div>
                                    {/* <div className="form-group">                                       
                                        <input id="newCat" type="text" className="form-control" placeholder="Nombe de la categoria" />
                                        <button type="button"  id="myBtn"> Crear nueva categoria </button>
                                    </div>*/}
                                    
                                    <div className="form-group">
                                        <label>Autor</label>
                                        <input type="text" className="form-control" placeholder="Autor"  onChange={e => setNewCourseC({...newCourseC, authorId: e.target.value})} value={newCourseC.authorId} />
                                    </div>
                                    <div className="form-group">
                                        <label>Estatus  <input type="checkbox" onChange={e => setNewCourseC({...newCourseC, status: e.target.value})} value="true"/></label>
                                        
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
                                        
                                    <a className="default-btn" onClick={crearCurso}>Crear Curso</a>
                                       
                                </div>
                        </div>

                        
                    </div>

                    
                </div>
            </div>
                   
                  
        </React.Fragment>
        
    )
}

export default NewCourse;
import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import ProfileCourses from '../components/Profile/ProfileCourses';
import Courses from '../components/Profile/courses-teacher';
import { useEffect, useState,useRef } from "react";
import axios from "axios";
const API_URL = "https://oh6s1ltanb.execute-api.us-east-1.amazonaws.com/dev/categories";
const Profile = () => {

    const [categorias, setCategorias] = useState([]);
    const [nCategoria, setNCategoria] = useState("");

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
  
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Nuevo curso" 
                homePageUrl="/" 
                homePageText="Inicio" 
                activePageText="Perfil" 
            />  

            <div className="profile-area">
                <div className="container">

                    <div className="profile-box ptb-100">
                        <div className="row align-items-center">
                        <h3>Datos del curso</h3>

                            <div className="col-lg-9 col-md-9">
                                <div className="profile-details">
                                    <div className="form-group">
                                        <label>Nombre del curso</label>
                                        <input type="text" className="form-control" placeholder="Nombre del curso" />
                                    </div>
                                    <div className="form-group">
                                        <label>Descripción</label>
                                        <textarea type="text" className="form-control" placeholder="Descripción del curso" />
                                    </div>
                                    <div className="form-group">
                                        <label>Precio</label>
                                        <input type="text" className="form-control" placeholder="Precio" />
                                    </div>
                                    <div className="form-group">
                                        <label>Duración</label>
                                        <input type="text" className="form-control" placeholder="Duración" />
                                    </div>
                                    <div className="form-group">
                                        <label>Cantidad de lecciones</label>
                                        <input type="text" className="form-control" placeholder="Cantidad de lecciones" />
                                    </div>
                                    <div className="form-group">
                                        <label>Numero de likes</label>
                                        <input type="text" className="form-control" placeholder="Numero de Likes" />
                                    </div>
                                    <div className="form-group">
                                        <label  for="category">Categoria</label>
                                        <select id="category" name="category">
                                            {categorias.map((item) => ( 
                                                <option value={item.category_id}>{item.name}</option>    
                                                
                                                      
                                            ))}     
                                            
                                        </select>
                                    </div>
                                    {/* <div className="form-group">                                       
                                        <input id="newCat" type="text" className="form-control" placeholder="Nombe de la categoria" />
                                        <button type="button"  id="myBtn"> Crear nueva categoria </button>
                                    </div>*/}
                                    
                                    <div className="form-group">
                                        <label>Autor</label>
                                        <input type="text" className="form-control" placeholder="Autor" />
                                    </div>
                                    <div className="form-group">
                                        <label>Estatus  <input type="checkbox" value="true"/></label>
                                        
                                    </div>
                                </div>           
                   


                            </div>

                            <div className="col-lg-3 col-md-3">
                                <div className="content">
                                <label>Portada del curso</label>

                                <img alt="100x100" src="https://i.ytimg.com/vi/fJRBeWwdby8/maxresdefault.jpg"
                                  />

                                    <div class="custom-file">
                                        <input type="file" className="custom-file-input" id="customFile"/>
                                    </div>
                                    

                                </div>
                                
                            </div>
                        </div>
                    </div>

                    <Courses />
                </div>
            </div>
 
            <Footer />
        </React.Fragment>
    )
}

export default Profile;
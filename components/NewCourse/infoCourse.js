import React from "react";
import { resetIdCounter, Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useEffect, useState, useRef } from "react";
import { Router, useRouter } from "next/router";
resetIdCounter();
import axios from "axios";

const InfoCourse = ({ currentCourse }) => {
    const [categorias, setCategorias] = useState([]);
    const [cursosList, setCursosList] = useState([]);
    const [nCategoria, setNCategoria] = useState("");
    const [modulesList, setModulosList] = useState([]);
    const [currIdC, setCurrIdC] = useState("");
    const [courseC, setCourseC] = useState("");
    const router = useRouter();

    // Save the prop in a state 
    useEffect(() => {
        //read infocurso from localstorage
        //const infoCurso = JSON.parse(localStorage.getItem("infocurso"));
        //console.log("localstorager",infoCurso);
        //setModulosList(infoCurso.modules)

    }, []);
    return (
        <React.Fragment>
            <div className="profile-area">
                <div className="container">
                    <div className="profile-box ptb-100">
                        <div className="row align-items-center">
                            <div className="col-lg-9 col-md-9">
                                <div className="profile-details">
                                    <h1>{currentCourse.name}</h1>
                                    <h3>{currentCourse.description}</h3>
                                    <label>Precio: </label>
                                    <h3>{currentCourse.price}</h3>
                                    <label>Duración: </label>
                                    <h3>{currentCourse.duration}</h3>
                                    <label>Número de lecciones: </label>
                                    <h3>{currentCourse.lesson}</h3>
                                    <label>Rating: </label>
                                    <h3>{currentCourse.rating}</h3>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3">
                                <div className="content">
                                    <label>Portada del curso</label>
                                    <img
                                        alt="Course Image"
                                        class="img-preview"
                                        src={currentCourse.image}
                                    />
                                </div>

                                <div className="content">
                                    <label>Video del curso</label>

                                    <video width="320" height="240" controls>
                                        <source
                                            src={currentCourse.video}
                                            alt="Course Video"
                                            type="video/mp4"
                                        />
                                    </video>
                                </div>
                            </div>
                            
                            
{/*}
                          <div className="container">
                                <div class="list-group">

                                    {modulesList.map((item) => (
                                        <a href="#" class="list-group-item list-group-item-action">
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                           
                            </div>
                                    */}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default InfoCourse;

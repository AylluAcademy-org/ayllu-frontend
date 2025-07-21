import React from 'react';
import { resetIdCounter, Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useEffect, useState, useRef } from "react";
import Swal from "sweetalert2";
import { useRouter } from 'next/router';
import { useToken } from '../../utils/TokenContext';
import baseUrl from "../../utils/baseUrl";
import SeeModules from './seeModules';
import SeeTest from '../TestModule/SeeTest';

resetIdCounter();
import axios from "axios";

const apiRoute = "categories";
const apiNewCourse = "courses";
const API_URL = `${baseUrl}${apiRoute}`;
const API_URL_NEWCOURSE = `${baseUrl}${apiNewCourse}`;

const NewCourse = () => {
    const [categorias, setCategorias] = useState([]);
    const [selectedTab, setSelectedTab] = useState(0);  // ✅ Corrección: Se inicializa `selectedTab`
    const [nCategoria, setNCategoria] = useState("");
    const [courseId, setCourseId] = useState(null);
    const [newCourseC, setNewCourseC] = useState({
        name: "",
        description: "",
        price: 0.0,
        duration: 0,
        image: "",
        video: "https://bckt-front.s3.amazonaws.com/videos/Curso+de+Haskell+desde+cero+_+1+-+Primeros+pasos+_+Funciones.mp4",
        lesson: 0,
        categoryId: "",
        authorId: userID,
        status: false
    });
    const [imgData, setImgData] = useState(null);
    const [videoData, setVideoData] = useState(null);
    const { loggedIn, token, logout, userName, userID } = useToken();

    const getCategories = async () => {
        axios
            .get(API_URL, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then((response) => {
                setCategorias(response.data);
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    };

    useEffect(() => {
        getCategories();

    }, []);

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
        setNewCourseC({ ...newCourseC, image: e.target.value })
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



    const crearCurso = async () => {
        try {
            // Prepare course data
            const courseData = {
                ...newCourseC,
                price: parseFloat(newCourseC.price) || 0,
                duration: parseFloat(newCourseC.duration) || 0,
                lesson: parseInt(newCourseC.lesson) || 0,
                categoryId: parseInt(newCourseC.categoryId) || 0,
                authorId: parseInt(userID) || 0,
                status: newCourseC.status === true || newCourseC.status === 'true',
                image: imgData || ''
            };

            // API call
            const response = await axios.post(API_URL_NEWCOURSE, courseData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            // Success notification
            Swal.fire({
                title: "Ayllu",
                text: "Curso creado correctamente",
                icon: "success",
                showConfirmButton: false,
                timer: 1500,
            });

            console.log("Curso creado correctamente:", response.data);

            // Just set the course ID and let parent handle tab switching
            if (response.data && response.data.course_id) {
                setCourseId(response.data.course_id);
            }
        } catch (error) {
            console.error('Error al crear el curso:', error);
            Swal.fire({
                title: "Error",
                text: "No se pudo crear el curso",
                icon: "error",
                showConfirmButton: true,
            });
        }
    };


    return (

        <React.Fragment>

            <div className="container my-5">
                <Tabs selectedIndex={selectedTab} onSelect={(index) => setSelectedTab(index)}>
                    <TabList>
                        <Tab>📚 Curso</Tab>
                        <Tab  disabled={!courseId}>📂 Módulos</Tab>
                        <Tab  disabled={!courseId}>📝 Test</Tab>
                    </TabList>

                    <TabPanel>
                        <div className="profile-area">
                            <div className="container">
                                <div className="profile-box ptb-100">
                                    <div className="row align-items-center">
                                        <h3>Datos del curso</h3>

                                        <div className="col-lg-9 col-md-9">
                                            <div className="profile-details">
                                                <div className="form-group">
                                                    <label>Nombre del curso</label>
                                                    <input type="text" className="form-control" placeholder="Nombre del curso" onChange={e => setNewCourseC({ ...newCourseC, name: e.target.value })} value={newCourseC.name} />
                                                </div>
                                                <div className="form-group">
                                                    <label>Descripción</label>
                                                    <textarea type="text" className="form-control" placeholder="Descripción del curso" onChange={e => setNewCourseC({ ...newCourseC, description: e.target.value })} value={newCourseC.description} />
                                                </div>
                                                <div className="form-group">
                                                    <label>Precio</label>
                                                    <input type="text" className="form-control" placeholder="Precio" onChange={e => setNewCourseC({ ...newCourseC, price: e.target.value })} value={parseFloat(newCourseC.price)} />
                                                </div>
                                                <div className="form-group">
                                                    <label>Duración</label>
                                                    <input type="text" className="form-control" placeholder="Duración" onChange={e => setNewCourseC({ ...newCourseC, duration: e.target.value })} value={parseInt(newCourseC.duration)} />
                                                </div>
                                                <div className="form-group">
                                                    <label>Cantidad de lecciones</label>
                                                    <input type="text" className="form-control" placeholder="Cantidad de lecciones" onChange={e => setNewCourseC({ ...newCourseC, lesson: e.target.value })} value={parseInt(newCourseC.lesson)} />
                                                </div>
                                                <div className="form-group">
                                                    <label for="category">Categoria</label>
                                                    <select onChange={e => setNewCourseC({ ...newCourseC, categoryId: e.target.value })} id="category" name="category">
                                                        <option >Elige la categoria</option>
                                                        {categorias.map((item) => (
                                                            <option value={item.category_id}>{item.name}</option>


                                                        ))}

                                                    </select>
                                                </div>
                                                {/* <div className="form-group">                                       
                                        <input id="newCat" type="text" className="form-control" placeholder="Nombe de la categoria" />
                                        <button type="button"  id="myBtn"> Crear nueva categoria </button>
                                    </div>*/}

                                                {/*<div className="form-group">
                                        <label>Autor</label>
                                        <input type="text" className="form-control" placeholder="Autor"  onChange={e => setNewCourseC({...newCourseC, authorId: e.target.value})} value={newCourseC.authorId} />
                                </div>*/}

                                                <div className="form-group">
                                                    <label>Estatus  <input type="checkbox" onChange={e => setNewCourseC({ ...newCourseC, status: e.target.value })} value={true} /></label>

                                                </div>
                                            </div>



                                        </div>

                                        <div className="col-lg-3 col-md-3">
                                            <div className="content">
                                                <label>Portada del curso</label>

                                                <img alt="Course Image" class="img-preview" src={imgData} />

                                                <div class="custom-file">
                                                    <input type="file" name="myImage" onChange={onChangePicture} className="custom-file-input" id="customFile" />
                                                </div>
                                                <div class="embed-link">
                                                    <label>Link</label>
                                                    <input type="text" name="myImage" onChange={onChangePictureLink} value={imgData} className="custom-file-input" id="customFileLink" />
                                                </div>

                                            </div>

                                            <div className="content">
                                                <label>Video del curso</label>

                                                <video width="320" height="240" controls>
                                                    <source src="https://bckt-front.s3.amazonaws.com/videos/Curso+de+Haskell+desde+cero+_+1+-+Primeros+pasos+_+Funciones.mp4" alt="Course Image" type="video/mp4" />
                                                </video>
                                                <div class="custom-file">
                                                    <input type="file" name="myImage" onChange={onChangeVideo} className="custom-file-input" id="customFile" />
                                                </div>
                                                <div class="embed-link">
                                                    <label>Link</label>
                                                    <input type="text" name="myImage" onChange={onChangeVideoLink} value={videoData} className="custom-file-input" id="customFileLink" />
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
                    </TabPanel>

                    <TabPanel>
                       
                        {courseId && <SeeModules courseId={courseId} />}
                    
                    </TabPanel>
                    <TabPanel>
                        {courseId && <SeeTest courseId={courseId} />}
                    </TabPanel>
                </Tabs>
            </div>





        </React.Fragment>

    )
}

export default NewCourse;
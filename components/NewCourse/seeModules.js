import React from 'react';
import { resetIdCounter, Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useEffect, useState, useRef } from "react";
import { Router, useRouter } from 'next/router'
resetIdCounter();
import axios from "axios";



const SeeModules = ({ currentCourse }) => {
    const [modList, setModList] = useState([]);
    const [lessList, setLessList] = useState([]);
    const router = useRouter();




    ///function to get the couses By Category
    const getModules = (courseId) => {
        axios.post(
            'https://oh6s1ltanb.execute-api.us-east-1.amazonaws.com/dev/modules/getByCourse',
            `{\n    "courseId": ${courseId}\n}`,
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        ).then((response) => {
            console.log(response.data);
            setModList(response.data);
            setLessList(response.data.lessons);
        })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getModules(currentCourse);

    }, []);




    return (

        <React.Fragment>

            <div className="profile-area">
                <div className="container">

                    <div className="profile-box ptb-100">
                        <div className="row align-items-center">
                            <h3>Lista de Modulos</h3>

                            <div className="col-lg-9 col-md-9">
                                <div class="accordion" id="accordionExample">
                                    <div className='courses-list-area '>
                                        {modList.map((item) => (


                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="headingOne">
                                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        {item.name}
                                                    </button>
                                                </h2>
                                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body">
                                                            <div class="list-group">

                                                                {item.lessons.map((item2) => (
                                                                    <a href="#" class="list-group-item list-group-item-action">
                                                                        {item2.name}
                                                                    </a>
                                                                ))}
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>


                                            
                                           

                                        ))}


                                </div>





                            </div>






                        </div>



                    </div>


                </div>


            </div>
        </div>


        </React.Fragment >

    )
}

export default SeeModules;
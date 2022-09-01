import React from 'react';
import { resetIdCounter, Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useEffect, useState,useRef } from "react";
import {Router,useRouter }  from 'next/router'
resetIdCounter();
import axios from "axios";



const SeeModules = ({currentCourse}) => {
    const [modList, setModList] = useState([]);
    const router = useRouter();
  
    


    ///function to get the couses By Category
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
        console.log(response.data);
        setModList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    };

    useEffect(()=> {
        getModules(currentCourse);
        
    },[]);



    const seeIndividualCourse = (item) =>{
        console.log(item.name);
        router.push('/course-teacher-view-course',item.course_id
       
        );

        router.push({
            pathname:"/course-teacher-view-course",
            asPath: "/courseview",
            query:{
                idCourse:item.course_id,
            }
        });
    };
   
    return (
        
        <React.Fragment>

             <div className="profile-area">
                <div className="container">

                    <div className="profile-box ptb-100">
                        <div className="row align-items-center">
                        <h3>Lista de Modulos</h3>

                            <div className="col-lg-9 col-md-9">
                                <div className="profile-details">
                                  
                                   
                                    
                                    <div className="form-group">
                                    
        

                                    </div>
                                                                  
                                                                       
                                </div>  

                                
                                <div className='courses-list-area '>
                                    {modList.map((item) => ( 
                                                                
                                        <div onClick={()=> seeIndividualCourse(item)}>
                                            <h3  >{item.name}</h3>
                                            <img alt={"Module "+item.name + " Image"} src={item.image} />
                                        </div>
                                        
                                    ))}                      
                                
                        
                                </div>         
                   


                            </div>

                           

                        </div>

                        
                    </div>

                    
                </div>
            </div>
                   
                  
        </React.Fragment>
        
    )
}

export default SeeModules;
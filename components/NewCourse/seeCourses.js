import React from 'react';
import { resetIdCounter, Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useEffect, useState,useRef } from "react";
import {Router,useRouter }  from 'next/router'
resetIdCounter();
import axios from "axios";
const API_URL_CAT = "https://oh6s1ltanb.execute-api.us-east-1.amazonaws.com/dev/categories";
const API_URL_COUR = "https://oh6s1ltanb.execute-api.us-east-1.amazonaws.com/dev/courses";
const API_URL_COURBYCAT = "https://oh6s1ltanb.execute-api.us-east-1.amazonaws.com/dev/courses/getByCategory";


const SeeCourses = () => {
    const [categorias, setCategorias] = useState([]);
    const [cursosList, setCursosList] = useState([]);
    const [cursosAuthor, setCursosAuthor] = useState([]);
    const [nCategoria, setNCategoria] = useState(""); 
    const [courseC, setCourseC] = useState("");
    const router = useRouter();
    const authorId =1;
    
    const getCategories = async () => {
        axios
          .get(API_URL_CAT)
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

    const getCursosList = async () => {
        axios
          .get(API_URL_COUR)
          .then((response) => {
            setCursosList(response.data);
          })
          .catch((error) => {
            console.log(error);
            return error;
          });
      };

      useEffect(()=> {
        getCursosList();
        
        
    },[]);

    ///function to get the couses By Category
    const getresponse = (catId)=>{ 
        axios.post(
        'https://oh6s1ltanb.execute-api.us-east-1.amazonaws.com/dev/courses/getByCategory',
        `{\n    "categoryId": ${catId}\n}`,
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
    ).then((response) => {
        console.log(response.data);
        setCursosList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    };

     ///function to get the couses By AuthorId
     const getListbyAuthor = (authorId)=>{ 
        axios.get('https://oh6s1ltanb.execute-api.us-east-1.amazonaws.com/dev/courses/getCourseByAuthorId', {
    params: {
        'authorId': `${authorId}`
    }
    }
    ).then((response) => {
        console.log(response.data);
        setCursosAuthor(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    };

    useEffect(()=> {
        getListbyAuthor(authorId);     
        
    },[]);


    const buscarCursoCat = () => {
        console.log(courseC);
        getresponse(courseC);
        //getCoursebyCat(courseC);
    };

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
   
    console.log(cursosAuthor);
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
                                        <label  for="category">Categoria</label>
                                        <select onChange={e => setCourseC(e.target.value)}id="category" name="category">
                                        <option >Elige la categoria</option> 
                                            {categorias.map((item) => ( 
                                                <option  value={item.category_id}>{item.name}</option>    
                                                
                                                      
                                            ))}     
                                            
                                        </select>
                                        <div>
                                            <a className="default-btn" onClick={buscarCursoCat}>Buscar</a>                                      
                                        </div>
        

                                    </div>
                                                                  
                                                                       
                                </div>  

                                
                                <div className='courses-list-area '>
                                    {cursosAuthor.map((item) => ( 
                                                                
                                        <div onClick={()=> seeIndividualCourse(item)}>
                                            <h3  >{item.name}</h3>
                                            <img alt={"Course "+item.name + " Image"} src={item.image} />
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

export default SeeCourses;
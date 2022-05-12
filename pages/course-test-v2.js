import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/SingleCourses/PageBanner';
import CoursesDetailsSidebar from '../components/SingleCourses/CoursesDetailsSidebar';
import YouMightLikeTheCourses from '../components/Courses/YouMightLikeTheCourses';
import TestView from '../components/TestModule/TestView';
import Link from '../utils/ActiveLink';
import { resetIdCounter, Tab, Tabs, TabList, TabPanel } from 'react-tabs';
resetIdCounter();

const CouseTestV2 = () => {
    const pageTitle="Introducción a Haskell";
    return (
        <React.Fragment>
            <Navbar />
            <div className="test-title-area">
                <div className="test-title-course">                                   
                    <h2>{pageTitle}</h2>                 
                </div>

                  
            </div>

            <TestView/>

            <div className='testAreaButton'>
                
                    <Link href="/course-test-v2">
                        <a className="btn-test-previous">Anterior <span></span></a>
                    </Link>

                    <Link href="/course-test-v2">
                        <a className="btn-test-next">Siguiente <span></span></a>
                    </Link>
                
            </div>   

           

            
                  
        </React.Fragment>
    )
}

export default CouseTestV2;
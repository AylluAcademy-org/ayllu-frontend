import React, { useState, useEffect } from 'react'; 
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import NewCourse from '../components/NewCourse/newCourse';  // ✅ IMPORTACIÓN CORRECTA
import ModuleManager from '../components/NewCourse/ModuleManager';

const CourseManager = () => {
    const [selectedTab, setSelectedTab] = useState(0);  // ✅ Corrección: Se inicializa `selectedTab`
    const [courseId, setCourseId] = useState(null);
    useEffect(() => {
        // When courseId is set, switch to the modules tab
        if (courseId) {
            setSelectedTab(1);
        }
    }, [courseId]);

    return (
        <React.Fragment>
          
            <div className="container my-5">
                <Tabs selectedIndex={selectedTab} onSelect={(index) => setSelectedTab(index)}>
                    <TabList>
                        <Tab>📚 Curso</Tab>
                        <Tab disabled={!courseId}>📂 Módulos</Tab>
                    </TabList>

                    <TabPanel>
                        <NewCourse setCourseId={setCourseId} setSelectedTab={setSelectedTab} />  {/* ✅ Se pasan correctamente los props */}
                    </TabPanel>

                    <TabPanel>
                        {courseId ? <ModuleManager courseId={courseId} /> : <p>Primero crea un curso.</p>}
                    </TabPanel>
                </Tabs>
            </div>

            <Footer />
        </React.Fragment>
    );
};

export default CourseManager;

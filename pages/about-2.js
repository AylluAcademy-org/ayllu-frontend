import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import AboutUsContentTwo from '../components/About/AboutUsContentTwo';
import FunFacts from '../components/Common/FunFacts';
import Testimonials from '../components/Common/Testimonials';
import CourseAdvisor from '../components/Common/CourseAdvisor';
import Partner from '../components/Common/Partner';
import Footer from '../components/_App/Footer';

const About2 = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="About Us" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="About Us" 
            />  
            <AboutUsContentTwo />
            <FunFacts />
            <Testimonials />
            <CourseAdvisor />
            <Partner />
            <Footer />
        </React.Fragment>
    )
}

export default About2;
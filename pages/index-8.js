import React from 'react';
import Navbar from '../components/_App/Navbar';
import MainBanner from '../components/HealthCoaching/MainBanner'; 
import LifestyleCourses from '../components/HealthCoaching/LifestyleCourses';
import ChooseProgram from '../components/HealthCoaching/ChooseProgram';
import HealthServices from '../components/HealthCoaching/HealthServices';
import AboutUs from '../components/HealthCoaching/AboutUs';
import TopSellingCourses from '../components/HealthCoaching/TopSellingCourses';
import Feedback from '../components/HealthCoaching/Feedback';
import UpcomingEvents from '../components/HealthCoaching/UpcomingEvents';
import LatestBlog from '../components/HealthCoaching/LatestBlog';
import SubscribeForm from '../components/HealthCoaching/SubscribeForm';
import Footer from '../components/_App/Footer';
 
const Index8 = () => {
    return (
        <React.Fragment>
            <Navbar />
            <MainBanner />
            <LifestyleCourses />
            <ChooseProgram />
            <HealthServices />
            <AboutUs />
            <TopSellingCourses />
            <Feedback />
            <UpcomingEvents />
            <LatestBlog />
            <SubscribeForm />
            <Footer />
        </React.Fragment>
    )
}

export default Index8;
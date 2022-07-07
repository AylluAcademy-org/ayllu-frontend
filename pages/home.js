import React from 'react';
import Navbar from '../components/_App/Navbar';
import MainBanner from '../components/eLearningSchool/MainBannerV2';
import Partner from '../components/eLearningSchool/Partner';
import Features from '../components/eLearningSchool/FeaturesV2';
import AboutUs from '../components/eLearningSchool/AboutUs';
import PopularCourses from '../components/eLearningSchool/PopularCoursesV2';
import FeedbackSliderWithFunFacts from '../components/eLearningSchool/FeedbackSliderWithFunFacts';
import GetInstantCourses from '../components/eLearningSchool/GetInstantCourses';
import LatestNews from '../components/Common/LatestNews';
import ViewAllCourses from '../components/eLearningSchool/ViewAllCourses';
import AffordableCertification from '../components/eLearningSchool/AffordableCertification';
import Footer from '../components/_App/Footer';
import SubscribeForm from '../components/Common/SubscribeFormV2';
import InformationAdd from '../components/eLearningSchool/InformationAdditional'
const Home = () => {
    return (
        <React.Fragment>
            <Navbar />
            <MainBanner />
            <Features />
            <PopularCourses />
            <InformationAdd />
            <SubscribeForm/>           
            <Footer />
        </React.Fragment>
    )
}

export default Home;
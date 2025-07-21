import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Router from 'next/router'
import { useEffect, useState,useRef } from "react";
import axios from "axios";
const API_URL = "https://oh6s1ltanb.execute-api.us-east-1.amazonaws.com/dev/categories";
const Profile = () => {

  
    
  
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Nuevo curso" 
                homePageUrl="/" 
                homePageText="Inicio" 
                activePageText="Perfil" 
            />  

            
 
            <Footer />
        </React.Fragment>
    )
}

export default Profile;
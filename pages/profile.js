import React from 'react';
import { useEffect, useState } from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import ProfileCourses from '../components/Profile/ProfileCourses';
import Courses from '../components/Profile/Courses';
import {getUserById,updateUser} from '../pages/api/Users/users';
import axios from 'axios';

const Profile = () => {
    /**Consume API get profile */
    const API_URL = "https://oh6s1ltanb.execute-api.us-east-1.amazonaws.com/dev/";

    const [profile, setProfile] = useState({});
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [user, setUser] = useState('');
    const [userId, setUserId] = useState('');

    //**Get user by ID from API */
    const getUser = async () => {
        try {
            //const userId = localStorage.getItem('userId');
            const response = await axios.get(API_URL + "users/getUserById?user_id=" + "2");
            console.log("data",response.data);
            setProfile(response.data);
            setLoading(false)
        } catch (error) {
            console.log("error",error);
            setError(true);
            setErrorMessage(error.message);
            setLoading(false);
        }
    }
    useEffect(() => {
        /**Get list of courses */
        console.log("Getting User");
        getUser();
      }, []);
   
    

    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Perfil" 
                homePageUrl="/" 
                homePageText="Inicio" 
                activePageText="Perfil" 
            />  

            {loading ? (<h1 className='ml-3'>Loading....</h1>):(
                   <div className="profile-area">
                <div className="container">

                    <div className="profile-box ptb-100">
                        <div className="row align-items-center">
                        <h3>Datos personales</h3>

                            <div className="col-lg-9 col-md-9">
                                <div className="profile-details">
                                    <div className="form-group">
                                        <label>Nombre</label>
                                        <input type="text" className="form-control" placeholder="David Quintanilla" value={profile.name} />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="text" className="form-control" placeholder="dquintanilla@ayluu.io" value={profile.email}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Wallet</label>
                                        <input type="text" className="form-control" value={profile.wallet} />
                                    </div>
                                </div>           
                   


                            </div>

                            <div className="col-lg-3 col-md-3">
                                <div className="content">
                                   
                                <img className="rounded-circle z-depth-2" alt="100x100" src={profile.image}
                                    data-holder-rendered="true"/>
                                 

                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" id="customFile"/>
                                    </div>

                                    <h3 className='mt-3'>Saldo: {profile.totalRewards}</h3>
                                    
                                 

                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                    
                    <Courses />
                </div>
            </div>
            )}
 
            <Footer />
        </React.Fragment>
    )
}

export default Profile;
import React from 'react';
import { useEffect, useState } from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import ProfileCourses from '../components/Profile/ProfileCourses';
import Courses from '../components/Profile/Courses';
import {getUserById,updateUser} from '../pages/api/Users/users';

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

    const getUserBy = async () => {
        try {
            const response = await axios.get(API_URL + "users/getUserById?user_id=28");
            console.log("data",response.data);
         
        } catch (error) {
            setError(true);
            setErrorMessage(error.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        "use strict";
      getUserBy();
    }, []);
    /**Update user */
    const updateUser = (user) => {
        updateUser(user).then(response => {
            if (response.status === 200) {
                setSuccess(true);
                setSuccessMessage(response.data.message);
                setLoading(false);
            } else {
                setError(true);
                setErrorMessage(response.data.message);
                setLoading(false);
            }
        }
        ).catch(error => {
            setError(true);
            setErrorMessage(error.message);
            setLoading(false);
        }
        );
    }

    

    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Perfil" 
                homePageUrl="/" 
                homePageText="Inicio" 
                activePageText="Perfil" 
            />  

            <div className="profile-area">
                <div className="container">

                    <div className="profile-box ptb-100">
                        <div className="row align-items-center">
                        <h3>Datos personales</h3>

                            <div className="col-lg-9 col-md-9">
                                <div className="profile-details">
                                    <div className="form-group">
                                        <label>{profile.name}</label>
                                        <input type="text" className="form-control" placeholder="David Quintanilla" value={'David Quintanilla'} />
                                    </div>
                                    <div className="form-group">
                                        <label>{profile.email}</label>
                                        <input type="text" className="form-control" placeholder="dquintanilla@ayluu.io" value={'dquintanilla@ayllu.io'}/>
                                    </div>
                                    <div className="form-group">
                                        <label>{profile.wallet}</label>
                                        <input type="text" className="form-control" value={'David Ernesto Quintanilla Benitez'} placeholder="David Ernesto Quintanilla Benitez" />
                                    </div>
                                </div>           
                   


                            </div>

                            <div className="col-lg-3 col-md-3">
                                <div className="content">
                                   
                                <img class="rounded-circle z-depth-2" alt="100x100" src={profile.avatar}
                                    data-holder-rendered="true"/>
                                    <label onClick={updateUser}>Cambiar foto</label>

                                    <div class="custom-file">
                                        <input type="file" className="custom-file-input" id="customFile"/>
                                    </div>
                                    
                                    <h3 className='mt-3'>Saldo: {profile.totalRewards} AYLLU</h3>
                                    <button class="btn btn-primary" type="submit">Transferir a wallet</button>

                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                    
                    <Courses />
                </div>
            </div>
 
            <Footer />
        </React.Fragment>
    )
}

export default Profile;
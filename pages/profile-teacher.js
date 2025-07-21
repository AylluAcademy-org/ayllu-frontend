import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import ProfileCourses from '../components/Profile/ProfileCourses';
import Courses from '../components/Profile/courses-teacher';

const Profile = () => {
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
                                        <label>Nombre Completo</label>
                                        <input type="text" className="form-control" placeholder="Nombre completo" />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="text" className="form-control" placeholder="Nombre completo" />
                                    </div>
                                    <div className="form-group">
                                        <label>Dirección de Wallet</label>
                                        <input type="text" className="form-control" placeholder="Nombre completo" />
                                    </div>
                                </div>           
                   


                            </div>

                            <div className="col-lg-3 col-md-3">
                                <div className="content">
                                   
                                <img class="rounded-circle z-depth-2" alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg"
                                    data-holder-rendered="true"/>
                                    <label>Cambiar foto</label>

                                    <div class="custom-file">
                                        <input type="file" className="custom-file-input" id="customFile"/>
                                    </div>
                                    
                                    <h3 className='mt-3'>Saldo: 430 AYLLU</h3>
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
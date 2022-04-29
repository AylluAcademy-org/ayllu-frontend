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
                pageTitle="Nuevo curso" 
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
                                        <label>Categoria</label>
                                        <input type="text" className="form-control" placeholder="Categoria" />
                                    </div>
                                    <div className="form-group">
                                        <label>Descripcion</label>
                                        <textarea type="text" className="form-control" placeholder="Descripcion" />
                                    </div>
                                </div>           
                   


                            </div>

                            <div className="col-lg-3 col-md-3">
                                <div className="content">
                                <label>Portada del curso</label>

                                <img alt="100x100" src="https://i.ytimg.com/vi/fJRBeWwdby8/maxresdefault.jpg"
                                  />

                                    <div class="custom-file">
                                        <input type="file" className="custom-file-input" id="customFile"/>
                                    </div>
                                    

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
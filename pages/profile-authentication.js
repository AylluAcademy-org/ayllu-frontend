import React, { useState } from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import LoginForm from "../components/ProfileAuthentication/LoginForm";
import RegisterForm from "../components/ProfileAuthentication/RegisterForm";
import Footer from "../components/_App/Footer";
import { createUser } from "./api/Users/users";
const ProfileAuthentication = () => {
  //create states for the forms
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [walletadd, setWalletadd] = useState("");

  //create a function to handle the submit event of the register form
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const user = {
      name: name,
      email: email,
      password: password,
      image: image,
      walletadd: walletadd,
    };
    createUser(user);
  };

  return (
    <React.Fragment>
      <Navbar />
      <PageBanner
        pageTitle="Autenticación de perfil"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Autenticación de perfil"
      />

      <div className="profile-authentication-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <LoginForm />
            </div>

            <div className="col-lg-6 col-md-12">
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default ProfileAuthentication;

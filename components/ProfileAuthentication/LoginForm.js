import React from 'react';
import Link from 'next/link';

import { useState } from "react";
//Import sweetalert2
import Swal from "sweetalert2";
//Import API Function
import { loginUser } from "../../pages/api/Auth/auth";
import { useRouter } from 'next/router';
import { useToken } from '../../utils/TokenContext';

const LoginForm = () => {
/* Creating a state for each of the inputs. */  
const router = useRouter();
const { login } = useToken(); 
/* Creating a state for each of the inputs. */
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
/**
   * It creates a user object to send to the API.
   * @param e - event
   */

const handleLoginSubmit = (e) => {
  
    e.preventDefault();
    //create a user object to send to the API
    const user = {
      email: email,
      password: password,     
    };       
    loginUser(user).then((response) => {
        try {                           
          if (response.auth  === true) {
            /* Clearing the form. */
            //setEmail(""); 
            //setPassword(""); 
            localStorage.setItem('userName', response.userName);
            //const { token: responseToken, setToken } = useToken();
            login(response.token,response.userName,response.userID);
            router.push('/home');
           // console.log(router.asPath)
          }
          else
          {           
            Swal.fire({
              title: "Error",
              text: response.message,
              icon: "error",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        } catch (error) {  
          console.log(error);
          Swal.fire({
            title: "Error",
            text: "Intentalo de nuevo" + error,
            icon: "error",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });

};
    return (
        <div className="login-form">
            <h2>Ingresar</h2>
            <form>
                <div className="form-group">
                    <label>Correo Electrónico</label>
                    <input type="text" className="form-control" placeholder="Username or email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Contraseña</label>
                    <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-6 remember-me-wrap">
                        <p>
                            <input type="checkbox" id="test2" />
                            <label htmlFor="test2">Recuerdame</label>
                        </p>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6 lost-your-password-wrap">
                        <Link href="#">
                            <a className="lost-your-password">Olvidaste tu contraseña?</a>
                        </Link>
                    </div>
                </div>
                <button type="submit" onClick={handleLoginSubmit}>
                Log In
                </button>
               
            </form>
        </div>
    )
}

export default LoginForm;
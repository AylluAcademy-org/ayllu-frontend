import React from "react";
import { useState } from "react";
//Import sweetalert2
import Swal from "sweetalert2";
//Import API Function
import { createUser } from "../../pages/api/Users/users";

/**
 * It creates a user object to send to the API.
 */
const RegisterForm = () => {
  /* Creating a state for each of the inputs. */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [walletadd, setWalletadd] = useState("");

  /**
   * It creates a user object to send to the API.
   * @param e - event
   */

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    //create a user object to send to the API
    const user = {
      name: name,
      email: email,
      password: password,
      image: image,
      walletadd: walletadd,
    };

    createUser(user).then((response) => {
      try {
        if (response.status === 200) {
          Swal.fire({
            title: "Success",
            text: "User created successfully",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
          /* Clearing the form. */
          setName("");
          setEmail("");
          setPassword("");
          setImage("");
          setWalletadd("");
          //reload the page
          //window.location.reload();
        }
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: "Usuario no creado",
          icon: "error",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
    //reload the page
    //window.location.reload();
  };

  return (
    <div className="register-form">
      <h2>Registrate</h2>

      <form>
        <div className="form-group">
          <label>Nombre Completo</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Nombre completo"
          />
        </div>

        <div className="form-group">
          <label>Correo Electrónico</label>
          <input
            type="email"
            className="form-control"
            placeholder="Correo Electrónico"
          />
        </div>

        <div className="form-group">
          <label>Dirección de billetera digital ($ADA)</label>
          <input type="text" className="form-control" placeholder="Dirección" />
        </div>

        <div className="form-group">
          <label>Avatar</label>
          <div class="custom-file">
            <input type="file" className="custom-file-input" id="customFile" />
          </div>
        </div>

        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Contrasena"
          />
        </div>

        <p className="description">
          La contraseña debe tener al menos ocho caracteres. Para hacerlo más
          fuerte, use letras mayúsculas y minúsculas, números y símbolos como !
          " ? $ % ^ & )
        </p>

        <button type="submit" onClick={handleRegisterSubmit}>
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;

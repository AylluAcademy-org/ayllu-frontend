import React from "react";
import { createUser } from "./api/Users/users";

const RegisterForm = () => {
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

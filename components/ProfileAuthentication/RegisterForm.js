import React from 'react';

const RegisterForm = () => {
    return (
        <div className="register-form">
            <h2>Registrate</h2>

            <form>
                <div className="form-group">
                    <label>Nombre Completo</label>
                    <input type="text" className="form-control" placeholder="Username or email" />
                </div>

                <div className="form-group">
                    <label>Correo Electrónico</label>
                    <input type="email" className="form-control" placeholder="Username or email" />
                </div>

                <div className="form-group">
                    <label>Dirección de billetera digital ($ADA)</label>
                    <input type="text" className="form-control" placeholder="Username or email" />
                </div>
                
                <div className="form-group">
                    <label>Avatar</label>
                    <div class="custom-file">
                        <input type="file" className="custom-file-input" id="customFile"/>
                    </div>
                </div>

                <div className="form-group">
                    <label>Contraseña</label>
                    <input type="password" className="form-control" placeholder="Password" />
                </div>

                <p className="description">La contraseña debe tener al menos ocho caracteres. Para hacerlo más fuerte, use letras mayúsculas y minúsculas, números y símbolos como ! " ? $ % ^ & )</p>

                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default RegisterForm;
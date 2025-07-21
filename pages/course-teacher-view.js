import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useToken } from '../utils/TokenContext';

import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import SeeCourses from '../components/NewCourse/seeCourses';
import NewCourse from '../components/NewCourse/newCourse';

const Profile = () => {
    const [ventana, setVentana] = useState("VerCursos");
    const router = useRouter();
    const { loggedIn } = useToken();

    // 👇 Redirigir si no hay sesión iniciada
    useEffect(() => {
        if (!loggedIn) {
            router.push('/');
        }
    }, [loggedIn]);

    const opciones = [
        { nombre: "VerCursos", componente: <SeeCourses />, icono: "fas fa-eye", label: "Mis Cursos" },
        { nombre: "CrearCurso", componente: <NewCourse />, icono: "fas fa-book", label: "Crear Curso" }
    ];

    return (
        <React.Fragment>
            <Navbar />
            <PageBanner
                pageTitle="Tus Cursos"
                homePageUrl="/"
                homePageText="Inicio"
                activePageText="Perfil"
            />

            <div className="container my-4">
                <div className="row">
                    {/* Menú lateral */}
                    <div className="col-md-3">
                        <h4>Opciones</h4>
                        <ul className="list-group">
                            {opciones.map(opcion => (
                                <li key={opcion.nombre}
                                    className={`list-group-item ${ventana === opcion.nombre ? 'active' : ''}`}
                                    onClick={() => setVentana(opcion.nombre)}
                                    style={{ cursor: "pointer", display: "flex", alignItems: "center", padding: "10px" }}>
                                    <i className={`${opcion.icono}`} style={{ marginRight: "10px" }}></i>
                                    <span>{opcion.label}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contenido dinámico */}
                    <div className="col-md-9">
                        {opciones.find(opcion => opcion.nombre === ventana)?.componente}
                    </div>
                </div>
            </div>

            <Footer />
        </React.Fragment>
    );
};

export default Profile;

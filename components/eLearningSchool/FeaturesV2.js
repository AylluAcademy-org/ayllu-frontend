import React from 'react';
import Link from 'next/link';

const Features = () => {
    return (
        <div className="features-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <h2>Impulsa tu Carrera </h2>
                    <p>Posiciónate estratégicamente para los desafíos y demandas del mercado laboral!</p>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-features-box">
                            <div className="icon">
                                <i className="flaticon-brain-process"></i>
                            </div>
                            <h3>Aprende Habilidades Practicas y Pertinentes</h3>
                            <p>Prioriza habilidades que cumplan con la demanda del mercado, aquí las enseñamos!</p>

                            <Link href="/profile-authentication">
                                <a className="link-btn">Comienza Ya!</a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-features-box">
                            <div className="icon">
                                <i className="flaticon-computer"></i>
                            </div>
                            <h3>Elige tu Ritmo de Aprendizaje</h3>
                            <p>Elige entre dos posibles caminos!</p>
                            <p>- Flex</p>
                            <p>- Compacto</p>
                           
                            <Link href="/profile-authentication">
                                <a className="link-btn">Comienza Ya!</a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-features-box">
                            <div className="icon">
                                <i className="flaticon-shield-1"></i>
                            </div>
                            <h3>Conocimiento Derivado de la Industria</h3>
                            <p>Los maestros son miembros activos en la Industria. Estamos a la vanguardia de la tecnología!</p>
                            
                            <Link href="/profile-authentication">
                                <a className="link-btn">Comienza Ya!</a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-features-box">
                            <div className="icon">
                                <i className="flaticon-world"></i>
                            </div>
                            <h3>Gana por Aprender</h3>
                            <p>Adquiere incentivo socioeconómico por ser parte del proceso enseñanza-aprendizaje!</p>
                            
                            <Link  href="/profile-authentication">
                                <a className="link-btn">Aprende Mas!</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;
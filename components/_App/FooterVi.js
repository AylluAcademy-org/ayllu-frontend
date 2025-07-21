import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();
 
    return (
        <footer className="footer-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <Link href="/">
                                <a className="logo">
                                    <img src="/images/ayllu_logo2.png" width='87' height='24' alt="logo" />
                                </a>
                            </Link>

                            <p>Somos individuos de diferentes países Latino Americanos con un gol en común: Agregar valor educativo a Latino América, para que se sus sociedades se mantengan a la vanguardia de las tecnologías, y las habilidades prácticas para el desarrollo social.</p>

                            <ul className="social-link">
                                <li>
                                    <a href="#" className="d-block" target="_blank">
                                        <i className='bx bxl-facebook'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="d-block" target="_blank">
                                        <i className='bx bxl-twitter'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="d-block" target="_blank">
                                        <i className='bx bxl-instagram'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="d-block" target="_blank">
                                        <i className='bx bxl-linkedin'></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="single-footer-widget pl-5">
                            
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                        <h3>Navegar</h3>
                            <ul className="footer-links-list">
                                <li>
                                    <Link href="/">
                                        <a>Inicio</a>
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link href="/about-1">
                                        <a>About</a>
                                    </Link>
                                </li> */}
                                <li>
                                    <Link href="/courses-1">
                                        <a>Cursos</a>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/contact">
                                        <a>Contacto</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Direccion</h3>
                            <ul className="footer-contact-info">
                                <li>
                                    <i className='bx bx-map'></i> 
                                    2750 Quadra Street Golden Victoria Road, New York, USA
                                </li>
                                <li>
                                    <i className='bx bx-phone-call'></i> 
                                    <a href="tel:+44587154756">+1 (123) 456 7890</a>
                                </li>
                                <li>
                                    <i className='bx bx-envelope'></i> 
                                    <a href="mailto:hello@Ayllu.com">hello@Ayllu.com</a>
                                </li>
                            
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom-area">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <p><i className='bx bx-copyright'></i>{currentYear} Ayllu</p>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <ul>
                                <li>
                                    <Link href="/privacy-policy">
                                        <a>Politica de privacidad</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/terms-of-service">
                                        <a>Terminos y condiciones</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </footer>
    );
}

export default Footer;
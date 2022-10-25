import React from 'react';
import Link from 'next/link';

const FooterV2 = () => {
    const currentYear = new Date().getFullYear();
 
    return (
        <footer className="footer-area">
            <div className="container-fluid">
            
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="single-footer-widget">
                            <Link href="/">
                                <a className="logo">
                                    <img src="/images/ayllu_logo2.png" width='87' height='24' alt="logo" />
                                </a>
                            </Link>

                            <p>Somos individuos de diferentes países Latino Americanos con un gol en común: Agregar valor educativo a Latino América, para que se sus sociedades se mantengan a la vanguardia de las tecnologías, y las habilidades prácticas para el desarrollo social.</p>

                            
                        </div>
                    </div>                  
                    <div className="col-lg-1 col-md-1 col-sm-0">
                        <div class="vl"></div>
                    </div>

                    <div className="col-lg-5 col-md-5 col-sm-12">
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
                                    <Link href="/">
                                        <a>Sobre Nosotros?</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/faq">
                                        <a>FAQ</a>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/">
                                        <a>Contacto</a>
                                    </Link>
                                    <ul className="social-link">
                                <li>
                                    <a href="#" className="d-block" target="_blank">
                                    <i class='bx bxl-discord' ></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="d-block" target="_blank">
                                        <i className='bx bxl-twitter'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="d-block" target="_blank">
                                        <i className='bx bxs-envelope'></i>
                                    </a>
                                </li>
                                
                            </ul>
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
            

            
        </footer>
    );
}

export default FooterV2;
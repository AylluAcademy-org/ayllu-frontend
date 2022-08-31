import React from 'react';
import Link from '../../utils/ActiveLink';

const Navbar = () => {
    const [menu, setMenu] = React.useState(true)

    const toggleNavbar = () => {
        setMenu(!menu)
    }

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0); 
    })
 
    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <React.Fragment>
            <div id="navbar" className="navbar-area">
                <div className="Ayllu-nav">
                    <div className="container-fluid">
                        <div className="navbar navbar-expand-lg navbar-light">
              
                            <Link href="/">
                                <a onClick={toggleNavbar} className="navbar-brand">
                                    <img src="/images/home/ayllu_logov2.png" width='83' height='24' alt="logo" />
                                </a>
                            </Link>

                            <button 
                                onClick={toggleNavbar} 
                                className={classTwo}
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                               
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link href="/home" activeClassName="active">
                                            <a className="nav-link">
                                                Inicio 
                                            </a>
                                        </Link>

                                    </li>

 
                                    <li className="nav-item ">
                                        <Link href="/courses-1">
                                            <a  className="nav-link">
                                                Cursos
                                            </a>
                                        </Link>

                                    </li>
                                    <li className="nav-item">
                                        <Link href="/faq">
                                            <a className="nav-link">
                                                Sobre Nosotros
                                            </a>
                                        </Link>

                                    </li>
                                    <li className="nav-item">
                                        <Link href="/faq">
                                            <a className="nav-link">
                                                FAQs
                                            </a>
                                        </Link>

                                    </li>
                                   

                                  
                                </ul>

                                <div className="others-option d-flex align-items-center">
                                    
                                    <div className="option-item">
                                        <Link href="/profile-authentication">
                                            <a className="default-btn">
                                                <i className="flaticon-user"></i> Registrate/Login <span></span>
                                            </a>
                                        </Link>
                                    </div>
                                    

                                </div>

                                <form className="search-box">
                                    <input type="text" className="input-search" placeholder="Busca lo que desees" />
                                    <button type="submit">
                                        <i className="flaticon-search"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Navbar;

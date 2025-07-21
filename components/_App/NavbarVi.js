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
                                    <img src="/images/ayllu_logo.png" width='83' height='24' alt="logo" />
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
                                <form className="search-box">
                                    <input type="text" className="input-search" placeholder="Busca lo que desees" />
                                    <button type="submit">
                                        <i className="flaticon-search"></i>
                                    </button>
                                </form>

                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link href="/" activeClassName="active">
                                            <a className="nav-link">
                                                Inicio 
                                            </a>
                                        </Link>

                                    </li>
{/* 
                                    <li className="nav-item">
                                        <Link href="#">
                                            <a onClick={e => e.preventDefault()} className="nav-link">
                                                Pages 
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="#">
                                                    <a onClick={e => e.preventDefault()} className="nav-link">
                                                        About Us <i className='bx bx-chevron-down'></i>
                                                    </a>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link href="/about-1" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">About Us 01</a>
                                                        </Link>
                                                    </li> 

                                                    <li className="nav-item">
                                                        <Link href="/about-2" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">About Us 02</a>
                                                        </Link>
                                                    </li> 

                                                    <li className="nav-item">
                                                        <Link href="/about-3" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">About Us 03</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
 
                                            <li className="nav-item">
                                                <Link href="/success-story" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Success Story</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/advisor" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Teacher</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/gallery" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Gallery</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/faq" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">FAQs</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/contact" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Contact Us</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/profile-authentication" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Login/Register</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/404" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">404 Error Page</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/coming-soon" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Coming Soon</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/purchase-guide" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Purchase Guide</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/privacy-policy" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Privacy Policy</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/terms-of-service" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Terms of Service</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li> */}
 
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
                                                FAQs
                                            </a>
                                        </Link>

                                    </li>
                                   

                                    {/* <li className="nav-item">
                                        <Link href="#">
                                            <a onClick={e => e.preventDefault()} className="nav-link">
                                                Events <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/events" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Events</a>
                                                </Link>
                                            </li>
 
                                            <li className="nav-item">
                                                <Link href="/single-events" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Events Details</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li> */}
 
                                    {/* <li className="nav-item">
                                        <Link href="#">
                                            <a onClick={e => e.preventDefault()} className="nav-link">
                                                Shop <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/products-list-1" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Product List 01</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/products-list-2" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Product List 02</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/cart" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Cart</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/checkout" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Checkout</a>
                                                </Link>
                                            </li>
 
                                            <li className="nav-item">
                                                <Link href="/single-products" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Product Details</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
  */}
                                    {/* <li className="nav-item">
                                        <Link href="#">
                                            <a onClick={e => e.preventDefault()} className="nav-link">
                                                Blog <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/blog-1" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Grid (2 in Row)</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/blog-2" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Grid (3 in Row)</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/blog-3" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Grid (Full Width)</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/blog-4" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Right Sidebar</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="#">
                                                    <a onClick={e => e.preventDefault()} className="nav-link">
                                                        Single Post <i className='bx bx-chevron-down'></i>
                                                    </a>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link href="/single-blog-1" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Default</a>
                                                        </Link>
                                                    </li> 

                                                    <li className="nav-item">
                                                        <Link href="/single-blog-2" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">With Video</a>
                                                        </Link>
                                                    </li> 

                                                    <li className="nav-item">
                                                        <Link href="/single-blog-3" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">With Image Slider</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li> */}
                                </ul>

                                <div className="others-option d-flex align-items-center">
                                    {/* <div className="option-item">
                                        <div className="cart-btn">
                                            <Link href="/cart">
                                                <a><i className='flaticon-shopping-cart'></i> <span>3</span></a>
                                            </Link>
                                        </div>
                                    </div> */}

                                    <div className="option-item">
                                        <Link href="/profile-authentication">
                                            <a className="default-btn">
                                                <i className="flaticon-user"></i> Entrar/Registrarse <span></span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Navbar;

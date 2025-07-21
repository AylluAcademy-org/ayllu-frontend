import React, { useState, useEffect } from 'react';
import Link from '../../utils/ActiveLink';
import Swal from "sweetalert2";
import { useToken } from '../../utils/TokenContext';
import { loginWallet } from "../../pages/api/Auth/auth";
import { createUserWallet } from "../../pages/api/users/users";
import { useRouter } from 'next/router';
import { CardanoWallet, useAddress, useWallet } from '@meshsdk/react';
import "@meshsdk/react/styles.css";

const Navbar = () => {
    const [menu, setMenu] = useState(true);
    const [walletAddress, setWalletAddress] = useState(null);
    const [Nombre, setLoggedIn] = useState(false);

    const { loggedIn, token, logout, userName, userID, login } = useToken();
    const router = useRouter();

    const { connect, disconnect } = useWallet();
    const address = useAddress();

    const toggleNavbar = () => setMenu(!menu);

    const desconectarBilletera = async () => {
        logout();
        disconnect();
        console.log("🔌 Desconectado de la billetera:", address);
        router.push('/home');
    };

    useEffect(() => {
        let isMounted = true;
        if (address && isMounted) {
            setWalletAddress(address);
        }
        return () => {
            isMounted = false;
        };
    }, [address]);

    const conectarBilletera = async () => {
        let intentos = 0;
        let maxIntentos = 10;

        while (!address && intentos < maxIntentos) {
            console.log("⏳ Esperando dirección de la billetera...");
            await new Promise(resolve => setTimeout(resolve, 500));
            intentos++;
        }

        if (!address) {
            Swal.fire({
                title: "Error",
                text: "❌ No se pudo obtener la dirección de la billetera. Inténtalo nuevamente.",
                icon: "error",
                showConfirmButton: false,
                timer: 2500,
            });
            return;
        }

        console.log("✅ Dirección obtenida:", address);
        setWalletAddress(address);
        connetToWallet(address);
    };

    const connetToWallet = async (walletAddress) => {
        if (!walletAddress) {
            console.log("❌ No se pudo obtener la dirección de la billetera...");
            return;
        }

        console.log("🔗 Conectando con la billetera:", walletAddress);

        const walletData = {
            name: "ANONIMO",
            lastname: "ANONIMO",
            addresses: walletAddress,
            email: walletAddress,
            password: walletAddress,
            confirmPassword: walletAddress,
            wallet: walletAddress,
        };

        try {
            const response = await loginWallet(walletData);

            if (!response.auth) {
                console.log("🛑 Usuario no encontrado, registrando...");
                const responseCreate = await createUserWallet(walletData);

                const walletDataCreate = {
                    wallet: responseCreate.data.wallet,
                };

                const responseLogin = await loginWallet(walletDataCreate);

                if (responseLogin.auth) {
                    localStorage.setItem("userName", responseLogin.userName);
                    login(responseLogin.token, responseLogin.userName, responseLogin.userID);
                    router.push("/home");
                } else {
                    Swal.fire({
                        title: "Error",
                        text: response.message,
                        icon: "error",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            } else {
                console.log("✅ Usuario autenticado correctamente.");
                localStorage.setItem("userName", response.userName);
                login(response.token, response.userName, response.userID);
                router.push("/home");

                Swal.fire({
                    title: "Ayllu",
                    text: "Verificando...",
                    icon: "info",
                    showConfirmButton: false,
                    timer: 1800,
                });
            }
        } catch (error) {
            console.error("❌ Error al conectar con la billetera:", error);
            Swal.fire({
                title: "Error",
                text: "Ocurrió un error al conectar con la billetera.",
                icon: "error",
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setLoggedIn(!!token);
            const elementId = document.getElementById("navbar");
            const handleScroll = () => {
                if (window.scrollY > 170) {
                    elementId?.classList.add("is-sticky");
                } else {
                    elementId?.classList.remove("is-sticky");
                }
            };
            document.addEventListener("scroll", handleScroll);
            window.scrollTo(0, 0);

            return () => document.removeEventListener("scroll", handleScroll);
        }
    }, [token]);

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
                                    <img src="/images/home/ayllu_logov2.png" width="83" height="24" alt="logo" />
                                </a>
                            </Link>

                            <button
                                onClick={toggleNavbar}
                                className={classTwo}
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
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
                                            <a className="nav-link">Inicio</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/courses-1">
                                            <a className="nav-link">Cursos</a>
                                        </Link>
                                    </li>

                                    {userID === 182 && (
                                        <li className="nav-item">
                                            <Link href="/course-teacher-view">
                                                <a className="nav-link">Maestro </a>
                                            </Link>
                                        </li>
                                    )} 

                                    <li className="nav-item">
                                        <Link href="/about-2">
                                            <a className="nav-link">Sobre Nosotros</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/faq">
                                            <a className="nav-link">FAQs</a>
                                        </Link>
                                    </li>
                                </ul>

                                <div className="others-option d-flex align-items-center">
                                    <div className="option-item">
                                        {loggedIn ? (
                                            <div>
                                                {walletAddress && (
          <Link href="/rewards-student">
            <a
              title="Ver recompensas"
              style={{
                fontSize: '1.6rem',
                textDecoration: 'none',
                cursor: 'pointer'
              }}
            >
              💰
            </a>
          </Link>
        )}
                                                <span>{userName}</span>
                                                <span> {userID} </span>
                                                <button onClick={desconectarBilletera} className="default-btn">
                                                    <i className="flaticon-user"></i> Cerrar Sesión
                                                </button>
                                            </div>
                                        ) : (
                                            <CardanoWallet
                                                className="default-btn"
                                                label="Conectar billetera"
                                                isDark={false}
                                                persist={true}
                                                onConnected={conectarBilletera}
                                                onDisconnected={desconectarBilletera}
                                                cardanoPeerConnect={{
                                                    dAppInfo: {
                                                        name: "Mesh SDK",
                                                        url: "https://meshjs.dev/",
                                                    },
                                                    announce: [
                                                        "wss://dev.btt.cf-identity-wallet.metadata.dev.cf-deployments.org",
                                                    ],
                                                }}
                                                style={{
                                                    color: "red",
                                                    backgroundColor: "#3f51b5",
                                                }}
                                            />
                                        )}
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
};

export default Navbar;

// Importa las dependencias necesarias
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import logo from '../assets/img/logo-tienda.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { Outlet, Link } from 'react-router-dom';

// Componente de la barra de navegación
export const NavBarr = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('principal');

    // Efecto para manejar el scroll
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Función para actualizar el enlace activo
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/" className={activeLink === 'principal' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('principal')}>
                            Principal
                        </Nav.Link>
                        <Nav.Link href="/android" className={activeLink === 'android' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('android')}>
                            ANDROID
                        </Nav.Link>
                        <Nav.Link href="/ios" className={activeLink === 'ios' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('ios')}>
                            IOS
                        </Nav.Link>
                        <Nav.Link href="/tablets" className={activeLink === 'tablets' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('tablets')}>
                            TABLETS
                        </Nav.Link>
                        <Nav.Link href="/pcs" className={activeLink === 'pcs' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('pcs')}>
                            PC'S
                        </Nav.Link>
                        <Nav.Link href="/laptops" className={activeLink === 'laptops' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('laptops')}>
                            LATOP'S
                        </Nav.Link>
                        <Nav.Link href="/televisores" className={activeLink === 'televisores' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('televisores')}>
                            TELEVISORES
                        </Nav.Link>
                        <Nav.Link href="/consolas" className={activeLink === 'consolas' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('consolas')}>
                            CONSOLAS
                        </Nav.Link>
                        <Nav.Link href="/interaccion" className={activeLink === 'interaccion' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('interaccion')}>
                            Interaccion
                        </Nav.Link>
                        <Nav.Link href="/creditos" className={activeLink === 'creditos' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('creditos')}>
                            Creditos
                        </Nav.Link>

                      

                    </Nav>


                    <span className="navbar-text">
                        <div className="social-icon">
                            {/*<a href="#"> <img src={navIcon1} alt="" /> </a>*/}
                            <a href="https://www.facebook.com/profile.php?id=100004295298748"> <img src={navIcon2} alt="" /> </a>
                            <a href="https://www.instagram.com/khriz_games/"> <img src={navIcon3} alt="" /> </a>
                        </div>
                        {/*<button className="vvd" onClick={() => console.log('Conectado')}>
                            <span>Iniciar Sesión</span>
                        </button>*/}
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

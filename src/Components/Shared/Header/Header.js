import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const Header = () => {
    const { user, logout } = useAuth();
    console.log(user)
    return (
        <div>

            <div className="pb-5">
                <Navbar className="fixed-top" collapseOnSelect navbar-expand-lg expand="lg" bg="dark" variant="dark">
                    <Container>
                        <img as style={{ width: '15%' }} src="https://i.ibb.co/Nt5Nvff/Screenshot-68-removebg-preview-removebg-preview.jpg" />

                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse className="ps-5" id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Link className="head-text ml-10 no-underline mr-10 text-white tw-pr-56" to="/home">Home</Link>













                            </Nav>


                            {
                                user?.email ?
                                    <Link className="mr-12" to="/dasboard"  ><Button>DashBoard</Button></Link>
                                    :
                                    <p></p>}





                            {
                                user?.email ?
                                    <button onClick={logout} className="text-white ml-3" >Log Out -{user.displayName}</button>
                                    :
                                    <NavLink className=" text-white text-2xl no-underline" to="/login">Log In</NavLink>}
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;
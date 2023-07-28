import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartShopping, faBell } from '@fortawesome/free-solid-svg-icons'

function Navbarheader() {
    return (
        <Navbar expand="lg" className="hdnav">
            <Container fluid>
                <i className='udemy-image'></i>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1" className='nav-heading'>Categories</Nav.Link>
                        <input
                            type="text"
                            placeholder="Search for anything"
                            className="nav-search"
                        />
                        <div className="nav-end">
                            <Nav.Link href="#action2" className='nav-heading'>Udemy Business</Nav.Link>
                            <Nav.Link href="#action2" className='nav-heading'>Teach on Udemy</Nav.Link>
                            <Nav.Link href="#action2" className='nav-heading'>My Learning</Nav.Link>
                            <FontAwesomeIcon icon={faHeart} className='nav-icon' />
                            <FontAwesomeIcon icon={faCartShopping} className='nav-icon' />
                            <FontAwesomeIcon icon={faBell} className='nav-icon' />
                        </div>
                        {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navbarheader;
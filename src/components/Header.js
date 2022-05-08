import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'


export default function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Crypto News Live</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="nav-links me-auto">
                <Link to="/" className='text-light'>News Feed</Link>
                <Link to="/converter" className='text-light'>Crypto Rate Converter</Link>
                <NavDropdown title="---" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">---</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">---</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">---</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                <Nav.Link href="#deets">---</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">---</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

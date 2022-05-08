import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap';
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
                    <Link to="/ranking">Crypto Ranking List</Link>
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
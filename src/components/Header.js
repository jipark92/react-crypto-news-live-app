import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Crypto News Live</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="#features">---</Nav.Link>
                <Nav.Link href="#pricing">---</Nav.Link>
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

import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap';
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Crypto Live Feed</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="nav-links me-auto">
                    <Link to="/" className='text-light'>NEWS</Link>
                    <Link to="/ranking" className='text-light'>RANK</Link>
                <NavDropdown title="TOOLS" id="collasible-nav-dropdown">
                    <Link to="/converter" className='text-dark'>Crypto Rate Converter</Link>
                    <br></br>
                    <Link to="/nft" className='text-dark'>NFT Items</Link>

                </NavDropdown>
                </Nav>
                <Nav>
                    ----
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
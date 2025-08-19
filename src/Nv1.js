import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Nv1() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">DYPCET</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">About us</Nav.Link>
             <Nav.Link href="#home">Campus Life</Nav.Link>
              <Nav.Link href="#home">Placements</Nav.Link>
            
            <NavDropdown title="department" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Electrical</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> Computer Science</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">data Science</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Mechanical</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nv1;
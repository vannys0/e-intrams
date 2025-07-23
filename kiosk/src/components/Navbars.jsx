import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function Navbars() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar expand="lg" bg='success' fixed='top' data-bs-theme="dark" className='d-flex justify-content-between'>
          <Container>
            <Navbar.Brand href="#home">e-Intrams</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className='ms-auto gap-4'>
                <Nav.Link onClick={() => navigate("/home")} >Home</Nav.Link>
                <Nav.Link onClick={() => navigate("/events")}>Events</Nav.Link>
                <Nav.Link onClick={() => navigate("/home")}>Announcements</Nav.Link>
                <Nav.Link onClick={() => navigate("/home")}>Score Board</Nav.Link>
                <Nav.Link onClick={() => navigate("/home")}>More</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </>
  );
}

export default Navbars;
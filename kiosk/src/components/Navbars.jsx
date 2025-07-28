import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/cbsua-logo.png';

function Navbars() {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token")
    navigate("/");
  }
  return (
    <>
      <Navbar expand="lg" bg='success' fixed='top' data-bs-theme="dark" className='d-flex justify-content-between'>
          <Container>
            <Navbar.Brand onClick={() => navigate("/home")}><span className="d-flex gap-2"><img className='profile' src={Logo} alt="No Image" />e-Intrams</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className='ms-auto gap-4'>
                <Nav.Link onClick={() => navigate("/home")} >Home</Nav.Link>
                <Nav.Link onClick={() => navigate("/events")}>Events</Nav.Link>
                <Nav.Link onClick={() => navigate("/announcements")}>Announcements</Nav.Link>
                <Nav.Link onClick={() => navigate("/score_board")}>Score Board</Nav.Link>
                <Nav.Link>Coming Soon</Nav.Link>
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </>
  );
}

export default Navbars;
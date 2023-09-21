import { Container, Navbar, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Topbar = () => {
  const navigate = useNavigate();
  return (
    <Navbar expand="lg" className="bg-warning position-fixed top-0 w-100 z-3">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            width={"100px"}
            src="https://gmedia.playstation.com/is/image/SIEPDC/spider-man-miles-morales-daily-bugle-logo-02-en-02oct20?$facebook$"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Brand className="fs-3">Spaceflight</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="me-auto">
          <Nav.Link onClick={() => navigate("/")} className="fs-5">
            Home
          </Nav.Link>
          <Nav.Link href="#link" className="fs-5">
            Contatti
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Topbar;

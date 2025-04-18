import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Nav } from "react-bootstrap";

function MobileSidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div
        className="d-flex align-items-center justify-content-between bg-dark text-white px-3 py-2 position-fixed top-0 start-0 end-0 mx-3 mt-3 rounded-3 shadow z-3"
        style={{ zIndex: 1050 }}
      >
        <i
          className="bi bi-list fs-3 nav-link-color"
          style={{ cursor: "pointer" }}
          onClick={handleShow}
        ></i>

        <img
          src="/public/logos/music.svg"
          alt="Logo"
          style={{ height: "20px" }}
        />

        <p className="fs-6 nav-link-color mb-0">Accedi</p>
      </div>

      <Offcanvas show={show} onHide={handleClose} placement="top">
        <Offcanvas.Header className="bg-dark" closeButton>
          <Offcanvas.Title className="text-white">Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="bg-dark">
          <ul className="list-unstyled">
            <li>
              <Nav.Link href="#" className="text-white">
                <i className="bi bi-house-door fs-4 nav-link-color"> </i> Home
              </Nav.Link>
            </li>
            <li>
              <Nav.Link href="#" className="text-white">
                <i className="bi bi-collection fs-4 nav-link-color"> </i> Novità
              </Nav.Link>
            </li>
            <li>
              <Nav.Link href="#" className="text-white">
                <i className="bi bi-broadcast fs-4 nav-link-color"> </i> Radio
              </Nav.Link>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default MobileSidebar;

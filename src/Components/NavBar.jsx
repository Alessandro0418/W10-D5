import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

const Sidebar = () => {
  return (
    <Container fluid>
      <Row>
        <Col
          xs={6}
          md={4}
          lg={2}
          className="bg-dark p-3"
          style={{ height: "100vh", position: "fixed" }}
        >
          <img
            className="p-3 w-50"
            src="/public/logos/music.svg"
            alt="music-logo"
          />
          <input
            className="bg-dark border border-2 border-secondary rounded-2 p-1 ms-2 mt-2"
            placeholder="Cerca"
            type="search"
          />
          <Nav className="flex-column mt-3">
            <Nav.Link className="text-white" href="#">
              <i class="bi bi-house-door fs-4 nav-link-color"> </i>
              Home
            </Nav.Link>
            <Nav.Link className="text-white" href="#">
              <i class="bi bi-collection fs-4 nav-link-color"> </i>
              Novità
            </Nav.Link>
            <Nav.Link className="text-white" href="#">
              <i class="bi bi-broadcast fs-4 nav-link-color"> </i>
              Radio
            </Nav.Link>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
};

export default Sidebar;

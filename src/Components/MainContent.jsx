import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import { Row, Col } from "react-bootstrap";

const MainContent = () => {
  return (
    <div className="pt-md-0 pt-6 px-2 px-md-4">
      {" "}
      <h4 className="text-white">Novità</h4>
      <Row className="mb-4">
        <Col xs={12} md={6} className="mb-4">
          <p className="text-secondary fs-8 mb-0 mt-3">NUOVA STAZIONE RADIO</p>
          <p className="text-white mt-0">
            Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill
          </p>
          <img
            className="w-100 rounded-3 images mt-3"
            src="/public/images/1a.png"
            alt="Apple Music Chill"
          />
        </Col>

        <Col xs={12} md={6} className="mb-4">
          <p className="text-secondary fs-8 mb-0 mt-3">NUOVA STAZIONE RADIO</p>
          <p className="text-white mt-0">
            Ecco la nuova casa della musica latina
          </p>
          <img
            className="w-100 rounded-3 images mt-3"
            src="/public/images/1b.png"
            alt="Musica Latina"
          />
        </Col>
      </Row>
      <div className="mt-5">
        <p className="text-white">Nuovi episodi radio</p>
        <Row className="d-flex justify-content-between">
          <Col xs={6} sm={4} md={2} className="mb-4">
            <img
              className="w-100 rounded-3 images"
              src="/public/images/2a.png"
              alt=""
            />
          </Col>
          <Col xs={6} sm={4} md={2} className="mb-4">
            <img
              className="w-100 rounded-3 images"
              src="/public/images/2b.png"
              alt=""
            />
          </Col>
          <Col xs={6} sm={4} md={2} className="mb-4">
            <img
              className="w-100 rounded-3 images"
              src="/public/images/2c.png"
              alt=""
            />
          </Col>
          <Col xs={6} sm={4} md={2} className="mb-4">
            <img
              className="w-100 rounded-3 images"
              src="/public/images/2d.png"
              alt=""
            />
          </Col>
          <Col xs={6} sm={4} md={2} className="mb-4">
            <img
              className="w-100 rounded-3 images"
              src="/public/images/2e.png"
              alt=""
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default MainContent;

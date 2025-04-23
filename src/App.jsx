import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import "./App.css";
import MusicPlayer from "./Components/MusicPlayer";
import Sidebar from "./Components/NavBar";
import MobileSidebar from "./Components/MobileSidebar";
import MobilePlayer from "./Components/MobilePlayer";
import MainContent from "./Components/MainContent";
import ApiContent from "./Components/ApiContent";
import IntroAnimation from "./Components/IntroAnimation";

function App() {
  const [isIntroVisible, setIsIntroVisible] = useState(true);

  return (
    <Container fluid className="p-0">
      {isIntroVisible ? (
        <div className="intro-overlay">
          <IntroAnimation onFinish={() => setIsIntroVisible(false)} />
        </div>
      ) : (
        <>
          <div className="d-none d-md-flex">
            <Row className="w-100 m-0">
              <Col md={3} className="p-0">
                <Sidebar />
              </Col>
              <Col md={9} className="p-0 d-flex flex-column">
                <div className="p-3">
                  <MusicPlayer />
                </div>
                <div className="p-4 flex-grow-1 overflow-auto">
                  <MainContent />
                </div>
              </Col>
              <ApiContent />
            </Row>
          </div>

          {/* Mobile layout */}
          <div className="d-md-none">
            <MobileSidebar />
            <MainContent />
            <MobilePlayer />
          </div>
        </>
      )}
    </Container>
  );
}

export default App;

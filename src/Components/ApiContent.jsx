import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";

const ApiContent = () => {
  const API = `https://striveschool-api.herokuapp.com/api/deezer/search?q=queen`;
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(API);
      const data = await response.json();
      setTracks(data.data);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="mt-5">
      <h4 className="text-white">TEST</h4>
      <Row className="d-flex justify-content-between">
        {tracks.map((track) => (
          <Col xs={6} sm={4} md={2} key={track.id} className="mb-4">
            <div className="image-container">
              <img
                className="w-100 rounded-3 images"
                src={track.album.cover_medium}
                alt={track.album.title}
              />
            </div>
            <p className="text-white mt-2">{track.title}</p>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ApiContent;

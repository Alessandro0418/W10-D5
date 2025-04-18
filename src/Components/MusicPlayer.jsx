import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";

const MusicPlayer = () => {
  return (
    <div className="bg-dark text-white p-1 d-flex align-items-center justify-content-between me-5 rounded-2">
      <div className="d-flex align-items-center gap-3 fs-5 ms-5">
        <i className="bi bi-shuffle text-secondary"></i>
        <i className="bi bi-skip-backward-fill text-secondary"></i>
        <i className="bi bi-play-fill text-secondary fs-2"></i>
        <i className="bi bi-skip-forward-fill text-secondary"></i>
        <i className="bi bi-arrow-counterclockwise text-secondary"></i>
      </div>

      <div className="p-2 d-flex align-items-center justify-content-center secondary-2-bg w-50">
        <img
          src="/logos/apple.svg"
          alt="Apple Logo"
          style={{ height: "30px" }}
        />
      </div>

      <div className="d-flex align-items-center gap-3">
        <i className="bi bi-volume-down-fill text-secondary fs-4"></i>
        <input type="range" />
        <button className="btn btn-red text-white me-5 fs-7">
          <i className="bi bi-person-fill me-2"></i> Accedi
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;

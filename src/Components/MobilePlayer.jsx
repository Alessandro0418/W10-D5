const MobilePlayer = () => (
  <div
    className="mobile-player bg-dark text-white p-3 position-fixed bottom-0 start-0 end-0 mx-3 mb-3 d-flex justify-content-between align-items-center rounded-3 shadow"
    style={{ zIndex: 1000 }}
  >
    <img
      src="/public/images/2e.png"
      alt="Album Cover"
      style={{ width: "45px", borderRadius: "5px" }}
    />
    <div className="d-flex align-items-center gap-3">
      <i className="bi bi-play-fill text-secondary fs-2"></i>
      <i className="bi bi-skip-forward-fill text-secondary fs-4"></i>
    </div>
  </div>
);

export default MobilePlayer;

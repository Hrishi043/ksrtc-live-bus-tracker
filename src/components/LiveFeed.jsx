function LiveFeed({ buses }) {
  return (
    <div className="live-feed">
      <h3>📡 Live Bus Updates</h3>

      <div className="live-feed-list">
        {buses.length === 0 ? (
          <p className="no-bus">No live buses for this route</p>
        ) : (
          buses.map((bus) => (
            <div key={bus.id} className="live-feed-item">
              🚍 <strong>{bus.busNo}</strong> near{" "}
              <span>{bus.stops[bus.currentIndex]}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default LiveFeed;

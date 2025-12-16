function BusCarousel({ buses }) {
  return (
    <div className="carousel">
      <h3>🚌 Bus Details</h3>

      {buses.length === 0 ? (
        <p className="no-bus">No buses found for this route</p>
      ) : (
        <div className="carousel-track">
          {buses.map((bus) => (
            <div key={bus.id} className="carousel-card">
              <img src={bus.image} alt={bus.busNo} />
              <h4>{bus.busNo}</h4>
              <p>{bus.type}</p>
              <p>
                {bus.from} → {bus.to}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BusCarousel;

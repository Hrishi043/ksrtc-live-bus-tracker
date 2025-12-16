import JourneyProgress from "./JourneyProgress";

function BusCard({ bus }) {
  return (
    <div className="bus-card">
      <img src={bus.image} alt="KSRTC Bus" className="bus-img" />

      <h3>{bus.busNo}</h3>

      <p>
        Type: <span className="highlight">{bus.type}</span>
      </p>

      <p>
        Route: <span className="highlight">{bus.from}</span> →{" "}
        <span className="highlight">{bus.to}</span>
      </p>

      <p>
        Current Stop:
        <span className="highlight">
          {" "}
          {bus.stops[bus.currentIndex]}
        </span>
      </p>

      <JourneyProgress
        current={bus.currentIndex}
        total={bus.stops.length}
      />

      <p>
        Seats Available:{" "}
        <span className="highlight">
          {bus.availableSeats}/{bus.totalSeats}
        </span>
      </p>

      <p>
        Ticket Price: ₹
        <span className="highlight">{bus.ticketPrice}</span>
      </p>
    </div>
  );
}

export default BusCard;

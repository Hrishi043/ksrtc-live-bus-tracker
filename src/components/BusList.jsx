import BusCard from "./BusCard";

function BusList({ buses }) {
  if (buses.length === 0) {
    return <p className="no-bus">🚫 No buses found</p>;
  }

  return (
    <div className="bus-list">
      {buses.map((bus) => (
        <BusCard key={bus.id} bus={bus} />
      ))}
    </div>
  );
}

export default BusList;

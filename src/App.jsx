import { useEffect, useState } from "react";
import { busData } from "./data/busData";
import SearchForm from "./components/SearchForm";
import LiveFeed from "./components/LiveFeed";
import BusCarousel from "./components/BusCarousel";

// Proper shuffle for live feel
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function App() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [buses, setBuses] = useState(busData);

  // Live simulation every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setBuses((prev) =>
        shuffleArray(
          prev.map((bus) => ({
            ...bus,
            currentIndex:
              Math.random() > 0.5 && bus.currentIndex < bus.stops.length - 1
                ? bus.currentIndex + 1
                : bus.currentIndex,
            availableSeats:
              Math.random() > 0.7 && bus.availableSeats > 0
                ? bus.availableSeats - 1
                : bus.availableSeats
          }))
        )
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // Show specific buses ONLY when both fields entered
 const filteredBuses =
  from.trim() && to.trim()
    ? buses.filter(
        (bus) =>
          bus.from.toLowerCase().includes(from.toLowerCase()) &&
          bus.to.toLowerCase().includes(to.toLowerCase())
      )
    : buses;  

  return (
    <div className="container">
      <div className="header">
        <h1>🚍 KSRTC Live Bus Tracker</h1>
        <p>Simulated real-time public transport tracking</p>
      </div>

      <SearchForm from={from} to={to} setFrom={setFrom} setTo={setTo} />

      {/* LIVE UPDATES */}
      <LiveFeed buses={filteredBuses} />

      {/* ROUND SWIPEABLE BUS DETAILS */}
      <BusCarousel buses={filteredBuses} />
    </div>
  );
}

export default App;

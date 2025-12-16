function SearchForm({ from, to, setFrom, setTo }) {
  return (
    <div className="search-box">
      <input
        placeholder="Starting Point"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
      />
      <input
        placeholder="Destination"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />
    </div>
  );
}

export default SearchForm;

function JourneyProgress({ current, total }) {
  const percent = Math.round((current / (total - 1)) * 100);

  return (
    <div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
      <p className="progress-text">{percent}% journey completed</p>
    </div>
  );
}

export default JourneyProgress;

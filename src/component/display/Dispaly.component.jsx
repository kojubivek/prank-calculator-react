const Display = ({ strToDisplay }) => {
  return (
    <div className="display">
      <span className="modifier">{strToDisplay || "0.00"}</span>
    </div>
  );
};

export default Display;

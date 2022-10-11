const Display = ({ strToDisplay, isprank }) => {
  const clsName = isprank ? "display prank" : "display";

  return (
    <div className={clsName}>
      <span className="modifier">{strToDisplay || "0.00"}</span>
    </div>
  );
};

export default Display;

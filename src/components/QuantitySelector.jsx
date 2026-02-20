

const QuantitySelector = ({ quantity, onIncrease, onDecrease }) => {
  return (
    <div className="quantity" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <button onClick={onDecrease}>-</button>
      <span>{quantity}</span>
      <button onClick={onIncrease}>+</button>
    </div>
  );
};

export default QuantitySelector;


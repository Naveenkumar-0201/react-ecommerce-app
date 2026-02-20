
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;

  return (
    <div style={{ color: "#ffd900", fontSize: "18px" }}>
      {[...Array(fullStars)].map((_, i) => (
        <span key={i}>★</span>
      ))}

      {halfStar && <span>☆</span>}

      {[...Array(5 - fullStars - (halfStar ? 1 : 0))].map((_, i) => (
        <span key={i + 10}>☆</span>
      ))}
    </div>
  );
};

export default StarRating;
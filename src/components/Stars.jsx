import { FaStar } from "react-icons/fa";

const Rating = ({ rating, totalStars = 5 }) => {
  return (
    <div style={{ display: "flex", gap: "5px" }}>
      {Array.from({ length: totalStars }, (_, index) => (
        <FaStar
          key={index}
          size={20}
          color={index < rating ? "var(--color-primario)" : "#e4e5e9"}
        />
      ))}
    </div>
  );
};

export default Rating;
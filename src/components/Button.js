export const Button = ({ text, onClick }) => {
  return (
    <button
      animate={{ scale: 1 }}
      initial={{ scale: 0 }}
      exit={{ scale: 0 }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

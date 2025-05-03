// eslint-disable-next-line react/prop-types
const Button = ({ text = "", customClass = "" }) => {
  return (
    <button
      className={`custom-button rounded-full px-6 py-3 font-semibold text-white shadow-lg transition hover:opacity-90 ${customClass}`}
    >
      {text}
    </button>
  );
};

export default Button;

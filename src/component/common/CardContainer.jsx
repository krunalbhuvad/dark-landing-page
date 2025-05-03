const CardContainer = ({ children }) => {
  return (
    <div className="card-container h-full max-w-80 rounded-3xl transition-transform hover:scale-105">
      <div className="card rounded-3xl bg-[radial-gradient(circle_at_top_left,_#241C36_0%,_#0C0512_40%,_#0b0712_100%)]">
        {children}
      </div>
    </div>
  );
};

export default CardContainer;

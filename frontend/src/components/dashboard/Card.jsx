const Card = (props) => {
  const { value, icon, title } = props.card;
  return (
    <div className="stats bg-base-100 shadow-xl border border-base-content cursor-pointer hover:bg-base-200">
      <div className="stat">
        <div className="stat-figure text-primary">
          <span>{icon}</span>
        </div>
        <div className="stat-title text-base-content">{title}</div>
        <div className="stat-value text-primary">{value}</div>
        {/* <div className="stat-desc">21% more than last month</div> */}
      </div>
    </div>
  );
};
export default Card;

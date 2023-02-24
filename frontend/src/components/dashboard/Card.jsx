const Card = (props) => {
  const { value, icon, title } = props.card;
  return (
    <div className="stats bg-base-100 shadow-xl border border-base-content cursor-pointer hover:bg-base-200">
      <div className="stat">
        <div className="stat-figure text-primary">
          <span>{icon}</span>
        </div>
        <div className="stat-title">{title}</div>
        <div className="stat-value text-primary">{value}</div>
        {/* <div className="stat-desc">21% more than last month</div> */}
      </div>
      {/* <div className="card bg-base-100 shadow-xl border border-base-content">
        <div className="card-body">
          <div className="flex items-center justify-between">
            <h2 className="card-title text-primary ">{value}</h2>
            <span>{icon}</span>
          </div>
          <p>{title}</p>
        </div>
      </div> */}
    </div>
  );
};
export default Card;

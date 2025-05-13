const ConnectCard = ({ logo, name, id }) => {
  return (
    <div className="border-2 border-black rounded-xl p-3">
      <div className="flex items-center gap-2">
        <div>{logo}</div>
        <div>
          <h6>{name}</h6>
          <h2>@{id}</h2>
        </div>
      </div>
    </div>
  );
};
export default ConnectCard;

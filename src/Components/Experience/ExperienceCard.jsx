const ExperienceCard = ({ image, title, designation, description }) => {
  return (
    <div className="p-5 rounded-2xl border">
      <div className="flex gap-2 items-start">
        <div className="avatar">
          <div className="w-24">
            <img src={image} className="bg-fit" />
          </div>
        </div>
        <div>
          <h1 className="text-xl font-semibold">{title}</h1>
          <h3 className="text-lg font-medium">{designation}</h3>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};
export default ExperienceCard;

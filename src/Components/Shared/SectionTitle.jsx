const SectionTitle = ({ title }) => {
  return (
    <div className="flex items-center mb-5">
      <div className="w-12 h-1 bg-black mr-4"></div>
      <h1 className="text-4xl font-semibold">{title}</h1>
    </div>
  );
};
export default SectionTitle;

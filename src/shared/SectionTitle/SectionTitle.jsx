const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="text-center">
      <h4 className="text-2xl md:text-3xl text-amber-600 font-semibold">
        {subTitle}
      </h4>
      <h3 className="text-4xl md:text-6xl font-bold">{title}</h3>
    </div>
  );
};

export default SectionTitle;

const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="text-center">
      <h4 className="text-xl md:text-2xl text-amber-600 font-semibold">
        {subTitle}
      </h4>
      <h3 className="text-3xl md:text-4xl font-bold">{title}</h3>
    </div>
  );
};

export default SectionTitle;

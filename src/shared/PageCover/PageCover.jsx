const PageCover = () => {
  return (
    <div
      className="hero md:h-[350px]"
      style={{ backgroundImage: "url(https://i.ibb.co/qCHQmtn/SLIDE1.jpg)" }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content  text-neutral-content">
        <div className="max-w-md">
          <h1 className="mt-8 text-5xl font-bold">All Instructor</h1>
        </div>
      </div>
    </div>
  );
};

export default PageCover;

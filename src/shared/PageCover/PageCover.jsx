const PageCover = () => {
  return (
    <div
      className="hero h-[300px]"
      style={{ backgroundImage: "url(https://i.ibb.co/qCHQmtn/SLIDE1.jpg)" }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">All Instructor</h1>
        </div>
      </div>
    </div>
  );
};

export default PageCover;

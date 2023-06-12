import Container from "../Container/Container";

const Newsletter = () => {
  return (
    <div className="mt-10">
      <Container>
        <div className="bg-orange-600 py-10 px-4 md:px-10 z-10 rounded-md">
          <div className="md:flex gap-2 items-center justify-between">
            <div className="md:w-2/3 md:pe-7 mb-5 md:mb-0">
              <h2 className="text-white text-4xl">Join Our Newsletter</h2>
              <p className="text-lg mt-4 text-slate-200">
                Latest News and Updates
              </p>
            </div>
            <div className="md:join md:w-1/3">
              <input
                className="input input-bordered join-item w-full md:w-4/6"
                placeholder="Email"
              />
              <button className="btn join-item md:rounded-r-full w-full md:w-2/6 mt-3 md:mt-0">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Newsletter;

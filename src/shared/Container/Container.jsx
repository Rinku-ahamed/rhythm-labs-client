const Container = ({ children }) => {
  return (
    <div className="max-w-screen-xl mx-auto relative px-6 sm:px-10 md:px-0 overflow-hidden">
      {children}
    </div>
  );
};
export default Container;

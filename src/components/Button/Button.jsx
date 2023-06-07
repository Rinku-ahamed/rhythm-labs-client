const Button = ({ text }) => {
  return (
    <button className="bg-[#ef672a] text-white text-xl px-8 border border-[#ef672a] py-2 transition duration-200 rounded cursor-pointer hover:bg-white hover:text-[#ef672a] hover:scale-95 hover:border-[#ef672a] font-semibold">
      {text}
    </button>
  );
};

export default Button;

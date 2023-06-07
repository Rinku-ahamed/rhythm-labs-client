import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-6 py-10 bg-[#141b29] text-white">
      <div>
        <Link to="/" className="normal-case text-3xl font-bold text-white">
          Rhythm <span className="text-[#ef672a]">Labs</span>
        </Link>
        <p className="mt-5 text-slate-300">
          Rhythm Labs is a meticulously crafted website dedicated to the art of
          teaching music. Our purpose is to provide a comprehensive and
          enriching learning experience for music enthusiasts of all ages and
          skill levels With a team of highly skilled instructors.
        </p>
      </div>
      <div className="lg:ps-10">
        <h3 className="text-2xl">Quick Links</h3>
        <ul className="flex flex-col gap-3 mt-5 text-slate-300">
          <Link to="/">Home</Link>
          <Link to="/instructors">Instructors</Link>
          <Link to="/classes">Classes</Link>
          <Link to="/login">Login</Link>
        </ul>
      </div>
      <div className="lg:ps-3">
        <h3 className="text-2xl">Contact Us</h3>
        <ul className="flex flex-col gap-3  mt-5 text-slate-300">
          <li>04360, NewYork, 33 Matehouse str., 12/4</li>
          <li>803-33-5644-99</li>
          <li>admin@rhythmlabs.net</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

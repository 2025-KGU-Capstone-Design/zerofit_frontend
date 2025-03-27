import { Link } from "react-router-dom";

const LandingPageHeader = () => {
  return (
    <header className="w-full bg-mainnavy py-4 px-8 flex justify-start items-center shadow-md">
      <h1 className="text-2xl font-bold">
        <span>Zero</span>
        <span className="text-mainmint">Fit</span>
      </h1>
      <nav className="px-14 md:flex gap-6 text-gray-300">
        <Link to="/company-info/step1" className="hover:text-white transition">
          컨설팅
        </Link>
      </nav>
    </header>
  );
};

export default LandingPageHeader;

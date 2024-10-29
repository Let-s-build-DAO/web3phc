import { Link } from "react-router-dom";

const FooterNav = () => {
  return (
    <footer className="bg-[#F1742E] pt-14 ">
      <div className="flex flex-col px-4 mb-12 lg:flex-row custom-container lg:px-0">
        <div className="text-[#FFF8B9] flex flex-col gap-3 mb-10 lg:w-1/2">
          <Link to={"/"}>Home</Link>
          <Link to={"https://drive.google.com/file/d/13Ij0EO-pl-d4gdJAW14oRLf5iGVvoylh/view?usp=drivesdk"}>Pitch Deck</Link>
          <Link to={"http://letsbuilddao.org/"}>About Us</Link>
          <Link to={"http://letsbuilddao.org/"}>Lets Build Dao</Link>
        </div>
        <div className="lg:w-1/2  lg:flex lg:flex-col lg:items-end">
          <p className="text-[#FFF8B9] mb-4 lg:text-2xl ">Subscribe to our news letter</p>
          <div className="relative btn-shadow-footer lg:w-[80%] ">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="w-full  p-5 border-none rounded-md pl-12 bg-[#FFF8B9]"
            />
            <button className="absolute w-[40%] right-0 top-1/2 transform -translate-y-1/2 bg-[#070600] text-white px-4 py-2 h-full rounded-l-lg">
              Submit
            </button>
          </div>
        </div>
      </div>
      <h1 className="text-[#FFF8B93D] text-4xl w-full text-center lg:text-6xl">
        Web3 Port Harcourt
      </h1>
    </footer>
  );
};

export default FooterNav;

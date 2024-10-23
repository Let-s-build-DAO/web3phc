import { Link } from "react-router-dom";
import CountdownTimer from "../components/CountdownTimer";
import { FaLongArrowAltRight, FaCalendarAlt } from "react-icons/fa";

const Hackathon = () => {
  return (
    <>
      <section className="bgoverlay lg:bgoverlay2 h-[55vh] lg:h-[70vh] ">
        <div className="flex justify-end gap-3 m-4 lg:justify-start">
          <Link to={"/"} className="font-medium">
            Home
          </Link>
          <Link to={"/hackathon"} className="font-medium">
            Contact Us
          </Link>
        </div>
        <div className="mt-16  flex flex-col  justify-center items-center lg:justify-center lg:items-center text-center lg:text-start lg:mx-8">
          <h1 className="text-4xl mb-8 lg:mb-6 lg:text-6xl">
            <span className="bg-[#F1742E] px-1">Web3</span> Port Harcourt{" "}
            <br className="lg:hidden"></br> Buildathon
          </h1>

          <div className="">
            <div className="hidden lg:block text-[#6A674A] text-xl mb-6 text-center">
              Registration ends in
            </div>         
            <div className="flex justify-center">
            <CountdownTimer
                background="bg-[#F1742E]"
                boxshadow="btn-shadow"
                padding="p-2 lg:px-4"
              />
            </div>
        

            <p className="text-sm text-[#07060099] mt-4 font-semibold text-center">
              50 spots left
            </p>
            <div className="flex gap-12 mt-4">
              <Link
                className="btn font-bold flex items-center gap-2 btn-shadow mt-4 lg:justify-center"
                to={"/"}
              >
                Register Now <FaLongArrowAltRight />
              </Link>
              <Link
                className=" font-bold text-[#F1742E] flex items-center mt-4 lg:justify-center"
                to={"/"}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:p-20 lg:pb-5 pt-10 px-4">
        <div>
          <h3 className="text-[#6A674A] lg:text-4xl text-2xl mb-4 text-center">
            Overview
          </h3>
          <p className="text-sm lg:text-xl text-[#6A674A]">
            The
            <span className="font-bold"> Web3 Port Harcourt Buildathon</span> is
            a hackathon and conference aimed at creating impactful projects with
            real-world applications. Participants form teams of 3-7 members,
            with 50-100 builders expected.
            <br /> <br />
            Categories include Real World Assets & DeFi, On-chain Gaming,
            Educational DApps, and Smart Contract Security Tools. The event
            fosters innovation in tokenizing assets, decentralized finance,
            gaming, and education, focusing on social impact and security.
          </p>
        </div>
      </section>
      <section className="lg:p-20 lg:pb-10 p-4">
        <h3 className="text-[#6A674A] lg:text-4xl text-2xl mb-4 text-center">
          Categories
        </h3>
        <p className="text-sm lg:text-xl text-[#6A674A] lg:hidden">
          Categories of product that will be built include Real World Assets &
          DeFi, On-chain Gaming, Educational DApps, and Smart Contract Security
          Tools. The event fosters innovation in tokenizing assets,
          decentralized finance, gaming, and education, focusing on social
          impact and security.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          <div className="flex flex-col gap-4 justify-center items-center">
            <img
              src="/images/category1.png"
              alt=""
              srcset=""
              className="w-[200px]"
            />
            <h3 className="text-sm font-bold">Smart contract security tools</h3>
            <p className="text-center text-[#6A674A]">
              Teams will develop secure smart contracts, focusing on preventing
              vulnerabilities and building tools to enhance blockchain security.
            </p>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center">
            <img
              src="/images/category2.png"
              alt=""
              srcset=""
              className="w-[200px]"
            />
            <h3 className="text-sm font-bold">Defi Products</h3>
            <p className="text-center text-[#6A674A]">
              Builders will create decentralized financial services, working on
              innovative solutions in lending, trading, and asset management
              that eliminate middlemen.
            </p>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center">
            <img
              src="/images/category3.png"
              alt=""
              srcset=""
              className="w-[200px]"
            />
            <h3 className="text-sm font-bold">Onchain Gaming</h3>
            <p className="text-center text-[#6A674A]">
              Teams will design blockchain-based games where players truly own
              their assets, promoting transparency and cross-platform asset use.
            </p>
          </div>
        </div>
        <p className="text-sm lg:text-xl text-[#6A674A] hidden lg:block mt-5">
          Categories of product that will be built include Real World Assets &
          DeFi, On-chain Gaming, Educational DApps, and Smart Contract Security
          Tools. The event fosters innovation in tokenizing assets,
          decentralized finance, gaming, and education, focusing on social
          impact and security.
        </p>
      </section>
      <section className="bg-[#070600] px-5 py-10 lg:px-32 lg:py-20">
        <div className="text-[#FFF8B9] flex items-center justify-center gap-3">
          <FaCalendarAlt size={25} />
          <h3 className="text-xl">Event Schedule</h3>
        </div>
        <div className="grid mt-8 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-4 justify-center items-center">
            <img
              src="/images/event1.png"
              alt=""
              srcset=""
              className="w-[100px] lg:w-[180px]"
            />
            <h3 className="text-sm lg:text-xl font-bold text-[#FFF8B9]">
              Registration for the Buildathon begins
            </h3>
            <p className="text-center text-[#FFF8B9]">
              {" "}
              Mon, 25th Nov and ends on Mon, 2nd of December, 2024.
            </p>
            <div className="flex gap-3 text-[#F1742E] items-center">
              <Link to={"/register"}>Register now</Link>
              <FaLongArrowAltRight />
            </div>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center bg-[#F1742E] p-10">
            <img
              src="/images/event2.png"
              alt=""
              srcset=""
              className="w-[100px] lg:w-[180px]"
            />
            <h3 className="text-sm lg:text-xl font-bold text-[#070600]">
              Buildathon kicks off
            </h3>
            <p className="text-center text-[#070600] w-[70%]">
              Mon, 2nd Dec, 2024 to Thr, 5th Dec, 2024
            </p>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center bg-[#FFAA1D] p-10">
            <img
              src="/images/event3.png"
              alt=""
              srcset=""
              className="w-[100px] lg:w-[180px]"
            />
            <h3 className="text-sm font-bold text-[#070600] lg:text-xl">
              Invitation and admissions
            </h3>
            <p className="text-center text-[#070600]">
              Friday, 6th December, 2024.
            </p>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center bg-[#FFF8B9] p-10">
            <img
              src="/images/event4.png"
              alt=""
              srcset=""
              className="w-[100px] lg:w-[180px]"
            />
            <h3 className="text-sm  lg:text-xl font-bold text-[#070600]">
              Review and Results
            </h3>
            <p className="text-center text-[#070600]">
              Saturday, 7th December, 2024.
            </p>
          </div>
        </div>
      </section>
      <section className="lg:p-20 lg:pb-20 p-4  lg:px-32">
        <h3 className="text-[#6A674A] lg:text-4xl text-2xl mb-8 text-center">
          Rewards
        </h3>
        <div className="flex flex-col items-center lg:flex-row-reverse lg:gap-10">
          <div className="lg:w-[30%]">
            <img
              src="/images/award.png"
              alt=""
              className="w-[160px] lg:w-[350px]"
            />
          </div>
          <div className="lg:w-[70%]">
            <h1 className="text-xl lg:text-2xl">
              Win from a N1,600,000.00 prize pool
            </h1>
            <p className="text-sm lg:text-xl text-[#6A674A]">
              Ready to build the future of Web3? Join the Web3 Port Harcourt
              Buildathon and compete for a{" "}
              <span className="font-bold"> N1,600,000.00 </span> prize pool.
              <br /> <br />
              Develop groundbreaking projects in DeFi, gaming, education, and
              security, all while gaining mentorship and showcasing your ideas
              to industry leaders. This is your chance to make an impact in the
              Web3 space, dont miss it!
            </p>
            <div className="flex gap-3 text-[#F1742E] items-center justify-center mt-4 lg:justify-start ">
              <Link to={"/register"}>Learn More</Link>
              <FaLongArrowAltRight />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hackathon;

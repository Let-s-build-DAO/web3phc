import { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import CountdownTimer from "../components/CountdownTimer";
import { FaLongArrowAltRight } from "react-icons/fa";



const Home = () => {
  const contactRef = useRef(null);

  const location = useLocation();

  
  useEffect(() => {
    if (location.hash === "#contact") {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <>
      <section className="bgoverlay h-[55vh] lg:h-[70vh] ">
        <div className="flex justify-end gap-3 m-4 lg:justify-start">
          <Link to={"/hackathon"} className="font-medium">
            Hackathon
          </Link>
          <Link  onClick={scrollToContact} className="font-medium">
            Contact Us
          </Link>
        </div>
        <div className="mt-16 lg:mt-24  flex flex-col  justify-center items-center lg:justify-start lg:items-start text-center lg:text-start lg:mx-8">
          <h1 className="text-4xl mb-12 lg:mb-6 lg:text-6xl">
            <span className="bg-[#F1742E] px-1">Web3</span> Port Harcourt{" "}
            <br></br> is coming soon
          </h1>

          <div className="">
            <CountdownTimer />
            <Link
              className="btn font-bold flex items-center gap-2 btn-shadow mt-4 lg:justify-center"
              to={"http://www.ticketsbyallin.com/Web3ph"}
            >
              Learn more <FaLongArrowAltRight />
            </Link>
           
          </div>
        </div>
      </section>
      <section className="lg:p-20 lg:pb-10 p-4">
        <div>
          <h3 className="text-[#6A674A] lg:text-4xl text-2xl mb-4 text-center">
            Overview
          </h3>
          <p className="text-sm lg:text-xl">
            <span className="font-bold">Web3 Port Harcourt</span> is a 6-day
            event series in southern Nigeria that brings together Web3 builders,
            innovators, and enthusiasts. It includes virtual workshops,
            buildathons, career fairs, panel sessions, and talks, all focused on
            creating practical Web3 solutions for the South and Niger Delta
            region.
            <br /> <br />
            The event connects Web3 communities, empowering local talent and
            showcasing the region&lsquo;s growing tech scene.
            <br /> <br />
            With 21 virtual workshops over five days and a one-day in-person
            event featuring a buildathon, Web3 Port Harcourt is shaping the
            future of tech in the region.
          </p>
        </div>
        <div className="bg-[#070600] text-center text-[#FFF8B9] mt-10 rounded-md lg:p-10 p-4 lg:flex justify-evenly">
          <div>
            <div className="flex justify-center">
              <img
                className="mr-4"
                src="/images/tools-reparation_svgrepo.com.png"
                alt=""
              />
              <p className="my-auto">Workshop</p>
            </div>
            <p className="mt-4 font-bold">2nd - 6th December, 2024</p>
          </div>
          <div className="sm:mt-6">
            <div className="flex justify-center">
              <img
                className="mr-3"
                src="/images/city-hall_svgrepo.com.png"
                alt=""
              />
              <p className="my-auto">Main event</p>
            </div>
            <p className="mt-4 font-bold">7th December, 2024</p>
          </div>
        </div>

        <div className="flex items-center my-5  gap-2">
          <img src="/images/venue.png" alt="" className="w-[24px]" />
          <p className="text-sm lg:text-xl font-bold">
            No 45 Rumokoro, Eastern by pass, PHC
          </p>
        </div>
      </section>
      <section className="lg:px-20 ">
        <h3 className="text-[#6A674A] lg:text-4xl text-2xl mb-6 text-center">
          Why you should attend
        </h3>
      </section>
      <section className="bg-[#070600] px-5 py-10 lg:px-32 lg:py-20">
        <div className="flex flex-col items-center justify-center gap-4 mb-9 lg:hidden">
          <h4 className="text-xl text-[#F1742E]">Hands on Learning</h4>
          <div className="border-[16px] border-[#FFAA1D]">
            <img src="/images/frame1.png" alt="" />
          </div>
          <p className="text-white text-sm text-center">
            Engage in 21 virtual workshops focused on Web3 tools, blockchain,
            and solutions tailored to local needs led by professionals.
          </p>
          <div className="flex items-center gap-2 text-[#F1742E]">
            <p className="">Join the workshop</p>

            <FaLongArrowAltRight />
          </div>
        </div>
        <div className="hidden lg:flex ">
          <div className="w-1/2 flex flex-col items-center gap-8">
            <h4 className="text-2xl text-[#F1742E] mt-6">Hands on Learning</h4>
            <p className="text-white text-sm text-center w-[60%]">
              Engage in 21 virtual workshops focused on Web3 tools, blockchain,
              and solutions tailored to local needs led by professionals.
            </p>
            <div className="flex items-center gap-2 text-[#F1742E]">
              <p className="">Join the workshop</p>

              <FaLongArrowAltRight />
            </div>
          </div>
          <div className="w-1/2  flex justify-center">
            <div className="border-[12px] border-[#FFAA1D] w-[70%]">
              <img src="/images/frame1.png" alt="" className="w-full" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 mb-9 lg:hidden">
          <h4 className="text-xl text-[#F1742E]">Insightful Discussions</h4>
          <div className="border-[16px] border-[#FFAA1D]">
            <img src="/images/frame2.png" alt="" />
          </div>
          <p className="text-white text-sm text-center">
            Gain valuable knowledge from panel sessions and talks featuring
            experts on the future of Web3 in Africa and global trends.
          </p>
          <div className="flex items-center gap-2 text-[#F1742E]">
            <p className="">Join the Conversation</p>

            <FaLongArrowAltRight />
          </div>
        </div>
        <div className="hidden lg:flex mt-10">
          <div className="w-1/2  flex justify-center">
            <div className="border-[12px] border-[#FFAA1D] w-[70%]">
              <img src="/images/frame2.png" alt="" className="w-full" />
            </div>
          </div>
          <div className="w-1/2 flex flex-col items-center gap-8">
            <h4 className="text-2xl text-[#F1742E] mt-6">
              Insightful Discussions
            </h4>
            <p className="text-white text-sm text-center w-[60%]">
              Gain valuable knowledge from panel sessions and talks featuring
              experts on the future of Web3 in Africa and global trends.
            </p>
            <div className="flex items-center gap-2 text-[#F1742E]">
              <p className="">Join the Conversation</p>

              <FaLongArrowAltRight />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 lg:hidden">
          <h4 className="text-xl text-[#F1742E]">Networking Opportunities</h4>
          <div className="border-[16px] border-[#FFAA1D]">
            <img src="/images/frame3.png" alt="" />
          </div>
          <p className="text-white text-sm text-center">
            Connect with leading Web3 builders, developers, innovators, and
            companies, expanding your professional network in the rapidly
            growing African tech space.
          </p>
          <div className="flex items-center gap-2 text-[#F1742E]">
            <p className="">Connect</p>

            <FaLongArrowAltRight />
          </div>
        </div>
        <div className="hidden lg:flex mt-10 ">
          <div className="w-1/2 flex flex-col items-center gap-8">
            <h4 className="text-2xl text-[#F1742E] mt-6">
              Networking Opportunities
            </h4>
            <p className="text-white text-sm text-center w-[60%]">
              Connect with leading Web3 builders, developers, innovators, and
              companies, expanding your professional network in the rapidly
              growing African tech space.
            </p>
            <div className="flex items-center gap-2 text-[#F1742E]">
              <p className="">Connect</p>

              <FaLongArrowAltRight />
            </div>
          </div>
          <div className="w-1/2  flex justify-center">
            <div className="border-[12px] border-[#FFAA1D] w-[70%]">
              <img src="/images/frame3.png" alt="" className="w-full" />
            </div>
          </div>
        </div>
      </section>
      <section className="lg:px-20 py-10 px-4 ">
        <h3 className="text-[#6A674A] lg:text-4xl text-2xl mb-6 lg:mb-12 text-center">
          Hosted By
        </h3>
        <h3 className="text-[#F1742E] lg:hidden  text-2xl mt-12 mb-6 text-center">
          Let's Build Labs
        </h3>
        <div className="flex flex-col gap-4 lg:gap-16 lg:px-28  lg:flex-row-reverse">
          <div className="lg:w-1/2">
            <img src="/images/ceo.png" alt="" className="w-full"/>
          </div>
          <div className="flex flex-col items-center gap-4 lg:w-1/2 ">
            <h3 className="text-[#F1742E]  text-4xl mt-2 mb-6 text-center hidden lg:block">
              Let's Build Labs
            </h3>
            <p className="text-sm lg:text-xl text-[#6A674A] text-center">
              {" "}
              “Our primary aim is to create a robust set of tools and services
              that will stimulate and promote the widespread adoption of Web 3.0
              technologies within the African context.”
            </p>
            <div className="flex items-center gap-2 text-[#F1742E]">
              <Link to="https://drive.google.com/file/d/13Ij0EO-pl-d4gdJAW14oRLf5iGVvoylh/view?usp=drivesdk">Pitch Deck</Link>

              <FaLongArrowAltRight />
            </div>
          </div>
        </div>
      </section>
      <section className="lg:px-20 py-10 px-4 " id="contact" ref={contactRef}>
        <h3 className="text-[#6A674A] lg:text-4xl text-2xl mb-6 lg:mb-12 text-center">
          Contact Us
        </h3>
        <div className="flex flex-col gap-3 lg:flex-row lg:justify-center lg:gap-20">
          <div className="flex flex-row items-center gap-4">
            <img src="/images/twittericon.png" alt="" className="w-[30px]" />
            <p>Web3PHC</p>
          </div>
          <div className="flex flex-row items-center gap-4">
            <img src="/images/emailicon.png" alt="" className="w-[30px]" />
            <p>Adams@letsbuildao.org</p>
          </div>
          <div className="flex flex-row items-center gap-4">
            <img src="/images/emailicon.png" alt="" className="w-[30px]" />
            <p>hello@letsbuildao.org</p>
          </div>
        </div>
      </section>
      <section className="lg:px-20 py-10 px-4">
      <h3 className="text-[#6A674A] lg:text-4xl text-2xl mb-6 lg:mb-12 text-center">
          Sponsored by
        </h3>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-36">
          <img className="w-[200px]" src="/images/Streamlivr.png" alt="" />
          <img className="w-[200px]" src="/images/boarderless.png" alt="" />
        </div>
      </section>
    </>
  );
};

export default Home;

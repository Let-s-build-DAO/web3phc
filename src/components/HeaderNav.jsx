
const HeaderNav = () => {
  return (
    <div className="flex w-full top-0 lg:px-20 px-4 justify-between">
      <img src="/logo.png" className="w-20 h-20" alt="" />
      <div className="flex my-auto lg:w-96 justify-between">
        <p className="my-auto sm:hidden block">Hackathon</p>
        <p className="my-auto sm:hidden block">Contact us</p>
        <a href="https://www.ticketsbyallin.com/Web3ph" target='_blank'>
          <button className="bg-[#F1742E] text-white p-3 rounded-full  px-6">Register</button>
        </a>
      </div>
    </div>
  );
};

export default HeaderNav;
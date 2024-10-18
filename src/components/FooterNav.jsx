
const FooterNav = () => {
  return (
    <div className="bg-[#F1742E]">
      <footer className="lg:flex sm:text-center justify-between p-10">
        <img src="/images/web3ph.png" className="w-20 h-12 sm:mx-auto sm:my-4 my-auto" alt="" />
        <div className="lg:flex my-auto text-white lg:w-96 justify-between">
          <p className="sm:my-2">Home</p>
          <p className="sm:my-2">About</p>
          <p className="sm:my-2">Pitch deck</p>
          <p className="sm:my-2">Organisers</p>
        </div>
        <div className="flex sm:mx-auto sm:mt-10 w-20 justify-between  ">
          <img className="w-6 h-6 my-auto" src="/images/insta.png" alt="" />
          <img className="w-6 h-6 my-auto"  src="/images/twitter.png" alt="" />
        </div>
      </footer>
    </div>
  );
};

export default FooterNav;
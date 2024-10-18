
import './App.css'
import HeaderNav from './components/HeaderNav'
import FooterNav from './components/FooterNav'

function App() {

  return (
    <>
      <HeaderNav />
      <section>
        <div className='flex justify-between sm:mt-20'>
          <div className='my-auto lg:pl-24 sm:p-4 sm:text-center'>
            <p className='lg:text-5xl text-5xl font-black'>Web3 Port Harcourt</p>
            <p className='lg:w-[80%] my-2'>A groundbreaking event series in southern Nigeria, uniting Web3 builders, innovators, and enthusiasts from across the region.</p>
            <div className='flex sm:justify-center my-4'>
              <img className='w-5 h-5 my-auto' src="/images/calendar.png" alt="" />
              <p className='ml-2'>7th December 2024</p>
            </div>
            <div className='flex sm:justify-center my-4'>
              <img className='w-6 h-6 my-auto' src="/images/location.png" alt="" />
              <p className='ml-2'>Port Harcourt</p>
            </div>
            <button className="bg-[#FFAA1D] mt-6 w-40 p-4 rounded-full  px-6">Register</button>
          </div>
          <div className='lg:w-1/2 sm:hidden block'>
            <img className='w-full' src="/images/hero.png" alt="" />
          </div>
        </div>
      </section>
      <section className='lg:p-20 p-4'>
        <div>
          <h1 className='font-black lg:text-4xl text-2xl mb-4'>About Web3 PH</h1>
          <p>Web3 Port Harcourt is a 6-day event series in southern Nigeria that brings together Web3 builders, innovators, and enthusiasts. It includes virtual workshops, buildathons, career fairs, panel sessions, and talks, all focused on creating practical Web3 solutions for the South and Niger Delta region.
            <br /> <br />
            The event connects Web3 communities, empowering local talent and showcasing the region&lsquo;s growing tech scene.
            <br /> <br />
            With 21 virtual workshops over five days and a one-day in-person event featuring a buildathon, Web3 Port Harcourt is shaping the future of tech in the region.</p>
        </div>
        <div className='bg-[#070600] text-center text-[#FFF8B9] mt-10 rounded-md lg:p-10 p-4 lg:flex justify-evenly'>
          <div>
            <div className='flex justify-center'>
              <img className='mr-4' src="/images/tools-reparation_svgrepo.com.png" alt="" />
              <p className='my-auto'>Workshop</p>
            </div>
            <p className='mt-4 font-bold'>2nd - 6th December, 2024</p>
          </div>
          <div className='sm:mt-6'>
            <div className='flex justify-center'>
              <img className='mr-3' src="/images/city-hall_svgrepo.com.png" alt="" />
              <p className='my-auto'>Main event</p>
            </div>
            <p className='mt-4 font-bold'>7th December, 2024</p>
          </div>
        </div>
      </section>
      <section className='lg:px-20 sm:mt-10 pb-20'>
        <h1 className='font-black lg:text-4xl text-2xl text-center  mb-6'>Sponsors/ Partners</h1>
        <div className='flex flex-wrap justify-evenly'>
          <img className='sm:my-2' src="/images/Streamlivr.png" alt="" />
          <img className='sm:my-2' src="/images/boarderless.png" alt="" />
        </div>
      </section>
      <FooterNav />
    </>
  )
}

export default App

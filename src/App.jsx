
import './App.css'
import HeaderNav from './components/HeaderNav'
import FooterNav from './components/FooterNav'

function App() {

  return (
    <>
      <HeaderNav />
      <section>
        <div className='flex justify-between sm:mt-20'>
          <div className='my-auto lg:pl-20 sm:p-4 sm:text-center'>
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
      <FooterNav />
    </>
  )
}

export default App

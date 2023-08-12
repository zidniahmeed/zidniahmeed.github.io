import React from 'react'
import heroImg from '../../images/Rectangle 1.svg';
import CountUp from 'react-countup';

function Hero() {
  return (
    <section className='pt-0' id='about'>
      <div className="container pt-14">
        <div className='md:flex items-center justify-between sm:flex-col md:flex-row' >
          <div className="w-full md:basis-1/2">
            <h5 data-aos='fade-right' data-aos-duration='1500' className='text-headingColor font-[600] text-[16px]'>Hello Wellcome</h5>
            <h1 data-aos='fade-up' data-aos-duration='1500' className='text-headingColor font-[600] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5' >I'm Ahmad Zidni Rosadi <br /> Web Developer</h1>
            <div data-aos='fade-right' data-aos-duration='1500' data-aos-delay='200' className='flex item-center gap-6 mt-7'>
              <a href="#contact">
                <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'>
                  <i class="ri-mail-line"></i>Hire Me
                </button>
              </a>
              <a href="#portfolio" className='text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor '>See Portfolio</a>
            </div>
            <p data-aos='fade-right' data-aos-duration='1500' className='flex gap-2 text-headingColor mt-12 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10'>
              <span>
                <i class="ri-apps-line"></i>
              </span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere repudiandae voluptatum distinctio. Aut quasi nihil quidem assumenda impedit reprehenderit magni!
            </p>
            <div className='flex items-center gap-9 mt-14'> 
              <span className='text-smallTextColor text-[15px] font-[600]'>
                Follow Me
              </span>
              <span>
                <a className='text-smallTextColor text-[18px] font-[600]' href="#youtube">
                  <i class="ri-youtube-fill"></i>
                </a>
              </span>
              <span>

                <a className='text-smallTextColor text-[18px] font-[600]' href="#github">
                  <i class="ri-github-fill"></i>
                </a>
              </span>
              <span>

                <a className='text-smallTextColor text-[18px] font-[600]' href="#facebook">
                  <i class="ri-facebook-circle-fill"></i>
                </a>
              </span>
              <span>
                <a className='text-smallTextColor text-[18px] font-[600]' href="#instagram">
                  <i class="ri-instagram-fill"></i>
                </a>
              </span>
            </div>
          </div>
          {/* hero img */}
          <div className="basis-1/3 mt-10 sm:mt-0">
            <figure className='flex items-center justify-center '>
              <img src={heroImg} alt="" />
            </figure>
          </div>
          {/* end hero img */}
          {/* hero content right */}
          <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-center md:text-end">
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={4} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
              Years Experience
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={100} duration={2} suffix="%" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Success Rate
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={150} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Happy CLient
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={245} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Project Complete
              </h4>
            </div>
          </div>
          
          {/* hero content right */}
        </div>
      </div>
    </section>
  )
}

export default Hero
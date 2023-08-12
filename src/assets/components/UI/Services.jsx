import React from 'react'
import frontEndImg from '../../images/front-end.png';
import backEndimg from '../../images/backend.png';
import appsImg from '../../images/apps.png';
import designImg from '../../images/design.png'

export default function Services() {
  return (
    <section id='services'>
          <div className="container lg:pt-5">
              <div className="text-center">
                  <h1 className="text-headingColor font-[800] text-[2.4rem] mb-5">
                      What Do I Help
                  </h1>
                  <p className='lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusamus iusto non atque et aut, reprehenderit error cumque deleniti? Necessitatibus.
                  </p>
              </div>
              <div className="flex flex-col justify-center sm:py-12">
                  <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm-px-0">
                      <div className="relative text-gray-700 antialiased text-sm font-semibold">
                          {/* vertikal line running tought  the middle */}
                          <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform-translate-x-1/2"></div>
                          {/* left card */}
                          <div className="mt-6 sm:mt-0 sm:mb-12">
                              <div className="flex items-center flex-col sm:flex-row">
                                <div className="flex justify-start w-full mx-auto items-center">
                                      <div className="w-full sm:w-1/2 sm:pr-8">
                                          <div data-aos='fade-right' data-aos-duration='1200' className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                              <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl'>
                                                  Frontend Developer
                                              </h3>
                                              <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos in mollitia, officiis maiores tenetur neque?</p>
                                          </div>
                                      </div>
                                </div>
                                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform  -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center ">
                                      <figure>
                                          <img src={frontEndImg} alt="" />
                                      </figure>
                                </div>

                              </div>                              
                          </div>
                          {/* right card */}
                          <div className="mt-6 sm:mt-0 sm:mb-12">
                              <div className="flex items-center flex-col sm:flex-row">
                                  <div className="flex justify-end w-full mx-auto items-center">
                                      <div className="w-full sm:w-1/2 sm:pl-8">
                                          <div data-aos='fade-left' data-aos-duration='1200' className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                              <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl'>
                                                  Backend Developer
                                              </h3>
                                              <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos in mollitia, officiis maiores tenetur neque?</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform  -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center ">
                                      <figure>
                                          <img src={frontEndImg} alt="" />
                                      </figure>
                                  </div>

                              </div>
                          </div>
                          {/* left card */}
                          <div className="mt-6 sm:mt-0 sm:mb-12">
                              <div className="flex items-center flex-col sm:flex-row">
                                  <div className="flex justify-start w-full mx-auto items-center">
                                      <div className="w-full sm:w-1/2 sm:pr-8">
                                          <div data-aos='fade-right' data-aos-duration='1200' className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                              <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl'>
                                                  UI/UX
                                              </h3>
                                              <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos in mollitia, officiis maiores tenetur neque?</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform  -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center ">
                                      <figure>
                                          <img src={designImg} alt="" />
                                      </figure>
                                  </div>

                              </div>
                          </div>
                          {/* right card */}
                          <div className="mt-6 sm:mt-0 sm:mb-12">
                              <div className="flex items-center flex-col sm:flex-row">
                                  <div className="flex justify-end w-full mx-auto items-center">
                                      <div className="w-full sm:w-1/2 sm:pl-8">
                                          <div data-aos='fade-left' data-aos-duration='1200' className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                              <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl'>
                                                  Mobile Developer
                                              </h3>
                                              <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos in mollitia, officiis maiores tenetur neque?</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform  -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center ">
                                      <figure>
                                          <img src={appsImg} alt="" />
                                      </figure>
                                  </div>

                              </div>
                          </div>
                      </div>
                  </div>
              </div>
        </div>
    </section>
  )
}

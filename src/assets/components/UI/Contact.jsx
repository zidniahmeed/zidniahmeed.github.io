import React from 'react'

const Contact = () => {
    return (
        <section id='contact' className='pb-16'>
            <div className="container">
                <h2 className="text-headingColor font-[700] text-[2.0rem] mb-8">
                    Get in touch
                </h2>
                <div className="md:flex justify-between items-center">
                    <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
                        <iframe title='google-maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.7390404840976!2d106.69729389960746!3d-6.2979829401858565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb0daa93951d%3A0x27e2fbaefa914be1!2sUdacoding!5e0!3m2!1sid!2sid!4v1691909683130!5m2!1sid!2sid" className='border-0 w-full h-full'  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-5">
                        <form action="" className='w-full'>
                            <div className="mb-5">
                                <input type="text" placeholder='enter your name' className='w-full p-3 focus:outline-none rounded-[5px]' />
                            </div>
                            <div className="mb-5">
                                <input type="text" placeholder='enter your email' className='w-full p-3 focus:outline-none rounded-[5px]' />
                            </div>
                            <div className="mb-5">
                                <input type="text" placeholder='subject' className='w-full p-3 focus:outline-none rounded-[5px]' />
                            </div>
                            <div className="mb-5">
                                <textarea type="text" placeholder='enter your name' className='w-full p-3 focus:outline-none rounded-[5px]' />
                            </div>
                            <button className='w-full p-3 focus:outline-none rounded-[8px] bg-smallTextColor text-white hover:bg-headingColor text-center ease-linear duration-150'>
                                Send Messages
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
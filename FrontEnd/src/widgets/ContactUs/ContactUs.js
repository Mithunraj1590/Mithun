import React from 'react'
import Style from "./ContactUs.module.scss"
import Link from 'next/link'
import FadeAnim from '@/utilities/FadeAnim'

const ContactUs = (data) => {
    return (
        <section className='py-[100px] pt-[200px] h-screen flex items-center'>
            <FadeAnim>
            <div className="container fade-elem">
                <div className="grid grid-cols-2 gap-5">
                    <div>
                        <h2 className='text-white ttl text-[85px] leading-[.9] mb-[70px]'>{data?.data?.title}</h2>
                        <p className='text-white'>Mail : <Link href={`mailto:${data?.data?.email}`} className='hover:border-b'>{data?.data?.email}</Link> </p>w
                        <p className='text-white'>Tel : <Link href={`tel:${data?.data?.mobile}`} className='hover:border-b'>{data?.data?.mobile}</Link> </p>
                    </div>
                    <div className={Style.contact_form}>
                        <form class="w-full">
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label class="block tracking-wide text-white text-xs mb-2" for="grid-first-name">
                                        First Name
                                    </label>
                                    <input class="appearance-none block w-full text-[16px] text-white  rounded py-3 px-4 mb-3 leading-tight focus:outline-none" id="grid-first-name" type="text" placeholder="Enter Firstname" />

                                </div>
                                <div class="w-full md:w-1/2 px-3">
                                    <label class="block tracking-wide text-white text-xs mb-2" for="grid-last-name">
                                        Last Name
                                    </label>
                                    <input class="appearance-none block w-full text-[16px] text-white  rounded py-3 px-4 leading-tight focus:outline-none " id="grid-last-name" type="text" placeholder="Enter lastname" />
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label class="block tracking-wide text-white text-xs mb-2" for="grid-first-name">
                                        Email
                                    </label>
                                    <input class="appearance-none block w-full text-[16px] text-white  rounded py-3 px-4 mb-3 leading-tight focus:outline-none" id="grid-first-name" type="email" placeholder="Enter email" />

                                </div>
                                <div class="w-full md:w-1/2 px-3">
                                    <label class="block tracking-wide text-white text-xs mb-2" for="grid-last-name">
                                        Mobile
                                    </label>
                                    <input class="appearance-none block w-full text-[16px] text-white  rounded py-3 px-4 leading-tight focus:outline-none " id="grid-last-name" type="tel" placeholder="Enter Mobile number" />
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full px-3">
                                    <label class="block tracking-wide text-white text-xs mb-2" for="grid-last-name">
                                        Message
                                    </label>
                                    <textarea class="appearance-none block w-full text-[16px] text-white  rounded py-3 px-4 leading-tight focus:outline-none h-[150px] resize-none " id="grid-last-name" placeholder="Enter your message" />
                                </div>
                            </div>
                            <button className='btn btn-primary'>
                                Submit
                            </button>

                        </form>
                    </div>
                </div>
            </div>
            </FadeAnim>
        </section>
    )
}

export default ContactUs
import React from 'react'
import Style from "./ContactUs.module.scss"
import Link from 'next/link'
import FadeAnim from '@/utilities/FadeAnim'
import ContactForm from '@/components/ContactForm'

const ContactUs = (data) => {
    return (
        <section className='py-[100px] pb-[50px] lg:pt-[200px] lg:h-screen flex items-center'>
          
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div>
                        <h2 className='text-white ttl text-[50px] lg:text-[85px] leading-[55px] lg:leading-[.9] mb-[50px] lg:mb-[70px]'>{data?.data?.title}</h2>
                        <p className='text-white mb-2'>Mail : <Link href={`mailto:${data?.data?.email}`} className='hover:border-b mb-2'>{data?.data?.email}</Link> </p>
                        <p className='text-white'>Tel : <Link href={`tel:${data?.data?.mobile}`} className='hover:border-b'>{data?.data?.mobile}</Link> </p>
                    </div>
                    <div className={Style.contact_form}>
                        <ContactForm />
                    </div>
                </div>
            </div>
       
        </section>
    )
}

export default ContactUs
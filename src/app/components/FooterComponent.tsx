import { IoLogoInstagram } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import Link from 'next/link'
import React from 'react'

const FooterComponent = () => {
  return (
    <div className='p-3 px-4 md:px-6 flex flex-col md:flex-row gap-2  justify-between items-center'>
        <h2 className="text-xs md:text-sm lg:text-base">Copyright © 2024 by <span className="font-bold">RR Alerts</span> All Rights Reserved.</h2>
        <ul className="flex gap-4">
            <li><Link href={''}><IoLogoInstagram  className="text-2xl"/></Link></li>
            <li><Link href={''}><FaWhatsapp className="text-2xl"/></Link></li>
            <li><Link href={''}><FaTelegram className="text-2xl"/></Link></li>
        </ul>
    </div>
  )
}

export default FooterComponent
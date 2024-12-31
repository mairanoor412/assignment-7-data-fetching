"use client"
import Link from "next/link";
import { useState } from "react";
import ResponsiveMenu from "../responsive-menu/responsive-menu";
import { GiHamburgerMenu } from "react-icons/gi";




const Header = () => {
    const [open, setopen] = useState(false)
    return (
        <div className="overflow-hidden w-full h-[60px] flex items-center bg-stone-100 shadow-lg ">
            <h1 className="w-[300px] md:w-[200px] pl-5 md:pl-8 lg:pl-14 text-[18px] font-[500] text-black"> Data Fetching </h1>

            {/* Mid Nav items */}
            <div className="w-[500px] mx-auto hidden md:block">
                <ul className=" flex flex-row items-center justify-around">
                    <li className="text-[16px] font-[500] text-primary hover:underline hover:decoration-yellow-600">
                        <Link href="/" target="_blank"> Home </Link>
                    </li>
                    <li className="text-[16px] font-[500] text-primary hover:underline hover:decoration-yellow-600">
                        <Link href="\client-side" target="_blank">  Client </Link>
                    </li>
                    <li className="text-[16px] font-[500] text-primary hover:underline hover:decoration-yellow-600">
                        <Link href="/server-side" target="_blank"> Server </Link>
                    </li>
                </ul>
            </div>

             {/*Mobile Hamburger */}
             <div className=" w-full  h-[60px] flex flex-row justify-end items-center md:hidden" onClick={()=>
                    setopen(!open)
                }>
                        <GiHamburgerMenu className="size-10 pr-5 text-black" />
                    </div>

                     {/* Mobile Sidebar */}
            <ResponsiveMenu open={open} />


        </div>
    )
}

export default Header;
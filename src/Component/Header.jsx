import React, { useState } from 'react'
import { MdVisibility } from 'react-icons/md';
import { RxCaretDown } from "react-icons/rx";
import { CgSearch } from "react-icons/cg";
import { RiDiscountPercentLine } from "react-icons/ri";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { BsCart } from "react-icons/bs";





const Header = () => {

    const [toggle, setToggel] = useState(false);

    const showSideMenu = () => {
        setToggel(true);
    }

    const hideSideMenu = () => {
        setToggel(false);
    }
    const links = [
        {
            icons: <CgSearch />,
            name: "Search"
        },
        {
            icons: <RiDiscountPercentLine />,
            name: "Offer",
            sup:"new",
        },
        {
            icons: <IoHelpBuoyOutline />
            ,
            name: "Help"
        },

        {
            icons: <FaRegUser />
            ,
            name: "Sign In"
        },

        {
            icons: <BsCart />
            ,
            name: "Cart",
            sup:"(2)",
        },





    ]

    return (
        <>

            <div className='black-overlay w-full h-full fixed duration-400 ' onClick={hideSideMenu} style={{ opacity: toggle ? 1 : 0, visibility: toggle ? "visible" : "hidden" }}>


                <div onClick={(e) => {
                    e.stopPropagation();
                }} className='w-[500px] bg-white  h-full absolute ' style={{ left: toggle ? '0%' : "100%" }}>

                </div>
            </div>

            <header className='p-2 shadow-xl text-gray-600 '>
                <div className='max-w-[1200px] mx-auto flex items-center'>

                    {/* logo */}
                    <div className='w-[100px] '>
                        <img src="images/swiggylogo.png" alt="" srcset="" className='w-full' />
                    </div>

                    {/* text */}

                    <div className=''>
                        <span className='font-bold border-b-[3px] border-[black] text-orange-500'>Bhopal</span> Madhya Pradesh,India <RxCaretDown onClick={showSideMenu} className='inline text-2xl text-orange-500 font-bold cursor-pointer' />

                    </div>


                    <nav className='flex list-none gap-10   ml-auto text-[18px] font-semibold '>
                        {
                            links.map(
                                (link, index) => {
                                    return <li key={index} className='flex items-center gap-2 hover:text-orange-500'>
                                        {link.icons}
                                        {link.name}
                                       <sup> {link.sup}</sup>

                                    </li>
                                }
                            )
                        }



                    </nav>



                </div>

            </header>
        </>

    )
}

export default Header
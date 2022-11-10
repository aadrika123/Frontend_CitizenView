//////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 02 november 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - Water sublist
//    DESCRIPTION - water sublist compomnent which sublist category
//////////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import { AiFillInfoCircle } from 'react-icons/ai'
import { RiArrowDropLeftFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'


//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from '../Styles/ThemeStyle'

function WaterSublist() {

    //destructuring predefined colors to maintain uniform theme everywhere
    const { bgHeaderColor, titleColor, nextButtonColor, bgCardColor, bgInfoColor, infoTextColor } = ThemeStyle()


    let iconColor = "text-amber-600 hover:text-gray-100";

    return (
        <>
            <div className='text-xs font-semibold pl-2 mt-4'><span className='border-b border-black'><RiArrowDropLeftFill className="inline text-xl" />Back</span></div>
            <div className='p-2 md:p-10 flex justify-center items-center  overflow-hidden'>
                <div className={`grid grid-cols-12 ${bgCardColor} shadow-lg w-full md:w-1/3 p-4 md:p-10 gap-3 `}>

                    {/* {******  TITTLE *********} */}
                    <div className="col-span-12 flex flex-row w-full  text-lg  ml-16 ">
                        <h1 className={`font-semibold ${titleColor} ml-2 text-center `}>WATER & SEWERAGE</h1>
                    </div>

                    {/* {******  APPLY NEW CONNECTION *********} */}

                    <div className="col-span-12  w-full bg-gray-50 p-4 shadow-md text-sm mx-auto ">
                        <Link to='/water-applyNew'>
                            <div className='flex flex-row'>
                                <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`w-6 h-6 ${iconColor}`}>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
                                </svg>
                                </span>
                                <h1 className={`font-semibold ${titleColor}  ml-2 `}>Apply For New Connection</h1>
                            </div>
                        </Link>
                    </div>

                    {/* {******  PAY WATER & SEWERAGE BILL *********} */}
                    <div className="col-span-12 flex flex-row w-full  bg-gray-50 p-4 shadow-md text-sm mx-auto ">
                        <Link to='/water-payBill'>
                            <div className='flex flex-row'>
                                <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`w-6 h-6 ${iconColor}`}>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                </span>
                                <h1 className={`font-semibold ${titleColor} ml-2  `}>Pay Water & Sewerage Bill</h1>
                            </div>
                        </Link>
                    </div>

                    {/* {******  MY CONNECTION *********} */}
                    <div className="col-span-12 flex flex-row w-full bg-gray-50 p-4 shadow-md text-sm mx-auto ">
                        <Link to='/water-myConnection'>
                            <div className='flex flex-row'>
                                <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`w-6 h-6 ${iconColor}`}>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>

                                </span>
                                <h1 className={`font-semibold ${titleColor} ml-2  `}>My Connections</h1>
                            </div>
                        </Link>
                    </div>

                    {/* {******  MY APPLICATION *********} */}
                    <div className="col-span-12 flex flex-row w-full bg-gray-50 p-4 shadow-md text-sm mx-auto ">
                        <Link to='/water-myApplication'>
                            <div className='flex flex-row'>
                                <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`w-6 h-6 ${iconColor}`}>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                </svg>
                                </span>
                                <h1 className={`font-semibold ${titleColor} ml-2  `}>My Applications (38)</h1>
                            </div>
                        </Link>
                    </div>


                    {/* {******  PAST PAYMENT *********} */}
                    <div className="col-span-12 flex flex-row w-full  bg-gray-50 p-4 shadow-md text-sm mx-auto ">
                        <Link to='/water-pastPayment'>
                            <div className='flex flex-row'>
                                <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`w-6 h-6 ${iconColor}`}>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                </span>
                                <h1 className={`font-semibold ${titleColor} ml-2  `}>Past Payment</h1>
                            </div>
                        </Link>
                    </div>

                    {/* {******  HOW IT WORK *********} */}
                    <div className="col-span-12 flex flex-row w-full bg-gray-50 p-4 shadow-md text-sm mx-auto ">
                        <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`w-6 h-6 ${iconColor}`}>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                        </svg>

                        </span>
                        <h1 className={`font-semibold ${titleColor} ml-2  `}>How It Works ?</h1>
                    </div>

                </div>
            </div>
        </>
    )
}

export default WaterSublist



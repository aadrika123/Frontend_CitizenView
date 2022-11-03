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

function DocumentEdit(props) {

    //destructuring predefined colors to maintain uniform theme everywhere
    const { bgHeaderColor, titleColor, nextButtonColor, bgCardColor, bgInfoColor, infoTextColor, nextBtnHoverColor, backButtonColor, backBtnHoverColor } = ThemeStyle()

    let iconColor = "text-amber-600 hover:text-gray-100";

    return (
        <>
            <div className='text-xs font-semibold pl-2 mt-4'><span className='border-b border-black'><RiArrowDropLeftFill className="inline text-xl" />Back</span></div>
            <div className='p-2 md:p-10 flex justify-center items-center  overflow-hidden'>
                <div className={`grid grid-cols-12 ${bgCardColor} shadow-lg w-full md:w-1/3 p-4 md:p-10 gap-3 `}>

                    {/* {******  TITTLE *********} */}
                    <div className="col-span-12 flex flex-row w-full  text-lg   ">
                        <h1 className={`font-semibold ${titleColor} ml-2`}>Document</h1>
                        <span className={`font-semibold ${titleColor} ml-44`}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`w-6 h-6 ${iconColor}`}>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>
                        </span>
                    </div>

                    {/* {****** Document List *********} */}

                    <div className="col-span-12  w-full bg-gray-50 p-4 shadow-md text-sm mx-auto ">
                        <div className='flex flex-row'>
                            <h1 className={`font-semibold ${titleColor} text-gray-500 ml-2 `}>Aadhar</h1>
                        </div>
                        <div className="col-span-12 flex flex-row w-full  text-lg   ">
                            <h1 className={`font-semibold ${titleColor} text-gray-400 text-sm ml-2`}>success.png</h1>
                            <h1 className={`font-semibold ml-40 text-xs ${iconColor}`}>VIEW</h1>
                        </div>
                    </div>

                    <div className="col-span-12  w-full bg-gray-50 p-4 shadow-md text-sm mx-auto ">
                        <div className='flex flex-row'>
                            <h1 className={`font-semibold ${titleColor} text-gray-500 ml-2 `}>Address Proof</h1>
                        </div>
                        <div className="col-span-12 flex flex-row w-full  text-lg   ">
                            <h1 className={`font-semibold ${titleColor} text-gray-400 text-sm ml-2`}>success.png</h1>
                            <h1 className={`font-semibold ml-40 text-xs ${iconColor}`}>VIEW</h1>
                        </div>
                    </div>


                    <div className="col-span-12  w-full bg-gray-50 p-4 shadow-md text-sm mx-auto ">
                        <div className='flex flex-row'>
                            <h1 className={`font-semibold ${titleColor} text-gray-500 ml-2 `}>Electricitity Bill</h1>
                        </div>
                        <div className="col-span-12 flex flex-row w-full  text-lg   ">
                            <h1 className={`font-semibold ${titleColor} text-gray-400 text-sm ml-2`}>success.png</h1>
                            <h1 className={`font-semibold ml-40 text-xs ${iconColor}`}>VIEW</h1>
                        </div>
                    </div>

                    <div className="col-span-12  w-full bg-gray-50 p-4 shadow-md text-sm mx-auto ">
                        <div className='flex flex-row'>
                            <h1 className={`font-semibold ${titleColor} text-gray-500 ml-2 `}>Plumber Report / Drawing</h1>
                        </div>
                        <div className="col-span-12 flex flex-row w-full  text-lg   ">
                            <h1 className={`font-semibold ${titleColor} text-gray-400 text-sm ml-2`}>success.png</h1>
                            <h1 className={`font-semibold ml-40 text-xs ${iconColor}`}>VIEW</h1>
                        </div>
                    </div>

                    <div className="col-span-12  w-full bg-gray-50 p-4 shadow-md text-sm mx-auto ">
                        <div className='flex flex-row'>
                            <h1 className={`font-semibold ${titleColor} text-gray-500 ml-2 `}>Building Plan / Completion Certificate</h1>
                        </div>
                        <div className="col-span-12 flex flex-row w-full  text-lg   ">
                            <h1 className={`font-semibold ${titleColor} text-gray-400 text-sm ml-2`}>success.png</h1>
                            <h1 className={`font-semibold ml-40 text-xs ${iconColor}`}>VIEW</h1>
                        </div>
                    </div>

                    <div className="col-span-12  w-full bg-gray-50 p-4 shadow-md text-sm mx-auto ">
                        <div className='flex flex-row'>
                            <h1 className={`font-semibold ${titleColor} text-gray-500 ml-2 `}>Property Tax Reciept</h1>
                        </div>
                        <div className="col-span-12 flex flex-row w-full  text-lg   ">
                            <h1 className={`font-semibold ${titleColor} text-gray-400 text-sm ml-2`}>success.png</h1>
                            <h1 className={`font-semibold ml-40 text-xs ${iconColor}`}>VIEW</h1>
                        </div>
                    </div>

                    <div className="col-span-12 grid grid-cols-12 gap-x-6 mt-6">
                        <div className="col-span-6"> <button onClick={() => props.backFun()} type="submit" className={`shadow-lg w-full px-6 py-2 ${backButtonColor} text-white font-medium text-xs leading-tight  rounded  ${backBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Back</button></div>
                        <Link to='/water-submitNewApply'>
                            <div className="col-span-6"> <button onClick={() => props.nextFun()} type="submit" className={`shadow-lg  px-16 py-2 ${nextButtonColor} text-white font-medium text-xs leading-tight  rounded  ${nextBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Submit</button></div>
                        </Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default DocumentEdit
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

function ViewBreakupScreen(props) {


    //destructuring predefined colors to maintain uniform theme everywhere
    const { bgHeaderColor, titleColor, nextButtonColor, nextBtnHoverColor, backButtonColor, backBtnHoverColor, bgCardColor, bgInfoColor, infoTextColor } = ThemeStyle()

    let bgInfoColorCopy = "bg-red-300"
    let infoTextColorCopy = "text-red-600"
    return (
        <>
            <div>
                <div className='text-xs font-semibold px-2 mt-4 flex'>
                    <div className="flex-1"><span onClick={props.backFun} className='border-b border-black'><RiArrowDropLeftFill className="inline text-xl" />Back</span></div>
                    <div className="flex-1 text-right"><span className=''>{props?.formIndex} of 10</span></div>
                </div>
                <div className='p-2 md:p-10 flex justify-center items-center  overflow-hidden'>
                    <div className={`grid grid-cols-12 ${bgCardColor} shadow-lg w-full md:w-1/3 p-4 py-10 md:p-10`}>
                        <div className="col-span-12 flex flex-row w-full  text-lg  ">
                            <h1 className={`font-bold ${titleColor}`}>Calculation Breakup</h1>

                        </div>

                        {/* {****** Calculation List *********} */}
                        <div className='col-span-12 bg-gray-50 p-2 shadow-md mt-2 mb-1'>

                            {/* {****** Application Fee *********} */}
                            <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`text-xs ml-2 font-semibold text-gray-600`}>Application Fee</label>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`text-xs ml-2 font-medium text-gray-500`}>Form Fee</label>
                                    </div>
                                    <div className=''>
                                        <label className={`text-xs ml-2 font-medium text-gray-800`}>Rs 25</label>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`text-xs ml-2 font-medium text-gray-500`}>Scrutiny</label>
                                    </div>
                                    <div className=''>
                                        <label className={`text-xs ml-2 font-medium text-gray-800`}>Rs 250</label>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 border-t-2 '>
                                    <div className="">
                                        <label className={`text-xs ml-2 font-medium text-gray-500`}>Total</label>
                                    </div>
                                    <div className=''>
                                        <label className={`text-xs ml-2 font-medium text-gray-800`}>Rs 275</label>
                                    </div>
                                </div>

                                {/* {****** Service Fee *********} */}
                                <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">
                                    <div className='grid grid-cols-2 '>
                                        <div className="">
                                            <label className={`text-xs ml-2 font-semibold text-gray-600`}>Service Fee</label>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-2 '>
                                        <div className="">
                                            <label className={`text-xs ml-2 font-medium text-gray-500`}>Meter Charge</label>
                                        </div>
                                        <div className=''>
                                            <label className={`text-xs ml-2 font-medium text-gray-800`}>Rs 850</label>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-2 '>
                                        <div className="">
                                            <label className={`text-xs ml-2 font-medium text-gray-500`}>Other Charge</label>
                                        </div>
                                        <div className=''>
                                            <label className={`text-xs ml-2 font-medium text-gray-800`}>Rs 325</label>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-2 '>
                                        <div className="">
                                            <label className={`text-xs ml-2 font-medium text-gray-500`}>Road Cutting Charge</label>
                                        </div>
                                        <div className=''>
                                            <label className={`text-xs ml-2 font-medium text-gray-800`}>Rs 138</label>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-2 '>
                                        <div className="">
                                            <label className={`text-xs ml-2 font-medium text-gray-500`}>Security Charge</label>
                                        </div>
                                        <div className=''>
                                            <label className={`text-xs ml-2 font-medium text-gray-800`}>Rs 2500</label>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-2 border-t-2 '>
                                        <div className="">
                                            <label className={`text-xs ml-2 font-medium text-gray-500`}>Total</label>
                                        </div>
                                        <div className=''>
                                            <label className={`text-xs ml-2 font-medium text-gray-800`}>Rs 3813</label>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-2 '>
                                        <div className="">
                                            <label className={`text-xs ml-2 font-medium text-gray-500`}>Tax and Cess</label>
                                        </div>
                                        <div className=''>
                                            <label className={`text-xs ml-2 font-medium text-gray-800`}>Rs 204.4</label>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-2 border-t-2 '>
                                        <div className="">
                                            <label className={`text-xs ml-2 font-medium text-gray-500`}>Fee Round Off</label>
                                        </div>
                                        <div className=''>
                                            <label className={`text-xs ml-2 font-medium text-gray-800`}>Rs -0.4</label>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-2 border-t-2 '>
                                        <div className="">
                                            <label className={`text-xs ml-2 font-semibold text-gray-800`}>Total</label>
                                        </div>
                                        <div className=''>
                                            <label className={`text-xs ml-2 font-semibold text-gray-800`}>Rs 4292</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewBreakupScreen
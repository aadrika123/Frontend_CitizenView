//////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 04 november 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - PropertyRegistryScreen
//    DESCRIPTION - PropertyRegistryScreen compomnent 
//////////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import { AiFillInfoCircle } from 'react-icons/ai'
import { RiArrowDropLeftFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from '../Styles/ThemeStyle'


let counter = [1, 2]

function PastPaymentScreen(props) {
    //destructuring predefined colors to maintain uniform theme everywhere
    const { bgHeaderColor, titleColor, nextButtonColor, nextBtnHoverColor, backButtonColor, backBtnHoverColor, bgCardColor, bgInfoColor, infoTextColor } = ThemeStyle()
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
                            <h1 className={`font-bold ${titleColor}`}>Past Payment</h1>
                        </div>

                        {/* {****** Service Detail  *********} */}
                        {counter.map((items) => (
                            <div className='col-span-12 bg-gray-50 p-2 shadow-md mt-2 mb-1'>

                                <div className="form-group mb-4 md:mb-6 col-span-12 mt-1">
                                    <div className='grid grid-cols-2 '>
                                        <div className="">
                                            <label className={`text-xs ml-2 font-medium text-gray-800`}>INR 500</label>
                                        </div>
                                      
                                    </div>
                                    <div className='grid grid-cols-2 '>
                                        <div className="">
                                            <label className={`text-xs ml-2 font-medium text-gray-500`}> 04/11/2022 - 04/12/2022</label>
                                        </div>
                                        
                                    </div>
                                    <div className='grid grid-cols-2 '>
                                        <div className="">
                                            <label className={`text-xs ml-2 font-medium text-gray-500`}>Consumer No.</label>
                                        </div>
                                        <div className=''>
                                            <label className={`text-xs ml-2 font-medium text-gray-800`} >WS/1324/3234/2344</label>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-2 '>
                                        <div className="">
                                            <label className={`text-xs ml-2 font-medium text-gray-500`}>Owner Name</label>
                                        </div>
                                        <div className=''>
                                            <label className={`text-xs ml-2 font-medium text-gray-800`}>mark</label>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-2 '>
                                        <div className="">
                                            <label className={`text-xs ml-2 font-medium text-gray-500`}>Amount Paid</label>
                                        </div>
                                        <div className=''>
                                            <label className={`text-xs ml-2 font-medium text-gray-800`}>500</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PastPaymentScreen
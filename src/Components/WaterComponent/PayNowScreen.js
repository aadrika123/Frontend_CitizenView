//////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 03 november 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - SearchPropertyScreen
//    DESCRIPTION - SearchPropertyScreen compomnent shows list of required document
//////////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import { AiFillInfoCircle } from 'react-icons/ai'
import { RiArrowDropLeftFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from '../Styles/ThemeStyle'

function PayNowScreen(props) {


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
                            <h1 className={`font-bold ${titleColor}`}>Water Bill</h1>

                        </div>
                        <div className="col-span-12 flex flex-row w-full  text-sm bg-gray-100 shadow-md mt-4 ">
                            <h1 className={`font-semibold ${titleColor} text-center ml-2 p-1  `}>Consumer No. - WC_1234567890</h1>
                        </div>

                        {/* {****** Bill Details*********} */}
                        <div className='col-span-12 bg-gray-50 p-2 shadow-md mt-2'>
                            <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`ml-2 text-xs font-medium text-gray-500`}>Billing Period</label>
                                    </div>
                                    <div className=''>
                                        <label className={`ml-2 text-xs font-medium text-gray-800`} >11/11/2022 - 11/12/2022 </label>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`ml-2 text-xs font-medium text-gray-500`}>Advance Carry Forward</label>
                                    </div>
                                    <div className=''>
                                        <label className={`ml-2 text-xs font-medium text-gray-800`} >Rs -70</label>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`ml-2 text-xs font-medium text-gray-500`}>Water Charge</label>
                                    </div>
                                    <div className=''>
                                        <label className={`ml-2 text-xs font-medium text-gray-800`} >Rs 0</label>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`ml-2 text-xs font-medium text-gray-500`}>Interest</label>
                                    </div>
                                    <div className=''>
                                        <label className={`ml-2 text-xs font-medium text-gray-800`} >Rs 0</label>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`ml-2 text-xs font-medium text-gray-500`}>Water Cess</label>
                                    </div>
                                    <div className=''>
                                        <label className={`ml-2 text-xs font-medium text-gray-800`} >Rs 0</label>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`ml-2 text-xs font-medium text-gray-500`}>Penalty</label>
                                    </div>
                                    <div className=''>
                                        <label className={`ml-2 text-xs font-medium text-gray-800`} >Rs 0</label>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`ml-2 text-xs font-medium text-gray-500`}>Arrears</label>
                                    </div>
                                    <div className=''>
                                        <label className={`ml-2 text-xs font-medium text-gray-800`} >Rs 0</label>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 border-t-2'>
                                    <div className="">
                                        <label className={`ml-2 text-xs font-medium text-gray-500`}>Total Amount</label>
                                    </div>
                                    <div className=''>
                                        <label className={`ml-2 text-xs font-medium text-gray-800`} >Rs -70</label>
                                    </div>
                                </div>

                                <div className={`grid grid-cols-12 ${bgCardColor} shadow-lg w-full md:w-1/3 p-4 py-2 md:p-2`}>
                                    <div className="col-span-12 flex flex-row w-full  text-md  ">
                                        <h1 className={`font-semibold ${titleColor}`}>Due Date - 4/11/2022</h1>                                  
                                         </div>

                                </div>
                            </div>
                        </div>

                        {/* {****** Service Details*********} */}
                        <div className='col-span-12 bg-gray-50 p-2 shadow-md mt-2'>
                            <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">
                                <div className="col-span-12 flex flex-row w-full border-b-2">
                                    <h1 className={`font-medium ${titleColor} text-center ml-2 text-md text-gray-500 `}>Service Detail</h1>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`ml-2 text-xs font-medium text-gray-500`}>Service</label>
                                    </div>
                                    <div className=''>
                                        <label className={`ml-2 text-xs font-medium text-gray-800`} >Water</label>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`ml-2 text-xs font-medium text-gray-500`}>Property Usage Type</label>
                                    </div>
                                    <div className=''>
                                        <label className={`ml-2 text-xs font-medium text-gray-800`} >NonResidential Industrial</label>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`ml-2 text-xs font-medium text-gray-500`}>Connection Type</label>
                                    </div>
                                    <div className=''>
                                        <label className={`ml-2 text-xs font-medium text-gray-800`}>Metered</label>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`ml-2 text-xs font-medium text-gray-500`}>Meter Id</label>
                                    </div>
                                    <div className=''>
                                        <label className={`ml-2 text-xs font-medium text-gray-800`} >23</label>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`ml-2 text-xs font-medium text-gray-500`}>Meter Status</label>
                                    </div>
                                    <div className=''>
                                        <label className={`ml-2 text-xs font-medium text-gray-800`} >Rs 0</label>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`ml-2 text-xs font-medium text-gray-500`}>Meter Reading Date</label>
                                    </div>
                                    <div className=''>
                                        <label className={`ml-2 text-xs font-medium text-gray-800`} >Rs 0</label>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`ml-2 text-xs font-medium text-gray-500`}>Consumption</label>
                                    </div>
                                    <div className=''>
                                        <label className={`ml-2 text-xs font-medium text-gray-800`} >Rs 0</label>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`ml-2 text-xs font-medium text-gray-500`}>Current Meter Reading</label>
                                    </div>
                                    <div className=''>
                                        <label className={`ml-2 text-xs font-medium text-gray-800`} >Rs -70</label>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`ml-2 text-xs font-medium text-gray-500`}>Last Meter Reading</label>
                                    </div>
                                    <div className=''>
                                        <label className={`ml-2 text-xs font-medium text-gray-800`} >Rs -70</label>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='grid grid-cols-2 '>
                            <div className="">
                                <button className={`shadow-lg px-8 py-2 ml-28  ${nextButtonColor} text-white font-medium text-xs leading-tight  rounded  ${nextBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`} >Download </button>
                            </div>
                            <div className=''>
                                <Link to='/water-confirmPayment'>
                                    <button className={`shadow-lg px-12 py-2 ml-56  ${nextButtonColor} text-white font-medium text-xs leading-tight  rounded  ${nextBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`} >Pay</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PayNowScreen
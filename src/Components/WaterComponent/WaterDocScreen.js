//////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 02 november 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - WaterDocScreen
//    DESCRIPTION - WaterDocScreen compomnent shows list of required document
//////////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import { AiFillInfoCircle } from 'react-icons/ai'
import { RiArrowDropLeftFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from '../../Components/Styles/ThemeStyle'

function WaterDocScreen(props) {

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
                            <h1 className={`font-bold ${titleColor}`}>Required Document</h1>
                            <button type='button' className={`shadow-lg px-3 py-2 ml-6 ${nextButtonColor} text-white font-medium text-xs leading-tight  rounded  ${nextBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Print</button>
                            <Link to='/water-applyNew'>
                                <button type='button' className={`shadow-lg px-3 py-2 ml-1  ${nextButtonColor} text-white font-medium text-xs leading-tight  rounded  ${nextBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Apply</button>
                            </Link>
                        </div>

                        {/* {****** Identity proof Document *********} */}
                        <div className='col-span-12 bg-gray-50 p-2 shadow-md mt-2'>
                            <div className="col-span-12"> <h1 className={`font-semibold ${titleColor} text-md mt-3`}>Identity Proof</h1></div>
                            <div className="col-span-12"> <h1 className={` ${titleColor} text-xs opacity-40`}>One of these documents is needed to apply for this services.</h1></div>
                            <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">
                                <div className="flex items-center mb-4">
                                    <ul className='grid grid-cols-3 gap-2'>
                                        <li className={` ${titleColor} text-xs opacity-80`}>1. Aadhar Card</li>
                                        <li className={` ${titleColor} text-xs opacity-80`}>2. Voter Id</li>
                                        <li className={` ${titleColor} text-xs opacity-80`}>3.  Driving License</li>
                                        <li className={` ${titleColor} text-xs opacity-80`}>4. Pan Card</li>
                                        <li className={` ${titleColor} text-xs opacity-80`}>5. Passport</li>
                                    </ul>
                                </div>
                                <div className='p-2 relative '>
                                    <div className={`absolute top-0 left-0 w-full h-full ${bgInfoColor} opacity-20`}></div>
                                    <div className={`font-semibold text-sm ${infoTextColor} `}><AiFillInfoCircle className="inline text-sm" /> Info</div>
                                    <div className={`text-xs ${infoTextColor} mt-2`}>In Case Of Multiple/Institutional Applicant Please Provide ID Of Primary Or Authorized Person.</div>
                                </div>
                            </div>
                        </div>

                        {/* {****** Address proof Document *********} */}
                        <div className='col-span-12 bg-gray-50 p-2 shadow-md mt-2'>
                            <div className="col-span-12"> <h1 className={`font-semibold ${titleColor} text-md mt-3`}>Address Proof</h1></div>
                            <div className="col-span-12"> <h1 className={` ${titleColor} text-xs opacity-40`}>One of these documents is needed to apply for this services.</h1></div>
                            <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">
                                <div className="flex items-center mb-4">
                                    <ul className='grid grid-cols-3 gap-2'>
                                        <li className={` ${titleColor} text-xs opacity-80`}>1. Electricity Bill</li>
                                        <li className={` ${titleColor} text-xs opacity-80`}>2. Driving License </li>
                                        <li className={` ${titleColor} text-xs opacity-80`}>3.  Voter Id</li>
                                        <li className={` ${titleColor} text-xs opacity-80`}>4. Aadhar Card</li>
                                        <li className={` ${titleColor} text-xs opacity-80`}>5. Pan Card</li>
                                        <li className={` ${titleColor} text-xs opacity-80`}>6. Passport</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='p-2 relative '>
                                <div className={`absolute top-0 left-0 w-full h-full ${bgInfoColor} opacity-20`}></div>
                                <div className={`font-semibold text-sm ${infoTextColor} `}><AiFillInfoCircle className="inline text-sm" /> Info</div>
                                <div className={`text-xs ${infoTextColor} mt-2`}>In Case Of Multiple/Institutional Applicant Please Provide ID Of Primary Or Authorized Person</div>
                            </div>
                        </div>

                        {/* {****** Usage proof Document *********} */}
                        <div className='col-span-12 bg-gray-50 p-2 shadow-md mt-2'>
                            <div className="col-span-12"> <h1 className={`font-semibold ${titleColor} text-md mt-3`}>Usage Proof</h1></div>
                            <div className="col-span-12"> <h1 className={` ${titleColor} text-xs opacity-40`}>One of these documents is needed to apply for this services.</h1></div>
                            <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">
                                <div className="flex items-center mb-4">
                                    <ul className='grid grid-cols-3 gap-2'>
                                        <li className={` ${titleColor} text-xs opacity-80`}>1. Electricity Bill</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='p-2 relative '>
                                <div className={`absolute top-0 left-0 w-full h-full ${bgInfoColor} opacity-20`}></div>
                                <div className={`font-semibold text-sm ${infoTextColor} `}><AiFillInfoCircle className="inline text-sm" /> Info</div>
                                <div className={`text-xs ${infoTextColor} mt-2`}>In Case Of Multiple Floors/Units Please Provide The Usage Proof Of All Floors/Units.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WaterDocScreen
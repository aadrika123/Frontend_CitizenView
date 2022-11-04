//////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 04 november 2022
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

function ConnectionDetailScreen(props) {

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
                            <h1 className={`font-bold ${titleColor}`}>Connection Details</h1>
                            <button type='button' className={`shadow-lg px-3 py-2 ml-6 ${nextButtonColor} text-white font-medium text-xs leading-tight  rounded  ${nextBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Print</button>
                            <button type='button' className={`shadow-lg px-3 py-2 ml-1  ${nextButtonColor} text-white font-medium text-xs leading-tight  rounded  ${nextBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Download</button>
                        </div>
                       
                        <div className="col-span-12 flex flex-row w-full  text-sm bg-gray-100 shadow-md mt-4 ">
                            <h1 className={`font-semibold ${titleColor} text-center ml-2 p-1  `}>Consumer No. - WC_1234567890</h1>
                        </div>

                        {/* {****** Service Detail  *********} */}
                        <div className='col-span-12 bg-gray-50 p-2 shadow-md mt-2 mb-1'>
                            <div className="col-span-12 flex flex-row w-full  text-md  ">
                                <h1 className={`font-normal ${titleColor} ml-2`}>Service Details</h1>
                            </div>
                            <div className="form-group mb-4 md:mb-6 col-span-12 mt-1">
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`text-xs ml-2 font-medium text-gray-500`}>Service</label>
                                    </div>
                                    <div className=''>
                                        <label className={`text-xs ml-2 font-medium text-gray-800`}>water</label>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`text-xs ml-2 font-medium text-gray-500`}>Connection Type</label>
                                    </div>
                                    <div className=''>
                                        <label className={`text-xs ml-2 font-medium text-gray-800`} >Metered</label>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`text-xs ml-2 font-medium text-gray-500`}>Connection Category</label>
                                    </div>
                                    <div className=''>
                                        <label className={`text-xs ml-2 font-medium text-gray-800`} >NA</label>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`text-xs ml-2 font-medium text-gray-500`}>Meter ID</label>
                                    </div>
                                    <div className=''>
                                        <label className={`text-xs ml-2 font-medium text-gray-800`}>b12000</label>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`text-xs ml-2 font-medium text-gray-500`}>Pipe Size</label>
                                    </div>
                                    <div className=''>
                                        <label className={`text-xs ml-2 font-medium text-gray-800`}>0.75</label>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`text-xs ml-2 font-medium text-gray-500`}>Connection Execution Date</label>
                                    </div>
                                    <div className=''>
                                        <label className={`text-xs ml-2 font-medium text-gray-800`}>01/11/2022</label>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`text-xs ml-2 font-medium text-gray-500`}>Rain Water Harvesting </label>
                                    </div>
                                    <div className=''>
                                        <label className={`text-xs ml-2 font-medium text-gray-800`} ></label>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`text-xs ml-2 font-medium text-gray-500`}>Water Source</label>
                                    </div>
                                    <div className=''>
                                        <label className={`text-xs ml-2 font-medium text-gray-800`}>Ground</label>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`text-xs ml-2 font-medium text-gray-500`}>Water Sub Source</label>
                                    </div>
                                    <div className=''>
                                        <label className={`text-xs ml-2 font-medium text-gray-800`} >Well</label>
                                    </div>
                                </div>

                                <div className=' text-center mt-4'>
                                    <Link to='/water-consumptionDetail'>
                                        <button className={`shadow-lg px-3 py-2 ml-1  ${nextButtonColor} text-white font-medium text-xs leading-tight  rounded  ${nextBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`} >View Consumption Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* {****** Property Details  *********} */}
                        <div className='col-span-12 bg-gray-50 p-2 shadow-md mt-2 mb-1'>
                            <div className="col-span-12 flex flex-row w-full  text-md  ">
                                <h1 className={`font-normal ${titleColor} ml-2`}>Property Details </h1>
                            </div>
                            <div className="form-group mb-4 md:mb-6 col-span-12 mt-4 ">
                                <div className="col-span-12 flex flex-row w-full  text-xs  ">
                                    <h1 className={`font-normal ${titleColor} ml-2`}>Property Details </h1>
                                </div>
                                <div className='grid grid-cols-2 border-t-2'>
                                    <div className="">
                                        <label className={`text-xs ml-2 font-medium text-gray-500`}>Property Type</label>
                                    </div>
                                    <div className=''>
                                        <label className={`text-xs ml-2 font-medium text-gray-800`}>Independent Building</label>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`text-xs ml-2 font-medium text-gray-500`}>Property Usage Type</label>
                                    </div>
                                    <div className=''>
                                        <label className={`text-xs ml-2 font-medium text-gray-800`} >Commercial</label>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`text-xs ml-2 font-medium text-gray-500`}> Plot size(in sq meters)</label>
                                    </div>
                                    <div className=''>
                                        <label className={`text-xs ml-2 font-medium text-gray-800`} >234</label>
                                    </div>
                                </div>

                                <div className="form-group mb-4 md:mb-6 col-span-12 mt-4 ">
                                    <div className="col-span-12 flex flex-row w-full  text-xs  ">
                                        <h1 className={`font-normal ${titleColor} ml-2`}>Property Location Details </h1>
                                    </div>
                                    <div className='grid grid-cols-2 border-t-2'>
                                        <div className="">
                                            <label className={`text-xs ml-2 font-medium text-gray-500`}>Property ID</label>
                                        </div>
                                        <div className=''>
                                            <label className={`text-xs ml-2 font-medium text-gray-800`}>3456789876543245</label>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-2 '>
                                        <div className="">
                                            <label className={`text-xs ml-2 font-medium text-gray-500`}>city</label>
                                        </div>
                                        <div className=''>
                                            <label className={`text-xs ml-2 font-medium text-gray-800`} >City A</label>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-2 '>
                                        <div className="">
                                            <label className={`text-xs ml-2 font-medium text-gray-500`}> Plot/House/Survey No.</label>
                                        </div>
                                        <div className=''>
                                            <label className={`text-xs ml-2 font-medium text-gray-800`} >S1234</label>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-2 '>
                                        <div className="">
                                            <label className={`text-xs ml-2 font-medium text-gray-500`}>Building/Colony/Name</label>
                                        </div>
                                        <div className=''>
                                            <label className={`text-xs ml-2 font-medium text-gray-800`}>Building 1</label>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-2 '>
                                        <div className="">
                                            <label className={`text-xs ml-2 font-medium text-gray-500`}>Street Name</label>
                                        </div>
                                        <div className=''>
                                            <label className={`text-xs ml-2 font-medium text-gray-800`}>Street no. 3</label>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-2 '>
                                        <div className="">
                                            <label className={`text-xs ml-2 font-medium text-gray-500`}>Locality</label>
                                        </div>
                                        <div className=''>
                                            <label className={`text-xs ml-2 font-medium text-gray-800`}>Sector 2B</label>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-2 '>
                                        <div className="">
                                            <label className={`text-xs ml-2 font-medium text-gray-500`}>Pincode</label>
                                        </div>
                                        <div className=''>
                                            <label className={`text-xs ml-2 font-medium text-gray-800`}>1234456</label>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-2 '>
                                        <div className="">
                                            <label className={`text-xs ml-2 font-medium text-gray-500`}>Location on Map</label>
                                        </div>
                                        <div className=''>
                                            <label className={`text-xs ml-2 font-medium text-gray-800`}>NA NA</label>
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

export default ConnectionDetailScreen
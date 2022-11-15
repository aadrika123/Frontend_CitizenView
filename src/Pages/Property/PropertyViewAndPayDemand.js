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
import ThemeStyle from '../../../src/Components/Styles/ThemeStyle'



function PropertyViewAndPayDemand(props) {

    //destructuring predefined colors to maintain uniform theme everywhere
    const { bgHeaderColor, titleColor, nextButtonColor, nextBtnHoverColor, backButtonColor, backBtnHoverColor, bgCardColor, bgInfoColor, infoTextColor } = ThemeStyle()

   console.log("safApplicationId", props.safApplicationId)
    return (
        <>
            <div>
                <div className='text-xs font-semibold px-2 mt-4 flex'>
                    <div className="flex-1"><span onClick={props.goBack} className='border-b border-black'><RiArrowDropLeftFill className="inline text-xl" />Back</span></div>
                    <div className="flex-1 text-right"><span className=''>{props?.formIndex} of 10</span></div>
                </div>
                <div className='p-2 md:p-10 flex justify-center items-center  overflow-hidden'>
                    <div className={`grid grid-cols-12 ${bgCardColor} shadow-lg w-full md:w-1/3 p-4 py-10 md:p-10`}>
                        <div className="col-span-12 flex flex-row w-full  text-lg  ">
                            <h1 className={`font-bold ${titleColor}`}>Payment Page</h1>

                        </div>

                        {/* {****** Application Detail List *********} */}
                        <div className='col-span-12 bg-gray-50 p-2 shadow-md mt-2 mb-1'>
                            <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`text-xs ml-2 font-medium text-gray-500`}>Service</label>
                                    </div>
                                    <div className=''>
                                        <label className={`text-xs ml-2 font-medium text-gray-800`} >{`{New Assessment}`}</label>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`text-xs ml-2 font-medium text-gray-500`}>SAF Number</label>
                                    </div>
                                    <div className=''>
                                        <label className={`text-xs ml-2 font-medium text-gray-800`}>{`{SAF/01/02A/00035}`}</label>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`text-xs ml-2 font-medium text-gray-500`}>Status</label>
                                    </div>
                                    <div className=''>
                                        <label className={`text-xs ml-2 font-medium text-gray-800`}>Pending for field inspection</label>
                                    </div>
                                </div>
                                
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`text-xs ml-2 font-medium text-gray-500`}>Comments</label>
                                    </div>
                                    <div className=''>
                                        <label className={`text-xs ml-2 font-medium text-gray-800`}>inspecting</label>
                                    </div>
                                </div>
                                {/* <div className=' text-center mt-4'>
                                    <Link to='/water-viewHistory'>
                                        <button className={`shadow-lg px-3 py-2 ml-1  ${nextButtonColor} text-white font-medium text-xs leading-tight  rounded  ${nextBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`} >View History</button>
                                    </Link>
                                </div> */}
                            </div>

                        </div>


                        {/* {****** Fee Estimate *********} */}
                        <div className='col-span-12 bg-gray-50 p-2 shadow-md mt-2 mb-1'>
                            <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`text-xs ml-2 font-medium text-gray-500`}>Application Fee</label>
                                    </div>
                                    <div className=''>
                                        <label className={`text-xs ml-2 font-medium text-gray-800`} >275</label>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`text-xs ml-2 font-medium text-gray-500`}>Service Fee</label>
                                    </div>
                                    <div className=''>
                                        <label className={`text-xs ml-2 font-medium text-gray-800`}>3813</label>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`text-xs ml-2 font-medium text-gray-500`}>Tax</label>
                                    </div>
                                    <div className=''>
                                        <label className={`text-xs ml-2 font-medium text-gray-800`}>204.4</label>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 divide-y '>
                                    <div className="">
                                        <label className={`text-xs ml-2 font-bold text-gray-500 divide-y-2`}>Total amount</label>
                                    </div>
                                    <div className=''>
                                        <label className={`text-xs ml-2 font-medium text-gray-800`}>Rs 4292</label>
                                    </div>
                                </div>

                                <div className=' text-center mt-4'>
                                    <button className={`shadow-lg px-3 py-2 ml-1  bg-green-700 text-white font-medium text-xs leading-tight  rounded  hover:bg-green-600 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`} >Pay Now</button>

                                </div>
                            </div>
                            <div className='p-2 relative '>
                                <div className={`absolute top-0 left-0 w-full h-full bg-green-200 opacity-20`}></div>
                                <div className={`font-semibold text-sm text-green-800 `}><AiFillInfoCircle className="inline text-sm" /> Info</div>
                                    <p className={`text-xs text-green-700 mt-1 ml-1`}>You can make payment using UPI / Net Banking / Cards.</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PropertyViewAndPayDemand
//////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 04 november 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - ScreenFormReview
//    DESCRIPTION - ScreenFormReview
//////////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import { AiFillInfoCircle } from 'react-icons/ai'
import { RiArrowDropLeftFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'


//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from '../../Styles/ThemeStyle'

function ScreenFormReview(props) {

    //destructuring predefined colors to maintain uniform theme everywhere
    const { bgHeaderColor, titleColor, nextButtonColor, nextBtnHoverColor, backButtonColor, backBtnHoverColor, bgCardColor, bgInfoColor, infoTextColor } = ThemeStyle()
    let counter = [1, 2]
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
                            <h1 className={`font-bold ${titleColor} text-center ml-16`}>REVIEW APPLICATION</h1>

                        </div>


                        {/* {****** water connection Detail  *********} */}
                        <div className='col-span-12 bg-gray-50 p-2 shadow-md mt-2 mb-1'>
                            <div className="col-span-12 flex flex-row w-full  text-md  ">
                                <h1 className={`font-semibold ${titleColor} ml-2`}>Water Connection Detail</h1>
                            </div>
                            <div className="form-group mb-4 md:mb-6 col-span-12 mt-1">
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`text-xs ml-2 font-medium text-gray-500`}>Application No. </label>
                                    </div>
                                    <div className=''>
                                        <label className={`text-xs ml-2 font-medium text-gray-800`}>APP67420051122050601</label>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`text-xs ml-2 font-medium text-gray-500`}>Type of Connection </label>
                                    </div>
                                    <div className=''>
                                        <label className={`text-xs ml-2 font-medium text-gray-800`} >New Connection</label>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`text-xs ml-2 font-medium text-gray-500`}>Connection Through</label>
                                    </div>
                                    <div className=''>
                                        <label className={`text-xs ml-2 font-medium text-gray-800`} >Id Proof</label>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`text-xs ml-2 font-medium text-gray-500`}>Property Type</label>
                                    </div>
                                    <div className=''>
                                        <label className={`text-xs ml-2 font-medium text-gray-800`}>Commercial</label>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`text-xs ml-2 font-medium text-gray-500`}>Pipeline Type</label>
                                    </div>
                                    <div className=''>
                                        <label className={`text-xs ml-2 font-medium text-gray-800`}>Old Pipeline</label>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`text-xs ml-2 font-medium text-gray-500`}>Category</label>
                                    </div>
                                    <div className=''>
                                        <label className={`text-xs ml-2 font-medium text-gray-800`}>APL</label>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`text-xs ml-2 font-medium text-gray-500`}>Owner Type </label>
                                    </div>
                                    <div className=''>
                                        <label className={`text-xs ml-2 font-medium text-gray-800`}>OWNER</label>
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
                            </div>
                        </div>

                        {/* {****** Owner Details  *********} */}
                        <div className='col-span-12 bg-gray-50 p-2 shadow-md mt-2 mb-1'>
                            <div className={` `}>
                                <h1 className={`font-bold ${titleColor} text-center `}>Owner Details</h1>
                            </div>
                            {counter.map((items) => (
                                <>

                                    <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">
                                        <div className='grid grid-cols-2 '>
                                            <div className="">
                                                <label className={`text-xs ml-2 font-medium text-gray-500`}>
                                                    Image</label>
                                            </div>
                                            <div className=''>
                                                <label className={`text-xs ml-2 font-medium text-gray-800`}>NA</label>
                                            </div>
                                        </div>
                                        <div className='grid grid-cols-2 '>
                                            <div className="">
                                                <label className={`text-xs ml-2 font-medium text-gray-500`}>Document</label>
                                            </div>
                                            <div className=''>
                                                <label className={`text-xs ml-2 font-medium text-gray-800`} >NA</label>
                                            </div>
                                        </div>
                                        <div className='grid grid-cols-2 '>
                                            <div className="">
                                                <label className={`text-xs ml-2 font-medium text-gray-500`}>Upload Document</label>
                                            </div>
                                            <div className=''>
                                                <label className={`text-xs ml-2 font-medium text-gray-800`}>Demo</label>
                                            </div>
                                        </div>
                                        <div className='grid grid-cols-2 '>
                                            <div className="">
                                                <label className={`text-xs ml-2 font-medium text-gray-500`}>Name</label>
                                            </div>
                                            <div className=''>
                                                <label className={`text-xs ml-2 font-medium text-gray-800`} >DEMO</label>
                                            </div>
                                        </div>
                                        <div className='grid grid-cols-2  '>
                                            <div className="">
                                                <label className={`text-xs ml-2 font-medium text-gray-500`}>Mobile No.</label>
                                            </div>
                                            <div className=''>
                                                <label className={`text-xs ml-2 font-medium text-gray-800`}>2356887654</label>
                                            </div>
                                        </div>
                                        <div className='grid grid-cols-2 border-b-2 border-gray-800 '>
                                            <div className="">
                                                <label className={`text-xs ml-2 font-medium text-gray-500`}>Email ID</label>
                                            </div>
                                            <div className=''>
                                                <label className={`text-xs ml-2 font-medium text-gray-800`}>ABC@GMAIL.COM</label>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </div>
                        <Link to='/water-submitNewApply'>
                            <div className='md:px-10 ml-20'>
                                <button onClick={() => props.submitFun()} type="button" className=" px-6 py-1 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">Submit</button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>


        </>
    )
}

export default ScreenFormReview
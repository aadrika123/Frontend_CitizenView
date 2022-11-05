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

function MakePayment(props) {
    //destructuring predefined colors to maintain uniform theme everywhere
    const { bgHeaderColor, titleColor, nextButtonColor, nextBtnHoverColor, backButtonColor, backBtnHoverColor, bgCardColor, bgInfoColor, infoTextColor } = ThemeStyle()

    let resetBtnColor = "border border-2 border-amber-600"
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
                            <h1 className={`font-bold ${titleColor}`}>Fee Estimate</h1>

                        </div>

                        {/* {****** Properties results*********} */}

                        <div className='col-span-12 bg-gray-50 p-2 shadow-md mt-2'>
                            <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`ml-2 text-xs font-medium text-gray-500`}>Water charge</label>
                                    </div>
                                    <div className=''>
                                        <label className={`ml-2 text-xs font-medium text-gray-800`} >0</label>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`ml-2 text-xs font-medium text-gray-500`}>Penalty</label>
                                    </div>
                                    <div className=''>
                                        <label className={`ml-2 text-xs font-medium text-gray-800`} >0</label>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`ml-2 text-xs font-medium text-gray-500`}>Interest</label>
                                    </div>
                                    <div className=''>
                                        <label className={`ml-2 text-xs font-medium text-gray-800`} >0</label>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`ml-2 text-xs font-medium text-gray-500`}>Water Cess</label>
                                    </div>
                                    <div className=''>
                                        <label className={`ml-2 text-xs font-medium text-gray-800`} >0</label>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`ml-2 text-xs font-medium text-gray-500`}>Advance Carry Forward</label>
                                    </div>
                                    <div className=''>
                                        <label className={`ml-2 text-xs font-medium text-gray-800`} >-70</label>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`ml-2 text-xs font-medium text-gray-500`}>Arrears</label>
                                    </div>
                                    <div className=''>
                                        <label className={`ml-2 text-xs font-medium text-gray-800`} >0</label>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 border-t-2 '>
                                    <div className="">
                                        <label className={`ml-2 text-xs font-medium text-gray-500`}>Total Amount</label>
                                    </div>
                                    <div className=''>
                                        <label className={`ml-2 text-xs font-medium text-gray-800`} >-70</label>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                        {/* {****** Amount *********} */}
                        <div className='col-span-12 bg-gray-50 p-2 shadow-md mt-2'>
                            <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`ml-2 text-xs font-medium text-gray-500`}>Amount to be Paid</label>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`ml-2 text-xs font-medium text-gray-800`}>Amount to pay (Rs)</label>
                                    </div>
                                </div>
                                <div className=''>
                                    <input type='text' className='border bg-gray-50 shadow-md  px-6 ml-2 ' />
                                    </div>
                                
                            </div>
                        </div>

                        {/* {****** pay payer detail *********} */}
                        <div className='col-span-12 bg-gray-50 p-2 shadow-md mt-2'>
                        <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">
                            <div className="flex items-center mb-4">
                                <label className="ml-2 text-sm font-medium text-gray-500 ">Noc_Payment_Paid_By_Label<span className='text-red-600 text-lg'>*</span></label>
                            </div>
                            <div className="flex items-center -mt-3">
                                <select className='border bg-gray-50 shadow-md   px-[5rem] text-left text-gray-500 ' placeholder='city'>
                                    <option>owner </option>
                                    <option>1</option>
                                    <option>1</option>
                                    <option>1</option>
                                </select>

                            </div>
                            <div className="flex items-center mb-4">
                                <label className="ml-2 text-sm font-medium text-gray-500 ">Payer Name <span className='text-red-600 text-lg'>*</span></label>
                            </div>
                            <div className="flex items-center -mt-3">
                                <input type='text' className='border bg-gray-50 shadow-md  px-9 ' placeholder='Enter property id' />
                            </div>
                            <div className="flex items-center mb-4">
                                <label className="ml-2 text-sm font-medium text-gray-500 ">Payer Mobile No. <span className='text-red-600 text-lg'>*</span></label>
                            </div>
                            <div className="flex items-center -mt-3">
                                <input type='text' className='border bg-gray-50 shadow-md  px-9 ' placeholder='Enter Mobile no.' />
                            </div>
                            <div className="col-span-12 grid grid-cols-12 mt-6">
                                <Link to='/water-paymentSuccess'>
                                    <div className="col-span-6"> <button type="submit" className={`shadow-lg  px-8 py-2 ml-48 ${nextButtonColor} text-white font-medium text-xs leading-tight  rounded  ${nextBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Make Payment</button></div>
                                </Link>
                            </div>

                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MakePayment
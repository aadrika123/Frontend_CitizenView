//////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 02 november 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - PropertyRegistryScreen
//    DESCRIPTION - PropertyRegistryScreen compomnent 
//////////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import { AiFillInfoCircle } from 'react-icons/ai'
import { RiArrowDropLeftFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import Info from '../../Common/Info'
//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from '../../Styles/ThemeStyle'

function HolderDetailScreen(props) {

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
                        <div className="col-span-12"> <h1 className={`font-bold ${titleColor} text-lg`}>Connection Holder Details</h1></div>
                        <div className="form-group mb-4 md:mb-6 col-span-12 mt-2">
                            <div className='flex flex-row'>
                                <div className=" items-center mb-4 ml-2">
                                    <input id="option1" type="radio" value="" name="propertyType" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="option1" className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-300 ">Same as owner details</label>
                                </div>

                            </div>


                              {/* {******Select Gender*********} */}
                              <div className="flex items-center">
                                <label className="ml-2 text-sm font-medium text-gray-500 "> Gender <span className='text-red-600 text-lg'>*</span></label>
                            </div>
                            <div className='flex flex-row ml-2'>
                           
                                <div className=" items-center mb-3">
                                    <input id="option1" type="radio" value="" name="propertyType" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="option1" className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-300">Male</label>
                                </div>
                                <div className=" items-center mb-4 ml-3">
                                    <input id="option2" type="radio" value="" name="propertyType" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="option1" className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-300">Female</label>
                                </div>
                                <div className=" items-center mb-4 ml-3">
                                    <input id="option3" type="radio" value="" name="propertyType" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="option1" className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-300">Transgender</label>
                                </div>
                            </div>


                            {/* {****** Mobile No.*********} */}
                            <div className="flex items-center mb-4 -mt-3">
                                <label className="ml-2 text-sm font-medium text-gray-500 "> Mobile No. <span className='text-red-600 text-lg'>*</span></label>
                            </div>
                            <div className="flex items-center -mt-3">
                                <input type='text' className='border bg-gray-50 shadow-md  px-9 ml-2 ' placeholder='Enter mobile no.' />
                            </div>

                            {/* {******Name*********} */}
                            <div className="flex items-center mb-4">
                                <label className="ml-2 text-sm font-medium text-gray-500 "> Name <span className='text-red-600 text-lg'>*</span></label>
                            </div>
                            <div className="flex items-center -mt-3">
                                <input type='text' className='border bg-gray-50 shadow-md  px-9 ml-2' placeholder='Enter name' />
                            </div>

                          
                             {/* {******Guardian Name*********} */}
                             <div className="flex items-center mb-4">
                                    <label className="ml-2 text-sm font-medium text-gray-500 "> Guardian Name <span className='text-red-600 text-lg'>*</span></label>
                                </div>
                                <div className="flex items-center -mt-3">
                                    <input type='text' className='border bg-gray-50 shadow-md  px-9 ml-2' placeholder='Enter guardian name' />
                                </div>

                                {/* {******Corresopondence address*********} */}
                                <div className="flex items-center mb-4">
                                    <label className="ml-2 text-sm font-medium text-gray-500 "> Corresopondence Address <span className='text-red-600 text-lg'>*</span></label>
                                </div>
                                <div className="flex items-center -mt-3">
                                    <input type='text' className='border bg-gray-50 shadow-md  px-9 ml-2' placeholder='Enter  address' />
                                </div>


                            {/* {******Relationship*********} */}
                            <div className="flex items-center mb-4">
                                <label className="ml-2 text-sm font-medium text-gray-500 ">Relationship<span className='text-red-600 text-lg'>*</span></label>
                            </div>
                            <div className=" -mt-3">
                                <select className='border bg-gray-50 shadow-md px-[3.1rem] text-left text-gray-500 ml-2'>
                                    <option> select Relationship</option>
                                    <option>1</option>
                                    <option>1</option>
                                    <option>1</option>
                                </select>
                            </div>

                              {/* {******Special Applicant Category*********} */}
                            <div className="flex items-center mb-4">
                                <label className="ml-2 text-sm font-medium text-gray-500 ">Special Applicant Category<span className='text-red-600 text-lg'>*</span></label>
                            </div>
                            <div className=" -mt-3">
                                <select className='border bg-gray-50 shadow-md px-[3.8rem] text-left text-gray-500 ml-2'>
                                    <option>select Category</option>
                                    <option>1</option>
                                    <option>1</option>
                                    <option>1</option>
                                </select>
                            </div>

                        </div>

                        <div className="col-span-12 grid grid-cols-12 gap-x-6 mt-6">
                            <div className="col-span-6"> <button onClick={() => props.backFun()} type="submit" className={`shadow-lg w-full px-6 py-2 ${backButtonColor} text-white font-medium text-xs leading-tight  rounded  ${backBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Back</button></div>
                            <div className="col-span-6"> <button onClick={() => props.nextFun()} type="submit" className={`shadow-lg w-full px-6 py-2 ${nextButtonColor} text-white font-medium text-xs leading-tight  rounded  ${nextBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Next</button></div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default HolderDetailScreen
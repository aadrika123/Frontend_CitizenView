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

function UploadDocument(props) {


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
                            <h1 className={`font-bold ${titleColor}`}>Required Documents</h1>

                        </div>
                        <div className="col-span-12"> <h1 className={` ${titleColor} text-xs opacity-40`}>Only one file will be uploaded for one document.If multiple files need to be uploaded thenn please combine all files in a pdf then and then upload. </h1></div>

                        {/* {****** identity document*********} */}

                        <div className="form-group  md:mb-6 col-span-12 mt-4 bg-gray-50 shadow-md p-2">
                            <div className="flex items-center mb-4">
                                <label className="text-sm font-medium text-gray-500 ">Identity Proof<span className='text-red-600 text-lg'>*</span></label>
                            </div>
                            <div className='grid grid-cols-2 -mt-4 '>
                                <div className="">
                                    <label className=" text-sm font-medium text-gray-500 dark:text-gray-300 ">Select Document</label>
                                </div>
                                <div className=''>
                                    <select className='border bg-gray-50 shadow-md -ml-10 px-16 text-left text-gray-500 '>
                                        <option>select </option>
                                        <option>1</option>
                                        <option>1</option>
                                        <option>1</option>
                                    </select>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 mt-4'>
                                <div className="">
                                    <label className=" text-sm font-medium text-gray-500 ">upload File </label>
                                </div>
                                <div className=''>
                                    <input type='file' className='border bg-gray-50 shadow-md -ml-10 w-48 ' />
                                </div>
                            </div>
                            <div className="form-group mb-4 md:mb-6 col-span-12 mt-2 ">
                                <div className="flex items-center mb-4">

                                </div>
                                <div className="flex items-center -mt-3">

                                </div>
                            </div>
                        </div>

                        {/* {****** address document*********} */}

                        <div className="form-group  md:mb-6 col-span-12 mt-4 bg-gray-50 shadow-md p-2">
                            <div className="flex items-center mb-4">
                                <label className="text-sm font-medium text-gray-500 ">Address Proof<span className='text-red-600 text-lg'>*</span></label>
                            </div>
                            <div className='grid grid-cols-2 -mt-4 '>
                                <div className="">
                                    <label className=" text-sm font-medium text-gray-500 dark:text-gray-300 ">Select Document</label>
                                </div>
                                <div className=''>
                                    <select className='border bg-gray-50 shadow-md -ml-10 px-16 text-left text-gray-500 '>
                                        <option>select </option>
                                        <option>1</option>
                                        <option>1</option>
                                        <option>1</option>
                                    </select>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 mt-4'>
                                <div className="">
                                    <label className=" text-sm font-medium text-gray-500 ">upload File </label>
                                </div>
                                <div className=''>
                                    <input type='file' className='border bg-gray-50 shadow-md -ml-10 w-48 ' />
                                </div>
                            </div>
                            <div className="form-group mb-4 md:mb-6 col-span-12 mt-2 ">
                                <div className="flex items-center mb-4">

                                </div>
                                <div className="flex items-center -mt-3">

                                </div>
                            </div>
                        </div>

                        {/* {****** electricity document*********} */}

                        <div className="form-group  md:mb-6 col-span-12 mt-4 bg-gray-50 shadow-md p-2">
                            <div className="flex items-center mb-4">
                                <label className="text-sm font-medium text-gray-500 ">Electricity Bill<span className='text-red-600 text-lg'>*</span></label>
                            </div>
                            <div className='grid grid-cols-2 -mt-4 '>
                                <div className="">
                                    <label className=" text-sm font-medium text-gray-500 dark:text-gray-300 ">Select Document</label>
                                </div>
                                <div className=''>
                                    <select className='border bg-gray-50 shadow-md -ml-10 px-16 text-left text-gray-500 '>
                                        <option>select </option>
                                        <option>1</option>
                                        <option>1</option>
                                        <option>1</option>
                                    </select>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 mt-4'>
                                <div className="">
                                    <label className=" text-sm font-medium text-gray-500 ">upload File </label>
                                </div>
                                <div className=''>
                                    <input type='file' className='border bg-gray-50 shadow-md -ml-10 w-48 ' />
                                </div>
                            </div>
                            <div className="form-group mb-4 md:mb-6 col-span-12 mt-2 ">
                                <div className="flex items-center mb-4">

                                </div>
                                <div className="flex items-center -mt-3">

                                </div>
                            </div>
                        </div>

                          {/* {****** plumber report/Drawing*********} */}

                          <div className="form-group  md:mb-6 col-span-12 mt-4 bg-gray-50 shadow-md p-2">
                            <div className="flex items-center mb-4">
                                <label className="text-sm font-medium text-gray-500 ">Plumber Report/Drawing<span className='text-red-600 text-lg'>*</span></label>
                            </div>
                            <div className='grid grid-cols-2 -mt-4 '>
                                <div className="">
                                    <label className=" text-sm font-medium text-gray-500 dark:text-gray-300 ">Select Document</label>
                                </div>
                                <div className=''>
                                    <select className='border bg-gray-50 shadow-md -ml-10 px-16 text-left text-gray-500 '>
                                        <option>select </option>
                                        <option>1</option>
                                        <option>1</option>
                                        <option>1</option>
                                    </select>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 mt-4'>
                                <div className="">
                                    <label className=" text-sm font-medium text-gray-500 ">upload File </label>
                                </div>
                                <div className=''>
                                    <input type='file' className='border bg-gray-50 shadow-md -ml-10 w-48 ' />
                                </div>
                            </div>
                            <div className="form-group mb-4 md:mb-6 col-span-12 mt-2 ">
                                <div className="flex items-center mb-4">

                                </div>
                                <div className="flex items-center -mt-3">

                                </div>
                            </div>
                        </div>

                         {/* {****** Building Plan / Completion Certificate*********} */}

                         <div className="form-group  md:mb-6 col-span-12 mt-4 bg-gray-50 shadow-md p-2">
                            <div className="flex items-center mb-4">
                                <label className="text-sm font-medium text-gray-500 ">Building Plan / Completion Certificate<span className='text-red-600 text-lg'>*</span></label>
                            </div>
                            <div className='grid grid-cols-2 -mt-4 '>
                                <div className="">
                                    <label className=" text-sm font-medium text-gray-500 dark:text-gray-300 ">Select Document</label>
                                </div>
                                <div className=''>
                                    <select className='border bg-gray-50 shadow-md -ml-10 px-16 text-left text-gray-500 '>
                                        <option>select </option>
                                        <option>1</option>
                                        <option>1</option>
                                        <option>1</option>
                                    </select>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 mt-4'>
                                <div className="">
                                    <label className=" text-sm font-medium text-gray-500 ">upload File </label>
                                </div>
                                <div className=''>
                                    <input type='file' className='border bg-gray-50 shadow-md -ml-10 w-48 ' />
                                </div>
                            </div>
                            <div className="form-group mb-4 md:mb-6 col-span-12 mt-2 ">
                                <div className="flex items-center mb-4">

                                </div>
                                <div className="flex items-center -mt-3">

                                </div>
                            </div>
                        </div>

                         {/* {****** Property Tax Reciept*********} */}

                         <div className="form-group  md:mb-6 col-span-12 mt-4 bg-gray-50 shadow-md p-2">
                            <div className="flex items-center mb-4">
                                <label className="text-sm font-medium text-gray-500 ">Property Tax Reciept<span className='text-red-600 text-lg'>*</span></label>
                            </div>
                            <div className='grid grid-cols-2 -mt-4 '>
                                <div className="">
                                    <label className=" text-sm font-medium text-gray-500 dark:text-gray-300 ">Select Document</label>
                                </div>
                                <div className=''>
                                    <select className='border bg-gray-50 shadow-md -ml-10 px-16 text-left text-gray-500 '>
                                        <option>select </option>
                                        <option>1</option>
                                        <option>1</option>
                                        <option>1</option>
                                    </select>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 mt-4'>
                                <div className="">
                                    <label className=" text-sm font-medium text-gray-500 ">upload File </label>
                                </div>
                                <div className=''>
                                    <input type='file' className='border bg-gray-50 shadow-md -ml-10 w-48 ' />
                                </div>
                            </div>
                            <div className="form-group mb-4 md:mb-6 col-span-12 mt-2 ">
                                <div className="flex items-center mb-4">

                                </div>
                                <div className="flex items-center -mt-3">

                                </div>
                            </div>
                        </div>

                        <div className="col-span-12 grid grid-cols-12 gap-x-6 mt-6">
                            <div className="col-span-6"> <button onClick={() => props.backFun()} type="submit" className={`shadow-lg w-full px-6 py-2 ${backButtonColor} text-white font-medium text-xs leading-tight  rounded  ${backBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Back</button></div>
                            <div className="col-span-6"> <button onClick={() => props.nextFun()} type="submit" className={`shadow-lg w-full px-6 py-2 ${nextButtonColor} text-white font-medium text-xs leading-tight  rounded  ${nextBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Next</button></div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UploadDocument
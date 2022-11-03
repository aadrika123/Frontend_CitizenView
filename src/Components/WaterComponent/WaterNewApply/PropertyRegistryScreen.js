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

function PropertyRegistryScreen(props) {

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
                        <div className="col-span-12 flex flex-row"> <h1 className={`font-bold ${titleColor} text-lg`}>Search Property</h1>
                            <button type='button' className={`shadow-lg px-2 ml-9 ${nextButtonColor} text-white text-xs leading-tight  rounded  ${nextBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}> Register New Property</button>
                        </div>
                        <div className="col-span-12 mt-2"> <h1 className={` ${titleColor} text-xs opacity-40`}>Provide at least one non-parameter to search for property. </h1></div>
                        <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">
                            <div className="flex items-center mb-4">
                                <label className="ml-2 text-sm font-medium text-gray-500 ">city<span className='text-red-600 text-lg'>*</span></label>
                            </div>
                            <div className="flex items-center -mt-3">
                                <select className='border bg-gray-50 shadow-md   px-20 text-left text-gray-500 '>
                                    <option>select city</option>
                                    <option>1</option>
                                    <option>1</option>
                                    <option>1</option>
                                </select>

                            </div>
                            <div className="flex items-center mb-4">
                                <label className="ml-2 text-sm font-medium text-gray-500 ">Owner Mobile No. <span className='text-red-600 text-lg'>*</span></label>
                            </div>
                            <div className="flex items-center -mt-3">
                                <input type='text' className='border bg-gray-50 shadow-md  px-9 ' />

                            </div>
                            <div className="flex items-center mb-4">
                                <label className="ml-2 text-sm font-medium text-gray-500 ">Existing Property ID <span className='text-red-600 text-lg'>*</span></label>
                            </div>
                            <div className="flex items-center -mt-3">
                                <input type='text' className='border bg-gray-50 shadow-md  px-9 ' />

                            </div>
                            <div className="flex items-center mb-4">
                                <label className="ml-2 text-sm font-medium text-gray-500 ">Unique Property ID<span className='text-red-600 text-lg'>*</span></label>
                            </div>
                            <div className="flex items-center -mt-3">
                                <input type='text' className='border bg-gray-50 shadow-md  px-9 ' />

                            </div>
                            <div className="col-span-12 grid grid-cols-12 gap-x-6 mt-6">
                                <div className="col-span-6"> <button type="submit" className={`shadow-lg float-right px-8 py-1.5 ${resetBtnColor} text-amber-600 font-medium text-xs leading-tight  rounded   hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Reset</button></div>
                                <Link to='/water-searchProprty'>
                                    <div className="col-span-6"> <button type="submit" className={`shadow-lg float-left px-8 py-2 -ml-4 ${nextButtonColor} text-white font-medium text-xs leading-tight  rounded  ${nextBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Search</button></div>
                                </Link>
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

export default PropertyRegistryScreen
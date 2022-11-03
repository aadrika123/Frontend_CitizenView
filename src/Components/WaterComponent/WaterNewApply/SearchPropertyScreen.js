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

import ThemeStyle from '../../Styles/ThemeStyle'

function SearchPropertyScreen(props) {

    //destructuring predefined colors to maintain uniform theme everywhere
    const { bgHeaderColor, titleColor, nextButtonColor, nextBtnHoverColor, backButtonColor, backBtnHoverColor, bgCardColor, bgInfoColor, infoTextColor } = ThemeStyle()

    let counter = [1, 2, 3, 4]
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
                            <h1 className={`font-bold ${titleColor}`}>Serach Result For properties</h1>

                        </div>

                        {/* {****** Properties results*********} */}
                        {counter.map((items) => (
                            <>
                                <div className='col-span-12 bg-gray-50 p-2 shadow-md mt-2'>
                                    <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">
                                        <div className='grid grid-cols-2 '>
                                            <div className="">
                                                <label className="ml-2 text-xs font-medium text-gray-400 dark:text-gray-300 ">Unique Property ID</label>
                                            </div>
                                            <div className=''>
                                                <label className=" text-xs font-medium text-gray-600 dark:text-gray-300 " >PROP134456567</label>
                                            </div>
                                        </div>
                                        <div className='grid grid-cols-2 '>
                                            <div className="">
                                                <label className="ml-2 text-xs font-medium text-gray-400 dark:text-gray-300 ">OwnerName</label>
                                            </div>
                                            <div className=''>
                                                <label className=" text-xs font-medium text-gray-600 dark:text-gray-300 " >Demo Testing</label>
                                            </div>
                                        </div>
                                        <div className='grid grid-cols-2 '>
                                            <div className="">
                                                <label className="ml-2 text-xs font-medium text-gray-400 dark:text-gray-300 ">Address</label>
                                            </div>
                                            <div className=''>
                                                <label className=" text-xs font-medium text-gray-600 dark:text-gray-300 " >Lorem ipsum dolor sit amet consectetur</label>
                                            </div>
                                        </div>
                                        <div className='grid grid-cols-2 '>
                                            <div className="">
                                                <label className="ml-2 text-xs font-medium text-gray-400 dark:text-gray-300 ">Action</label>
                                            </div>
                                            <div className=''>
                                                <Link to='/water-holderDetail'>
                                                    <button className={`shadow-lg px-3 py-2 ml-1  ${nextButtonColor} text-white font-medium text-xs leading-tight  rounded  ${nextBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`} >Select</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchPropertyScreen
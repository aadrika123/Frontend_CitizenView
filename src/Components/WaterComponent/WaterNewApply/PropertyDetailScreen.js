//////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 02 november 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - PropertyDetailScreen
//    DESCRIPTION - PropertyDetailScreen compomnent 
//////////////////////////////////////////////////////////////////////////////////////
import React from 'react'
import { AiFillInfoCircle } from 'react-icons/ai'
import { RiArrowDropLeftFill } from 'react-icons/ri'
import Info from '../../Common/Info'
//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from '../../Styles/ThemeStyle'

function PropertyDetailScreen(props) {

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
                        <div className="col-span-12"> <h1 className={`font-bold ${titleColor} text-lg`}>Property Detail</h1></div>
                        <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">
                            <div className="flex items-center mb-4">
                                <label className="ml-2 text-sm font-medium text-gray-900 ">Property ID <span className='text-red-600 text-lg'>*</span></label>
                            </div>
                            <div className="flex items-center -mt-3">
                                <input type='text' className='border bg-gray-50 shadow-md  px-6 ' />
                                <button type="submit" className={`shadow-lg px-6 py-1.5 mt-0.5 ml-1 ${nextButtonColor} text-white font-medium text-xs leading-tight  rounded  ${nextBtnHoverColor} hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Search</button>
                            </div>
                            <div className="flex items-center mb-4">

                            </div>
                            <div className="text-center -mt-3 ">
                                <label className="ml-2 text-sm font-medium text-gray-900 ">To Find/Create Property ID <span className='text-amber-600'>Click Here</span></label>
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

export default PropertyDetailScreen
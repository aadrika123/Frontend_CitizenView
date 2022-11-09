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

//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from '../../Styles/ThemeStyle'


function ScreenPayment(props) {

    //destructuring predefined colors to maintain uniform theme everywhere
    const { bgHeaderColor, titleColor, nextButtonColor, nextBtnHoverColor, backButtonColor, backBtnHoverColor, bgCardColor, bgInfoColor, infoTextColor } = ThemeStyle()

    let btnBorder = "border border-2 border-amber-600"

    console.log('water apply data at payment...',props.screenDataSubmit.data)
    return (
        <>
            <div>
                <div className='text-xs font-semibold px-2 mt-4 flex'>
                    <div className="flex-1"><span onClick={props.backFun} className='border-b border-black'><RiArrowDropLeftFill className="inline text-xl" />Back</span></div>
                    <div className="flex-1 text-right"><span className=''>{props?.formIndex} of 10</span></div>
                </div>
                <div className='p-2 md:p-10 flex justify-center items-center  overflow-hidden'>
                    <div className={`grid grid-cols-12 ${bgCardColor} shadow-lg w-full md:w-1/3 p-4 py-10 md:p-10`}>
                        <div className="col-span-12"> <h1 className={`font-bold ${titleColor} text-lg text-center`}> Application For New Water Connection</h1></div>
                        <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">
                            <div className="mx-auto mb-4">
                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-green-400 mx-auto">
                                    <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                                </svg>
                                </span>
                            </div>
                            <div className="text-center -mt-3 ">
                                <label className="ml-2 text-sm font-medium text-gray-500 ">Thank You For Submitting the application </label>
                                <label className="ml-2 text-sm font-bold text-gray-900 ">{props.screenDataSubmit.data}</label>
                            </div>
                        </div>
                        <div className="col-span-12 grid grid-cols-12 gap-x-6 mt-6">
                            <div className="col-span-6"> <button type="submit" className={`shadow-lg w-full px-6 py-2  text-amber-600 font-semibold text-xs leading-tight  rounded  $} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out ${btnBorder} `}>Print</button></div>
                            <div className="col-span-6"> <button type="submit" className={`shadow-lg w-full px-6 py-2 ${btnBorder} text-amber-600 text-semibold font-semibold text-xs leading-tight  rounded   hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Download</button></div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default ScreenPayment
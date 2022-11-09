//////////////////////////////////////////////////////////////////////////////////////
//    Author - Talib Hussain
//    Version - 1.0
//    Date - 02 november 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - Screen1
//    DESCRIPTION - Scrren 1 is single input component
//////////////////////////////////////////////////////////////////////////////////////

import { AiFillInfoCircle } from 'react-icons/ai'
import { RiArrowDropLeftFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import Info from '../../Common/Info'
//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from '../../Styles/ThemeStyle'

function Screen1
    (props) {
    //destructuring predefined colors to maintain uniform theme everywhere
    const { bgHeaderColor, titleColor, nextButtonColor, nextBtnHoverColor, backButtonColor, backBtnHoverColor, bgCardColor, bgInfoColor, infoTextColor } = ThemeStyle()
    return (
        <>
            <div className='text-xs font-semibold px-2 mt-4 flex'>
                <div className="flex-1"><span onClick={props.backFun} className='border-b border-black'><RiArrowDropLeftFill className="inline text-xl" />Back</span></div>
                <div className="flex-1 text-right"><span className=''>{props?.formIndex} of 10</span></div>
            </div>
            <div className='p-2 md:p-10 flex justify-center items-center  overflow-hidden'>
                <div className={`grid grid-cols-12 ${bgCardColor} shadow-lg w-full  p-4 py-10 md:p-10`}>
                    <div className="col-span-12"> <h1 className={`font-bold ${titleColor} text-2xl`}>Trade License Registration?</h1></div>
                    <div className="col-span-12"> <h1 className={` ${titleColor} text-xs opacity-40`}>It would take 2 minutes to complete this application and the following documents are required in .pdf or jpg format to complete the application.</h1></div>
                    <div className="form-group mb-4 md:mb-6 col-span-12 mt-4 text-gray-600 font-semibold">
                        <div className=" items-center mb-4">
                            <h1 className='font-extrabold'>Owner Proofs</h1>
                            <p className='py-1'>1. Owner ID card</p>
                            <p className='py-1'>2. Ownership documents</p>
                            <p className='py-1'>1. Owner Photo</p>
                            <p className='py-1'>1. Old License</p>
                        </div>

                    </div>

                    <div className="col-span-12 grid grid-cols-12 gap-x-6 mt-6">
                        <div className="col-span-6"> <button  type="button" className={`shadow-lg w-full px-6 py-4 ${backButtonColor} text-white font-medium text-xs leading-tight  rounded  ${backBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}><Link to="/">Back </Link> </button></div>
                        <div className="col-span-6"> <button onClick={() => props.nextFun()} type="button" className={`shadow-lg w-full px-6 py-4 ${nextButtonColor} text-white font-medium text-xs leading-tight  rounded  ${nextBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Next</button></div>
                    </div>
                </div>

            </div>
            <Info infoText="Maximum file size allowed is 5 MB" />
        </>
    )
}

export default Screen1

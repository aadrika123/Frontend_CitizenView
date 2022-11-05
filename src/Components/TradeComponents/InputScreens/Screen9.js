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
import CommonStyles from '../../IndividualRoutes/CommonStyles'
//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from '../../Styles/ThemeStyle'

function Screen9
    (props) {
    //destructuring predefined colors to maintain uniform theme everywhere
    const { bgHeaderColor, titleColor, nextButtonColor, nextBtnHoverColor, backButtonColor, backBtnHoverColor, bgCardColor, bgInfoColor, infoTextColor } = ThemeStyle()

    const { labelStyle, inputStyle } = CommonStyles();
    return (
        <>
            <div className='text-xs font-semibold px-2 mt-4 flex'>
                <div className="flex-1"><span onClick={props.backFun} className='border-b border-black'><RiArrowDropLeftFill className="inline text-xl" />Back</span></div>
                <div className="flex-1 text-right"><span className=''>{props?.formIndex} of 10</span></div>
            </div>
            <div className='p-2 md:p-10 flex justify-center items-center  overflow-hidden'>
                <div className={`grid grid-cols-12 ${bgCardColor} shadow-lg w-full md:w-1/3 p-4 py-10 md:p-10`}>
                    <div className="col-span-12"> <h1 className={`font-bold ${titleColor} text-2xl`}>Property Details</h1></div>
                    <div className="col-span-12"> <h1 className={` ${titleColor} text-xs opacity-40`}>Enter a valid holding no to get property details</h1></div>
                    {/* <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">
                        <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Enter a valid holding no to get property details<span className='text-red-500'>*</span></label>
                    </div> */}
                    <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">
                        <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Holding No.<span className='text-red-500'>*</span></label>
                        <input type="text" name='holdingNo' className={`${inputStyle}`} placeholder='Search Your Holding No.' />

                    </div>
                    {/* //////////// */}

                    <div className={`form-group mb-4 md:mb-6 col-span-12 `}>
                        <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">
                            <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Owner of Business Premises.<span className='text-red-500'>*</span></label>
                            <input type="text" name='holdingNo' className={`${inputStyle}`} placeholder='Enter Holding No.' />

                        </div>

                        <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">
                            <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Business Address.<span className='text-red-500'>*</span></label>
                            <input type="text" name='holdingNo' className={`${inputStyle}`} placeholder='Enter Holding No.' />

                        </div>
                        <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">
                            <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Landmark<span className='text-red-500'>*</span></label>
                            <input type="text" name='holdingNo' className={`${inputStyle}`} placeholder='Enter Landmark.' />

                        </div>
                        
                        <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">
                            <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Pincode<span className='text-red-500'>*</span></label>
                            <input type="text" name='holdingNo' className={`${inputStyle}`} placeholder='Enter Pincode.' />

                        </div>
                    </div>

                    {/* <div className="col-span-12 text-amber-600 font-semibold mt-4"><BiAddToQueue className="inline" /> Add Floor</div> */}
                    <div className="col-span-12 grid grid-cols-12 gap-x-6 mt-6">
                        <div className="col-span-6"> <button onClick={() => props.backFun()} type="submit" className={`shadow-lg w-full px-6 py-4 ${backButtonColor} text-white font-medium text-xs leading-tight  rounded  ${backBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Back</button></div>
                        <div className="col-span-6"> <button onClick={() => props.nextFun()} type="submit" className={`shadow-lg w-full px-6 py-4 ${nextButtonColor} text-white font-medium text-xs leading-tight  rounded  ${nextBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Next</button></div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Screen9

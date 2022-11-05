//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Kumar Singh
//    Version - 1.0
//    Date - 03 november 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - Screen8
//    DESCRIPTION - Scrren7 is single input component
//////////////////////////////////////////////////////////////////////////////////////

import { AiFillInfoCircle } from 'react-icons/ai'
import { RiArrowDropLeftFill } from 'react-icons/ri'
//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from '../../Styles/ThemeStyle';
import Multiselect from 'multiselect-react-dropdown';
import CommonStyles from '../../IndividualRoutes/CommonStyles';

function Screen12(props) {
    //destructuring predefined colors to maintain uniform theme everywhere
    const { bgHeaderColor, titleColor, nextButtonColor, nextBtnHoverColor, backButtonColor, backBtnHoverColor, bgCardColor, bgInfoColor, infoTextColor } = ThemeStyle();
    const { labelStyle, inputStyle, buttonStyle } = CommonStyles();

    return (
        <>
            <div className='text-xs font-semibold px-2 mt-4 flex'>
                <div className="flex-1"><span onClick={props.backFun} className='border-b border-black'><RiArrowDropLeftFill className="inline text-xl" />Back</span></div>
                <div className="flex-1 text-right"><span className=''>{props?.formIndex} of 10</span></div>
            </div>
            <div className='p-2 md:p-10 flex justify-center items-center  overflow-hidden'>
                <div className={`grid grid-cols-12 ${bgCardColor} shadow-lg w-full md:w-1/3 p-4 py-10 md:p-10`}>
                    <div className="col-span-12"> <h1 className={`font-bold ${titleColor} text-2xl`}>Add Business Owners</h1></div>
                    <div className="col-span-12"> <h1 className={` ${titleColor} text-sm mt-2 opacity-40`}>You Can fill out the Details of the Business Owners..</h1></div>
                    <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">

                        <div className="">
                            <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Owner Name<span className='text-red-500'>*</span></label>
                            <input type="text" name='ownerName' className={`${inputStyle}`} />
                        </div>
                        <div className="">
                            <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Guardian Name<span className='text-red-500'>*</span></label>
                            <input type="text" name='guardianName' className={`${inputStyle}`} />
                        </div>
                        <div className="">
                            <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Mobile No.<span className='text-red-500'>*</span></label>
                            <input type="text" name='mobile' className={`${inputStyle}`} />
                        </div>
                        <div className="">
                            <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Email Id.<span className='text-red-500'>*</span></label>
                            <input type="text" name='email' className={`${inputStyle}`} />
                        </div>

                        <div className="">
                            <button className={`${buttonStyle}`}>Confirm this owner</button>
                        </div>

                    </div>

                    <div className="col-span-12 grid grid-cols-12 gap-x-6 mt-6">
                        <div className="col-span-6"> <button onClick={() => props.backFun()} type="submit" className={`shadow-lg w-full px-6 py-4 ${backButtonColor} text-white font-medium text-xs leading-tight  rounded  ${backBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Back</button></div>
                        <div className="col-span-6"> <button onClick={() => props.nextFun()} type="submit" className={`shadow-lg w-full px-6 py-4 ${nextButtonColor} text-white font-medium text-xs leading-tight  rounded  ${nextBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Next</button></div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Screen12

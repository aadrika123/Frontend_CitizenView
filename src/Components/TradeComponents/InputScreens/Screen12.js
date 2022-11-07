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
            <div className=' bg-white'>
                <div className='text-xs font-semibold px-2 mt-4 flex'>
                    <div className="flex-1"><span onClick={props.backFun} className='border-b border-black'><RiArrowDropLeftFill className="inline text-xl" />Back</span></div>
                    <div className="flex-1 text-right"><span className=''>{props?.formIndex} of 10</span></div>
                </div>
                <div className='p-2 md:p-10 flex justify-center items-center  overflow-hidden'>
                    <div className={`grid grid-cols-12 ${bgCardColor} shadow-sm w-full md:w-1/3 p-4 py-4 md:p-4`}>
                        <div className="col-span-12"> <h1 className={`font-bold ${titleColor} text-2xl`}>Add Business Owners</h1></div>
                        <div className="col-span-12"> <h1 className={` ${titleColor} text-sm opacity-40`}>You Can fill out the Details of the Business Owners..</h1></div>
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
                                <button className={`${buttonStyle}`} type="submit">Confirm this owner</button>
                            </div>

                        </div>

                        <div className="col-span-12 grid grid-cols-12 gap-x-6 mt-6">
                            <div className="col-span-6"> <button onClick={() => props.backFun()} type="button" className={`shadow-lg w-full px-6 py-4 ${backButtonColor} text-white font-medium text-xs leading-tight  rounded  ${backBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Back</button></div>
                            <div className="col-span-6"> <button onClick={() => props.nextFun()} type="button" className={`shadow-lg w-full px-6 py-4 ${nextButtonColor} text-white font-medium text-xs leading-tight  rounded  ${nextBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Next</button></div>
                        </div>
                    </div>
                </div>

                <div className={`grid grid-cols-12 ${bgCardColor} shadow-lg w-full md:w-1/3 p-4 mx-auto font-mono`}>
                    <div className='form-group mb-4 md:mb-6 col-span-12'>
                        <table className='table-auto w-full text-xs text-center'>
                            <thead>
                                <tr className='border-b-2 shadow-sm bg-stone-200 hover:bg-stone-300 h-8'>
                                    <th> Owner Name</th>
                                    <th> Guardian Name</th>
                                    <th> Mobile</th>
                                    <th> Email</th>
                                    <th> Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='border-b-2 shadow-sm hover:bg-sky-50'>
                                    <td> Mohan Kumar Sharma</td>
                                    <td> Surendra Nath Sharma</td>
                                    <td> 8978978789  </td>
                                    <td> demo@golgappa.com</td>
                                    <td>
                                        <button className='hover:bg-red-500 rounded-full hover:text-white'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-red-500 hover:text-white">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Screen12

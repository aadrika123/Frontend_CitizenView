//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Kumar Singh
//    Version - 1.0
//    Date - 03 november 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - Screen16
//    DESCRIPTION - Scrren7 is single input component
//////////////////////////////////////////////////////////////////////////////////////

import { AiFillInfoCircle } from 'react-icons/ai'
import { RiArrowDropLeftFill } from 'react-icons/ri'
import { BiEdit } from 'react-icons/bi'
//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from '../../Styles/ThemeStyle'

function Screen16(props) {
    //destructuring predefined colors to maintain uniform theme everywhere
    const { bgHeaderColor, titleColor, nextButtonColor, nextBtnHoverColor, backButtonColor, backBtnHoverColor, bgCardColor, bgInfoColor, infoTextColor } = ThemeStyle()
    return (
        <>
            <div className='text-xs font-semibold px-2 mt-4 flex'>
                <div className="flex-1"><span onClick={props.backFun} className='border-b border-black'><RiArrowDropLeftFill className="inline text-xl" />Back</span></div>
                <div className="flex-1 text-right"><span className=''>{props?.formIndex} of 10</span></div>
            </div>
            <div className='p-2 md:p-10 flex justify-center items-center  overflow-hidden'>
                <div className={`grid grid-cols-12 ${bgCardColor} shadow-lg w-full md:w-1/3 p-4 py-10 md:p-10`}>
                    <div className="col-span-12"> <h1 className={`font-bold ${titleColor} text-2xl`}>Review Your Answers</h1></div>
                    <div className="col-span-12"> <h1 className={` ${titleColor} text-sm mt-2 opacity-40`}>If you want to modify any value, click on change in the respected step. It will redirect you to the concerned step where you can make your changes.</h1></div>
                    <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">
                        <div className='grid grid-cols-12'>
                            <div className='col-span-5'>
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Property Address</label>
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Proof of Address</label>
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Type of Ownership</label>
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Name</label>
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Gender</label>
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Mobile Number</label>
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Gurdian</label>
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Relationship</label>
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Special Owner category</label>
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Owner's Address</label>
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Same As Property</label>
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Proof of Identity</label>
                                <label className="form-label inline-block mb-1 text-gray-700 text-lg font-semibold">Property Details</label>
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Residental Property<span className='text-red-500'>*</span></label>
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Type of Property</label>
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">No of Floors</label>
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">No of Basements</label>
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Plot Size(sq)</label>
                                <label className="form-label inline-block mb-1 text-gray-700 text-lg font-semibold">Ground Floor Details</label>
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Plot Size(sq)</label>

                            </div>
                            <div className='col-span-6'>
                                Lorem ipsum dolor sit.
                                Lorem ipsum dolor sit 2.
                                Lorem ipsum dolor sit 2.
                                Lorem ipsum dolor sit 2.
                                Lorem ipsum dolor sit 2.
                                Lorem ipsum dolor sit 2.
                            </div>
                            <div className='col-span-1'>
                                <BiEdit size={20} fill="green" className='cursor-pointer mt-1' />
                                <BiEdit size={20} fill="green" className='cursor-pointer mt-1' />
                                <BiEdit size={20} fill="green" className='cursor-pointer mt-1' />
                                <BiEdit size={20} fill="green" className='cursor-pointer mt-1' />
                                <BiEdit size={20} fill="green" className='cursor-pointer mt-1' />
                                <BiEdit size={20} fill="green" className='cursor-pointer mt-1' />
                                <BiEdit size={20} fill="green" className='cursor-pointer mt-1' />
                                <BiEdit size={20} fill="green" className='cursor-pointer mt-1' />
                                <BiEdit size={20} fill="green" className='cursor-pointer mt-1' />
                                <BiEdit size={20} fill="green" className='cursor-pointer mt-1' />
                                <BiEdit size={20} fill="green" className='cursor-pointer mt-1' />
                                <BiEdit size={20} fill="green" className='cursor-pointer mt-1' />
                                <BiEdit size={20} fill="green" className='cursor-pointer mt-1' />
                                <BiEdit size={20} fill="green" className='cursor-pointer mt-1' />
                                <BiEdit size={20} fill="green" className='cursor-pointer mt-1' />
                                <BiEdit size={20} fill="green" className='cursor-pointer mt-1' />
                                <BiEdit size={20} fill="green" className='cursor-pointer mt-1' />
                                <BiEdit size={20} fill="green" className='cursor-pointer mt-1' />
                                <BiEdit size={20} fill="green" className='cursor-pointer mt-1' />
                            </div>
                        </div>

                        <div>
                            <input type="checkbox" name="" id="" className='w-5 h-5 m-1' />
                            <span>I have declare and affirm that the above furnished information is true and correct and nothing has been correct.. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quam!</span>
                        </div>
                    </div>

                    <div className="col-span-12 grid grid-cols-12 gap-x-6 mt-6">
                        <div className="col-span-6"> <button onClick={() => props.backFun()} type="submit" className={`shadow-lg w-full px-6 py-4 ${backButtonColor} text-white font-medium text-xs leading-tight  rounded  ${backBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Back</button></div>
                        <div className="col-span-6"> <button onClick={() => props.nextFun()} type="submit" className={`shadow-lg w-full px-6 py-4 ${nextButtonColor} text-white font-medium text-xs leading-tight  rounded  ${nextBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Submit</button></div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Screen16

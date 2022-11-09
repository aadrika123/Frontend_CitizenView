//////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 04 november 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - ScreenFormReview
//    DESCRIPTION - ScreenFormReview
//////////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import { AiFillInfoCircle } from 'react-icons/ai'
import { RiArrowDropLeftFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'


//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from '../../Styles/ThemeStyle'

function ScreenFormReview(props) {

    //destructuring predefined colors to maintain uniform theme everywhere
    const { bgHeaderColor, titleColor, nextButtonColor, nextBtnHoverColor, backButtonColor, backBtnHoverColor, bgCardColor, bgInfoColor, infoTextColor } = ThemeStyle()

    const { connectionType, connectionThrough, PropType, accountNo, address, applicantList, bindBookNo, khataNo, landmark, noFlat, ownerType, pin, totalArea, wardNo,categoryScreen } = props?.allFormData;


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
                            <h1 className={`font-bold ${titleColor} text-center ml-16`}>REVIEW APPLICATION</h1>

                        </div>


                        {/* {****** Review Form  *********} */}
                        <div className="form-group mb-4 md:mb-6 col-span-12 mt-1">

                            <div className='grid grid-cols-2 '>
                                <div className="">
                                    <label className={`text-xs ml-2 font-medium text-gray-500`}>Type of connection</label>
                                </div>
                                <div className=''>
                                    <label className={`text-xs ml-2 font-medium text-gray-800`}>{connectionType?.typeOfConnection == 1 && "New Connection" || connectionType?.typeOfConnection == 2 && "Regularization"}</label>
                                </div>
                            </div>


                            <div className='grid grid-cols-2 '>
                                <div className="">
                                    <label className={`text-xs ml-2 font-medium text-gray-500`}>Connection Through</label>
                                </div>
                                <div className=''>
                                    <label className={`text-xs ml-2 font-medium text-gray-800`}>{connectionThrough?.connectionThrough == 1 && "Holding No." || connectionThrough?.connectionThrough == 2 && "SAF" || connectionThrough?.connectionThrough == 3 && "ID Proof"} </label>
                                </div>
                            </div>


                            <div className='grid grid-cols-2 '>
                                <div className="">
                                    <label className={`text-xs ml-2 font-medium text-gray-500`}>Property Type</label>
                                </div>
                                <div className=''>
                                    <label className={`text-xs ml-2 font-medium text-gray-800`} >{PropType?.typeOfProperty == 1 && "Residential" || PropType?.typeOfProperty == 2 && "Commercial" || PropType?.typeOfProperty == 3 && "Government & PSU" || PropType?.typeOfProperty == 4 && "Institutional" || PropType?.typeOfProperty == 5 && "SSI Unit" || PropType?.typeOfProperty == 6 && "Industrial" || PropType?.typeOfProperty == 7 && "Appartment/Multi Stored unit"}</label>
                                </div>
                            </div>


                            <div className='grid grid-cols-2 '>
                                <div className="">
                                    <label className={`text-xs ml-2 font-medium text-gray-500`}>Owner Type
                                    </label>
                                </div>
                                <div className=''>
                                    <label className={`text-xs ml-2 font-medium text-gray-800`}>{ownerType?.typeOfOwner == 1 && "Owner" || ownerType?.typeOfOwner == 2 && "Tenant"}</label>
                                </div>
                            </div>


                            <div className='grid grid-cols-2 '>
                                <div className="">
                                    <label className={`text-xs ml-2 font-medium text-gray-500`}>Ward No.</label>
                                </div>
                                <div className=''>
                                    <label className={`text-xs ml-2 font-medium text-gray-800`}>{wardNo?.wardNo}</label>
                                </div>
                            </div>


                            <div className='grid grid-cols-2 '>
                                <div className="">
                                    <label className={`text-xs ml-2 font-medium text-gray-500`}>Total Area (in sq)</label>
                                </div>
                                <div className=''>
                                    <label className={`text-xs ml-2 font-medium text-gray-800`}>{totalArea?.totalArea}</label>
                                </div>
                            </div>


                            <div className='grid grid-cols-2 '>
                                <div className="">
                                    <label className={`text-xs ml-2 font-medium text-gray-500`}>Landmark</label>
                                </div>
                                <div className=''>
                                    <label className={`text-xs ml-2 font-medium text-gray-800`}>{landmark?.landmark}</label>
                                </div>
                            </div>


                            <div className='grid grid-cols-2 '>
                                <div className="">
                                    <label className={`text-xs ml-2 font-medium text-gray-500`}>Pin</label>
                                </div>
                                <div className=''>
                                    <label className={`text-xs ml-2 font-medium text-gray-800`}>{pin?.pinCode}</label>
                                </div>
                            </div>


                            <div className='grid grid-cols-2 '>
                                <div className="">
                                    <label className={`text-xs ml-2 font-medium text-gray-500`}>Address</label>
                                </div>
                                <div className=''>
                                    <label className={`text-xs ml-2 font-medium text-gray-800`}>{address?.address}</label>
                                </div>
                            </div>


                            <div className='grid grid-cols-2 '>
                                <div className="">
                                    <label className={`text-xs ml-2 font-medium text-gray-500`}>No. Of Flat</label>
                                </div>
                                <div className=''>
                                    <label className={`text-xs ml-2 font-medium text-gray-800`} >{noFlat?.noFlat}</label>
                                </div>
                            </div>


                            <div className='p-2'>
                                <div className='grid grid-cols-2  '>
                                    <div className="">
                                        <label className={`text-md ml-2 font-medium text-gray-800 `}>Applicant Detail</label>
                                    </div>
                                </div>
                                {
                                    applicantList?.map((items) => (

                                        <div className=' border border-gray-400 '>
                                            <div className=''>
                                                <div className='flex '>
                                                    <div className='flex-1'>
                                                        <label className={`text-xs ml-2 font-medium text-gray-500`} >Owner Name</label>
                                                    </div>
                                                    <div className='flex-1'>
                                                        <label className={`text-xs ml-2 font-medium text-gray-500`} >{items.ownerName}</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className=''>
                                                <div className='flex '>
                                                    <div className='flex-1'>
                                                        <label className={`text-xs ml-2 font-medium text-gray-500`} >Guardian Name</label>
                                                    </div>
                                                    <div className='flex-1'>
                                                        <label className={`text-xs ml-2 font-medium text-gray-500`} >{items.guardianName}</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className=''>
                                                <div className='flex '>
                                                    <div className='flex-1'>
                                                        <label className={`text-xs ml-2 font-medium text-gray-500`} >Mobile No.</label>

                                                    </div>
                                                    <div className='flex-1'>
                                                        <label className={`text-xs ml-2 font-medium text-gray-500`} >{items.mobileNo}</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className=''>
                                                <div className='flex '>
                                                    <div className='flex-1'>
                                                        <label className={`text-xs ml-2 font-medium text-gray-500`} >Email ID </label>
                                                    </div>
                                                    <div className='flex-1'>
                                                        <label className={`text-xs ml-2 font-medium text-gray-500`} >{items.emailId}</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>



                            <div className='grid grid-cols-2 '>
                                <div className="">
                                    <label className={`text-xs ml-2 font-medium text-gray-500`}>Khata No.</label>
                                </div>
                                <div className=''>
                                    <label className={`text-xs ml-2 font-medium text-gray-800`} >{khataNo?.khataNo}</label>
                                </div>
                            </div>


                            <div className='grid grid-cols-2 '>
                                <div className="">
                                    <label className={`text-xs ml-2 font-medium text-gray-500`}>Bind Book No.</label>
                                </div>
                                <div className=''>
                                    <label className={`text-xs ml-2 font-medium text-gray-800`} >{bindBookNo?.bindBookNo}</label>
                                </div>
                            </div>


                            <div className='grid grid-cols-2 '>
                                <div className="">
                                    <label className={`text-xs ml-2 font-medium text-gray-500`}>Account No.</label>
                                </div>
                                <div className=''>
                                    <label className={`text-xs ml-2 font-medium text-gray-800`} >{accountNo?.accountNo}</label>
                                </div>
                            </div>

                            {/* {accountNo?.accountNo == null ? "" : */}
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`text-xs ml-2 font-medium text-gray-500`}>Category Type</label>
                                    </div>
                                    <div className=''>
                                        <label className={`text-xs ml-2 font-medium text-gray-800`}>{categoryScreen?.categoryTypeData}</label>
                                    </div>
                                </div>
                            {/* } */}
                        </div>

                        <div className="col-span-12 grid grid-cols-12 gap-x-6 mt-6">
                            <div className="col-span-6"> <button onClick={() => props.backFun()} type="button" className={`shadow-lg w-full px-6 py-4 ${backButtonColor} text-white font-medium text-xs leading-tight  rounded  ${backBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Back</button></div>

                            <div className="col-span-6">  <button onClick={() => props.submitFun()} type="submit" className=" px-6 py-1 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">Submit</button></div>
                        </div>

                        {/* <Link to='/water-submitNewApply'> */}
                        {/* <div className='md:px-10 ml-20'>
                            <div className="col-span-6"> <button onClick={() => props.backFun()} type="submit" className={`shadow-lg w-full px-6 py-4 ${backButtonColor} text-white font-medium text-xs leading-tight  rounded  ${backBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Back</button></div>

                            <button onClick={() => props.submitFun()} type="button" className=" px-6 py-1 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">Submit</button>
                        </div> */}
                        {/* </Link> */}
                    </div>
                </div>
            </div>


        </>
    )
}

export default ScreenFormReview
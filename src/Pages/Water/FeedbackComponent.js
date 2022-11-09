import React from 'react'
import ThemeStyle from '../../Components/Styles/ThemeStyle'

function FeedbackComponent(props) {

    //destructuring predefined colors to maintain uniform theme everywhere
    const { bgHeaderColor, titleColor, nextButtonColor, bgCardColor, bgInfoColor, infoTextColor, backButtonColor, backBtnHoverColor, nextBtnHoverColor } = ThemeStyle()

    // destructuring prop data
    const { connectionType, connectionThrough, PropType, accountNo, address, applicantList, bindBookNo, khataNo, landmark, noFlat, ownerType, pin, totalArea, wardNo } = props?.allFormData;


    console.log("applicant List ", applicantList)
    console.log("all form data props ", connectionThrough?.connectionThrough)
    return (
        <div>

            <div className='p-2 md:p-10 flex justify-center items-center  overflow-hidden'>
                <div className={`grid grid-cols-12 ${bgCardColor} shadow-lg w-full md:w-1/3 p-4 py-10 md:p-10`}>
                    {/* {****** FeedBack Form  *********} */}
                    <div className='col-span-12 bg-gray-50 p-2 shadow-md mt-2 mb-1'>
                        <div className="col-span-12 flex flex-row w-full  text-md  ">
                            <h1 className={`font-bold ${titleColor} ml-28 text-xl`}>FeedBack</h1>
                        </div>
                        <div className="form-group mb-4 md:mb-6 col-span-12 mt-1">
                            {connectionType?.typeOfConnection == null ? "" :
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`text-xs ml-2 font-medium text-gray-500`}>Type of connection</label>
                                    </div>
                                    <div className=''>
                                        <label className={`text-xs ml-2 font-medium text-gray-800`}>{connectionType?.typeOfConnection == 1 && "New Connection" || connectionType?.typeOfConnection == 2 && "Regularization"}</label>
                                    </div>
                                </div>
                            }
                            {connectionThrough?.connectionThrough == null ? "" :
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`text-xs ml-2 font-medium text-gray-500`}>Connection Through</label>
                                    </div>
                                    <div className=''>
                                        <label className={`text-xs ml-2 font-medium text-gray-800`}>{connectionThrough?.connectionThrough == 1 && "Holding No." || connectionThrough?.connectionThrough == 2 && "SAF" || connectionThrough?.connectionThrough == 3 && "ID Proof"} </label>
                                    </div>
                                </div>
                            }
                            {PropType?.typeOfProperty == null ? "" :
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`text-xs ml-2 font-medium text-gray-500`}>Property Type</label>
                                    </div>
                                    <div className=''>
                                        <label className={`text-xs ml-2 font-medium text-gray-800`} >{PropType?.typeOfProperty == 1 && "Residential" || PropType?.typeOfProperty == 2 && "Commercial" || PropType?.typeOfProperty == 3 && "Government & PSU" || PropType?.typeOfProperty == 4 && "Institutional" || PropType?.typeOfProperty == 5 && "SSI Unit" || PropType?.typeOfProperty == 6 && "Industrial" || PropType?.typeOfProperty == 7 && "Appartment/Multi Stored unit"}</label>
                                    </div>
                                </div>
                            }
                            {ownerType?.typeOfOwner == null ? "" :
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`text-xs ml-2 font-medium text-gray-500`}>Owner Type
                                        </label>
                                    </div>
                                    <div className=''>
                                        <label className={`text-xs ml-2 font-medium text-gray-800`}>{ownerType?.typeOfOwner == 1 && "Owner" || ownerType?.typeOfOwner == 2 && "Tenant"}</label>
                                    </div>
                                </div>
                            }
                            {wardNo?.wardNo == null ? "" :
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`text-xs ml-2 font-medium text-gray-500`}>Ward No.</label>
                                    </div>
                                    <div className=''>
                                        <label className={`text-xs ml-2 font-medium text-gray-800`}>{wardNo?.wardNo}</label>
                                    </div>
                                </div>
                            }
                            {totalArea?.totalArea == null ? "" :
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`text-xs ml-2 font-medium text-gray-500`}>Total Area (in sq)</label>
                                    </div>
                                    <div className=''>
                                        <label className={`text-xs ml-2 font-medium text-gray-800`}>{totalArea?.totalArea}</label>
                                    </div>
                                </div>
                            }
                            {landmark?.landmark == null ? "" :
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`text-xs ml-2 font-medium text-gray-500`}>Landmark</label>
                                    </div>
                                    <div className=''>
                                        <label className={`text-xs ml-2 font-medium text-gray-800`}>{landmark?.landmark}</label>
                                    </div>
                                </div>
                            }
                            {pin?.pinCode == null ? "" :
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`text-xs ml-2 font-medium text-gray-500`}>Pin</label>
                                    </div>
                                    <div className=''>
                                        <label className={`text-xs ml-2 font-medium text-gray-800`}>{pin?.pinCode}</label>
                                    </div>
                                </div>
                            }
                            {address?.address == null ? "" :
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`text-xs ml-2 font-medium text-gray-500`}>Address</label>
                                    </div>
                                    <div className=''>
                                        <label className={`text-xs ml-2 font-medium text-gray-800`}>{address?.address}</label>
                                    </div>
                                </div>
                            }
                            {noFlat?.noFlat == null ? "" :
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`text-xs ml-2 font-medium text-gray-500`}>No. Of Flat</label>
                                    </div>
                                    <div className=''>
                                        <label className={`text-xs ml-2 font-medium text-gray-800`} >{noFlat?.noFlat}</label>
                                    </div>
                                </div>
                            }
                            {applicantList == null ? "" :
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
                            }

                            {khataNo?.khataNot == null ? "" :
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`text-xs ml-2 font-medium text-gray-500`}>Khata No.</label>
                                    </div>
                                    <div className=''>
                                        <label className={`text-xs ml-2 font-medium text-gray-800`} >{khataNo?.khataNo}</label>
                                    </div>
                                </div>
                            }
                            {bindBookNo?.bindBookNo == null ? "" :
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`text-xs ml-2 font-medium text-gray-500`}>Bind Book No.</label>
                                    </div>
                                    <div className=''>
                                        <label className={`text-xs ml-2 font-medium text-gray-800`} >{bindBookNo?.bindBookNo}</label>
                                    </div>
                                </div>
                            }
                            {accountNo?.accountNo == null ? "" :
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`text-xs ml-2 font-medium text-gray-500`}>Account No.</label>
                                    </div>
                                    <div className=''>
                                        <label className={`text-xs ml-2 font-medium text-gray-800`} >{accountNo?.accountNo}</label>
                                    </div>
                                </div>
                            }
                            {/* {accountNo?.accountNo == null ? "" :
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`text-xs ml-2 font-medium text-gray-500`}>Category Type</label>
                                    </div>
                                    <div className=''>
                                        <label className={`text-xs ml-2 font-medium text-gray-800`}></label>
                                    </div>
                                </div>
                            } */}
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default FeedbackComponent
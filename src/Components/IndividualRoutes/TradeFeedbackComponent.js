import React from 'react'
import ThemeStyle from '../../Components/Styles/ThemeStyle'

function TradeFeedbackComponent(props) {

    //destructuring predefined colors to maintain uniform theme everywhere
    const { bgHeaderColor, titleColor, nextButtonColor, bgCardColor, bgInfoColor, infoTextColor, backButtonColor, backBtnHoverColor, nextBtnHoverColor } = ThemeStyle()

    // destructuring prop data
    // console.log("all form prop data ", props.fieldData.applyWith);
    const { applyWith, noticeNo, noticeDate, firmName, areaInSqft, businessDescription, categoryType, firmType, onwershipType, natureOfBusiness, ownerDetails, propertyDetails, ward, licenseFor } = props?.fieldData

    console.log("applyWith", applyWith)
    return (
        <div>

            <div className='p-2 items-center  overflow-hidden mx-auto bg-white  font-mono text-xs'>
                <h1 className='font-bold text-lg text-slate-500 my-2 bg-stone-100 py-1.5 uppercase font-mono text-center'>Your Selected Options</h1>
                {/* Apply With Section */}
                {applyWith.applyWith != '' &&
                    <div className=' flex justify-between  my-2 px-4 border-b'>
                        <div className=''> <p>Apply With : </p> </div>
                        <div> <p className=''>{applyWith?.applyWith == 2 ? " New Application" : "Notice No"}</p></div>
                    </div>
                }
                {applyWith.noticeNo != '' && applyWith.applyWith == 1 &&
                    <div className=' flex justify-between  my-2 px-4 border-b'>
                        <div className=''> <p>Notice No :</p> </div>
                        <div> <p className=''>{applyWith.noticeNo}</p></div>
                    </div>
                }
                {applyWith.noticeDate != '' && applyWith.applyWith == 1 &&
                    <div className=' flex justify-between  my-2 px-4 border-b'>
                        <div className=''> <p>Notice Date :</p> </div>
                        <div> <p className=''>{applyWith.noticeDate}</p></div>
                    </div>
                }

                {/* Firm name Section */}
                {firmName?.firmName != '' &&
                    <div className=' flex justify-between  my-2 px-4 border-b'>
                        <div className=''> <p>Firm Name :</p> </div>
                        <div> <p className=''>{firmName.firmName}</p></div>
                    </div>
                }

                {/* Area In SQFT. Section */}
                {areaInSqft?.areaInSqft != '' &&
                    <div className=' flex justify-between  my-2 px-4 border-b'>
                        <div className=''> <p>Plot Area (in Sqft.) :</p> </div>
                        <div> <p className=''>{areaInSqft.areaInSqft}</p></div>
                    </div>
                }

                {/* OwnerShip Type Section */}
                {onwershipType?.onwershipType != '' &&
                    <div className=' flex justify-between  my-2 px-4 border-b'>
                        <div className=''> <p>onwershipType :</p> </div>
                        <div> <p className=''>{onwershipType.onwershipType}</p></div>
                    </div>
                }

                {/* categoryType  Section */}
                {categoryType?.categoryType != '' &&
                    <div className=' flex justify-between  my-2 px-4 border-b'>
                        <div className=''> <p>categoryType  :</p> </div>
                        <div> <p className=''>{categoryType.categoryType}</p></div>
                    </div>
                }
                {/* ward Type Section */}
                {ward?.wardNo != '' &&
                    <div className=' flex justify-between  my-2 px-4 border-b'>
                        <div className=''> <p>Plot Area (in Sqft.) :</p> </div>
                        <div> <p className=''>{ward.wardNo}</p></div>
                    </div>
                }
                {ward?.newwardNo != '' &&
                    <div className=' flex justify-between  my-2 px-4 border-b'>
                        <div className=''> <p>newwardNo :</p> </div>
                        <div> <p className=''>{ward.newWardNo}</p></div>
                    </div>
                }


                {/* propertyDetails Section */}
                {propertyDetails?.holdingNo != '' &&
                    <div className=' flex justify-between  my-2 px-4 border-b'>
                        <div className=''> <p>holdingNo :</p> </div>
                        <div> <p className=''>{propertyDetails.holdingNo}</p></div>
                    </div>
                }
                {propertyDetails?.premisesOwner != '' &&
                    <div className=' flex justify-between  my-2 px-4 border-b'>
                        <div className=''> <p>premisesOwner :</p> </div>
                        <div> <p className=''>{propertyDetails.premisesOwner}</p></div>
                    </div>
                }
                {propertyDetails?.businessAddress != '' &&
                    <div className=' flex justify-between  my-2 px-4 border-b'>
                        <div className=''> <p>businessAddress :</p> </div>
                        <div> <p className=''>{propertyDetails.businessAddress}</p></div>
                    </div>
                }
                {propertyDetails?.landmark != '' &&
                    <div className=' flex justify-between  my-2 px-4 border-b'>
                        <div className=''> <p>landmark :</p> </div>
                        <div> <p className=''>{propertyDetails.landmark}</p></div>
                    </div>
                }
                {propertyDetails?.pincode != '' &&
                    <div className=' flex justify-between  my-2 px-4 border-b'>
                        <div className=''> <p>pincode :</p> </div>
                        <div> <p className=''>{propertyDetails.pincode}</p></div>
                    </div>
                }

                {/* businessDescription Section */}
                {businessDescription?.businessDescription != '' &&
                    <div className=' flex justify-between  my-2 px-4 border-b'>
                        <div className=''> <p>businessDescription :</p> </div>
                        <div> <p className=''>{businessDescription.businessDescription}</p></div>
                    </div>
                }

                {/* businessDescription Section */}
                {ownerDetails?.ownerName != '' &&
                    <div className=' flex justify-between  my-2 px-4 border-b'>
                        <div className=''> <p>ownerName :</p> </div>
                        <div> <p className=''>{ownerDetails.ownerName}</p></div>
                    </div>
                }
                {ownerDetails?.guardianName != '' &&
                    <div className=' flex justify-between  my-2 px-4 border-b'>
                        <div className=''> <p>guardianName :</p> </div>
                        <div> <p className=''>{ownerDetails.guardianName}</p></div>
                    </div>
                }
                {ownerDetails?.mobile != '' &&
                    <div className=' flex justify-between  my-2 px-4 border-b'>
                        <div className=''> <p>mobile :</p> </div>
                        <div> <p className=''>{ownerDetails.mobile}</p></div>
                    </div>
                }
                {ownerDetails?.email != '' &&
                    <div className=' flex justify-between  my-2 px-4 border-b'>
                        <div className=''> <p>email :</p> </div>
                        <div> <p className=''>{ownerDetails.email}</p></div>
                    </div>
                }

                {/* licenseFor Section */}
                {licenseFor?.licenseForYears != '' &&
                    <div className=' flex justify-between  my-2 px-4 border-b'>
                        <div className=''> <p>licenseForYears :</p> </div>
                        <div> <p className=''>{licenseFor.licenseForYears}</p></div>
                    </div>
                }
            </div>
        </div>
    )
}

export default TradeFeedbackComponent
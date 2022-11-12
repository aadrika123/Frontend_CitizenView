import React from 'react'

function FeedbackScreen(props) {

    const data = props?.payloadData;

    console.log("Data in FeedbackForm", data)

    return (
        <>
            {
                data && <div className='bg-green-50 m-2 p-2 mb-10 shadow-md rounded-md'>
                    <div className="w-full md:w-1/3">
                        <h1 className="text-center font-bold text-xl">Form Details</h1>
                        <p className='border-t py-1 mx-5 border-gray-500'></p>
                        <div className='text-gray-800 text-base leading-6 '>
                            <div className='grid grid-cols-12'>
                                <div className='col-span-7'>
                                    <p>Assesment Type </p>
                                    {data?.ward && <p>Ward No</p>}
                                    {data?.newWard && <p>New Ward No</p>}
                                    {data?.ownershipType && <p>Ownership Type</p>}
                                    {data?.propertyType && <p>PropertyType Type</p>}
                                    {data?.zone && <p>Zone Type</p>}
                                    {data?.isMobileTower && <p>Mobile Tower</p>}
                                    {data?.towerArea && <p>Mobile Tower Area</p>}
                                    {data?.towerInstallationDate && <p>Tower Install Date</p>}
                                    {data?.isHoardingBoard && <p>Property has Hoarding</p>}
                                    {data?.hoardingArea && <p>Property Hoarding Area</p>}
                                    {data?.hoardingInstallationDate && <p>Hoarding Install Date</p>}
                                    {data?.isPetrolPump && <p>Has Petrol Pump</p>}
                                    {data?.undergroundArea && <p>Petrol Pump Area</p>}
                                    {data?.petrolPumpCompletionDate && <p>Petrol Pump Install</p>}
                                    {data?.isWaterHarvesting && <p>Has Rain Water</p>}
                                </div>
                                <div className='col-span-4 font-semibold'>
                                    <p>New Assesment</p>
                                    {data?.ward && <p> {data?.ward}</p>}
                                    {data?.newWard && <p> {data?.newWard}</p>}
                                    {data?.ownershipType && <p> {data?.ownershipType}</p>}
                                    {data?.propertyType && <p> {data?.propertyType}</p>}
                                    {data?.zone && <p> {data?.zone}</p>}
                                    {data?.isMobileTower && <p> {data?.isMobileTower}</p>}
                                    {data?.towerArea && <p> {data?.towerArea}</p>}
                                    {data?.towerInstallationDate && <p> {data?.towerInstallationDate}</p>}
                                    {data?.isHoardingBoard && <p> {data?.isHoardingBoard}</p>}
                                    {data?.hoardingArea && <p> {data?.hoardingArea}</p>}
                                    {data?.hoardingInstallationDate && <p> {data?.hoardingInstallationDate}</p>}
                                    {data?.isPetrolPump && <p> {data?.isPetrolPump}</p>}
                                    {data?.undergroundArea && <p> {data?.undergroundArea}</p>}
                                    {data?.petrolPumpCompletionDate && <p> {data?.petrolPumpCompletionDate}</p>}
                                    {data?.isWaterHarvesting && <p> {data?.isWaterHarvesting}</p>}
                                    {/* <p className='border-b border-gray-900'><span className=''>0</span></p> */}
                                </div>
                            </div>
                            {data?.khataNo && <p className='border-b text-center py-1 mb-2 mx-5 border-gray-500 font-semibold'><span className=''> Property Details</span></p>}
                            <div className='grid grid-cols-12'>
                                <div className='col-span-7'>
                                    {data?.khataNo && <p>Khata No</p>}
                                    {data?.plotNo && <p>Plot No</p>}
                                    {data?.villageMaujaName && <p>Village MaujaName</p>}
                                    {data?.areaOfPlot && <p>Area of Plot</p>}
                                    {data?.roadType && <p>Road Width</p>}
                                    <div className='shadow-md bg-yellow-50'>
                                        {data?.propCity && <p>City</p>}
                                        {data?.propDistrict && <p>District</p>}
                                        {data?.propState && <p>District</p>}
                                        {data?.propPinCode && <p>Pincode</p>}
                                        {data?.propAddress && <p>Locality</p>}
                                    </div>
                                    <div className='shadow-md bg-pink-50'>
                                        {data?.corrCity && <p>Cors City</p>}
                                        {data?.corrDist && <p>Cors District</p>}
                                        {data?.corrState && <p>Cors District</p>}
                                        {data?.corrPinCode && <p>Cors Pincode</p>}
                                        {data?.corrAddress && <p>Cors Locality</p>}
                                    </div>
                                </div>
                                <div className='col-span-4 font-semibold'>
                                    {data?.khataNo && <p> {data?.khataNo}</p>}
                                    {data?.plotNo && <p> {data?.plotNo}</p>}
                                    {data?.villageMaujaName && <p> {data?.villageMaujaName}</p>}
                                    {data?.areaOfPlot && <p> {data?.areaOfPlot}</p>}
                                    {data?.roadType && <p> {data?.roadType}</p>}
                                    <div className='shadow-md bg-yellow-50'>
                                        {data?.propCity && <p> {data?.propCity}</p>}
                                        {data?.propDistrict && <p> {data?.propDistrict}</p>}
                                        {data?.propState && <p> {data?.propState}</p>}
                                        {data?.propPinCode && <p> {data?.propPinCode}</p>}
                                        {data?.propAddress && <p> {data?.propAddress}</p>}
                                    </div>
                                    <div className='shadow-md bg-pink-50'>
                                        {data?.corrCity && <p> {data?.corrCity}</p>}
                                        {data?.corrDist && <p> {data?.corrDist}</p>}
                                        {data?.corrState && <p> {data?.corrState}</p>}
                                        {data?.corrPinCode && <p> {data?.corrPinCode}</p>}
                                        {data?.corrAddress && <p> {data?.corrAddress}</p>}
                                    </div>

                                </div>
                            </div>
                            {data?.electricityCustNo && <p className='border-b text-center py-1 mb-2 mx-5 border-gray-500 font-semibold'><span className=''> Electricity Details</span></p>}
                            {data?.electricityAccNo && <p className='border-b text-center py-1 mb-2 mx-5 border-gray-500 font-semibold'><span className=''> Electricity Details</span></p>}
                            <div className='grid grid-cols-12'>
                                <div className='col-span-7'>
                                    {data?.electricityCustNo && <p>Electricity K. No</p>}
                                    {data?.electricityAccNo && <p>Account No</p>}
                                    {data?.electricityBindBookNo && <p>BIND/BOOK No.</p>}
                                    {data?.electricityConnection && <p> Consumer Category</p>}
                                </div>
                                <div className='col-span-5'>
                                    {data?.electricityCustNo && <p> {data?.electricityCustNo}</p>}
                                    {data?.electricityAccNo && <p> {data?.electricityAccNo}</p>}
                                    {data?.electricityBindBookNo && <p> {data?.electricityBindBookNo}</p>}
                                    {data?.electricityConnection && <p> {data?.electricityConnection}</p>}
                                </div>
                            </div>
                            {data?.buildingPlanApprovalNo && <p className='border-b text-center py-1 mb-2 mx-5 border-gray-500 font-semibold'><span className=''> Water Details</span></p>}
                            <div className='grid grid-cols-12'>
                                <div className='col-span-7'>
                                    {data?.buildingPlanApprovalNo && <p>Building Plan Approval No.</p>}
                                    {data?.buildingPlanApprovalDate && <p>Building Plan Approval Date</p>}
                                    {data?.waterConnNo && <p>Water Consumer No.</p>}
                                    {data?.waterConnDate && <p>Water Connection Date</p>}
                                </div>
                                <div className='col-span-5'>
                                    {data?.buildingPlanApprovalNo && <p> {data?.buildingPlanApprovalNo}</p>}
                                    {data?.buildingPlanApprovalDate && <p> {data?.buildingPlanApprovalDate}</p>}
                                    {data?.waterConnNo && <p> {data?.waterConnNo}</p>}
                                    {data?.waterConnDate && <p> {data?.waterConnDate}</p>}
                                </div>
                            </div>
                            {data?.owner && <p className='border-b text-center py-1 mb-2 mx-5 border-gray-500 font-semibold'><span className=''> Owner Details</span></p>}
                            {data?.owner?.map((item) => (
                                <div className='grid grid-cols-12 border-b py-1'>
                                    <div className='col-span-6'>
                                        {item?.ownerName && <p>Owner Name</p>}
                                        {item?.guardianName && <p>Guardian Name</p>}
                                        {item?.relation && <p>Relation</p>}
                                        {item?.gender && <p>Gender</p>}
                                        {item?.dob && <p>Date of Birth</p>}
                                        {item?.mobileNo && <p>Mobile No.</p>}
                                        {item?.email && <p>Email</p>}
                                        {item?.aadhar && <p>Aadhar No</p>}
                                        {item?.pan && <p>PAN No</p>}
                                        {item?.isArmedForce && <p>Belong to Armed Forces</p>}
                                        {item?.isSpeciallyAbled && <p>Are You Specially-Abled</p>}

                                    </div>
                                    <div className='col-span-6 font-semibold'>
                                        {item?.ownerName && <p> {item?.ownerName}</p>}
                                        {item?.guardianName && <p> {item?.guardianName}</p>}
                                        {item?.relation && <p> {item?.relation}</p>}
                                        {item?.gender && <p> {item?.gender}</p>}
                                        {item?.dob && <p> {item?.dob}</p>}
                                        {item?.mobileNo && <p> {item?.mobileNo}</p>}
                                        {item?.email && <p> {item?.email}</p>}
                                        {item?.aadhar && <p> {item?.aadhar}</p>}
                                        {item?.pan && <p> {item?.pan}</p>}
                                        {item?.isArmedForce && <p> {item?.isArmedForce}</p>}
                                        {item?.isSpeciallyAbled && <p> {item?.isSpeciallyAbled}</p>}
                                    </div>
                                </div>
                            ))}

                            {data?.floor && <p className='border-b text-center py-1 mb-2 mx-5 border-gray-500 font-semibold'><span className=''>Floor Details</span></p>}
                            {data?.floor?.map((item) => (
                                <div className='grid grid-cols-12 border-b py-1'>
                                    <div className='col-span-6'>
                                        {item?.floorNo && <p>Floor No</p>}
                                        {item?.useType && <p>Uses Type</p>}
                                        {item?.occupancyType && <p>Occupancy Type</p>}
                                        {item?.constructionType && <p>Construction Type</p>}
                                        {item?.buildupArea && <p>Buildup Area</p>}
                                        {item?.dateFrom && <p>Date From</p>}
                                        {item?.dateUpto && <p>Date Upto</p>}

                                    </div>
                                    <div className='col-span-6 font-semibold'>
                                        {item?.floorNo && <p> {item?.floorNo}</p>}
                                        {item?.useType && <p> {item?.useType}</p>}
                                        {item?.occupancyType && <p> {item?.occupancyType}</p>}
                                        {item?.constructionType && <p> {item?.constructionType}</p>}
                                        {item?.buildupArea && <p> {item?.buildupArea}</p>}
                                        {item?.dateFrom && <p> {item?.dateFrom}</p>}
                                        {item?.dateUpto && <p> {item?.dateUpto}</p>}
                                    </div>
                                </div>
                            ))}



                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default FeedbackScreen
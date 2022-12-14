//////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 02 november 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - Water sublist
//    DESCRIPTION - water sublist compomnent which sublist category
//////////////////////////////////////////////////////////////////////////////////////

import React, { useEffect, useState } from 'react'
import { AiFillInfoCircle } from 'react-icons/ai'
import { RiArrowDropLeftFill } from 'react-icons/ri'
import axios from 'axios'
import ThemeStyle from '../../../src/Components/Styles/ThemeStyle'
import { RotatingLines } from 'react-loader-spinner'
import PropertyApiList from '../../Components/PropertyComponents/PropertyApiList'

import RazorpayPaymentScreen from '../../Components/Payment/Razorpay/RazorpayPaymentScreen'



function PropertyViewAndPayDemand(props) {

    const [fetchedData, setFetchedData] = useState()    //Store all the data of generated Demand Details
    const [loader, setLoader] = useState(false) // Used when click on Pay Now
    const [loaderForFetchDemand, setLoaderForFetchDemand] = useState(false) //Loader Will be visibel Till Demand Details is fetching


    //destructuring predefined colors to maintain uniform theme everywhere
    const { bgHeaderColor, titleColor, nextButtonColor, nextBtnHoverColor, backButtonColor, backBtnHoverColor, bgCardColor, bgInfoColor, infoTextColor } = ThemeStyle()

    const { bearer, amountCalculateBySafId, propertyGenerateOrderId, verifyPaymentStatus } = PropertyApiList();

    const header = {
        headers: {
            Authorization: `Bearer ${bearer}`,
            Accept: 'application/json',
        }
    }

    const safDetailsData = props?.safApplicationId;  // Getting All Detais of Particular SAF when user choose to make payment against.
    const safAppId = parseInt(safDetailsData?.application_id); // Extracting SAF Applicatin Id from Props.SafApplicatin

    useEffect(() => {
        setLoaderForFetchDemand(true)
        axios.post(amountCalculateBySafId, { "id": safAppId }, header)  //This API Used for Fetch Demand Details | Default "ulbId":1
            .then(function (res) {
                setFetchedData(res.data.data)
                setLoaderForFetchDemand(false)
            })
            .catch(function (err) { console.log("Error AXIOS in amountCalculateBySafId", err) })
    }, [safDetailsData])

    const amount = fetchedData?.demand?.payableAmount; // This amount is fetched from user SAF Application and it will be used for generate order id only=> in backend they wil also match the amount



    const dreturn = (data) => {   // In (DATA) this function returns the Paymen Status, Message and Other Response data form Razorpay Server
        console.log('Payment Status =>', data)
    }

    const getOrderId = async () => { // This Function is used to Order Id Generation

        const orderIdPayload = {
            "id": safAppId,
            "amount": amount,
            "departmentId": 1,
            "workflowId": safDetailsData.workflow_id
        }

        setLoader(true)
        axios.post(propertyGenerateOrderId, orderIdPayload, header)  // This API will generate Order ID
            .then((res) => {
                console.log("Order Id Response ", res.data)
                if (res.data.status === true) {
                    console.log("OrderId Generated True", res.data)
                    RazorpayPaymentScreen(res.data.data, dreturn);  //Send Response Data as Object (amount, orderId, ulbId, departmentId, applicationId, workflowId, userId, name, email, contact) will call razorpay payment function to show payment popup                                      
                    setLoader(false)
                }
            })
            .catch((err) => {
                alert("Backend Server error. Unable to Generate Order Id");
                console.log("ERROR :-  Unable to Generate Order Id ", err)
                setLoader(false)
            })
    }


    return (
        <>

            <div>
                <div className='text-xs font-semibold px-2 mt-4 flex'>
                    <div className="flex-1"><span onClick={props.goBack} className='border-b border-black'><RiArrowDropLeftFill className="inline text-xl" />Back</span></div>
                    <div className="flex-1 text-right"><span className=''>{props?.formIndex} of 10</span></div>
                </div>
                <div className='p-2 md:p-10 flex justify-center items-center  overflow-hidden'>
                    <div className={`grid grid-cols-12 ${bgCardColor} shadow-lg w-full md:w-1/3 p-4 py-10 md:p-10`}>
                        <div className="col-span-12 flex flex-row w-full  text-lg  ">
                            <h1 className={`font-bold ${titleColor}`}>Payment Page</h1>

                        </div>

                        {/* {****** Application Detail List *********} */}
                        <div className='col-span-12 bg-gray-50 p-2 shadow-md mt-2 mb-1'>
                            <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`text-xs ml-2 font-medium text-gray-500`}>Property Type</label>
                                    </div>
                                    <div className=''>
                                        <label className={`text-xs ml-2 font-medium text-gray-800`} >{fetchedData?.demand?.isResidential ? 'Residential' : 'Commercial'}</label>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`text-xs ml-2 font-medium text-gray-500`}>Assessment Type</label>
                                    </div>
                                    <div className=''>
                                        <label className={`text-xs ml-2 font-medium text-gray-800`} >{safDetailsData?.assessment_type}</label>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`text-xs ml-2 font-medium text-gray-500`}>SAF Number</label>
                                    </div>
                                    <div className=''>
                                        <label className={`text-xs ml-2 font-medium text-gray-800`}>{safDetailsData?.saf_no} / {safDetailsData?.application_id}</label>
                                    </div>
                                </div>


                                <div className='grid grid-cols-2 '>
                                    <div className="">
                                        <label className={`text-xs ml-2 font-medium text-gray-500`}>Holding No</label>
                                    </div>
                                    <div className=''>
                                        <label className={`text-xs ml-2 font-medium text-gray-800`}>{safDetailsData?.holding_no}</label>
                                    </div>
                                </div>
                                {/* <div className=' text-center mt-4'>
                                    <Link to='/water-viewHistory'>
                                        <button className={`shadow-lg px-3 py-2 ml-1  ${nextButtonColor} text-white font-medium text-xs leading-tight  rounded  ${nextBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`} >View History</button>
                                    </Link>
                                </div> */}
                            </div>

                        </div>


                        {/* {****** Fee Estimate *********} */}
                        <div className='col-span-12'>
                            <div className='flex justify-center mt-1'>
                                <RotatingLines
                                    strokeColor="#e87f0e"
                                    strokeWidth="5"
                                    animationDuration="0.75"
                                    width="40"
                                    visible={loaderForFetchDemand}
                                />
                            </div>
                        </div>
                        {!loaderForFetchDemand &&
                            <div className='col-span-12 bg-gray-50 p-2 shadow-md mt-2 mb-1'>
                                <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">
                                    <div className='grid grid-cols-2 '>
                                        <div className="">
                                            <label className={`text-xs ml-2 font-medium text-gray-500`}>Total Tax</label>
                                        </div>
                                        <div className=''>
                                            <label className={`text-xs ml-2 font-medium text-gray-800`}>??? {fetchedData?.demand?.totalTax}</label>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-2 '>
                                        <div className="">
                                            <label className={`text-xs ml-2 font-medium text-gray-500`}>One Percente Penalty</label>
                                        </div>
                                        <div className=''>
                                            <label className={`text-xs ml-2 font-medium text-gray-800`}>??? {fetchedData?.demand?.totalOnePercPenalty} </label>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-2 '>
                                        <div className="">
                                            <label className={`text-xs ml-2 font-medium text-gray-500`}>Late Assessment Penalty</label>
                                        </div>
                                        <div className=''>
                                            <label className={`text-xs ml-2 font-medium text-gray-800`}>??? {fetchedData?.demand?.lateAssessmentPenalty} </label>
                                        </div>
                                    </div>


                                    <div className='grid grid-cols-2 '>
                                        <div className="">
                                            <label className={`text-xs ml-2 font-bold text-gray-500 divide-y-2`}>Total Demand</label>
                                        </div>
                                        <div className=''>
                                            <label className={`text-xs ml-2 font-medium text-gray-800`}>??? {fetchedData?.demand?.totalDemand}</label>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-2 '>
                                        <div className="">
                                            <label className={`text-xs ml-2 font-medium text-gray-500`}>Rebat Percentage</label>
                                        </div>
                                        <div className=''>
                                            <label className={`text-xs ml-2 font-medium text-gray-800`} >{fetchedData?.demand?.rebatePerc} % </label>
                                        </div>
                                    </div>

                                    <div className='grid grid-cols-2 divide-y '>
                                        <div className="">
                                            <label className={`text-xs ml-2 font-bold text-gray-500 divide-y-2`}>Payable Amount</label>
                                        </div>
                                        <div className=''>
                                            <label className={`text-xs ml-2 font-medium text-gray-800`}>??? {fetchedData?.demand?.payableAmount}</label>
                                        </div>
                                    </div>


                                    <div className='flex justify-center mt-1'>
                                        <RotatingLines
                                            strokeColor="#e87f0e"
                                            strokeWidth="5"
                                            animationDuration="0.75"
                                            width="40"
                                            visible={loader}
                                        />
                                    </div>

                                    {!loader &&
                                        <div className=' text-center mt-4'>
                                            <button onClick={getOrderId} className={`shadow-lg px-3 py-2 ml-1  bg-green-700 text-white font-medium text-xs leading-tight  rounded  hover:bg-green-600 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`} >Pay Now</button>
                                        </div>
                                    }
                                </div>
                                <div className='p-2 relative '>
                                    <div className={`absolute top-0 left-0 w-full h-full bg-green-200 opacity-20`}></div>
                                    <div className={`font-semibold text-sm text-green-800 `}><AiFillInfoCircle className="inline text-sm" /> Info</div>
                                    <p className={`text-xs text-green-700 mt-1 ml-1`}>You can make payment using UPI / Net Banking / Cards.</p>

                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default PropertyViewAndPayDemand
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
import { Link } from 'react-router-dom'
import axios from 'axios'


//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from '../../../src/Components/Styles/ThemeStyle'
import PropertyApiList from '../../Components/PropertyComponents/PropertyApiList'
import { RotatingLines } from 'react-loader-spinner'



function PropertyViewAndPayDemand(props) {

    const [fetchedData, setFetchedData] = useState()
    const [loader, setLoader] = useState(false) // Used when click on Pay Now

    const [loaderForFetchDemand, setLoaderForFetchDemand] = useState(false)



    //destructuring predefined colors to maintain uniform theme everywhere
    const { bgHeaderColor, titleColor, nextButtonColor, nextBtnHoverColor, backButtonColor, backBtnHoverColor, bgCardColor, bgInfoColor, infoTextColor } = ThemeStyle()

    const { bearer, amountCalculateBySafId, generateOrderId,verifyPaymentStatus } = PropertyApiList();

    const header = {
        headers: {
            Authorization: `Bearer ${bearer}`,
            Accept: 'application/json',
        }
    }

    const safDetailsData = props?.safApplicationId;
    const safAppId = parseInt(safDetailsData?.application_id);

    console.log("safApplication Details", safDetailsData)
    console.log("fetched DEMAND Data", fetchedData)
    console.log("1) SAF Application ID", safAppId)


    useEffect(() => { //Fetch Demand Details => amount, tax etc
        setLoaderForFetchDemand(true)
        axios.post(amountCalculateBySafId, { "id": safAppId }, header)  // Default "ulbId":1
            .then(function (res) {
                setFetchedData(res.data.data)
                setLoaderForFetchDemand(false)
                console.log("2) Tis................", res)
            })
            .catch(function (err) { console.log("Error", err) })
    }, [safDetailsData])

    //Payment Code Start From Here

    const amount = fetchedData?.demand?.payableAmount;

    //API 2 - when payment success we will keep the log in backend
    const callApiLog = (response) => {

        const sendPayload = {
            "razorpayOrderId": response.razorpay_order_id,
            "razorpayPaymentId": response.razorpay_payment_id,
            "razorpaySignature": response.razorpay_signature
        }

        axios.post(verifyPaymentStatus, sendPayload, header)
            .then((res) => {
                console.log("2nd API Data saved ", res)            
            })
            .catch((err) => {               
                console.log("Error when inserting 2 api data ", err)
            })
    }

    //API 2 - when payment failed we will keep the log in backend
    const callApiLogFailed = (response) => {

        const sendPayload = {
            "razorpayOrderId": response.error.metadata.order_id,
            "razorpayPaymentId": response.error.metadata.payment_id,
            "reason": response.error.reason,
            "source" : response.error.source,
            "step" : response.error.step,
            "code": response.error.code,
            "description":response.error.description,
        }

        axios.post(verifyPaymentStatus, sendPayload, header)
            .then((res) => {
                console.log("2nd API Filed Data saved ", res)            
            })
            .catch((err) => {               
                console.log("Error when inserting 2 api Failed data ", err)
            })
    }

    const getOrderId = async () => {

        // check razorpay server
        const res = await (
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        const orderIdPayload = {
            "id": safAppId,
            "amount": amount,
            "module": "water"
        }

        setLoader(true)
        axios.post(generateOrderId, orderIdPayload, header)
            .then((res) => {
                console.log("Order Id Response ", res.data)
                if (res.data.status === true) {
                    console.log("OrderId Generated", res.data.data.orderId)
                    payNow(res.data.data.orderId, res.data.data.amount)
                    setLoader(false)
                }
            })
            .catch((err) => {
                alert("Backend Server error. Unable to Generate Order Id");
                console.log("Order Id ERROR ", err)
                setLoader(false)
            })
    }


    const payNow = (orderId, amount) => {
        var options = {
            key: "rzp_test_3MPOKRI8WOd54p",
            amount: amount,
            currency: "INR",
            image: "http://example.com/your_logo.jpg",
            name: "JUDCO Corp.",
            description: "Testing with SAM and WEbhook",
            order_id: orderId,
            handler: function (response) {
                callApiLog(response)  // This function send the data to direct database => backend will verify the data
                console.log("All response", response)    ///////////////hERE callApiLog
                alert("Payment Susscess", response.razorpay_payment_id);
                console.log("Payment ID", response.razorpay_payment_id);

            },
            // handler: async function (response) {
            //     const data = {
            //         orderCreationId: orderId,
            //         razorpayPaymentId: response.razorpay_payment_id,
            //         razorpayOrderId: response.razorpay_order_id,
            //         razorpaySignature: response.razorpay_signature,
            //     };
            //     const result = await axios.post("http://localhost:5000/payment/success", data);
            //     alert(result.data.msg);
            // },
            prefill: {
                name: "Sam",
                email: "sam@testmail.com",
                contact: 9785458000
            },
            "modal": {
                "ondismiss": function (response) {
                    console.log("Payment Cancel BY user", response);
                    // saveData("Cancel by User", "Cancel")
                },
                "onfailed": function (response) {
                    console.log("Payment Failed Response", response);
                    // saveData(response.razorpay_payment_id, "Failed")
                }
            },
            notes: {
                module: "Water",
                moduleId: 1,
                ulbId: 2,
                userId: 3,
                workFlowID: 3
            },
            theme: {
                color: "#3399cc"
            }
        };
        var pay = new window.Razorpay(options);

        pay.on('payment.failed', function (response) {
            console.log("Failed Response", response)
            callApiLogFailed(response)  // This functin called when payment got failed. and data log will saved in bacend => using api 2
            alert(response.error.metadata.order_id);
            alert(response.error.metadata.payment_id);
        });

        pay.open();
        // setLoader(false)
    }


    //Payment Code END From Here



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
                                            <label className={`text-xs ml-2 font-medium text-gray-800`}>₹ {fetchedData?.demand?.totalTax}</label>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-2 '>
                                        <div className="">
                                            <label className={`text-xs ml-2 font-medium text-gray-500`}>One Percente Penalty</label>
                                        </div>
                                        <div className=''>
                                            <label className={`text-xs ml-2 font-medium text-gray-800`}>₹ {fetchedData?.demand?.totalOnePercPenalty} </label>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-2 '>
                                        <div className="">
                                            <label className={`text-xs ml-2 font-medium text-gray-500`}>Late Assessment Penalty</label>
                                        </div>
                                        <div className=''>
                                            <label className={`text-xs ml-2 font-medium text-gray-800`}>₹ {fetchedData?.demand?.lateAssessmentPenalty} </label>
                                        </div>
                                    </div>


                                    <div className='grid grid-cols-2 '>
                                        <div className="">
                                            <label className={`text-xs ml-2 font-bold text-gray-500 divide-y-2`}>Total Demand</label>
                                        </div>
                                        <div className=''>
                                            <label className={`text-xs ml-2 font-medium text-gray-800`}>₹ {fetchedData?.demand?.totalDemand}</label>
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
                                            <label className={`text-xs ml-2 font-medium text-gray-800`}>₹ {fetchedData?.demand?.payableAmount}</label>
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
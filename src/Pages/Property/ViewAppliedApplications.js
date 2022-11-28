//////////////////////////////////////////////////////////////////////////////////////
//    Author -Dipu Singh
//    Version - 1.0
//    Date - 02 november 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - Water sublist
//    DESCRIPTION - water sublist compomnent which sublist category
//////////////////////////////////////////////////////////////////////////////////////

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AiFillInfoCircle } from 'react-icons/ai'
import { RiArrowDropLeftFill } from 'react-icons/ri'
import { Link, useNavigate } from 'react-router-dom'
import { RotatingLines } from 'react-loader-spinner'



//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from '../../Components/Styles/ThemeStyle'
import PropertyApiList from '../../Components/PropertyComponents/PropertyApiList'
import PropertyViewAndPayDemand from './PropertyViewAndPayDemand'

function ViewAppliedApplications(props) {
    const [formsubmitLoder, setFormsubmitLoder] = useState(false)

    const [fetchedData, setFetchedData] = useState()
    const [safId, setSafId] = useState()
    const [message, setMessage] = useState(false)

    //destructuring predefined colors to maintain uniform theme everywhere
    const { bgHeaderColor, titleColor, nextButtonColor, nextBtnHoverColor, backButtonColor, backBtnHoverColor, bgCardColor, bgInfoColor, infoTextColor } = ThemeStyle()

    const { bearer, viewAppliedSafAplications } = PropertyApiList();

    const navigate = useNavigate();

    const goBack = () => {
        navigate('/property-index')
    }

    const header = {
        headers: {
            Authorization: `Bearer ${bearer}`,
            Accept: 'application/json',
        }
    }

    useEffect(() => { //get Department By ulb
        setMessage(false)
        setFormsubmitLoder(true)
        axios.get(viewAppliedSafAplications, header, { "module": "Property" })  // Default "ulbId":1
            .then(function (res) {
                if(fetchedData?.Property?.applications.length == 0) setMessage(" Your Applied List is 0 ")
                setFetchedData(res.data.data)
                setFormsubmitLoder(false)
            })
            .catch(function (err) {
                console.log("Error", err)
                setFormsubmitLoder(false)
                setMessage("Error : Something went wrong.")
            })
    }, [])

    console.log("Applied SAF LISt", fetchedData?.Property?.applications)


    // console.log("saf data to sone++++++",safId)

    return (
        <>
            {safId ? <PropertyViewAndPayDemand goBack={() => setSafId()} safApplicationId={safId} /> :
                <div>
                    <div className='text-xs font-semibold px-2 mt-4 flex'>
                        <div className="flex-1"><span onClick={goBack} className='border-b border-black'><RiArrowDropLeftFill className="inline text-xl" />Back</span></div>
                        <div className="flex-1 text-right"><span className=''>{props?.formIndex} of 10</span></div>
                    </div>
                    <div className='p-2 md:p-10 flex justify-center items-center  overflow-hidden'>
                        <div className={`grid grid-cols-12 ${bgCardColor} shadow-xl w-full md:w-1/3 p-4 py-10 md:p-10`}>
                            <div className="col-span-12 flex flex-row w-full  text-lg  ">
                                <h1 className={`font-bold ${titleColor}`}>View Applications</h1>

                            </div>

                            <div className='col-span-12'>
                                <div className='flex justify-center mt-1'>
                                    <RotatingLines
                                        strokeColor="#e87f0e"
                                        strokeWidth="5"
                                        animationDuration="0.75"
                                        width="40"
                                        visible={formsubmitLoder}
                                    />
                                </div>
                            </div>
                            <div className='col-span-12'><div className='flex justify-center mt-1 text-red-600 font-semibold'>   {message && message} </div></div>
                            {/* {****** Application List *********} */}
                            {fetchedData?.Property?.applications?.map((items) => (
                                <>
                                    <div className='col-span-12 bg-gray-50 p-2 shadow-md mt-2 mb-1'>
                                        <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">
                                            <div className='grid grid-cols-2 '>
                                                <div className="">
                                                    <label className={`text-xs ml-2 font-medium text-gray-500`}>Service</label>
                                                </div>
                                                <div className=''>
                                                    <label className={`text-xs ml-2 font-medium text-gray-800`}>{items.assessment_type}</label>
                                                </div>
                                            </div>
                                            <div className='grid grid-cols-2 '>
                                                <div className="">
                                                    <label className={`text-xs ml-2 font-medium text-amber-600`}>SAF Number</label>
                                                </div>
                                                <div className=''>
                                                    <label className={`text-xs ml-2 font-medium text-amber-600`} >{items.saf_no} / {items.application_id}</label>
                                                </div>
                                            </div>

                                            <div className='grid grid-cols-2 '>
                                                <div className="">
                                                    <label className={`text-xs ml-2 font-medium text-gray-500`}>Payment Satatus</label>
                                                </div>
                                                <div className=''>
                                                    <label className={`text-xs ml-2 font-medium text-gray-800`} >{items.payment_status == 0 ? 'Incomplate' : 'Done'}</label>
                                                </div>
                                            </div>
                                            <div className='grid grid-cols-2 '>
                                                <div className="">
                                                    <label className={`text-xs ml-2 font-medium text-gray-500`}>Appled Date</label>
                                                </div>
                                                <div className=''>
                                                    <label className={`text-xs ml-2 font-medium text-gray-800`} >{items.created_at}</label>
                                                </div>
                                            </div>

                                            <div className=' text-center mt-4'>
                                                {/* <Link to='/water-viewDetail'> */}
                                                <button onClick={() => setSafId(items)} className={`shadow-lg px-3 py-2 ml-1  ${nextButtonColor} text-white font-medium text-xs leading-tight  rounded  ${nextBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`} >View And Pay Demand</button>
                                                {/* </Link> */}

                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </div>
                    </div>

                    {/* {safId && <PropertyViewAndPayDemand goBack={setSafId()} safApplicationId={safId} />} */}

                </div>
            }
        </>
    )
}

export default ViewAppliedApplications
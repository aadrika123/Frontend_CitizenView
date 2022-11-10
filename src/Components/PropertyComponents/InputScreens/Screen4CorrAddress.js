//////////////////////////////////////////////////////////////////////////////////////
//    Author - Talib Hussain
//    Version - 1.0
//    Date - 02 november 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - Screen1
//    DESCRIPTION - Scrren 1 is single input component
//////////////////////////////////////////////////////////////////////////////////////

import { AiFillInfoCircle } from 'react-icons/ai'
import { RiArrowDropLeftFill } from 'react-icons/ri'
import Info from '../../Common/Info'
//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from '../../Styles/ThemeStyle'
import { useFormik } from 'formik';
import { useState } from 'react';


function Screen4CorrAddress(props) {
    //destructuring predefined colors to maintain uniform theme everywhere
    const { bgHeaderColor, titleColor, nextButtonColor, nextBtnHoverColor, backButtonColor, backBtnHoverColor, bgCardColor, bgInfoColor, infoTextColor } = ThemeStyle()

    const [handleTik, setHandleTik] = useState(false)

    const propertyAddress = props.propertyData.propertyAddress;

    console.log("Property Address in Corresponding Screen", propertyAddress)

    const formik = useFormik({
        initialValues: {
            corrCity: propertyAddress?.propCity,
            corrDistrict:  propertyAddress?.propDistrict,
            corrPin:  propertyAddress?.propPin,
            corrLocality:  propertyAddress?.propLocality,
            corrState:  propertyAddress?.propState,
        },
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            props.data("propertyCorrAddress", values)
            props.nextFun()
        },
    });
    const handleCity = e => formik.values.corrCity = e.target.value
    const handleDistrict = e => formik.values.corrDistrict = e.target.value
    const handleState = e => formik.values.corrState = e.target.value
    const handlePin = e => formik.values.corrPin = e.target.value
    const handleLocality = e => formik.values.corrLocality = e.target.value

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div className='text-xs font-semibold px-2 mt-4 flex'>
                    <div className="flex-1"><span onClick={props.backFun} className='border-b border-black'><RiArrowDropLeftFill className="inline text-xl" />Back</span></div>
                    <div className="flex-1 text-right"><span className=''>{props?.formIndex} of 10</span></div>
                </div>
                <div className='p-2 md:p-10 flex justify-center items-center  overflow-hidden'>
                    <div className={`grid grid-cols-12 ${bgCardColor} shadow-lg w-full md:w-1/3 p-4 py-10 md:p-10`}>
                        <div className="col-span-12"> <h1 className={`font-bold ${titleColor} text-2xl`}>Corresponding Address</h1></div>
                        <div className="col-span-12"> <h1 className={` ${titleColor} text-sm mt-2 opacity-40`}>Provide the landmark to help us react the property location easily.</h1></div>

                        <div className="col-span-12 my-2">
                            <input type="checkbox" name="" className='w-4 h-4' checked={handleTik} onChange={(e)=>setHandleTik(e.target.checked)} />
                            <span className='text-red-700 font-semibold ml-2 mt-2    '>Note </span> : If Corresponding Address Different from Property Address (Please Tick)
                        </div>

                        <div className="form-group md:mb-6 col-span-12 my-1">
                            <div className="form-group mb-4 md:mb-6 col-span-12 mt-1">
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">City<span className='text-red-500'>*</span></label>
                                <input
                                    type="text"
                                    className={` ${!handleTik && 'opacity-80 bg-gray-100 cursor-not-allowed'} placeholder:opacity-100 placeholder:text-black form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md`}
                                    onChange={e => handleCity(e)}
                                    name="corrCity"
                                    placeholder={formik.values.corrCity}
                                    disabled={!handleTik}
                                />
                            </div>
                            <div className="form-group mb-4 md:mb-6 col-span-12 mt-1">
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">District<span className='text-red-500'>*</span></label>
                                <input
                                    type="text"
                                    className={` ${!handleTik && 'opacity-80 bg-gray-100 cursor-not-allowed'} placeholder:opacity-100 placeholder:text-black form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md`}
                                    onChange={e => handleDistrict(e)}
                                    name="corrDistrict"
                                    placeholder={formik.values.corrDistrict}
                                    disabled={!handleTik}
                                />
                            </div>
                            <div className="form-group mb-4 md:mb-6 col-span-12 mt-1">
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">State<span className='text-red-500'>*</span></label>
                                <input
                                    type="text"
                                    className={` ${!handleTik && 'opacity-80 bg-gray-100 cursor-not-allowed'} placeholder:opacity-100 placeholder:text-black form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md`}
                                    onChange={e => handleState(e)}
                                    name="corrState"
                                    placeholder={formik.values.corrState}
                                    disabled={!handleTik}
                                />
                            </div>
                            <div className="form-group mb-4 md:mb-6 col-span-12 mt-1">
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Pin<span className='text-red-500'>*</span></label>
                                <input
                                    type="text"
                                    className={` ${!handleTik && 'opacity-80 bg-gray-100 cursor-not-allowed'} placeholder:opacity-100 placeholder:text-black form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md`}
                                    onChange={e => handlePin(e)}
                                    name="corrPin"
                                    placeholder={formik.values.corrPin}
                                    disabled={!handleTik}
                                />
                            </div>
                            <div className="form-group mb-4 md:mb-6 col-span-12 mt-1">
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Locality<span className='text-red-500'>*</span></label>
                                <input
                                    type="text"
                                    className={` ${!handleTik && 'opacity-80 bg-gray-100 cursor-not-allowed'} placeholder:opacity-100 placeholder:text-black form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md`}
                                    onChange={e => handleLocality(e)}
                                    name="corrLocality"
                                    placeholder={formik.values.corrLocality}
                                    disabled={!handleTik}
                                />
                            </div>

                        </div>

                        <div className="col-span-12 grid grid-cols-12 gap-x-6 mt-6">
                            <div className="col-span-6"> <button onClick={() => props.backFun()} type="submit" className={`shadow-lg w-full px-6 py-4 ${backButtonColor} text-white font-medium text-xs leading-tight  rounded  ${backBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Back</button></div>
                            <div className="col-span-6"> <button type="submit" className={`shadow-lg w-full px-6 py-4 ${nextButtonColor} text-white font-medium text-xs leading-tight  rounded  ${nextBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Next</button></div>
                        </div>
                    </div>

                </div>
                <Info infoText="Select independent building if you're assessing for the complete constructed area of the property" />
            </form>
        </>
    )
}

export default Screen4CorrAddress

/*
Exported to -
PropertyCitizenEntryForm.js
*/
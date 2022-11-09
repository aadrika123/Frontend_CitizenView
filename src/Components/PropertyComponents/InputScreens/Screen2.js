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


function Screen2(props) {
    const [hadMobileTower, setHadMobileTower] = useState("No")
    const [hoardingBoard, setHoardingBoard] = useState("NO")
    const [petrolPump, setPetrolPump] = useState("No")

    //destructuring predefined colors to maintain uniform theme everywhere
    const { bgHeaderColor, titleColor, nextButtonColor, nextBtnHoverColor, backButtonColor, backBtnHoverColor, bgCardColor, bgInfoColor, infoTextColor } = ThemeStyle()

    const formik = useFormik({
        initialValues: {
            hasMobileTower: '',
            hasHoardingBoard: '',
            hasPetrolPump: ''
        },
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            props.data(values)
            props.nextFun()
        },
    });
    const handdleHadMobileTower = e => {
        formik.values.hasMobileTower = e.target.value
        setHadMobileTower(e.target.value)
    }
    const handdleHoardingBoard = e => {
        formik.values.hasHoardingBoard = e.target.value
        setHoardingBoard(e.target.value)
    }
    const handlePetrolPump = e => {
        formik.values.hasPetrolPump = e.target.value
        setPetrolPump(e.target.value)
    }


    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div className='text-xs font-semibold px-2 mt-4 flex'>
                    <div className="flex-1"><span onClick={props.backFun} className='border-b border-black'><RiArrowDropLeftFill className="inline text-xl" />Back</span></div>
                    <div className="flex-1 text-right"><span className=''>{props?.formIndex} of 10</span></div>
                </div>
                <div className='p-2 md:p-10 flex justify-center items-center  overflow-hidden'>
                    <div className={`grid grid-cols-12 ${bgCardColor} shadow-lg w-full md:w-1/3 p-4 py-5 md:p-10`}>

                    <div className="col-span-12 text-gray-400 font-semibold">Basic Details</div>


                        <div className="col-span-12"> <h1 className={`font-bold ${titleColor} text-2xl`}>Extra Basic Details</h1></div>


                        {/* <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">
                            <div className="flex items-center mb-4">
                                <input
                                    className="w-6 h-6"
                                    type="radio"
                                    id="IndependentBuilding"
                                    name="group"
                                    value="1"
                                    onChange={e => handleRadioButtons(e)}
                                    required
                                />
                                <span htmlFor="IndependentBuilding" className="ml-2 text-sm font-medium text-gray-900 ">Independent Building</span>
                            </div>
                            <div className="flex items-center mb-4">
                                <input
                                    className="w-6 h-6"
                                    type="radio"
                                    id="Flat/Partofthebuilding"
                                    name="group"
                                    value="2"
                                    onChange={e => handleRadioButtons(e)}
                                />
                                <span htmlFor="Flat/Partofthebuilding" className="ml-2 text-sm font-medium text-gray-900 ">Flat/Part of the building</span>
                            </div>
                            <div className="flex items-center mb-4">
                                <input
                                    className="w-6 h-6"
                                    type="radio"
                                    id="VaccantLand"
                                    name="group"
                                    value="3"
                                    onChange={e => handleRadioButtons(e)}
                                />
                                <span htmlFor="VaccantLand" className="ml-2 text-sm font-medium text-gray-900 ">Vaccant Land</span>
                            </div>
                        </div> */}

                        <div className="form-group mb-4 md:mb-6 col-span-12 mt-1">
                            <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Rainwater harvesting provision ?<span className='text-red-500'>*</span></label>
                            <select
                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                // onChange={e => handdleHadMobileTower(e)}
                                name="occupancyType"
                                required
                            >
                                <option>--select--</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div className="form-group mb-4 md:mb-6 col-span-12 mt-1">
                            <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Property has Mobile Tower(s) ?<span className='text-red-500'>*</span></label>
                            <select
                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                onChange={e => handdleHadMobileTower(e)}
                                name="occupancyType"
                                required
                            >
                                <option>--select--</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        {hadMobileTower == "Yes" &&
                            <div className='col-span-12'>
                                <div className="form-group mb-4 md:mb-6 col-span-12 mt-1">
                                    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Total Area Covered<span className='text-red-500'>*</span></label>
                                    <input
                                        type="text"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                        // onChange={e => handleOccupancy(e)}
                                        name="occupancyType"
                                    />
                                </div>
                                <div className="form-group mb-4 md:mb-6 col-span-12 mt-1">
                                    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Installation Date<span className='text-red-500'>*</span></label>
                                    <input
                                        type="date"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                        // onChange={e => handleOccupancy(e)}
                                        name="occupancyType"
                                        required
                                    />
                                </div>
                            </div>}

                        <div className="form-group mb-4 md:mb-6 col-span-12 mt-1">
                            <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Property has Hoarding Board(s) ?<span className='text-red-500'>*</span></label>
                            <select
                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                onChange={e => handdleHoardingBoard(e)}
                                name="occupancyType"
                                required
                            >
                                <option>--select--</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        {hoardingBoard == "Yes" &&
                            <div className='col-span-12'>
                                <div className="form-group mb-4 md:mb-6 col-span-12 mt-1">
                                    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Total Area Covered<span className='text-red-500'>*</span></label>
                                    <input
                                        type="text"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                        // onChange={e => handleOccupancy(e)}
                                        name="occupancyType"
                                    />
                                </div>
                                <div className="form-group mb-4 md:mb-6 col-span-12 mt-1">
                                    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Installation Date<span className='text-red-500'>*</span></label>
                                    <input
                                        type="date"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                        // onChange={e => handleOccupancy(e)}
                                        name="occupancyType"
                                        required
                                    />
                                </div>
                            </div>}

                        <div className="form-group mb-4 md:mb-6 col-span-12 mt-1">
                            <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">*Is property a Petrol Pump ?<span className='text-red-500'>*</span></label>
                            <select
                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                onChange={e => handlePetrolPump(e)}
                                name="occupancyType"
                                required
                            >
                                <option>--select--</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        {petrolPump == "Yes" &&
                            <div className='col-span-12'>
                                <div className="form-group mb-4 md:mb-6 col-span-12 mt-1">
                                    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Total Area Covered<span className='text-red-500'>*</span></label>
                                    <input
                                        type="text"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                        // onChange={e => handleOccupancy(e)}
                                        name="occupancyType"
                                    />
                                </div>
                                <div className="form-group mb-4 md:mb-6 col-span-12 mt-1">
                                    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Installation Date<span className='text-red-500'>*</span></label>
                                    <input
                                        type="date"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                        // onChange={e => handleOccupancy(e)}
                                        name="occupancyType"
                                        required
                                    />
                                </div>
                            </div>}


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

export default Screen2

/*
Exported to -
PropertyCitizenEntryForm.js
*/
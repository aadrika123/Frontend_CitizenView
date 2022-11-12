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
import * as yup from 'yup';


function Screen2PetrolPump(props) {
    const [petrolPump, setPetrolPump] = useState("No")

    //destructuring predefined colors to maintain uniform theme everywhere
    const { bgHeaderColor, titleColor, nextButtonColor, nextBtnHoverColor, backButtonColor, backBtnHoverColor, bgCardColor, bgInfoColor, infoTextColor } = ThemeStyle()

    const validationSchema = yup.object(
        {
            hasPetrolPump: yup.string().required("This is a required field !"),
            // petrolPumpArea: yup.string().required("This is a required field !"),
            // petrolPumpInstallDate: yup.string().required("This is a required field !"),
        }
    );

    const formik = useFormik({
        initialValues: {
            hasPetrolPump: '',
            petrolPumpArea: '',
            petrolPumpInstallDate: ''
        },
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            props.data("hasPetrolPump", values)
            props.nextFun()
        }, validationSchema
    });

    const handlePetrolPump = e => {
        formik.values.hasPetrolPump = e.target.value
        setPetrolPump(e.target.value)
    }
    const handlePetrolPumpArea = e => formik.values.petrolPumpArea = e.target.value;
    const handlePetrolPumpInstallDate = e => formik.values.petrolPumpInstallDate = e.target.value;


    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div className='text-xs font-semibold px-2 mt-4 flex'>
                    <div className="flex-1"><span onClick={props.backFun} className='border-b border-black'><RiArrowDropLeftFill className="inline text-xl" />Back</span></div>
                    <div className="flex-1 text-right"><span className=''>{props?.formIndex} of 10</span></div>
                </div>
                <div className='p-2 md:p-10 flex justify-center items-center  overflow-hidden'>
                    <div className={`grid grid-cols-12 ${bgCardColor} shadow-lg w-full md:w-1/3 p-4 py-5 md:p-10`}>

                        {/* <div className="col-span-12 text-gray-400 font-semibold">Basic Details</div> */}

                        <div className="col-span-12"> <h1 className={`font-bold ${titleColor} text-2xl`}>Petrol Pump </h1></div>
                        <div className="col-span-12"> <h1 className={` ${titleColor} text-sm mt-2 opacity-40`}>Provide the landmark to help us react the property location easily.</h1></div>

                        <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">
                            <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">*Is property a Petrol Pump ?<span className='text-red-500'>*</span></label>
                            <select
                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                onChange={e => handlePetrolPump(e)}
                                name="hasPetrolPump"
                                required
                            >
                                <option>--select--</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            <p className='text-red-500 text-xs'>{formik.touched.hasPetrolPump && formik.errors.hasPetrolPump ? formik.errors.hasPetrolPump : null}</p>
                        </div>
                        {petrolPump == "Yes" &&
                            <div className='col-span-12'>
                                <div className="form-group mb-4 md:mb-6 col-span-12 mt-1">
                                    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Total Area Covered<span className='text-red-500'>*</span></label>
                                    <input
                                        type="text"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                        onChange={e => handlePetrolPumpArea(e)}
                                        name="petrolPumpArea"
                                    />
                                    <p className='text-red-500 text-xs'>{formik.touched.petrolPumpArea && formik.errors.petrolPumpArea ? formik.errors.petrolPumpArea : null}</p>

                                </div>
                                <div className="form-group mb-4 md:mb-6 col-span-12 mt-1">
                                    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Installation Date<span className='text-red-500'>*</span></label>
                                    <input
                                        type="date"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                        onChange={e => handlePetrolPumpInstallDate(e)}
                                        name="petrolPumpInstallDate"
                                        
                                    />
                                    <p className='text-red-500 text-xs'>{formik.touched.petrolPumpInstallDate && formik.errors.petrolPumpInstallDate ? formik.errors.petrolPumpInstallDate : null}</p>
                                </div>
                            </div>}


                        <div className="col-span-12 grid grid-cols-12 gap-x-6 mt-6">
                            <div className="col-span-6"> <button onClick={() => props.backFun()} type="button" className={`shadow-lg w-full px-6 py-4 ${backButtonColor} text-white font-medium text-xs leading-tight  rounded  ${backBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Back</button></div>
                            <div className="col-span-6"> <button type="submit" className={`shadow-lg w-full px-6 py-4 ${nextButtonColor} text-white font-medium text-xs leading-tight  rounded  ${nextBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Next</button></div>
                        </div>
                    </div>

                </div>
                <Info infoText="Select independent building if you're assessing for the complete constructed area of the property" />
            </form>
        </>
    )
}

export default Screen2PetrolPump

/*
Exported to -
PropertyCitizenEntryForm.js
*/
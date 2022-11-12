//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 02 november 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - Screen1PropertyType
//    DESCRIPTION - Scrren 1 is single input component
//////////////////////////////////////////////////////////////////////////////////////

import { useState } from 'react'
import { AiFillInfoCircle } from 'react-icons/ai'
import { RiArrowDropLeftFill } from 'react-icons/ri'
//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from '../../Styles/ThemeStyle'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import Info from '../../Common/Info'
import { BiAddToQueue } from 'react-icons/bi'
import * as yup from 'yup';


function Screen1PropertyType(props) {

    const masterData = props?.masterData;

    //destructuring predefined colors to maintain uniform theme everywhere
    const { bgHeaderColor, titleColor, nextButtonColor, nextBtnHoverColor, backButtonColor, backBtnHoverColor, bgCardColor, bgInfoColor, infoTextColor } = ThemeStyle()

    const validationSchema = yup.object(
        {
            propertyType: yup.string().required("This is a required field !"),
        }
    );

    const formik = useFormik({
        initialValues: {
            propertyType: '',
        },
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            props.data("propertyType", values)
            props.nextFun()
        }, validationSchema
    });


    const handlePropertyType = e => formik.values.propertyType = e.target.value


    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div className='text-xs font-semibold px-2 mt-4 flex'>
                    <div className="flex-1"><span onClick={props.backFun} className='border-b border-black'><RiArrowDropLeftFill className="inline text-xl" />Back</span></div>
                    <div className="flex-1 text-right"><span className=''>{props?.formIndex} of 10</span></div>
                </div>
                <div className='p-2 md:p-10 flex justify-center items-center  overflow-hidden'>
                    <div className={`grid grid-cols-12 ${bgCardColor} shadow-lg w-full md:w-1/3 p-4 py-5 md:p-10`}>

                        <div className="col-span-12"> <h1 className={`font-bold ${titleColor} text-2xl`}>Property Type</h1></div>
                        <div className="col-span-12"> <h1 className={` ${titleColor} text-sm mt-2 opacity-40`}>Provide the landmark to help us react the property location easily.</h1></div>


                        <div className="form-group mb-4 md:mb-6 col-span-12 mt-2">
                            <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Property Type<span className='text-red-500'>*</span></label>
                            <select
                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                onChange={e => handlePropertyType(e)}
                                name="propertyType"
                                required
                            >
                                <option>--select--</option>
                                {masterData?.property_type?.map((data) => (
                                    <option value={data.id}>{data.property_type}</option>
                                ))}
                            </select>
                            <p className='text-red-500 text-xs'>{formik.touched.propertyType && formik.errors.propertyType ? formik.errors.propertyType : null}</p>

                        </div>


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

export default Screen1PropertyType

/*
Exported to -
PropertyCitizenEntryForm.js
*/


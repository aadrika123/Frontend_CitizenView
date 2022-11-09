//////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 05 november 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - ScreenBindBookNo
//    DESCRIPTION - ScreenBindBookNo compomnent 
//////////////////////////////////////////////////////////////////////////////////////
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { AiFillInfoCircle } from 'react-icons/ai'
import { RiArrowDropLeftFill } from 'react-icons/ri'
import * as yup from 'yup';
import CommonStyles from '../../IndividualRoutes/CommonStyles';
//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from '../../Styles/ThemeStyle'

function ScreenBindBookNo(props) {


    //destructuring predefined colors to maintain uniform theme everywhere
    const { bgHeaderColor, titleColor, nextButtonColor, bgCardColor, bgInfoColor, infoTextColor, backButtonColor, backBtnHoverColor, nextBtnHoverColor } = ThemeStyle()

    const { labelStyle, inputStyle } = CommonStyles();

    const validationSchema = yup.object(
        {
            bindBookNo: yup.string().required("This is a required field !"),
        }
    );


    const formik = useFormik({
        initialValues: {
            bindBookNo: '',
        },
        onSubmit: values => {
            props.CollectScreenDataFun("bindBookNo", values)
            props.nextFun()
            console.log("bindBookNo", values)
        },
        validationSchema
    });
    return (
        <>
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <div className='text-xs font-semibold pl-2 mt-4'><span className='border-b border-black'><RiArrowDropLeftFill className="inline text-xl" />Back</span></div>
                    <div className='p-2 md:p-10 flex justify-center items-center  overflow-hidden'>
                        <div className={`grid grid-cols-12 ${bgCardColor} shadow-lg w-full md:w-1/3 p-4 md:p-10`}>
                            <div className="col-span-12"> <h1 className={`font-bold ${titleColor} text-2xl`}>Bind Book No.</h1></div>
                            <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">
                                <div className="col-span-12">
                                    <label for="option1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Bind Book No.</label>
                                </div>
                                <div className=" items-center mb-4">
                                <input type="text" name="bindBookNo" className={`${inputStyle}`} placeholder="Enter bind Book No" value={formik.values.bindBookNo} onChange={formik.handleChange} />
                                <p className='text-red-500 text-xs'>{formik.touched.bindBookNo && formik.errors.bindBookNo ? formik.errors.bindBookNo : null}</p>
                                </div>

                            </div>

                            <div className="col-span-12 grid grid-cols-12 gap-x-6 mt-6">
                                <div className="col-span-6"> <button onClick={() => props.backFun()} type="button" className={`shadow-lg w-full px-6 py-4 ${backButtonColor} text-white font-medium text-xs leading-tight  rounded  ${backBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Back</button></div>
                                <div className="col-span-6"> <button type="submit" className={`shadow-lg w-full px-6 py-4 ${nextButtonColor} text-white font-medium text-xs leading-tight  rounded  ${nextBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Next</button></div>
                            </div>
                        </div>

                    </div>
                    <div className='p-2 md:p-10 flex justify-center items-center  overflow-hidden'>
                        {/* <div className='p-2 relative '>
                            <div className={`absolute top-0 left-0 w-full h-full ${bgInfoColor} opacity-20`}></div>
                            <div className={`font-semibold ${infoTextColor} `}><AiFillInfoCircle className="inline" /> Info</div>
                            <div className={`text-xs ${infoTextColor} mt-2`}>Select independent build if you're assessing for the complete constructed area of the property</div>
                        </div> */}
                    </div>
                </form>
            </div>
        </>
    )
}

export default ScreenBindBookNo
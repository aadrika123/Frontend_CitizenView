//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 02 november 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - Screen5
//    DESCRIPTION - Scrren 5 is single input component
//////////////////////////////////////////////////////////////////////////////////////

import { BiAddToQueue } from 'react-icons/bi'
import { RiArrowDropLeftFill } from 'react-icons/ri'
import Info from '../../Common/Info'
//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from '../../Styles/ThemeStyle'
import { useFormik } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';


function Screen5(props) {
    //destructuring predefined colors to maintain uniform theme everywhere
    const { bgHeaderColor, titleColor, nextButtonColor, nextBtnHoverColor, backButtonColor, backBtnHoverColor, bgCardColor, bgInfoColor, infoTextColor } = ThemeStyle()

    const [isChecked, setIsChecked] = useState(false)

    const validationSchema = yup.object(
        {
            electricKno: yup.string().required("This is a required field !"),
            electricAccNo: yup.string().required("This is a required field !"),
            electricBindBookNo: yup.string().required("This is a required field !"),
            electricConncectionCategory: yup.string().required("This is a required field !"),            
        }
    );

    const formik = useFormik({
        initialValues: {
            electricKno: '',
            electricAccNo: '',
            electricBindBookNo: '',
            electricConncectionCategory:'',
        },
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            props.data("electricityDetails",values)
            props.nextFun()
        },validationSchema
    });

    const handleElecticityKNo = e => formik.values.electricKno = e.target.value
    const handleElecticityAccNo = e => formik.values.electricAccNo = e.target.value
    const handleElecticityBindBookNo = e => formik.values.electricBindBookNo = e.target.value
    const handleElecticityConCat = e => formik.values.electricConncectionCategory = e.target.value

    const handleCheckbox = (e) => {
        console.log("Check Box", e.target.checked)
        setIsChecked(e.target.checked)
    }

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div className='text-xs font-semibold px-2 mt-4 flex'>
                    <div className="flex-1"><span onClick={props.backFun} className='border-b border-black'><RiArrowDropLeftFill className="inline text-xl" />Back</span></div>
                    <div className="flex-1 text-right"><span className=''>{props?.formIndex} of 10</span></div>
                </div>
                <div className='p-2 md:p-10 flex justify-center items-center  overflow-hidden'>
                    <div className={`grid grid-cols-12 ${bgCardColor} shadow-lg w-full md:w-1/3 p-4 py-10 md:p-10`}>
                        <div className="col-span-12 mb-2"> <h1 className={`font-bold ${titleColor} text-2xl`}>Electricity Details</h1></div>

                        <div className='col-span-12 text-gray-700 text-xs'>
                            <input type="checkbox" name="" id="" onChange={(e) => handleCheckbox(e)} />
                            <span className='text-red-600 font-semibold ml-2 '>Note </span> : In case, there is no Electric Connection. You have to upload Affidavit Form-I. (Please Tick)

                        </div>
                        {!isChecked && <div className='col-span-12'>
                            <div className="form-group mb-4 md:mb-6 col-span-12 mt-2">
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Electricity K. No<span className='text-red-500'>*</span></label>
                                <input
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                    onChange={e => handleElecticityKNo(e)}
                                    name="electricKno"
                                />
                                <p className='text-red-500 text-xs'>{formik.touched.electricKno && formik.errors.electricKno ? formik.errors.electricKno : null}</p>

                            </div>
                            <div className='col-span-12 text-center font-semibold text-2xl text-red-600'>or</div>
                            <div className="form-group mb-4 md:mb-6 col-span-12">
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">ACC No.<span className='text-red-500'>*</span></label>
                                <input
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                    onChange={e => handleElecticityAccNo(e)}
                                    name="electricAccNo"
                                />
                                <p className='text-red-500 text-xs'>{formik.touched.electricAccNo && formik.errors.electricAccNo ? formik.errors.electricAccNo : null}</p>

                            </div>
                            <div className="form-group mb-4 md:mb-6 col-span-12">
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">BIND/BOOK No.<span className='text-red-500'>*</span></label>
                                <input
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                    onChange={e => handleElecticityBindBookNo(e)}
                                    name="electricBindBookNo"
                                />
                                <p className='text-red-500 text-xs'>{formik.touched.electricBindBookNo && formik.errors.electricBindBookNo ? formik.errors.electricBindBookNo : null}</p>

                            </div>
                            <div className="form-group mb-4 md:mb-6 col-span-12">
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Electricity Consumer Category<span className='text-red-500'>*</span></label>
                                <select
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                    onChange={e => handleElecticityConCat(e)}
                                    name="electricConncectionCategory"
                                >
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                </select>
                                <p className='text-red-500 text-xs'>{formik.touched.electricConncectionCategory && formik.errors.electricConncectionCategory ? formik.errors.electricConncectionCategory : null}</p>

                            </div>

                        </div>}

                        {/* <div className="col-span-12 text-amber-600 font-semibold mt-4"><BiAddToQueue className="inline" /> Add Floor</div> */}
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

export default Screen5

/*
Exported to -
PropertyCitizenEntryForm.js
*/
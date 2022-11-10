//////////////////////////////////////////////////////////////////////////////////////
//    Author - Talib Hussain
//    Version - 1.0
//    Date - 02 november 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - Screen1
//    DESCRIPTION - Scrren 1 is single input component
//////////////////////////////////////////////////////////////////////////////////////

import { useState } from 'react'
import { AiFillInfoCircle } from 'react-icons/ai'
import { RiArrowDropLeftFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import Info from '../../Common/Info'
import CommonStyles from '../../IndividualRoutes/CommonStyles'
//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from '../../Styles/ThemeStyle';
import * as yup from 'yup';
import { Formik, useFormik } from 'formik'

function Screen2
    (props) {
    //destructuring predefined colors to maintain uniform theme everywhere
    const { bgHeaderColor, titleColor, nextButtonColor, nextBtnHoverColor, backButtonColor, backBtnHoverColor, bgCardColor, bgInfoColor, infoTextColor } = ThemeStyle();
    const { labelStyle, inputStyle } = CommonStyles();
    const [noticeToggle, setnoticeToggle] = useState(false);

    const { allFormDataFun } = props.values;

    const initialValues = {
        applyWith: '',
        noticeDate: '',
        noticeNo: '',
        firmEstdDate: JSON.stringify(new Date).slice(1, 11)
    }

    const validationSchema = yup.object(
        {
            applyWith: yup.number().required("This field is required !"),
            firmEstdDate: yup.date().required("This field is required !"),
            noticeNo: yup.string().when("applyWith", { is: 1, then: yup.string().required("This is a required field") }),
            noticeDate: yup.string().when("applyWith", { is: 1, then: yup.string().required("This is a required field") }),
        }
    );

    const formik = useFormik({
        initialValues: initialValues,

        onSubmit: (values) => {
            // alert(JSON.stringify(values));
            allFormDataFun("applyWith", values);
            props.nextFun();
        },
        validationSchema
    });

    const handleOnChange = (e) => {
        let name = e.target.name;
        let vals = e.target.value;

        console.log("name : " + name + "values : " + vals);
        { name === 'applyWith' && (vals == 1 ? setnoticeToggle(true) : setnoticeToggle(false)) }
    }

    console.log(noticeToggle)
    return (
        <>
            <div className='text-xs font-semibold px-2 mt-4 flex'>
                <div className="flex-1"><span onClick={props.backFun} className='border-b border-black'><RiArrowDropLeftFill className="inline text-xl" />Back</span></div>
                <div className="flex-1 text-right"><span className=''>{props?.formIndex} of 10</span></div>
            </div>
            <form onSubmit={formik.handleSubmit} onChange={handleOnChange}>
                <div className='p-2 md:p-10 flex justify-center items-center  overflow-hidden'>
                    <div className={`grid grid-cols-12 ${bgCardColor} shadow-lg w-full md:w-1/3 p-4 py-10 md:p-10`}>
                        <div className="col-span-12"> <h1 className={`font-bold ${titleColor} text-2xl`}>Apply With </h1></div>
                        <div className="col-span-12"> <h1 className={` ${titleColor} text-xs opacity-40`}>Do you have a notice no to apply with or it's a normal application. select accordingly</h1></div>
                        <div className="form-group mb-4 md:mb-6 col-span-12 mt-4 text-gray-600 font-semibold">
                            <div className=" items-center mb-4">
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold"> Apply With <span className='text-red-500'>*</span></label>
                                <select name="applyWith" className={`${inputStyle}`} value={formik.values.applyWith} onChange={formik.handleChange}>
                                    <option value="">SELECT</option>
                                    <option value="1">Notice No.</option>
                                    <option value="2">New Application</option>
                                </select>

                                <span className='text-red-500 text-xs'>{formik.touched.applyWith && formik.errors.applyWith ? formik.errors.applyWith : null}</span>
                            </div>

                            <div className={`${noticeToggle ? 'grid' : 'hidden'}`}>
                                <div className=" items-center mb-4">
                                    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold"> Notice Date. <span className='text-red-500'>*</span></label>
                                    <input type="date" name="noticeDate" className={`${inputStyle}`} value={formik.values.noticeDate} onChange={formik.handleChange} />
                                    <span className='text-red-500 text-xs'>{formik.touched.noticeDate && formik.errors.noticeDate ? formik.errors.noticeDate : null}</span>
                                </div>
                                <div className=" items-center mb-4">
                                    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold"> Notice No. <span className='text-red-500'>*</span></label>
                                    <input type="text" name="noticeNo" className={`${inputStyle}`} placeholder="Search With Notice No" value={formik.values.noticeNo} onChange={formik.handleChange} />
                                    <span className='text-red-500 text-xs'>{formik.touched.noticeNo && formik.errors.noticeNo ? formik.errors.noticeNo : null}</span>
                                </div>
                            </div>

                            <div className=" items-center mb-4">
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold"> Firm Establishment Date. <span className='text-red-500'>*</span></label>
                                <input type="date" name="firmEstdDate" className={`${inputStyle}`} placeholder="Enter Firm Estd Date" value={formik.values.firmEstdDate} onChange={formik.handleChange} max={JSON.stringify(new Date).slice(1, 11)} />
                                <span className='text-red-500 text-xs'>{formik.touched.firmEstdDate && formik.errors.firmEstdDate ? formik.errors.firmEstdDate : null}</span>
                            </div>
                        </div>

                        <div className="col-span-12 grid grid-cols-12 gap-x-6 mt-6">
                            <div className="col-span-6"> <button onClick={() => props.backFun()} type="submit" className={`shadow-lg w-full px-6 py-4 ${backButtonColor} text-white font-medium text-xs leading-tight  rounded  ${backBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}><Link to="/">Back </Link> </button></div>
                            <div className="col-span-6"> <button type="submit" className={`shadow-lg w-full px-6 py-4 ${nextButtonColor} text-white font-medium text-xs leading-tight  rounded  ${nextBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Next</button></div>
                        </div>
                    </div>

                </div>
            </form>
            <Info infoText="Maximum file size allowed is 5 MB" />
        </>
    )
}

export default Screen2

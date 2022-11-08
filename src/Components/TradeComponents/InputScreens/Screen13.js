//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Kumar Singh
//    Version - 1.0
//    Date - 03 november 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - Screen8
//    DESCRIPTION - Scrren7 is single input component
//////////////////////////////////////////////////////////////////////////////////////

import { AiFillInfoCircle } from 'react-icons/ai'
import { RiArrowDropLeftFill } from 'react-icons/ri'
//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from '../../Styles/ThemeStyle';
import Multiselect from 'multiselect-react-dropdown';
import CommonStyles from '../../IndividualRoutes/CommonStyles';
import Info from '../../Common/Info';
import { useState } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik'

function Screen13(props) {
    //destructuring predefined colors to maintain uniform theme everywhere
    const { bgHeaderColor, titleColor, nextButtonColor, nextBtnHoverColor, backButtonColor, backBtnHoverColor, bgCardColor, bgInfoColor, infoTextColor } = ThemeStyle();
    const { labelStyle, inputStyle } = CommonStyles();
    const [tocStatusToggle, settocStatusToggle] = useState(false);

    const { allFormDataFun } = props.values;

    const handleChange = () => {

    }

    const initialValues = {
        tocStatus: '',
        licenseForYears: '',
    }

    const validationSchema = yup.object(
        {
            licenseForYears: yup.string().required("This field is required !"),
        }
    );

    const formik = useFormik({
        initialValues: initialValues,

        onSubmit: (values) => {
            // alert(JSON.stringify(values));
            allFormDataFun("licenseFor",values);
            props.nextFun();
        },
        validationSchema
    });

    const handleOnChange = (e) => {
        let name = e.target.name;
        let vals = e.target.value;

        console.log("name : " + name + "values : " + vals);
        // { name === 'applyWith' && (vals == 1 ? setnoticeToggle(true) : setnoticeToggle(false)) }
    }



    return (
        <>
            <div className='text-xs font-semibold px-2 mt-4 flex'>
                <div className="flex-1"><span onClick={props.backFun} className='border-b border-black'><RiArrowDropLeftFill className="inline text-xl" />Back</span></div>
                <div className="flex-1 text-right"><span className=''>{props?.formIndex} of 10</span></div>
            </div>
            <form onSubmit={formik.handleSubmit} onChange={handleOnChange}>
                <div className='p-2 md:p-10 flex justify-center items-center  overflow-hidden'>
                    <div className={`grid grid-cols-12 ${bgCardColor} shadow-lg w-full md:w-1/3 p-4 py-10 md:p-10`}>
                        <div className="col-span-12"> <h1 className={`font-bold ${titleColor} text-2xl`}>License For Years</h1></div>
                        <div className="col-span-12"> <h1 className={` ${titleColor} text-sm opacity-40`}>Enter Number of years you require a license For.</h1></div>
                        <div className="form-group mb-2 md:mb-6 col-span-12 mt-4">
                            <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Are You Applying For tobacco ?<span className='text-red-500'>*</span></label>
                            <div className="w-full overflow-auto flex justify-evenly">
                                <p><input type="radio" name='tocStatus' value="1" className='border h-4 w-4 shadow-lg' onChange={() => settocStatusToggle(true)} /><span className='font-bold'> YES</span></p>
                                <p><input type="radio" name='tocStatus' value="0" className='border h-4 w-4 shadow-lg' onChange={() => settocStatusToggle(false)} /><span className='font-bold'> No</span></p>
                            </div>

                        </div>

                        <div className={`${tocStatusToggle ? '' : 'hidden'} form-group mb-4 md:mb-6 col-span-12 mt-4 `}>
                            <label className="form-label inline-block mb-1 text-amber-600 text-sm font-bold">NOTICE<span className='text-red-500'>*</span></label>
                            <div className="w-full overflow-auto text-sm py-2 font-mono text-gray-600  px-2 text-justify border-2 border-dashed border-amber-600 rounded">
                                <p>Any business that is involved in the selling of tobbacco products, can only take license for <span className='text-sky-400 font-extrabold text-md'> a </span>  year ! </p>
                            </div>
                            <div>
                                <label className="form-label inline-block mb-1 mt-4 text-gray-600 text-sm font-semibold">License For Years<span className='text-red-500'>*</span></label>
                                <select name="licenseForYears" id="" className={`${inputStyle} uppercase`}>
                                    <option value="1">1</option>
                                </select>
                            </div>
                        </div>

                        <div className={`${tocStatusToggle ? 'hidden' : ''} form-group mb-4 md:mb-6 col-span-12 mt-4 `}>
                            <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">License For Years<span className='text-red-500'>*</span></label>
                            <div className="w-full overflow-auto">
                                <select name="licenseForYears" id="" className={`${inputStyle} uppercase`} onChange={formik.handleChange} value={formik.values.licenseForYears} >
                                    <option value="">select</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </select>
                                <p className='text-red-500 text-xs'>{formik.touched.licenseForYears && formik.errors.licenseForYears ? formik.errors.licenseForYears : null}</p>
                            </div>

                        </div>

                        <div className="col-span-12 grid grid-cols-12 gap-x-6 mt-6">
                            <div className="col-span-6"> <button onClick={() => props.backFun()} type="button" className={`shadow-lg w-full px-6 py-4 ${backButtonColor} text-white font-medium text-xs leading-tight  rounded  ${backBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Back</button></div>
                            <div className="col-span-6"> <button type="submit" className={`shadow-lg w-full px-6 py-4 ${nextButtonColor} text-white font-medium text-xs leading-tight  rounded  ${nextBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Next</button></div>
                        </div>
                    </div>

                </div>
            </form>
            <Info infoText="In Case of tobacco the license can be taken only for a year !" />
        </>
    )
}

export default Screen13

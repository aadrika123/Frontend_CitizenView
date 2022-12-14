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
import Info from '../../Common/Info'
import CommonStyles from '../../IndividualRoutes/CommonStyles'
//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from '../../Styles/ThemeStyle'
import * as yup from 'yup';
import { useFormik } from 'formik'

function Screen8(props) {
    //destructuring predefined colors to maintain uniform theme everywhere
    const { bgHeaderColor, titleColor, nextButtonColor, nextBtnHoverColor, backButtonColor, backBtnHoverColor, bgCardColor, bgInfoColor, infoTextColor } = ThemeStyle()
    const { labelStyle, inputStyle } = CommonStyles();

    const { allFormDataFun } = props.values;

    const initialValues = {
        wardNo: '',
        newWardNo: '',
    }

    const validationSchema = yup.object(
        {
            wardNo: yup.string().required("This field is required !"),
            newWardNo: yup.string().required("This field is required !"),
        }
    );

    const formik = useFormik({
        initialValues: initialValues,

        onSubmit: (values) => {
            // alert(JSON.stringify(values));
            allFormDataFun("ward",values);
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
                        <div className="col-span-12"> <h1 className={`font-bold ${titleColor} text-2xl`}>Choose Your Ward No.</h1></div>
                        <div className="col-span-12"> <h1 className={` ${titleColor} text-sm mt-2 opacity-40`}>Provide ward details of your business ..</h1></div>
                        <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">
                            <div>
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Current Ward No.<span className='text-red-500'>*</span></label>
                                <select name="wardNo" id="wardNo" className={`${inputStyle} uppercase`} onChange={formik.handleChange} value={formik.values.wardNo}>
                                    <option value="">SELECT</option>
                                    <option value="5">1a</option>
                                    <option value="4">02</option>
                                    <option value="17">15</option>
                                </select>
                                <p className='text-red-500 text-xs'>{formik.touched.wardNo && formik.errors.wardNo ? formik.errors.wardNo : null}</p>
                            </div>
                            <div className="mt-2">
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Previous Ward No.<span className='text-red-500'>*</span></label>
                                <select name="newWardNo" id="" className={`${inputStyle} uppercase`} onChange={formik.handleChange} value={formik.values.newWardNo}>
                                    <option value="">SELECT</option>
                                    <option value="5">1a</option>
                                    <option value="4">02</option>
                                    <option value="17">15</option>
                                </select>
                                <p className='text-red-500 text-xs'>{formik.touched.wardNo && formik.errors.wardNo ? formik.errors.wardNo : null}</p>
                            </div>

                        </div>

                        <div className="col-span-12 grid grid-cols-12 gap-x-6 mt-6">
                            <div className="col-span-6"> <button onClick={() => props.backFun()} type="button" className={`shadow-lg w-full px-6 py-4 ${backButtonColor} text-white font-medium text-xs leading-tight  rounded  ${backBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Back</button></div>
                            <div className="col-span-6"> <button  type="submit" className={`shadow-lg w-full px-6 py-4 ${nextButtonColor} text-white font-medium text-xs leading-tight  rounded  ${nextBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Next</button></div>
                        </div>
                    </div>

                </div>
            </form>

            <Info infoText="The current ward No. and the previos ward No. indicates the changes that has been in the ULB'S ward System." />
        </>
    )
}

export default Screen8

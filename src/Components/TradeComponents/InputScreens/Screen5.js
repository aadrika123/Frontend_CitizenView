//////////////////////////////////////////////////////////////////////////////////////
//    Author - Talib Hussain
//    Version - 1.0
//    Date - 02 november 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - Screen1
//    DESCRIPTION - Scrren 1 is single input component
//////////////////////////////////////////////////////////////////////////////////////

import { BiAddToQueue } from 'react-icons/bi'
import { RiArrowDropLeftFill } from 'react-icons/ri'
import Info from '../../Common/Info'
import CommonStyles from '../../IndividualRoutes/CommonStyles'
//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from '../../Styles/ThemeStyle'
import * as yup from 'yup';
import { useFormik } from 'formik'

function Screen5(props) {
    //destructuring predefined colors to maintain uniform theme everywhere
    const { bgHeaderColor, titleColor, nextButtonColor, nextBtnHoverColor, backButtonColor, backBtnHoverColor, bgCardColor, bgInfoColor, infoTextColor } = ThemeStyle()
    const { labelStyle, inputStyle } = CommonStyles();

    const { allFormDataFun } = props.values;

    const initialValues = {
        firmType: ''
    }

    const validationSchema = yup.object(
        { firmType: yup.string().required("This field is required !") }
    );

    const formik = useFormik({
        initialValues: initialValues,

        onSubmit: (values) => {
            // alert(JSON.stringify(values));
            allFormDataFun("firmType",values);
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
                        <div className="col-span-12"> <h1 className={`font-bold ${titleColor} text-2xl`}>Firm Type</h1></div>
                        <div className="col-span-12"> <h1 className={` ${titleColor} text-xs opacity-40`}>Describe the type of your firm from the given below list.</h1></div>
                        {/* <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">
                        <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Enter a valid holding no to get property details<span className='text-red-500'>*</span></label>
                    </div> */}
                        <div className="form-group mb-4 md:mb-6 col-span-12 mt-4 ">
                            <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Firm Type.<span className='text-red-500'>*</span></label>
                            <select name='firmType' className={`${inputStyle} uppercase`} placeholder='Search Your Holding No.' onChange={formik.handleChange} value={formik.values.firmType}>
                                <option value="">SELECT</option>
                                <option value="1">Proprietorship</option>
                                <option value="">Partnership</option>
                                <option value="">pvt. ltd.</option>
                                <option value="">public ltd.</option>
                                <option value="">other</option>
                            </select>

                            <p className='text-red-500 text-xs'>{formik.touched.firmType && formik.errors.firmType ? formik.errors.firmType : null}</p>
                        </div>
                        {/* //////////// */}


                        {/* <div className="col-span-12 text-amber-600 font-semibold mt-4"><BiAddToQueue className="inline" /> Add Floor</div> */}
                        <div className="col-span-12 grid grid-cols-12 gap-x-6 mt-6">
                            <div className="col-span-6"> <button onClick={() => props.backFun()} type="button" className={`shadow-lg w-full px-6 py-4 ${backButtonColor} text-white font-medium text-xs leading-tight  rounded  ${backBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Back</button></div>
                            <div className="col-span-6"> <button type="submit" className={`shadow-lg w-full px-6 py-4 ${nextButtonColor} text-white font-medium text-xs leading-tight  rounded  ${nextBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Next</button></div>
                        </div>
                    </div>

                </div>
            </form>
            <Info infoText="Selecting correct type of the firm will lead to the correct evaluation of the firm and will help you ease up the process in the longer run." />
        </>
    )
}

export default Screen5
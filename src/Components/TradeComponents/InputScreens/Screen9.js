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
import CommonStyles from '../../IndividualRoutes/CommonStyles'
//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from '../../Styles/ThemeStyle'
import * as yup from 'yup';
import { useFormik } from 'formik'

function Screen9
    (props) {
    //destructuring predefined colors to maintain uniform theme everywhere
    const { bgHeaderColor, titleColor, nextButtonColor, nextBtnHoverColor, backButtonColor, backBtnHoverColor, bgCardColor, bgInfoColor, infoTextColor } = ThemeStyle()
    const { labelStyle, inputStyle } = CommonStyles();

    const { allFormDataFun } = props.values;

    const initialValues = {
        holdingNo: '',
        premisesOwner: '',
        businessAddress: '',
        landmark: '',
        pincode: '',
    }

    const validationSchema = yup.object(
        {
            holdingNo: yup.string().required("This field is required !"),
            premisesOwner: yup.string().required("This field is required !"),
            businessAddress: yup.string().required("This field is required !"),
            landmark: yup.string().required("This field is required !"),
            pincode: yup.string().required("This field is required !"),
        }
    );

    const formik = useFormik({
        initialValues: initialValues,

        onSubmit: (values) => {
            // alert(JSON.stringify(values));
            allFormDataFun("propertyDetails",values);
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
                        <div className="col-span-12"> <h1 className={`font-bold ${titleColor} text-2xl`}>Property Details</h1></div>
                        <div className="col-span-12"> <h1 className={` ${titleColor} text-xs opacity-40`}>Enter a valid holding number to get property details</h1></div>

                        <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">
                            <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Holding No.<span className='text-red-500'>*</span></label>
                            <input type="text" name='holdingNo' className={`${inputStyle}`} placeholder='Search Your Holding No.' onChange={formik.handleChange} value={formik.values.holdingNo} />

                            <p className='text-red-500 text-xs'>{formik.touched.holdingNo && formik.errors.holdingNo ? formik.errors.holdingNo : null}</p>

                        </div>
                        {/* //////////// */}

                        <div className={`form-group mb-4 md:mb-6 col-span-12 `}>
                            <div className="form-group mb-4 md:mb-6 col-span-12 ">
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Owner of Business Premises.<span className='text-red-500'>*</span></label>
                                <input type="text" name='premisesOwner' className={`${inputStyle}`} placeholder='Name of the Premises Owner.' onChange={formik.handleChange} value={formik.values.premisesOwner} />
                                <p className='text-red-500 text-xs'>{formik.touched.premisesOwner && formik.errors.premisesOwner ? formik.errors.premisesOwner : null}</p>

                            </div>

                            <div className="form-group mb-4 md:mb-6 col-span-12">
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Business Address.<span className='text-red-500'>*</span></label>
                                <input type="text" name='businessAddress' className={`${inputStyle}`} placeholder='Enter Business Address.' onChange={formik.handleChange} value={formik.values.businessAddress} />
                                <p className='text-red-500 text-xs'>{formik.touched.businessAddress && formik.errors.businessAddress ? formik.errors.businessAddress : null}</p>

                            </div>
                            <div className="form-group mb-4 md:mb-6 col-span-12 ">
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Landmark<span className='text-red-500'>*</span></label>
                                <input type="text" name='landmark' className={`${inputStyle}`} placeholder='Enter Landmark.' onChange={formik.handleChange} value={formik.values.landmark} />
                                <p className='text-red-500 text-xs'>{formik.touched.landmark && formik.errors.landmark ? formik.errors.landmark : null}</p>

                            </div>

                            <div className="form-group mb-4 md:mb-6 col-span-12 ">
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Pincode<span className='text-red-500'>*</span></label>
                                <input type="text" name='pincode' className={`${inputStyle}`} placeholder='Enter Pincode.' onChange={formik.handleChange} value={formik.values.pincode} />
                                <p className='text-red-500 text-xs'>{formik.touched.pincode && formik.errors.pincode ? formik.errors.pincode : null}</p>

                            </div>
                        </div>

                        {/* <div className="col-span-12 text-amber-600 font-semibold "><BiAddToQueue className="inline" /> Add Floor</div> */}
                        <div className="col-span-12 grid grid-cols-12 gap-x-6 mt-6">
                            <div className="col-span-6"> <button onClick={() => props.backFun()} type="button" className={`shadow-lg w-full px-6 py-4 ${backButtonColor} text-white font-medium text-xs leading-tight  rounded  ${backBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Back</button></div>
                            <div className="col-span-6"> <button  type="submit" className={`shadow-lg w-full px-6 py-4 ${nextButtonColor} text-white font-medium text-xs leading-tight  rounded  ${nextBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Next</button></div>
                        </div>
                    </div>

                </div>
            </form>

            <Info infoText="To map your premises Property Details, enter your holding no in the given field above. It will fill relevant details in the input fields." />
        </>
    )
}

export default Screen9

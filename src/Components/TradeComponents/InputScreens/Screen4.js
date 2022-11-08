//////////////////////////////////////////////////////////////////////////////////////
//    Author - Talib Hussain
//    Version - 1.0
//    Date - 02 november 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - Screen1
//    DESCRIPTION - Scrren 1 is single input component
//////////////////////////////////////////////////////////////////////////////////////

import { useFormik } from 'formik'
import { AiFillInfoCircle } from 'react-icons/ai'
import { RiArrowDropLeftFill } from 'react-icons/ri'
import Info from '../../Common/Info'
import CommonStyles from '../../IndividualRoutes/CommonStyles'
//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from '../../Styles/ThemeStyle'
import * as yup from 'yup';

function Screen4(props) {
    //destructuring predefined colors to maintain uniform theme everywhere
    const { bgHeaderColor, titleColor, nextButtonColor, nextBtnHoverColor, backButtonColor, backBtnHoverColor, bgCardColor, bgInfoColor, infoTextColor } = ThemeStyle()

    const { labelStyle, inputStyle } = CommonStyles();

    const { allFormDataFun } = props.values;

    const initialValues = {
        areaInSqft: ''
    }

    const validationSchema = yup.object(
        { areaInSqft: yup.number().required("This field is required !") }
    );

    const formik = useFormik({
        initialValues: initialValues,

        onSubmit: (values) => {
            // alert(JSON.stringify(values));
            allFormDataFun("areaInSqft",values);
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
                        <div className="col-span-12"> <h1 className={`font-bold ${titleColor} text-2xl`}>Area Of the Firm </h1></div>
                        <div className="col-span-12">
                            <h1 className={` ${titleColor} text-xs opacity-40`}>
                                What is the area of the premises, you are running your business on !
                            </h1>
                        </div>

                        <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">
                            <div className="   items-center mb-4">
                                <label for="option1" className={`${labelStyle}`}>Plot Area<span className='text-red-500'>*</span></label>
                                <input id="areaInSqft" type="number" name="areaInSqft" className={`${inputStyle}`} placeholder="Enter area in Sqft." onChange={formik.handleChange} value={formik.values.areaInSqft} />

                                <p className='text-red-500 text-xs'>{formik.touched.areaInSqft && formik.errors.areaInSqft ? formik.errors.areaInSqft : null}</p>
                            </div>
                        </div>

                        <div className="col-span-12 grid grid-cols-12 gap-x-6 mt-6">
                            <div className="col-span-6"> <button onClick={() => props.backFun()} type="submit" className={`shadow-lg w-full px-6 py-4 ${backButtonColor} text-white font-medium text-xs leading-tight  rounded  ${backBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Back</button></div>
                            <div className="col-span-6"> <button type="submit" className={`shadow-lg w-full px-6 py-4 ${nextButtonColor} text-white font-medium text-xs leading-tight  rounded  ${nextBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Next</button></div>
                        </div>
                    </div>

                </div>
            </form>
            <Info infoText="Select independent building if you're assessing for the complete constructed area of the property" />
        </>
    )
}

export default Screen4
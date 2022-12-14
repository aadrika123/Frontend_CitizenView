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
import * as yup from 'yup';


function Screen3(props) {
    //destructuring predefined colors to maintain uniform theme everywhere
    const { bgHeaderColor, titleColor, nextButtonColor, nextBtnHoverColor, backButtonColor, backBtnHoverColor, bgCardColor, bgInfoColor, infoTextColor } = ThemeStyle()

    const validationSchema = yup.object(
        {
            propertyKhataNo: yup.string().required("This is a required field !"),
            propertyPlotNo: yup.string().required("This is a required field !"),
            propertyVillageMauja: yup.string().required("This is a required field !"),
            propertyAreaOfPlot: yup.string().required("This is a required field !"),
            propertyRoadWidth: yup.string().required("This is a required field !"),
        }
    );

    const formik = useFormik({
        initialValues: {
            propertyKhataNo: '',
            propertyPlotNo: '',
            propertyVillageMauja: '',
            propertyAreaOfPlot: '',
            propertyRoadWidth: ''
        },
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            props.data("propertyDetails", values)
            props.nextFun()
        }, validationSchema
    });
    const handleKhataNo = e => formik.values.propertyKhataNo = e.target.value
    const handlePlotNo = e => formik.values.propertyPlotNo = e.target.value
    const hanldeVillage = e => formik.values.propertyVillageMauja = e.target.value
    const handleAreofPloat = e => formik.values.propertyAreaOfPlot = e.target.value
    const handleRoadWidth = e => formik.values.propertyRoadWidth = e.target.value


    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div className='text-xs font-semibold px-2 mt-4 flex'>
                    <div className="flex-1"><span onClick={props.backFun} className='border-b border-black'><RiArrowDropLeftFill className="inline text-xl" />Back</span></div>
                    <div className="flex-1 text-right"><span className=''>{props?.formIndex} of 10</span></div>
                </div>
                <div className='p-2 md:p-10 flex justify-center items-center  overflow-hidden'>
                    <div className={`grid grid-cols-12 ${bgCardColor} shadow-lg w-full md:w-1/3 p-4 py-10 md:p-10`}>
                        <div className="col-span-12"> <h1 className={`font-bold ${titleColor} text-2xl`}>Property Details</h1></div>
                        <div className="col-span-12"> <h1 className={` ${titleColor} text-sm mt-2 opacity-40`}>Provide the landmark to help us react the property location easily.</h1></div>

                        <div className="form-group md:mb-6 col-span-12 my-4">
                            <div className="form-group mb-4 md:mb-6 col-span-12 mt-1">
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Khata No<span className='text-red-500'>*</span></label>
                                <input
                                    type="text"
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                    onChange={e => handleKhataNo(e)}
                                    name="propertyKhataNo"
                                />
                                <p className='text-red-500 text-xs'>{formik.touched.propertyKhataNo && formik.errors.propertyKhataNo ? formik.errors.propertyKhataNo : null}</p>

                            </div>
                            <div className="form-group mb-4 md:mb-6 col-span-12 mt-1">
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Plot No<span className='text-red-500'>*</span></label>
                                <input
                                    type="text"
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                    onChange={e => handlePlotNo(e)}
                                    name="propertyPlotNo"
                                />
                                <p className='text-red-500 text-xs'>{formik.touched.propertyPlotNo && formik.errors.propertyPlotNo ? formik.errors.propertyPlotNo : null}</p>

                            </div>
                            <div className="form-group mb-4 md:mb-6 col-span-12 mt-1">
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Village/Mauja Name<span className='text-red-500'>*</span></label>
                                <input
                                    type="text"
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                    onChange={e => hanldeVillage(e)}
                                    name="propertyVillageMauja"
                                />
                                <p className='text-red-500 text-xs'>{formik.touched.propertyVillageMauja && formik.errors.propertyVillageMauja ? formik.errors.propertyVillageMauja : null}</p>

                            </div>
                            <div className="form-group mb-4 md:mb-6 col-span-12 mt-1">
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Area of Plot (in Decimal)<span className='text-red-500'>*</span></label>
                                <input
                                    type="text"
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                    onChange={e => handleAreofPloat(e)}
                                    name="propertyAreaOfPlot"
                                />
                                <p className='text-red-500 text-xs'>{formik.touched.propertyAreaOfPlot && formik.errors.propertyAreaOfPlot ? formik.errors.propertyAreaOfPlot : null}</p>

                            </div>
                            <div className="form-group mb-4 md:mb-6 col-span-12 mt-1">
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Road Width (in ft)<span className='text-red-500'>*</span></label>
                                <input
                                    type="text"
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                    onChange={e => handleRoadWidth(e)}
                                    name="propertyRoadWidth"
                                />
                                <p className='text-red-500 text-xs'>{formik.touched.propertyRoadWidth && formik.errors.propertyRoadWidth ? formik.errors.propertyRoadWidth : null}</p>

                            </div>
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

export default Screen3

/*
Exported to -
PropertyCitizenEntryForm.js
*/
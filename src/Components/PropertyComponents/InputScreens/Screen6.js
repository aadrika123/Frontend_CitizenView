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
//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from '../../Styles/ThemeStyle'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import * as yup from 'yup';


function Screen6(props) {
    //destructuring predefined colors to maintain uniform theme everywhere
    const { bgHeaderColor, titleColor, nextButtonColor, nextBtnHoverColor, backButtonColor, backBtnHoverColor, bgCardColor, bgInfoColor, infoTextColor } = ThemeStyle()

    const validationSchema = yup.object(
        {
            buildingPlanApproveNo: yup.string().required("This is a required field !"),
            buildingPlanApproveDate: yup.string().required("This is a required field !"),
            waterConsumerNo: yup.string().required("This is a required field !"),
            waterConnectionDate: yup.string().required("This is a required field !"),            
        }
    );

    const formik = useFormik({
        initialValues: {
            buildingPlanApproveNo:'',
            buildingPlanApproveDate:'',
            waterConsumerNo:'',
            waterConnectionDate:''
        },
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            props.data("waterDetails",values)
            props.nextFun()
        },validationSchema
    });
    const handleBuildingPlanAppNo = e => formik.values.buildingPlanApproveNo = e.target.value
    const handleBuildingPlanAppDate = e => formik.values.buildingPlanApproveDate = e.target.value
    const handleWaterConsumerNo = e => formik.values.waterConsumerNo = e.target.value
    const handleWaterConncetionDate = e => formik.values.waterConnectionDate = e.target.value

    return (
        <>

            <form onSubmit={formik.handleSubmit}>
                <div className='text-xs font-semibold px-2 mt-4 flex'>
                    <div className="flex-1"><span onClick={props.backFun} className='border-b border-black'><RiArrowDropLeftFill className="inline text-xl" />Back</span></div>
                    <div className="flex-1 text-right"><span className=''>{props?.formIndex} of 10</span></div>
                </div>
                <div className='p-2 md:p-10 flex justify-center items-center  overflow-hidden'>
                    <div className={`grid grid-cols-12 ${bgCardColor} shadow-lg w-full md:w-1/3 p-4 py-10 md:p-10`}>
                        <div className="col-span-12"> <h1 className={`font-bold ${titleColor} text-2xl`}>Water Details</h1></div>
                        <div className="col-span-12"> <h1 className={` ${titleColor} text-xs opacity-40`}>Property used only for residential purpose & there are no commerical/industrail/institutional activities in this property.</h1></div>


                        <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">
                            <div className="form-group mb-4 md:mb-6 col-span-12">
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Building Plan Approval No.</label>
                                <input
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                    onChange={e => handleBuildingPlanAppNo(e)}
                                    name="buildingPlanApproveNo"
                                />
                                <p className='text-red-500 text-xs'>{formik.touched.buildingPlanApproveNo && formik.errors.buildingPlanApproveNo ? formik.errors.buildingPlanApproveNo : null}</p>

                            </div>
                            <div className="form-group mb-4 md:mb-6 col-span-12">
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Building Plan Approval Date</label>
                                <input
                                    type="date"
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                    onChange={e => handleBuildingPlanAppDate(e)}
                                    name="buildingPlanApproveDate"
                                />
                                <p className='text-red-500 text-xs'>{formik.touched.buildingPlanApproveDate && formik.errors.buildingPlanApproveDate ? formik.errors.buildingPlanApproveDate : null}</p>

                            </div>
                            <div className="form-group mb-4 md:mb-6 col-span-12">
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Water Consumer No.</label>
                                <input
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                    onChange={e => handleWaterConsumerNo(e)}
                                    name="waterConsumerNo"
                                />
                                <p className='text-red-500 text-xs'>{formik.touched.waterConsumerNo && formik.errors.waterConsumerNo ? formik.errors.waterConsumerNo : null}</p>

                            </div>
                            <div className="form-group mb-4 md:mb-6 col-span-12">
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Water Connection Date</label>
                                <input
                                    type="date"
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                    onChange={e => handleWaterConncetionDate(e)}
                                    name="waterConnectionDate"
                                />
                                <p className='text-red-500 text-xs'>{formik.touched.waterConnectionDate && formik.errors.waterConnectionDate ? formik.errors.waterConnectionDate : null}</p>

                            </div>

                        </div>


                        <div className="col-span-12 grid grid-cols-12 gap-x-6 mt-6">
                            <div className="col-span-6"> <button onClick={() => props.backFun()} type="button" className={`shadow-lg w-full px-6 py-4 ${backButtonColor} text-white font-medium text-xs leading-tight  rounded  ${backBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Back</button></div>
                            <div className="col-span-6"> <button type="submit" className={`shadow-lg w-full px-6 py-4 ${nextButtonColor} text-white font-medium text-xs leading-tight  rounded  ${nextBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Next</button></div>
                        </div>
                    </div>

                </div>
            </form>

        </>
    )
}

export default Screen6

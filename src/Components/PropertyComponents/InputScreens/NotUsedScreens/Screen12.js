//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Kumar Singh
//    Version - 1.0
//    Date - 03 november 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - Screen12
//    DESCRIPTION - Scrren 1 is single input component
//////////////////////////////////////////////////////////////////////////////////////

import { AiFillInfoCircle } from 'react-icons/ai'
import { RiArrowDropLeftFill } from 'react-icons/ri'
//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from '../../Styles/ThemeStyle'
import { useFormik } from 'formik';


function Screen12(props) {
    //destructuring predefined colors to maintain uniform theme everywhere
    const { bgHeaderColor, titleColor, nextButtonColor, nextBtnHoverColor, backButtonColor, backBtnHoverColor, bgCardColor, bgInfoColor, infoTextColor } = ThemeStyle()

    const formik = useFormik({
        initialValues: {
            ownerName: '',
            ownerGender: '',
            ownerMobile: '',
            ownerGurdian: '',
            ownerRelation: '',
        },
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            props.data(values)
            props.nextFun()
        },
    });
    const name = e => formik.values.ownerName = e.target.value
    const gender = e => formik.values.ownerGender = e.target.value
    const mobile = e => formik.values.ownerMobile = e.target.value
    const gurdian = e => formik.values.ownerGurdian = e.target.value
    const relation = e => formik.values.ownerRelation = e.target.value

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div className='text-xs font-semibold px-2 mt-4 flex'>
                    <div className="flex-1"><span onClick={props.backFun} className='border-b border-black'><RiArrowDropLeftFill className="inline text-xl" />Back</span></div>
                    <div className="flex-1 text-right"><span className=''>{props?.formIndex} of 10</span></div>
                </div>
                <div className='p-2 md:p-10 flex justify-center items-center  overflow-hidden'>
                    <div className={`grid grid-cols-12 ${bgCardColor} shadow-lg w-full md:w-1/3 p-4 py-10 md:p-10`}>
                        <div className="col-span-12"> <h1 className={`font-bold ${titleColor} text-2xl`}>Owner Details</h1></div>
                        <div className="col-span-12"> <h1 className={` ${titleColor} text-xs opacity-40`}>Please provide information regarding the owner(s) of the property.</h1></div>
                        <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">
                            <div>
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Name<span className='text-red-500'>*</span></label>
                                <input
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                    type="text"
                                    onChange={e => name(e)}
                                    required
                                />
                            </div>

                            <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Gender<span className='text-red-500'>*</span></label>
                            <div className='flex'>
                                <div className="flex items-center mb-4 mx-2">
                                    <input type="radio" value="Male" onChange={e => gender(e)} name="gender" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="option1" className="ml-2 text-sm font-medium text-gray-900 ">Male</label>
                                </div>
                                <div className="flex items-center mb-4 mx-2">
                                    <input type="radio" value="Female" onChange={e => gender(e)} name="gender" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="option2" className="ml-2 text-sm font-medium text-gray-900 ">Female</label>
                                </div>
                                <div className="flex items-center mb-4 mx-2">
                                    <input type="radio" value="Transgender" onChange={e => gender(e)} name="gender" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="option2" className="ml-2 text-sm font-medium text-gray-900 ">Transgender</label>
                                </div>
                            </div>
                            <div>
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Mobile Number<span className='text-red-500'>*</span></label>
                                <div className='flex'>
                                    <input type="text" value="+91" readOnly className="border-r-0 rounded-r-none font-semibold block px-1 py-1.5 text-base text-gray-700 bg-gray-200 w-10 border border-solid border-gray-300 outline-none  shadow-md" />
                                    <input type="text" onChange={e => mobile(e)} className="form-control w-full border-l-0 rounded-l-none px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md" />
                                </div>
                            </div>
                            <div>
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Guardian<span className='text-red-500'>*</span></label>
                                <input type="text"  onChange={e => gurdian(e)} className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md" />
                            </div>

                            <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Relationship<span className='text-red-500'>*</span></label>
                            <div className=''>
                                <div className="flex items-center mb-4">
                                    <input type="radio" onChange={e => relation(e)} value="Husband" name="residentialType" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="option1" className="ml-2 text-sm font-medium text-gray-900 ">Husband</label>
                                </div>
                                <div className="flex items-center mb-4">
                                    <input type="radio" onChange={e => relation(e)} value="Father" name="residentialType" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="option2" className="ml-2 text-sm font-medium text-gray-900 ">Father</label>
                                </div>

                            </div>


                        </div>

                        <div className="col-span-12 grid grid-cols-12 gap-x-6 mt-6">
                            <div className="col-span-6"> <button onClick={() => props.backFun()} type="submit" className={`shadow-lg w-full px-6 py-4 ${backButtonColor} text-white font-medium text-xs leading-tight  rounded  ${backBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Back</button></div>
                            <div className="col-span-6"> <button type="submit" className={`shadow-lg w-full px-6 py-4 ${nextButtonColor} text-white font-medium text-xs leading-tight  rounded  ${nextBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Next</button></div>
                        </div>
                    </div>

                </div>
            </form>
        </>
    )
}

export default Screen12

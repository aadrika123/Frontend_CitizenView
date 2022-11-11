//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Kumar Singh
//    Version - 1.0
//    Date - 03 november 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - Screen7
//    DESCRIPTION - Scrren7 is single input component
//////////////////////////////////////////////////////////////////////////////////////

import { BiAddToQueue } from 'react-icons/bi'
import { RiArrowDropLeftFill } from 'react-icons/ri'
//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from '../../Styles/ThemeStyle'
import { useFormik } from 'formik';

function Screen7(props) {
    //destructuring predefined colors to maintain uniform theme everywhere
    const { bgHeaderColor, titleColor, nextButtonColor, nextBtnHoverColor, backButtonColor, backBtnHoverColor, bgCardColor, bgInfoColor, infoTextColor } = ThemeStyle()

    const formik = useFormik({
        initialValues: {
            ownerName: '',
            ownerGender: '',
            ownerDob: '',
            ownerGuardian: '',
            ownerRelation: '',
            ownerMobile: '',
            ownerAadhar: '',
            ownerPan: '',
            ownerEmail: '',
            ownerIsArmedForce: '',
            ownerSpeciallyAbled: '',

        },
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            props.data("ownerDetails", values)
            props.nextFun()
        },
    });
    const handleOwnerName = e => formik.values.ownerName = e.target.value
    const handleOwnerGender = e => formik.values.ownerGender = e.target.value
    const handeDob = e => formik.values.ownerDob = e.target.value
    const handleGurdianName = e => formik.values.ownerGuardian = e.target.value
    const handleRelation = e => formik.values.ownerRelation = e.target.value
    const handleMobile = e => formik.values.ownerMobile = e.target.value
    const handleAadhar = e => formik.values.ownerAadhar = e.target.value
    const handlePan = e => formik.values.ownerPan = e.target.value
    const handleEmail = e => formik.values.ownerEmail = e.target.value
    const handleIsArmedForce = e => formik.values.ownerIsArmedForce = e.target.value
    const handleSpeciallyAbled = e => formik.values.ownerSpeciallyAbled = e.target.value

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
                        <div className="col-span-12"> <h1 className={` ${titleColor} text-sm my-4 opacity-40`}>If you know the pincode of the property, provide below. It will helop us identify property location easily.</h1></div>

                        <div className="form-group md:mb-6 col-span-12 my-4">
                            <div className="form-group mb-4 md:mb-6 col-span-12">
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Owner Name</label>
                                <input
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                    type="text"
                                    name="ownerName"
                                    onChange={e => handleOwnerName(e)}
                                />
                            </div>
                            <div className="form-group mb-4 md:mb-6 col-span-12">
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Gender</label>
                                <select
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                    name="ownerGender"
                                    onChange={e => handleOwnerGender(e)}
                                >
                                    <option value="">-Select-</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className="form-group mb-4 md:mb-6 col-span-12">
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">DOB</label>
                                <input
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                    type="date"
                                    name="ownerDob"
                                    onChange={e => handeDob(e)}
                                />
                            </div>
                            <div className="form-group mb-4 md:mb-6 col-span-12">
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Gurdian Name</label>
                                <input
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                    type="text"
                                    name="ownerGuardian"
                                    onChange={e => handleGurdianName(e)}
                                />
                            </div>
                            <div className="form-group mb-4 md:mb-6 col-span-12">
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Relation</label>
                                <select
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                    type="text"
                                    name="ownerRelation"
                                    onChange={e => handleRelation(e)}
                                >
                                    <option value="S/O">S/O</option>
                                    <option value="D/O">D/O</option>
                                    <option value="C/O">C/O</option>
                                    <option value="W/O">W/O</option>
                                </select>
                            </div>
                            <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">

                                <div>
                                    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Mobile No<span className='text-red-500'>*</span></label>
                                    <input required name='ownerMobile' onChange={e => handleMobile(e)} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md" />
                                </div>
                                <div>
                                    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Aadhar No<span className='text-red-500'>*</span></label>
                                    <input required name='ownerAadhar' onChange={e => handleAadhar(e)} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md" />
                                </div>
                                <div>
                                    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">PAN No<span className='text-red-500'>*</span></label>
                                    <input required name='ownerPan' onChange={e => handlePan(e)} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md" />
                                </div>
                                <div>
                                    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Email<span className='text-red-500'>*</span></label>
                                    <input required name='ownerEmail' onChange={e => handleEmail(e)} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md" />
                                </div>

                                <div>
                                    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Is-Armed-Force?<span className='text-red-500'>*</span></label>
                                    <select
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                        name='ownerIsArmedForce'
                                        onChange={e => handleIsArmedForce(e)}
                                        required
                                    >
                                        <option value="">--Select --</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Is-Specially-Abled?<span className='text-red-500'>*</span></label>
                                    <select
                                        name='ownerSpeciallyAbled'
                                        onChange={e => handleSpeciallyAbled(e)}
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                        required
                                    >
                                        <option value="">--Select --</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>

                            </div>


                        </div>
                        <div className="col-span-12 text-amber-600 font-semibold mt-4"><BiAddToQueue className="inline" /> Add Owners</div>

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

export default Screen7

//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Kumar Singh
//    Version - 1.0
//    Date - 11 november 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - Screen7OwnerDetails
//    DESCRIPTION - Screen7OwnerDetails compomnent 
//////////////////////////////////////////////////////////////////////////////////////
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { AiFillInfoCircle } from 'react-icons/ai'
import { RiArrowDropLeftFill } from 'react-icons/ri'
import * as yup from 'yup';
import CommonStyles from '../../IndividualRoutes/CommonStyles';
//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from '../../Styles/ThemeStyle'

function Screen7OwnerDetails(props) {

    //destructuring predefined colors to maintain uniform theme everywhere
    const { bgHeaderColor, titleColor, nextButtonColor, bgCardColor, bgInfoColor, infoTextColor, backButtonColor, backBtnHoverColor, nextBtnHoverColor } = ThemeStyle()
    const { labelStyle, inputStyle } = CommonStyles();

    const validationSchema = yup.object(
        {
            ownerName: yup.string().required("This is a required field !"),
            guardianName: yup.string().required("This is a required field !"),
            mobileNo: yup.string().required("This is a required field !"),
            email: yup.string().required("This is a required field !"),
            dob: yup.string().required("This is a required field !"),
        }
    );

    const [ownerRecord, setOwnerRecord] = useState([])


    const handleRemove = (index) => {
        alert('Confirm ?');
        console.log('key ', index);
        setOwnerRecord(current =>
            current.filter(record => {
                if (current.indexOf(record) == index) {
                    console.log('value matched at ', index)
                } else {
                    // alert('current index of ct ',current.indexOf(ct))
                    return record
                }
            }),
        );
    }

    const submitRecord = () => {
        if (ownerRecord.length == 0) {
            alert("Add Atlest One Owner")
        } else {
            props.data("ownerDetails", ownerRecord)
            props.nextFun()
        }
    }

    console.log("ownerDetails", ownerRecord.length)

    const formik = useFormik({
        initialValues: {
            ownerName: '',
            gender: '',
            dob: '',
            guardianName: '',
            relation: '',
            mobileNo: '',
            aadhar: '',
            pan: '',
            email: '',
            isArmedForce: '',
            isSpeciallyAbled: '',
        },
        onSubmit: (values, { setSubmitting, resetForm }) => {
            resetForm();
            setOwnerRecord([...ownerRecord, values]);

        },
        validationSchema
    });


    // console.log("applicantList", ownerRecord)
    return (
        <>
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <div className='text-xs font-semibold px-2 mt-4 flex'>
                        <div className="flex-1"><span onClick={props.backFun} className='border-b border-black'><RiArrowDropLeftFill className="inline text-xl" />Back</span></div>
                        <div className="flex-1 text-right"><span className=''>{props?.formIndex} of 10</span></div>
                    </div>
                    <div className='p-2 md:p-10 flex justify-center items-center  overflow-hidden'>
                        <div className={`grid grid-cols-12 ${bgCardColor} shadow-lg w-full md:w-1/3 p-4 md:p-10`}>
                            <div className="col-span-12"> <h1 className={`font-bold ${titleColor} text-2xl`}>Owner Details</h1></div>
                            <div className="col-span-12 ">
                                <button type='submit' className={`${nextButtonColor} text-white shadow-lg px-4 py-1 text-xs float-right`}>Add Owner</button>
                            </div>
                            <div className="form-group mb-4 md:mb-6 col-span-12 ">
                                <div className="col-span-12">
                                    <label for="option1" className="text-sm font-medium text-gray-900 dark:text-gray-300">Owner Name</label>
                                </div>
                                <div className=" items-center mb-2">
                                    <input type="text" name="ownerName" className={`${inputStyle}`} placeholder="Enter owner name" value={formik.values.ownerName} onChange={formik.handleChange} />
                                    <p className='text-red-500 text-xs'>{formik.touched.ownerName && formik.errors.ownerName ? formik.errors.ownerName : null}</p>
                                </div>


                                <div className="col-span-12">
                                    <label for="option1" className="text-sm font-medium text-gray-900 dark:text-gray-300">Guardian Name</label>
                                </div>
                                <div className=" items-center mb-2">
                                    <input type="text" name="guardianName" className={`${inputStyle}`} placeholder="Enter Guardian name" value={formik.values.guardianName} onChange={formik.handleChange} />
                                    <p className='text-red-500 text-xs'>{formik.touched.guardianName && formik.errors.guardianName ? formik.errors.guardianName : null}</p>
                                </div>
                                <div className="col-span-12">
                                    <label for="option1" className="text-sm font-medium text-gray-900 dark:text-gray-300">Relation</label>
                                </div>
                                <div className=" items-center mb-2">
                                    <select required type="text" name="relation" className={`${inputStyle}`} placeholder="Enter owner name" value={formik.values.relation} onChange={formik.handleChange} >
                                        <option value="">--Select--</option>
                                        <option value="S/O">S/O</option>
                                        <option value="D/O">D/O</option>
                                        <option value="C/O">C/O</option>
                                        <option value="W/O">W/O</option>
                                    </select>
                                    <p className='text-red-500 text-xs'>{formik.touched.relation && formik.errors.relation ? formik.errors.relation : null}</p>
                                </div>
                                <div className="col-span-12">
                                    <label for="option1" className="text-sm font-medium text-gray-900 dark:text-gray-300">Gender</label>
                                </div>
                                <div className=" items-center mb-2">
                                    <select required type="text" name="gender" className={`${inputStyle}`} placeholder="Enter owner name" value={formik.values.gender} onChange={formik.handleChange} >
                                        <option value="">--Select--</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    <p className='text-red-500 text-xs'>{formik.touched.gender && formik.errors.gender ? formik.errors.gender : null}</p>
                                </div>

                                <div className="col-span-12">
                                    <label for="option1" className="text-sm font-medium text-gray-900 dark:text-gray-300">Date of Birth</label>
                                </div>
                                <div className=" items-center mb-2">
                                    <input type="date" name="dob" className={`${inputStyle}`} placeholder="Enter Guardian name" value={formik.values.dob} onChange={formik.handleChange} />
                                    <p className='text-red-500 text-xs'>{formik.touched.dob && formik.errors.dob ? formik.errors.dob : null}</p>
                                </div>

                                <div className="col-span-12">
                                    <label for="option1" className="text-sm font-medium text-gray-900 dark:text-gray-300">Mobile No. </label>
                                </div>
                                <div className=" items-center mb-2">
                                    <input type="text" name="mobileNo" className={`${inputStyle}`} placeholder="Enter mobile no" value={formik.values.mobileNo} onChange={formik.handleChange} />
                                    <p className='text-red-500 text-xs'>{formik.touched.mobileNo && formik.errors.mobileNo ? formik.errors.mobileNo : null}</p>

                                </div>
                                <div className="col-span-12">
                                    <label for="option1" className="text-sm font-medium text-gray-900 dark:text-gray-300">Email ID</label>
                                </div>
                                <div className=" items-center mb-2">
                                    <input type="text" name="email" className={`${inputStyle}`} placeholder="Enter email" value={formik.values.email} onChange={formik.handleChange} />
                                    <p className='text-red-500 text-xs'>{formik.touched.email && formik.errors.email ? formik.errors.email : null}</p>
                                </div>

                                <div className="col-span-12">
                                    <label for="option1" className="text-sm font-medium text-gray-900 dark:text-gray-300">Aadhar No</label>
                                </div>
                                <div className=" items-center mb-2">
                                    <input type="text" name="aadhar" className={`${inputStyle}`} placeholder="Enter Aadhar" value={formik.values.aadhar} onChange={formik.handleChange} />
                                    <p className='text-red-500 text-xs'>{formik.touched.aadhar && formik.errors.aadhar ? formik.errors.aadhar : null}</p>
                                </div>
                                <div className="col-span-12">
                                    <label for="option1" className="text-sm font-medium text-gray-900 dark:text-gray-300">PAN No</label>
                                </div>
                                <div className=" items-center mb-2">
                                    <input type="text" name="pan" className={`${inputStyle}`} placeholder="Enter PAN" value={formik.values.pan} onChange={formik.handleChange} />
                                    <p className='text-red-500 text-xs'>{formik.touched.pan && formik.errors.pan ? formik.errors.pan : null}</p>
                                </div>
                                <div className="col-span-12">
                                    <label for="option1" className="text-sm font-medium text-gray-900 dark:text-gray-300">Are You belong to Armed Forces ?</label>
                                </div>
                                <div className=" items-center mb-2 flex mt-1">
                                    <input type="radio" name="isArmedForce" className={`${inputStyle}  w-4 h-4 mr-2`} value="Yes" onChange={formik.handleChange} /> <span className='-mt-1'>Yes</span>
                                    <input type="radio" name="isArmedForce" className={`${inputStyle}  w-4 h-4 mx-2`} value="No" onChange={formik.handleChange} /> <span className='-mt-1'>No</span>
                                    <p className='text-red-500 text-xs'>{formik.touched.isArmedForce && formik.errors.isArmedForce ? formik.errors.isArmedForce : null}</p>
                                </div>
                                <div className="col-span-12">
                                    <label for="option1" className="text-sm font-medium text-gray-900 dark:text-gray-300">Are You Specially-Abled ?</label>
                                </div>
                                <div className=" items-center mb-2 flex mt-1">
                                    <input type="radio" name="isSpeciallyAbled" className={`${inputStyle}  w-4 h-4 mr-2`} value="Yes" onChange={formik.handleChange} /> <span className='-mt-1'>Yes</span>
                                    <input type="radio" name="isSpeciallyAbled" className={`${inputStyle}  w-4 h-4 mx-2`} value="No" onChange={formik.handleChange} /> <span className='-mt-1'>No</span>
                                    <p className='text-red-500 text-xs'>{formik.touched.isSpeciallyAbled && formik.errors.isSpeciallyAbled ? formik.errors.isSpeciallyAbled : null}</p>
                                </div>


                                <table class="table-auto w-full mt-4">
                                    <thead class="text-xs  text-gray-500 bg-gray-300">
                                        <tr>
                                            <th></th>
                                            <th></th>

                                            <th class="p-2">
                                                <div class=" text-center"></div>
                                            </th>
                                            <th class="p-2">
                                                <div class="">Owner Name</div>
                                            </th>
                                            <th class="p-2">
                                                <div class="">Guardian Name</div>
                                            </th>
                                            <th class="p-2">
                                                <div class="">Mobile No.</div>
                                            </th>
                                            <th class="p-2">
                                                <div class="">Email ID</div>
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody class="text-sm divide-y divide-gray-100">

                                        <>
                                            {
                                                ownerRecord.map((items, index) => (
                                                    <tr>
                                                        <td></td>
                                                        <td class="">
                                                            {/* <div class="flex justify-center">
                                                                <button type='button'  >
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-green-500 rounded-md  hover:text-green-700">
                                                                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                                                                    </svg>
                                                                </button>
                                                            </div> */}
                                                        </td>
                                                        <td class="">
                                                            <div class="flex justify-center">
                                                                <button type='button' onClick={() => handleRemove(index)} >
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-red-500 hover:text-red-700">
                                                                        <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clip-rule="evenodd" />
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </td>
                                                        <td class="p-2">
                                                            <div class="font-medium text-gray-800 text-left text-xs">
                                                                {items?.ownerName}
                                                            </div>
                                                        </td>
                                                        <td class="p-2">
                                                            <div class="text-left">
                                                                {items?.guardianName}
                                                            </div>
                                                        </td>
                                                        <td class="p-2">
                                                            <div class="text-left font-medium text-gray-800  text-xs">
                                                                {items?.mobileNo}
                                                            </div>
                                                        </td>
                                                        <td class="p-2">
                                                            <div class="font-medium text-gray-800 text-left text-xs">
                                                                {items?.email}
                                                            </div>
                                                        </td>

                                                    </tr>
                                                ))}
                                        </>
                                    </tbody>

                                </table>
                            </div>

                            <div className="col-span-12 grid grid-cols-12 gap-x-6 mt-6">
                                <div className="col-span-6"> <button onClick={() => props.backFun()} type="button" className={`shadow-lg w-full px-6 py-4 ${backButtonColor} text-white font-medium text-xs leading-tight  rounded  ${backBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Back</button></div>
                                <div className="col-span-6"> <button type="button" className={`shadow-lg w-full px-6 py-4 ${nextButtonColor} text-white font-medium text-xs leading-tight  rounded  ${nextBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`} onClick={submitRecord}>Next</button></div>
                            </div>
                        </div>

                    </div>
                    <div className='p-2 md:p-10 flex justify-center items-center  overflow-hidden'>
                        {/* <div className='p-2 relative '>
                            <div className={`absolute top-0 left-0 w-full h-full ${bgInfoColor} opacity-20`}></div>
                            <div className={`font-semibold ${infoTextColor} `}><AiFillInfoCircle className="inline" /> Info</div>
                            <div className={`text-xs ${infoTextColor} mt-2`}>Select independent build if you're assessing for the complete constructed area of the property</div>
                        </div> */}
                    </div>
                </form>
            </div>
        </>
    )
}

export default Screen7OwnerDetails
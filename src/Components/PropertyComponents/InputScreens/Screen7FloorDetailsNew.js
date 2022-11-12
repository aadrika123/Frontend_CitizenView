//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Kumar Singh
//    Version - 1.0
//    Date - 11 november 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - Screen7FloorDetailsNew
//    DESCRIPTION - Screen7FloorDetailsNew compomnent 
//////////////////////////////////////////////////////////////////////////////////////
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { AiFillInfoCircle } from 'react-icons/ai'
import { RiArrowDropLeftFill } from 'react-icons/ri'
import * as yup from 'yup';
import CommonStyles from '../../IndividualRoutes/CommonStyles';
//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from '../../Styles/ThemeStyle'

function Screen7FloorDetailsNew(props) {
    const masterData = props?.masterData;


    //destructuring predefined colors to maintain uniform theme everywhere
    const { bgHeaderColor, titleColor, nextButtonColor, bgCardColor, bgInfoColor, infoTextColor, backButtonColor, backBtnHoverColor, nextBtnHoverColor } = ThemeStyle()
    const { labelStyle, inputStyle } = CommonStyles();

    const validationSchema = yup.object(
        {
            buildupArea: yup.string().required("This is a required field !"),
            // guardianName: yup.string().required("This is a required field !"),
            // mobileNo: yup.string().required("This is a required field !"),
            // email: yup.string().required("This is a required field !"),
            dateFrom: yup.string().required("This is a required field !"),
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
        props.data("floorDetails", ownerRecord)
        props.nextFun()

    }

    const formik = useFormik({
        initialValues: {
            buildupArea: '',
            floorNo:'',
            dateFrom: '',
            dateUpto: '',
            useType: '',
            occupancyType: '',
            constructionType: '',

            // gender: '',
            // guardianName: '',
            // relation: '',
            // mobileNo: '',
            // aadhar: '',
            // pan: '',
            // email: '',
            // isArmedForce: 'no',
            // isSpeciallyAbled: 'no'
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
                    <div className='text-xs font-semibold pl-2 mt-4'><span className='border-b border-black'><RiArrowDropLeftFill className="inline text-xl" />Back</span></div>
                    <div className='p-2 md:p-10 flex justify-center items-center  overflow-hidden'>
                        <div className={`grid grid-cols-12 ${bgCardColor} shadow-lg w-full md:w-1/3 p-4 md:p-10`}>
                            <div className="col-span-12"> <h1 className={`font-bold ${titleColor} text-2xl`}>Floor Details</h1></div>
                            <div className="col-span-12 ">
                                <button type='submit' className={`${nextButtonColor} text-white shadow-lg px-4 py-1 text-xs float-right`}>Add Floor</button>
                            </div>
                            <div className="form-group mb-4 md:mb-6 col-span-12 ">

                                <div className="col-span-12">
                                    <label for="option1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Floor No</label>
                                </div>
                                <div className=" items-center mb-2">
                                    <select type="text" name="floorNo" className={`${inputStyle}`} value={formik.values.floorNo} onChange={formik.handleChange} >
                                        <option>--select--</option>
                                        {
                                            masterData?.floor_type?.map((data) => (
                                                <option value={data.id}>{data.floor_name}</option>
                                            ))
                                        }
                                    </select>
                                    <p className='text-red-500 text-xs'>{formik.touched.floorNo && formik.errors.floorNo ? formik.errors.floorNo : null}</p>
                                </div>

                                <div className="col-span-12">
                                    <label for="option1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Uses Type</label>
                                </div>
                                <div className=" items-center mb-2">
                                    <select type="text" name="useType" className={`${inputStyle}`} value={formik.values.useType} onChange={formik.handleChange} >
                                        <option>--select--</option>
                                        {
                                            masterData?.usage_type?.map((data) => (
                                                <option value={data.id}>{data.usage_type}</option>
                                            ))
                                        }
                                    </select>
                                    <p className='text-red-500 text-xs'>{formik.touched.useType && formik.errors.useType ? formik.errors.useType : null}</p>
                                </div>

                                <div className="col-span-12">
                                    <label for="option1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Occupancy Type</label>
                                </div>
                                <div className=" items-center mb-2">
                                    <select type="text" name="occupancyType" className={`${inputStyle}`} value={formik.values.occupancyType} onChange={formik.handleChange} >
                                        <option>--select--</option>
                                        {
                                            masterData?.occupancy_type?.map((data) => (
                                                <option value={data.id}>{data.occupancy_type}</option>
                                            ))
                                        }
                                    </select>
                                    <p className='text-red-500 text-xs'>{formik.touched.occupancyType && formik.errors.occupancyType ? formik.errors.occupancyType : null}</p>
                                </div>

                                <div className="col-span-12">
                                    <label for="option1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Construction Type</label>
                                </div>
                                <div className=" items-center mb-2">
                                    <select type="text" name="constructionType" className={`${inputStyle}`} value={formik.values.constructionType} onChange={formik.handleChange} >
                                        <option>--select--</option>
                                        {
                                            masterData?.construction_type?.map((data) => (
                                                <option value={data.id}>{data.construction_type}</option>
                                            ))
                                        }
                                    </select>
                                    <p className='text-red-500 text-xs'>{formik.touched.constructionType && formik.errors.constructionType ? formik.errors.constructionType : null}</p>
                                </div>


                                <div className="col-span-12">
                                    <label for="option1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Buildup Area</label>
                                </div>

                                <div className=" items-center mb-2">
                                    <input type="text" name="buildupArea" className={`${inputStyle}`} placeholder="Enter owner name" value={formik.values.buildupArea} onChange={formik.handleChange} />
                                    <p className='text-red-500 text-xs'>{formik.touched.buildupArea && formik.errors.buildupArea ? formik.errors.buildupArea : null}</p>

                                </div>

                                <div className="col-span-12">
                                    <label for="option1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Date From</label>
                                </div>
                                <div className=" items-center mb-2">
                                    <input type="date" name="dateFrom" className={`${inputStyle}`} placeholder="Enter Guardian name" value={formik.values.dateFrom} onChange={formik.handleChange} />
                                    <p className='text-red-500 text-xs'>{formik.touched.dateFrom && formik.errors.dateFrom ? formik.errors.dateFrom : null}</p>
                                </div>

                                <div className="col-span-12">
                                    <label for="option1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Date Upto</label>
                                </div>
                                <div className=" items-center mb-2">
                                    <input type="date" name="dateUpto" className={`${inputStyle}`} placeholder="Enter Guardian name" value={formik.values.dateUpto} onChange={formik.handleChange} />
                                    <p className='text-red-500 text-xs'>{formik.touched.dateUpto && formik.errors.dateUpto ? formik.errors.dateUpto : null}</p>
                                </div>

                                {/* <div className="col-span-12">
                                    <label for="option1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Guardian Name</label>
                                </div>
                                <div className=" items-center mb-2">
                                    <input type="text" name="guardianName" className={`${inputStyle}`} placeholder="Enter Guardian name" value={formik.values.guardianName} onChange={formik.handleChange} />
                                    <p className='text-red-500 text-xs'>{formik.touched.guardianName && formik.errors.guardianName ? formik.errors.guardianName : null}</p>
                                </div> */}
                                
                                {/* <div className="col-span-12">
                                    <label for="option1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mobile No. </label>
                                </div>
                                <div className=" items-center mb-2">
                                    <input type="text" name="mobileNo" className={`${inputStyle}`} placeholder="Enter mobile no" value={formik.values.mobileNo} onChange={formik.handleChange} />
                                    <p className='text-red-500 text-xs'>{formik.touched.mobileNo && formik.errors.mobileNo ? formik.errors.mobileNo : null}</p>

                                </div>
                                <div className="col-span-12">
                                    <label for="option1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email ID</label>
                                </div>
                                <div className=" items-center mb-2">
                                    <input type="text" name="email" className={`${inputStyle}`} placeholder="Enter email" value={formik.values.email} onChange={formik.handleChange} />
                                    <p className='text-red-500 text-xs'>{formik.touched.email && formik.errors.email ? formik.errors.email : null}</p>
                                </div> */}


                                <table class="table-auto w-full mt-4">
                                    <thead class="text-xs  text-gray-500 bg-gray-300">
                                        <tr>
                                            <th></th>
                                            <th></th>

                                            <th class="p-2">
                                                <div class=" text-center"></div>
                                            </th>
                                            <th class="p-2">
                                                <div class="">Buildup Area</div>
                                            </th>
                                            <th class="p-2">
                                                <div class="">Floor No</div>
                                            </th>
                                            <th class="p-2">
                                                <div class="">Date From</div>
                                            </th>
                                            <th class="p-2">
                                                <div class="">Date Upto</div>
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
                                                                {items?.buildupArea}
                                                            </div>
                                                        </td>
                                                        <td class="p-2">
                                                            <div class="text-left">
                                                                {items?.floorNo}
                                                            </div>
                                                        </td>
                                                        <td class="p-2">
                                                            <div class="text-left font-medium text-gray-800  text-xs">
                                                                {items?.dateFrom}
                                                            </div>
                                                        </td>
                                                        <td class="p-2">
                                                            <div class="font-medium text-gray-800 text-left text-xs">
                                                                {items?.dateUpto}
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

export default Screen7FloorDetailsNew
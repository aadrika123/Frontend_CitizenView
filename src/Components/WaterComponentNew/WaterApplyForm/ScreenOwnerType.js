//////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 04 november 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - ScreenOwnerType
//    DESCRIPTION - ScreenOwnerType compomnent 
//////////////////////////////////////////////////////////////////////////////////////
import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { AiFillInfoCircle } from 'react-icons/ai'
import { RiArrowDropLeftFill } from 'react-icons/ri'
import * as yup from 'yup';
import CommonStyles from '../../IndividualRoutes/CommonStyles';
//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from '../../Styles/ThemeStyle'
import CitizenApplyApiList from '../CitizenViewWaterApiList';
import axios from 'axios';

function ScreenOwnerType(props) {

    //destructuring predefined colors to maintain uniform theme everywhere
    const { bgHeaderColor, titleColor, nextButtonColor, bgCardColor, bgInfoColor, infoTextColor, backButtonColor, backBtnHoverColor, nextBtnHoverColor } = ThemeStyle()

    const { labelStyle, inputStyle } = CommonStyles();

    const { api_getOwnerType } = CitizenApplyApiList()
    const [ownerTypeData, setOwnerTypeData] = useState()




    {/********* Get Owner Type Master Data  ************/ }
    useEffect(() => {

        // let token = window.localStorage.getItem('token')
        let token = '1402|aVxsPywaSl44Fgh1cTmHg0rit2Abgl2zHZJ8JAF1'
        console.log('token at basic details is  get method...', token)
        const header = {
            headers:
            {
                Authorization: `Bearer ${token}`,
                Accept: 'application/json',
            }
        }

        axios.get(`${api_getOwnerType}`, header)
            .then(function (response) {
                console.log('Owner Type....', response.data.data)
                setOwnerTypeData(response.data.data)
            })
            .catch(function (error) {
                console.log('errorrr.... ', error);
            })
    }, [])

    console.log("Owner Type data", ownerTypeData)

    const validationSchema = yup.object(
        {
            typeOfOwner: yup.string().required("This is a required field !"),

        }
    );
    const formik = useFormik({
        initialValues: {
            typeOfOwner: '',
        },
        onSubmit: values => {
            props.CollectScreenDataFun("ownerType", values)
            props.nextFun(5)
            console.log("ownerType ", values)
        },
        validationSchema
    });


    return (
        <>
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <div className='text-xs font-semibold pl-2 mt-4'><span className='border-b border-black'><RiArrowDropLeftFill className="inline text-xl" />Back</span></div>
                    <div className='p-2 md:p-10 flex justify-center items-center  overflow-hidden'>
                        <div className={`grid grid-cols-12 ${bgCardColor} shadow-lg w-full md:w-1/3 p-4 md:p-10`}>
                            <div className="col-span-12"> <h1 className={`font-bold ${titleColor} text-2xl`}>OwnerType </h1></div>
                            {/* <div className="col-span-12"> <h1 className={` ${titleColor} text-xs opacity-40`}>Do you have a notice no to apply with or it's a normal application. select accordingly</h1></div> */}
                            <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">
                                <div className="form-group mb-4 md:mb-6 col-span-12 mt-4 text-gray-600 font-semibold">
                                    <div className={``}>
                                        <select name="typeOfOwner" className={`${inputStyle}`} value={formik.values.typeOfOwner} onChange={formik.handleChange}>
                                            <option value="">SELECT</option>
                                            {ownerTypeData?.map((data) => (
                                                <option value={data.id}>{data.owner_type}</option>
                                            ))}
                                        </select>
                                        <p className='text-red-500 text-xs'>{formik.touched.typeOfOwner && formik.errors.typeOfOwner ? formik.errors.typeOfOwner : null}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-12 grid grid-cols-12 gap-x-6 mt-6">
                                <div className="col-span-6"> <button onClick={() => props.backFun()} type="button" className={`shadow-lg w-full px-6 py-4 ${backButtonColor} text-white font-medium text-xs leading-tight  rounded  ${backBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Back</button></div>
                                <div className="col-span-6"> <button type="submit" className={`shadow-lg w-full px-6 py-4 ${nextButtonColor} text-white font-medium text-xs leading-tight  rounded  ${nextBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Next</button></div>
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

export default ScreenOwnerType
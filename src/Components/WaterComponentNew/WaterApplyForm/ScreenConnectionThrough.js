//////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 04 november 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - ScreenConnectionThrough
//    DESCRIPTION - ScreenConnectionThrough compomnent 
//////////////////////////////////////////////////////////////////////////////////////
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { AiFillInfoCircle } from 'react-icons/ai'
import { RiArrowDropLeftFill } from 'react-icons/ri'
import * as yup from 'yup';
import CommonStyles from '../../IndividualRoutes/CommonStyles';
//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from '../../Styles/ThemeStyle'

function ScreenConnectionThrough(props) {

    //destructuring predefined colors to maintain uniform theme everywhere
    const { bgHeaderColor, titleColor, nextButtonColor, bgCardColor, bgInfoColor, infoTextColor, backButtonColor, backBtnHoverColor, nextBtnHoverColor } = ThemeStyle()
    const { labelStyle, inputStyle } = CommonStyles();
    const [connThroughHolding, setConnThroughHolding] = useState()
    const [connThroughSaf, setConnThroughSaf] = useState()

    const validationSchema = yup.object(
        {
            connectionThrough: yup.string().required(),
        }
    );

    const formik = useFormik({
        initialValues: {
            connectionThrough: '',
            holdingNo: '',
            safNo: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            props.CollectScreenDataFun("screen value to be passed 1", values)
            props.nextFun()
            console.log("ScreenConnThrough value 2", values)
        },
        validationSchema
    });

    const handleOnChange = (e) => {
        let name = e.target.name;
        let vals = e.target.value;

        console.log("name : " + name + "values : " + vals);
        { name === 'connectionThrough' && (vals == 1 ? setConnThroughHolding(true) : setConnThroughHolding(false)) }
        { name === 'connectionThrough' && (vals == 2 ? setConnThroughSaf(true) : setConnThroughSaf(false)) }
    }

    return (
        <>
            <div>
                <form onSubmit={formik.handleSubmit} onChange={handleOnChange}>
                    <div className='text-xs font-semibold pl-2 mt-4'><span className='border-b border-black'><RiArrowDropLeftFill className="inline text-xl" />Back</span></div>
                    <div className='p-2 md:p-10 flex justify-center items-center  overflow-hidden'>
                        <div className={`grid grid-cols-12 ${bgCardColor} shadow-lg w-full md:w-1/3 p-4 md:p-10`}>
                            <div className="col-span-12"> <h1 className={`font-bold ${titleColor} text-2xl`}>Connection Through</h1></div>
                            <div className="col-span-12"> <h1 className={` ${titleColor} text-xs opacity-40`}>Do you have a notice no to apply with or it's a normal application. select accordingly</h1></div>
                            <div className="form-group mb-4 md:mb-6 col-span-12 mt-4 text-gray-600 font-semibold">
                                <div className={``}>
                                    <div className="col-span-12"> <h1 className={` ${titleColor} text-md`}>Connection Through</h1></div>
                                    <select name="connectionThrough" className={`${inputStyle}`} value={formik.values.connectionThrough} onChange={formik.handleChange}>
                                        <option value="">SELECT</option>
                                        <option value="1">Holding Proof</option>
                                        <option value="2">SAF</option>
                                        <option value="3">ID Proof</option>
                                    </select>
                                </div>
                            </div>
                            <div className={`form-group mb-4 md:mb-6 col-span-12 mt-4 text-gray-600 font-semibold ${connThroughHolding ? 'grid' : 'hidden'}`}>
                                <div className={``}>
                                    <div className="col-span-12"> <h1 className={` ${titleColor} text-md`}>Holding No</h1></div>
                                    <input type="text" name="holdingNo" className={`${inputStyle}`} placeholder="Search With Holding No" value={formik.values.holdingNo} onChange={formik.handleChange} />
                                </div>
                            </div>

                      
                            <div className={`form-group mb-4 md:mb-6 col-span-12 mt-4 text-gray-600 font-semibold ${connThroughSaf ? 'grid' : 'hidden'}`}>
                                <div className=" items-center mb-4">
                                    <div className="col-span-12"> <h1 className={` ${titleColor} text-md`}>SAF</h1></div>
                                    <input type="text" name="safNo" className={`${inputStyle} `} placeholder="Search With SAF No" value={formik.values.safNo} onChange={formik.handleChange} />
                                </div>
                            </div>



                            <div className="col-span-12 grid grid-cols-12 gap-x-6 mt-6">
                                <div className="col-span-6"> <button onClick={() => props.backFun()} type="submit" className={`shadow-lg w-full px-6 py-4 ${backButtonColor} text-white font-medium text-xs leading-tight  rounded  ${backBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Back</button></div>
                                <div className="col-span-6"> <button type="submit" className={`shadow-lg w-full px-6 py-4 ${nextButtonColor} text-white font-medium text-xs leading-tight  rounded  ${nextBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Next</button></div>
                            </div>
                        </div>

                    </div>

                    <div className='p-2 md:p-10 flex justify-center items-center  overflow-hidden'>
                        <div className='p-2 relative '>
                            <div className={`absolute top-0 left-0 w-full h-full ${bgInfoColor} opacity-20`}></div>
                            <div className={`font-semibold ${infoTextColor} `}><AiFillInfoCircle className="inline" /> Info</div>
                            <div className={`text-xs ${infoTextColor} mt-2`}>Select independent build if you're assessing for the complete constructed area of the property</div>
                        </div>
                    </div>
                </form>
            </div>

        </>
    )
}

export default ScreenConnectionThrough
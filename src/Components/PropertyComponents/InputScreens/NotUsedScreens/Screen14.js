//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Kumar Singh
//    Version - 1.0
//    Date - 03 november 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - Screen14
//    DESCRIPTION - Scrren7 is single input component
//////////////////////////////////////////////////////////////////////////////////////

import { AiFillInfoCircle } from 'react-icons/ai'
import { RiArrowDropLeftFill } from 'react-icons/ri'
//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from '../../Styles/ThemeStyle'
import { useFormik } from 'formik';
import { useState } from 'react';


function Screen14(props) {
    const [hideProAddress, setHideProAddress] = useState();
    const [isRequired, setIsRequired] = useState()
    //destructuring predefined colors to maintain uniform theme everywhere
    const { bgHeaderColor, titleColor, nextButtonColor, nextBtnHoverColor, backButtonColor, backBtnHoverColor, bgCardColor, bgInfoColor, infoTextColor } = ThemeStyle()

    const formik = useFormik({
        initialValues: {
            ownerAddress: '',
            sameAsPropertyAddress: false,
            propertyAddress: ''
        },
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            props.data(values)
            props.nextFun()
        },
    });
    const handleOwnerAddress = e => formik.values.ownerAddress = e.target.value
    // const handleSameAsPropertyAddress = e => formik.values.sameAsPropertyAddress = e.target.checked

    const handleSameAsPropertyAddress = (e) => {
        // console.log("Working", e)
        formik.values.sameAsPropertyAddress = e.target.checked
        if(e.target.checked){
            setHideProAddress("hidden")
            setIsRequired()
        }else{
            setHideProAddress()
            setIsRequired("required")
        }
    }


    const handlePropertyAddress = e => formik.values.propertyAddress = e.target.value

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div className='text-xs font-semibold px-2 mt-4 flex'>
                    <div className="flex-1"><span onClick={props.backFun} className='border-b border-black'><RiArrowDropLeftFill className="inline text-xl" />Back</span></div>
                    <div className="flex-1 text-right"><span className=''>{props?.formIndex} of 10</span></div>
                </div>
                <div className='p-2 md:p-10 flex justify-center items-center  overflow-hidden'>
                    <div className={`grid grid-cols-12 ${bgCardColor} shadow-lg w-full md:w-1/3 p-4 py-10 md:p-10`}>
                        <div className="col-span-12"> <h1 className={`font-bold ${titleColor} text-2xl`}>Owner's Address</h1></div>
                        <div className="col-span-12"> <h1 className={` ${titleColor} text-sm mt-2 opacity-40`}>Provide the landmark to help us react the property location easily.</h1></div>
                        <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">
                            <div>
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Owner Address<span className='text-red-500'>*</span></label>
                                <textarea required onChange={e => handleOwnerAddress(e)} name="ownerAddress" rows="3" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"></textarea>
                            </div>
                            <div className='my-3'>
                                <input onChange={e => handleSameAsPropertyAddress(e)} type="checkbox" name="sameAsPropertyAddress" className='h-6 w-6' />
                                <span className='font-semibold'> Same As Property Address</span>
                            </div>
                            <div className={`${hideProAddress}`}>
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Property Address<span className='text-red-500'>*</span></label>
                                <textarea isRequired onChange={e => handlePropertyAddress(e)} name="propertyAddress" rows="3" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"></textarea>
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

export default Screen14

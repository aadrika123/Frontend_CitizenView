//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Kumar Singh
//    Version - 1.0
//    Date - 03 november 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - Screen16
//    DESCRIPTION - Scrren7 is single input component
//////////////////////////////////////////////////////////////////////////////////////

import { AiFillInfoCircle } from 'react-icons/ai'
import { RiArrowDropLeftFill } from 'react-icons/ri'
import { BiEdit } from 'react-icons/bi'
//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from '../../Styles/ThemeStyle'
import { useState } from 'react'
import axios from 'axios'
import { RotatingLines } from 'react-loader-spinner'
import PropertyApiList from '../PropertyApiList'

function Screen16(props) {
    const [disableBtn, setDisableBtn] = useState(true)
    const [btnOpacity, setBtnOpacity] = useState("opacity-50")
    const [formsubmitLoder, setFormsubmitLoder] = useState(false)
    const [generatedSafNo, setGeneratedSafNo] = useState()
    //destructuring predefined colors to maintain uniform theme everywhere
    const { bgHeaderColor, titleColor, nextButtonColor, nextBtnHoverColor, backButtonColor, backBtnHoverColor, bgCardColor, bgInfoColor, infoTextColor } = ThemeStyle()
const {propertySafApply} = PropertyApiList();


    const bearer = "1478|vGZADnTinTHsaluolnVXrh5wQiR2PaIJeAMzBz9k";

    const header = {
        headers: {
            Authorization: `Bearer ${bearer}`,
            Accept: 'application/json',
        }
    }


    const handelChecked = (e) => {
        console.log("This is chedked", e)
        if (e) {
            setDisableBtn(false)
            setBtnOpacity()
        } else {
            setDisableBtn(true)
            setBtnOpacity("opacity-50")
        }
    }

    const datadf = {
        "assessmentType": "NewAssessment",
        "ward": 50,
        "propertyType": 1,
        "ownershipType": 1,
        "roadType": 41.111,
        "areaOfPlot": 3228,
        "isMobileTower": 0,
        "towerArea": 222.1,
        "towerInstallationDate": "2017-01-04",
        "isHoardingBoard": 0,
        "isPetrolPump": 0,
        "landOccupationDate": "2022-09-01",
        "isWaterHarvesting": 1,
        "previousHoldingId": 0,
        "holdingNo": "sadf474"
    }

    const formSubmit = () => {
        console.log("Form Submitting start..")
        setFormsubmitLoder(true)

        axios.post(propertySafApply, props.payloadData, header)
            .then(function (response) {
                if (response.data.status) {
                    console.log("Form Submitted succesfully.", response.data)
                    setFormsubmitLoder(false)
                    setGeneratedSafNo(response.data.data.safNo)
                    props.data(response.data.data.safNo)
                    props.nextFun()
                }else{
                    console.log("Something went wrong, Bacend Exception :- ", response)
                    setFormsubmitLoder(false)
                    alert("Backend Error")
                }
            })
            .catch(function (error) {
                console.log("Failed to Submit form Data", error);
                setFormsubmitLoder(false)
            });

    }


    return (
        <>
            <div className='text-xs font-semibold px-2 mt-4 flex'>
                <div className="flex-1"><span onClick={props.backFun} className='border-b border-black'><RiArrowDropLeftFill className="inline text-xl" />Back</span></div>
                <div className="flex-1 text-right"><span className=''>{props?.formIndex} of 10</span></div>
            </div>
            <div className='p-2 md:p-10 flex justify-center items-center  overflow-hidden'>
                <div className={`grid grid-cols-12 ${bgCardColor} shadow-lg w-full md:w-1/3 p-4 py-10 md:p-10`}>
                    <div className="col-span-12"> <h1 className={`font-bold ${titleColor} text-2xl`}>Review Your Answers</h1></div>
                    <div className="col-span-12"> <h1 className={` ${titleColor} text-sm mt-2 opacity-40`}>If you want to modify any value, click on change in the respected step. It will redirect you to the concerned step where you can make your changes.</h1></div>
                    <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">
                        <div className='grid grid-cols-12'>
                            <div className='col-span-5 leading-8'>
                                <label className="form-label inline-block mb-1 text-gray-600 text-base font-semibold">Property Address</label>
                                <label className="form-label inline-block mb-1 text-gray-600 text-base font-semibold">Proof of Address</label>
                                <label className="form-label inline-block mb-1 text-gray-600 text-base font-semibold">Type of Ownership</label>
                                <label className="form-label inline-block mb-1 text-gray-600 text-base font-semibold">Name</label>
                                <label className="form-label inline-block mb-1 text-gray-600 text-base font-semibold">Gender</label>
                                <label className="form-label inline-block mb-1 text-gray-600 text-base font-semibold">Mobile Number</label>
                                <label className="form-label inline-block mb-1 text-gray-600 text-base font-semibold">Gurdian</label>
                                <label className="form-label inline-block mb-1 text-gray-600 text-base font-semibold">Relationship</label>
                                <label className="form-label inline-block mb-1 text-gray-600 text-base font-semibold">Special Owner category</label>
                                <label className="form-label inline-block mb-1 text-gray-600 text-base font-semibold">Owner's Address</label>
                                <label className="form-label inline-block mb-1 text-gray-600 text-base font-semibold">Same As Property</label>
                                <label className="form-label inline-block mb-1 text-gray-600 text-base font-semibold">Proof of Identity</label>
                                <label className="form-label inline-block mb-1 text-gray-700 text-lg font-semibold">Property Details</label>
                                <label className="form-label inline-block mb-1 text-gray-600 text-base font-semibold">Residental Property</label>
                                <label className="form-label inline-block mb-1 text-gray-600 text-base font-semibold">Type of Property</label>
                                <label className="form-label inline-block mb-1 text-gray-600 text-base font-semibold">No of Floors</label>
                                <label className="form-label inline-block mb-1 text-gray-600 text-base font-semibold">No of Basements</label>
                                <label className="form-label inline-block mb-1 text-gray-600 text-base font-semibold">Plot Size(sq)</label>
                                <label className="form-label inline-block mb-1 text-gray-700 text-lg font-semibold">Ground Floor Details</label>
                                <label className="form-label inline-block mb-1 text-gray-600 text-base font-semibold">Plot Size(sq)</label>

                            </div>
                            <div className='col-span-6 leading-8'>
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Property Address</label>
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Proof of Address</label>
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Type of Ownership</label>
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">{props.data?.ownerDetails?.ownerName}</label>
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">{props.data?.ownerDetails?.ownerGender}</label>
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Mobile Number</label>
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Gurdian</label>
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Relationship</label>
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Special Owner category</label>
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Owner's Address</label>
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Same As Property</label>
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Proof of Identity</label>


                            </div>
                            <div className='col-span-1 leading-8'>
                                <BiEdit size={20} fill="green" className='cursor-pointer mt-1 hover:bg-gray-300 rounded-full' />
                                <BiEdit size={20} fill="green" className='cursor-pointer mt-1 hover:bg-gray-300 rounded-full' />
                                <BiEdit size={20} fill="green" className='cursor-pointer mt-1 hover:bg-gray-300 rounded-full' />
                                <BiEdit size={20} fill="green" className='cursor-pointer mt-1 hover:bg-gray-300 rounded-full' />
                                <BiEdit size={20} fill="green" className='cursor-pointer mt-1 hover:bg-gray-300 rounded-full' />
                                <BiEdit size={20} fill="green" className='cursor-pointer mt-1 hover:bg-gray-300 rounded-full' />
                                <BiEdit size={20} fill="green" className='cursor-pointer mt-1 hover:bg-gray-300 rounded-full' />
                                <BiEdit size={20} fill="green" className='cursor-pointer mt-1 hover:bg-gray-300 rounded-full' />
                                <BiEdit size={20} fill="green" className='cursor-pointer mt-1 hover:bg-gray-300 rounded-full' />
                                <BiEdit size={20} fill="green" className='cursor-pointer mt-1 hover:bg-gray-300 rounded-full' />
                                <BiEdit size={20} fill="green" className='cursor-pointer mt-1 hover:bg-gray-300 rounded-full' />
                                <BiEdit size={20} fill="green" className='cursor-pointer mt-1 hover:bg-gray-300 rounded-full' />
                                <BiEdit size={20} fill="green" className='cursor-pointer mt-1 hover:bg-gray-300 rounded-full' />
                                <BiEdit size={20} fill="green" className='cursor-pointer mt-1 hover:bg-gray-300 rounded-full' />
                                <BiEdit size={20} fill="green" className='cursor-pointer mt-1 hover:bg-gray-300 rounded-full' />
                                <BiEdit size={20} fill="green" className='cursor-pointer mt-1 hover:bg-gray-300 rounded-full' />
                                <BiEdit size={20} fill="green" className='cursor-pointer mt-1 hover:bg-gray-300 rounded-full' />
                                <BiEdit size={20} fill="green" className='cursor-pointer mt-1 hover:bg-gray-300 rounded-full' />
                                <BiEdit size={20} fill="green" className='cursor-pointer mt-1 hover:bg-gray-300 rounded-full' />
                            </div>
                        </div>

                        <div>
                            <input type="checkbox" name="" onChange={e => handelChecked(e.target.checked)} className='w-5 h-5 m-1' />
                            <span>I have declare and affirm that the above furnished information is true and correct and nothing has been correct.. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quam!</span>
                        </div>
                    </div>
                    <div className='mx-36'>
                        <RotatingLines
                            strokeColor="#e87f0e"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="40"
                            visible={formsubmitLoder}
                        />
                    </div>
                    {!formsubmitLoder &&
                        <div className="col-span-12 grid grid-cols-12 gap-x-6 mt-6">
                            <div className="col-span-6"> <button onClick={() => props.backFun()} type="button" className={`shadow-lg w-full px-6 py-4 ${backButtonColor} text-white font-medium text-xs leading-tight  rounded  ${backBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Back</button></div>
                            <div className="col-span-6"> <button disabled={disableBtn} onClick={formSubmit} className={` ${btnOpacity} shadow-lg w-full px-6 py-4 ${nextButtonColor} text-white font-medium text-xs leading-tight  rounded  ${nextBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Submit</button></div>
                        </div>
                    }
                </div>

            </div>
        </>
    )
}

export default Screen16

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
import FeedbackScreen from './FeedbackScreen'

function Screen16(props) {
    const [disableBtn, setDisableBtn] = useState(true)
    const [btnOpacity, setBtnOpacity] = useState("opacity-50")
    const [formsubmitLoder, setFormsubmitLoder] = useState(false)
    const [generatedSafNo, setGeneratedSafNo] = useState()
    //destructuring predefined colors to maintain uniform theme everywhere
    const { bgHeaderColor, titleColor, nextButtonColor, nextBtnHoverColor, backButtonColor, backBtnHoverColor, bgCardColor, bgInfoColor, infoTextColor } = ThemeStyle()
    const { propertySafApply, bearer } = PropertyApiList();


    // const bearer = "1478|vGZADnTinTHsaluolnVXrh5wQiR2PaIJeAMzBz9k";

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
                } else {
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
            <div className='overflow-hidden'>
                <div className={`grid grid-cols-12 ${bgCardColor} shadow-lg w-full md:w-1/3 p-1 py-5 md:p-10`}>
                    <div className="col-span-12"> <h1 className={`font-bold ${titleColor} text-2xl text-center`}>Review Your Answers</h1></div>
                   
                   
                    <div className="form-group mb-4 md:mb-6 col-span-12 mt-2">
                        <FeedbackScreen payloadData={props?.payloadData} />
                       

                        

                        <div className='m-5'>
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
                        <div className="col-span-12 grid grid-cols-12 gap-x-6 mt-0 mb-10 m-5">
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

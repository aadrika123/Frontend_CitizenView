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
import Info from '../../Common/Info'
//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from '../../Styles/ThemeStyle'
import { useFormik } from 'formik';


function Screen4(props) {
    //destructuring predefined colors to maintain uniform theme everywhere
    const { bgHeaderColor, titleColor, nextButtonColor, nextBtnHoverColor, backButtonColor, backBtnHoverColor, bgCardColor, bgInfoColor, infoTextColor } = ThemeStyle()

    const formik = useFormik({
        initialValues: {
            numberOfBasements: '',
        },
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            props.data(values)
            props.nextFun()
        },
    });
    const handleRadioButtons = e => formik.values.numberOfBasements = e.target.value

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div className='text-xs font-semibold px-2 mt-4 flex'>
                    <div className="flex-1"><span onClick={props.backFun} className='border-b border-black'><RiArrowDropLeftFill className="inline text-xl" />Back</span></div>
                    <div className="flex-1 text-right"><span className=''>{props?.formIndex} of 10</span></div>
                </div>
                <div className='p-2 md:p-10 flex justify-center items-center  overflow-hidden'>
                    <div className={`grid grid-cols-12 ${bgCardColor} shadow-lg w-full md:w-1/3 p-4 py-10 md:p-10`}>
                        <div className="col-span-12"> <h1 className={`font-bold ${titleColor} text-2xl`}>Number of Basements</h1></div>
                        


                        <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">
                            <div className="flex items-center mb-4">
                                <input
                                    className="w-6 h-6"
                                    type="radio"
                                    id="noBasement"
                                    name="group"
                                    value="noBasement"
                                    onChange={e => handleRadioButtons(e)}
                                    required
                                />
                                <span htmlFor="noBasement" className="ml-2 text-sm font-medium text-gray-900 ">No Basement</span>
                            </div>
                            <div className="flex items-center mb-4">
                                <input
                                    className="w-6 h-6"
                                    type="radio"
                                    id="1Basement"
                                    name="group"
                                    value="1Basement"
                                    onChange={e => handleRadioButtons(e)}
                                />
                                <span htmlFor="1Basement" className="ml-2 text-sm font-medium text-gray-900 ">1 Basement</span>
                            </div>
                            <div className="flex items-center mb-4">
                                <input
                                    className="w-6 h-6"
                                    type="radio"
                                    id="2Basement"
                                    name="group"
                                    value="2Basement"
                                    onChange={e => handleRadioButtons(e)}
                                />
                                <span htmlFor="2Basement" className="ml-2 text-sm font-medium text-gray-900 ">2 Basement</span>
                            </div>
                        </div>

                        <div className="col-span-12 grid grid-cols-12 gap-x-6 mt-6">
                            <div className="col-span-6"> <button onClick={() => props.backFun()} type="submit" className={`shadow-lg w-full px-6 py-4 ${backButtonColor} text-white font-medium text-xs leading-tight  rounded  ${backBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Back</button></div>
                            <div className="col-span-6"> <button type="submit" className={`shadow-lg w-full px-6 py-4 ${nextButtonColor} text-white font-medium text-xs leading-tight  rounded  ${nextBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Next</button></div>
                        </div>
                    </div>

                </div>
                <Info infoText="Select independent building if you're assessing for the complete constructed area of the property" />
            </form>
        </>
    )
}

export default Screen4

/*
Exported to -
PropertyCitizenEntryForm.js
*/
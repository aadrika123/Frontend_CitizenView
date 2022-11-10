//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Kumar Singh
//    Version - 1.0
//    Date - 03 november 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - Screen11
//    DESCRIPTION - Scrren 1 is single input component
//////////////////////////////////////////////////////////////////////////////////////

import { AiFillInfoCircle } from 'react-icons/ai'
import { RiArrowDropLeftFill } from 'react-icons/ri'
//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from '../../Styles/ThemeStyle'
import { useFormik } from 'formik';


function Screen11(props) {
    //destructuring predefined colors to maintain uniform theme everywhere
    const { bgHeaderColor, titleColor, nextButtonColor, nextBtnHoverColor, backButtonColor, backBtnHoverColor, bgCardColor, bgInfoColor, infoTextColor } = ThemeStyle()

    const formik = useFormik({
        initialValues: {
            ownerType: '',
        },
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            props.data(values)
            props.nextFun()
        },
    });
    const handleRadioButtons = e => formik.values.ownerType = e.target.value

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div className='text-xs font-semibold px-2 mt-4 flex'>
                    <div className="flex-1"><span onClick={props.backFun} className='border-b border-black'><RiArrowDropLeftFill className="inline text-xl" />Back</span></div>
                    <div className="flex-1 text-right"><span className=''>{props?.formIndex} of 10</span></div>
                </div>
                <div className='p-2 md:p-10 flex justify-center items-center  overflow-hidden'>
                    <div className={`grid grid-cols-12 ${bgCardColor} shadow-lg w-full md:w-1/3 p-4 py-10 md:p-10`}>
                        <div className="col-span-12"> <h1 className={`font-bold ${titleColor} text-2xl`}>Provide Owner Details.</h1></div>
                        <div className="col-span-12"> <h1 className={` ${titleColor} text-xs opacity-40`}>Choose the type of ownership of the property form the options gien below.</h1></div>



                        <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">
                            <div className="flex items-center mb-4">
                                <input
                                    className="w-6 h-6"
                                    type="radio"
                                    id="IndependentBuilding"
                                    name="group"
                                    value="1"
                                    onChange={e => handleRadioButtons(e)}
                                    required
                                />
                                <span htmlFor="IndependentBuilding" className="ml-2 text-sm font-medium text-gray-900 ">Institutional - Private</span>
                            </div>
                            <div className="flex items-center mb-4">
                                <input
                                    className="w-6 h-6"
                                    type="radio"
                                    id="Flat/Partofthebuilding"
                                    name="group"
                                    value="2"
                                    onChange={e => handleRadioButtons(e)}
                                />
                                <span htmlFor="Flat/Partofthebuilding" className="ml-2 text-sm font-medium text-gray-900 ">Institutial - Government</span>
                            </div>
                            <div className="flex items-center mb-4">
                                <input
                                    className="w-6 h-6"
                                    type="radio"
                                    id="VaccantLand"
                                    name="group"
                                    value="3"
                                    onChange={e => handleRadioButtons(e)}
                                />
                                <span htmlFor="VaccantLand" className="ml-2 text-sm font-medium text-gray-900 ">Single Owner</span>
                            </div>
                            <div className="flex items-center mb-4">
                                <input
                                    className="w-6 h-6"
                                    type="radio"
                                    id="VaccantLand"
                                    name="group"
                                    value="4"
                                    onChange={e => handleRadioButtons(e)}
                                />
                                <span htmlFor="VaccantLand" className="ml-2 text-sm font-medium text-gray-900 ">Multiple Owners</span>
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

export default Screen11

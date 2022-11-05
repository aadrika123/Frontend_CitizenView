//////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 04 november 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - ScreenConnectionThrough
//    DESCRIPTION - ScreenConnectionThrough compomnent 
//////////////////////////////////////////////////////////////////////////////////////
import { useFormik } from 'formik';
import { AiFillInfoCircle } from 'react-icons/ai'
import { RiArrowDropLeftFill } from 'react-icons/ri'
//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from '../../Styles/ThemeStyle'

function ScreenConnectionThrough(props) {

    //destructuring predefined colors to maintain uniform theme everywhere
    const { bgHeaderColor, titleColor, nextButtonColor, bgCardColor, bgInfoColor, infoTextColor, backButtonColor, backBtnHoverColor, nextBtnHoverColor } = ThemeStyle()

    const formik = useFormik({
        initialValues: {
            connectionThrough: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            props.CollectScreenDataFun("screen value to be passed 1", values)
            props.nextFun(3)
            console.log("ScreenConnThrough value 2", values)
        },
    });


    return (
        <>
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <div className='text-xs font-semibold pl-2 mt-4'><span className='border-b border-black'><RiArrowDropLeftFill className="inline text-xl" />Back</span></div>
                    <div className='p-2 md:p-10 flex justify-center items-center  overflow-hidden'>
                        <div className={`grid grid-cols-12 ${bgCardColor} shadow-lg w-full md:w-1/3 p-4 md:p-10`}>
                            <div className="col-span-12"> <h1 className={`font-bold ${titleColor} text-2xl`}>Connection Through</h1></div>
                            <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">
                                <div className="flex items-center mb-4">
                                    <input
                                        className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
                                        type="radio"
                                        id="holdingProof"
                                        name="connectionThrough"
                                        value="holdingProof"
                                        onChange={formik.handleChange}
                                        required
                                    />
                                    <label for="option1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Holding Proof</label>

                                </div>
                                <div className="flex items-center mb-4">
                                    <input
                                        className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
                                        type="radio"
                                        id="Saf"
                                        name="connectionThrough"
                                        value="Saf"
                                        onChange={formik.handleChange}
                                        required
                                    />
                                    <label for="option2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">SAF</label>
                                </div>
                                <div className="flex items-center mb-4">
                                    <input
                                        className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
                                        type="radio"
                                        id="idProof"
                                        name="connectionThrough"
                                        value="idProof"
                                        onChange={formik.handleChange}
                                        required
                                    />
                                    <label for="option3" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">ID Proof</label>
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
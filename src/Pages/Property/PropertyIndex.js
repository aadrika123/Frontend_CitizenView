import {AiFillInfoCircle} from 'react-icons/ai'
import {RiArrowDropLeftFill} from 'react-icons/ri'
//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from '../../Components/Styles/ThemeStyle'

function PropertyIndex() {
    //destructuring predefined colors to maintain uniform theme everywhere
    const {bgHeaderColor,titleColor,nextButtonColor,bgCardColor,bgInfoColor,infoTextColor} = ThemeStyle()
    return (
        <>
           <div className='text-xs font-semibold pl-2 mt-4'><span className='border-b border-black'><RiArrowDropLeftFill className="inline text-xl"/>Back</span></div>
            <div className='p-2 md:p-10 flex justify-center items-center  overflow-hidden'>
                <div className={`grid grid-cols-12 ${bgCardColor} shadow-lg w-full md:w-1/3 p-4 md:p-10`}>
                    <div className="col-span-12"> <h1 className={`font-bold ${titleColor} text-2xl`}>Type of Property</h1></div>
                    <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">
                        <div className="flex items-center mb-4">
                            <input id="option1" type="radio" value="" name="propertyType" className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600" />
                            <label for="option1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Independent Building</label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input checked id="option2" type="radio" value="" name="propertyType" className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600" />
                            <label for="option2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Flat/Part of the building</label>
                        </div>
                        <div className="flex items-center">
                            <input checked id="option3" type="radio" value="" name="propertyType" className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600" />
                            <label for="option3" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Vaccant Land</label>
                        </div>
                    </div>

                    <div className="col-span-12 mt-6">
                        <button type="submit" className={`shadow-lg w-full px-6 py-2.5 ${nextButtonColor} text-white font-medium text-xs leading-tight  rounded  hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out`}>Next</button>
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
        </>
    )
}

export default PropertyIndex
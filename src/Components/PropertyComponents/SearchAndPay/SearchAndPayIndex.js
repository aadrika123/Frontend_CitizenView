//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 02 november 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - SearchAndPayIndex
//    DESCRIPTION - Scrren 1 is single input component
//////////////////////////////////////////////////////////////////////////////////////

import { AiFillInfoCircle } from 'react-icons/ai'
import { RiArrowDropLeftFill } from 'react-icons/ri'
import { BiBuildingHouse } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from '../../Styles/ThemeStyle'

function SearchAndPayIndex(props) {
    //destructuring predefined colors to maintain uniform theme everywhere
    const { bgHeaderColor, titleColor, nextButtonColor, nextBtnHoverColor, backButtonColor, backBtnHoverColor, bgCardColor, bgInfoColor, infoTextColor } = ThemeStyle()

    const navigate = useNavigate();
    const goToHome = () => {
    }

    return (
        <>
            <div className='text-xs font-semibold px-2 mt-4 flex'>
                <div className="flex-1"><span onClick={props.backFun} className='border-b border-black'><RiArrowDropLeftFill className="inline text-xl" />Back</span></div>
                <div className="flex-1 text-right"><span className=''>{props?.formIndex} of 10</span></div>
            </div>
            <div className='p-2 md:p-10 flex justify-center items-center  overflow-hidden'>
                <div className={` ${bgCardColor} shadow-lg w-full md:w-1/3 p-4 py-5 md:p-10`}>
                    <div className='flex'>
                        <h1 className={`font-bold ${titleColor} text-2xl`}>Property Tax</h1>
                        <p className='flex aligne'><BiBuildingHouse size={40} className="" /></p>
                    </div>
                    {/* <h1 className={` ${titleColor} text-xs opacity-40`}>Property used only for residential purpose & there are no commerical/industrail/institutional activities in this property.</h1> */}
                    <div className="text-orange-600 font-medium my-2 leading-8">
                        <p>Search and Pay</p>
                        <p>My Bills</p>
                        <p>My Payments</p>
                        <p>Create Properties</p>
                        <p>My Properties</p>
                        <p>My Applications</p>
                        <p>Trasfer Property Ownership/Mutation</p>
                    </div>

                </div>
            </div>

            <div className='p-2 md:p-10 flex justify-center items-center  overflow-hidden'>
                <div className={` ${bgCardColor} shadow-lg w-full md:w-1/3 p-4 py-5 md:p-10`}>
                    <div className='flex'>
                        <h1 className={`font-bold ${titleColor} text-2xl`}>mCollect</h1>
                        <p className='flex justify-items-end'><BiBuildingHouse size={40} className="" /></p>
                    </div>
                    <div className="text-orange-600 font-medium my-2 leading-8">
                        <p>Search and Pay</p>
                        <p>My Challans</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SearchAndPayIndex


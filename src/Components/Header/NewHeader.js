import React, { useContext } from 'react'
import CommonStyles from '../IndividualRoutes/CommonStyles'
import IndividualRoutes from '../IndividualRoutes/IndividualRoutes'
import ThemeStyle from '../Styles/ThemeStyle'
import logo from '../../Images/logo.png'
import { contextVar } from '../GlobalState/ContextVar'


function NewHeader(props) {

    const globalData = useContext(contextVar);
    const { headerBgColor } = CommonStyles();
    const handleClick = () => {
        props.showSidebar()
    }

    console.log("globalVals", globalData)


    return (
        <>
            <h1 className={`text-gray-800 opacity-80 ${headerBgColor} px-3 text-stone-600 py-1.5 flex justify-between`}>
                <button onClick={handleClick} className={`border-0 `}>
                    {props.show ?
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                            </svg>

                        </> :
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>

                        </>

                    }
                </button>
                <h1 className='font-bold text-teal-400 text-lg'>{globalData.moduleName}</h1>
                <img src={logo} alt="" className='h-8 w-8' />

            </h1>



        </>
    )
}

export default NewHeader
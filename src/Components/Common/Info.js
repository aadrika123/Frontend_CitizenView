import ThemeStyle from "../Styles/ThemeStyle"
import {AiFillInfoCircle} from 'react-icons/ai'
import {RiArrowDropLeftFill} from 'react-icons/ri'

function Info(props) {
    const {bgInfoColor,infoTextColor} = ThemeStyle()
    return (
        <div className='p-2 md:p-10 flex justify-center items-center  overflow-hidden'>
            <div className='p-2 relative '>
                <div className={`absolute top-0 left-0 w-full h-full ${bgInfoColor} opacity-10`}></div>
                <div className={`font-semibold ${infoTextColor} `}><AiFillInfoCircle className="inline" /> Info</div>
                <div className={`text-xs ${infoTextColor} mt-2`}>{props?.infoText}</div>
            </div>
        </div>
    )
}

export default Info
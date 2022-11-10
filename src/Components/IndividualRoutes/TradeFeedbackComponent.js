import React from 'react'
import ThemeStyle from '../../Components/Styles/ThemeStyle'

function TradeFeedbackComponent(props) {

    //destructuring predefined colors to maintain uniform theme everywhere
    const { bgHeaderColor, titleColor, nextButtonColor, bgCardColor, bgInfoColor, infoTextColor, backButtonColor, backBtnHoverColor, nextBtnHoverColor } = ThemeStyle()

    // destructuring prop data
    console.log("all form prop data ", props.fieldData.applyWith);
    const { applyWith, noticeNo, noticeDate } = props.fieldData?.applyWith


    return (
        <div>

            <div className='p-2 items-center  overflow-hidden mx-auto bg-white w-1/3 font-mono text-xs'>
                <div className=' flex justify-evenly  my-2'>
                    <div className=''> <p>Apply With :</p> </div>
                    <div> <p className=''>{applyWith == 1 ? "New Application" : "Notice No"}</p></div>
                </div>
                <div className=' flex justify-evenly  my-2'>
                    <div className=''> <p>Apply With :</p> </div>
                    <div> <p className=''>{applyWith == 1 ? "New Application" : "Notice No"}</p></div>
                </div>
                <div className=' flex justify-evenly  my-2'>
                    <div className=''> <p>Apply With :</p> </div>
                    <div> <p className=''>{applyWith == 1 ? "New Application" : "Notice No"}</p></div>
                </div>
                <div className=' flex justify-evenly  my-2'>
                    <div className=''> <p>Apply With :</p> </div>
                    <div> <p className=''>{applyWith == 1 ? "New Application" : "Notice No"}</p></div>
                </div>
                <div className=' flex justify-evenly  my-2'>
                    <div className=''> <p>Apply With :</p> </div>
                    <div> <p className=''>{applyWith == 1 ? "New Application" : "Notice No"}</p></div>
                </div>
            </div>
        </div>
    )
}

export default TradeFeedbackComponent
//////////////////////////////////////////////////////////////////////////////////////
//    Author - R U Bharti
//    Version - 1.0
//    Date - 3rd November 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - Grievance Screen 3
//    DESCRIPTION - Screen 3 is single input component
//////////////////////////////////////////////////////////////////////////////////////

import { useState } from 'react'
import { AiFillInfoCircle } from 'react-icons/ai'
import { RiArrowDropLeftFill } from 'react-icons/ri'
import {BsFillTelephoneFill} from 'react-icons/bs'
import ThemeStyle from '../../Styles/ThemeStyle'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function ComplaintTimeline(props) {

    //destructuring predefined colors to maintain uniform theme everywhere
    const {bgHeaderColor,titleColor,nextButtonColor,nextBtnHoverColor,backButtonColor,backBtnHoverColor,bgCardColor,bgInfoColor,infoTextColor} = ThemeStyle()
    return (
        <>

<div className="col-span-12 bg-zinc-100 rounded-md p-4 mt-4 shadow-md">
       <h1 className={` ${titleColor} font-bold col-span-12 pb-2`}>
            Complaint Timeline
          </h1>

      <div className='text-sm'>
       <VerticalTimeline layout={'1-column-left'}>
 
{props.status && <> <VerticalTimelineElement
  contentStyle={{ background: '#D97706dc', color: '#fff', padding: '10px' }}
  contentArrowStyle={{ borderRight: '7px solid #D97706' }}
  position={'right'}
     className="vertical-timeline-element--work"
     iconStyle={{ background: '#D97706', color: '#fff' }}
  >
    <div>
      <div>Complaint Resolved</div>
      <div className='flex space-x-4'>
        <span onClick={() => props.rate()} className='bg-white px-4 py-1 mt-2 rounded-md text-[#B45309] cursor-pointer hover:shadow-lg hover:bg-[#D97706] hover:text-white text-sm'>RATE</span>
        <span onClick={() => props.reopen()} className='bg-white px-4 py-1 mt-2 rounded-md text-[#B45309] cursor-pointer hover:shadow-lg hover:bg-[#D97706] hover:text-white text-sm'>REOPEN</span>
      </div>
    </div>
  </VerticalTimelineElement>
 
  <VerticalTimelineElement
  position={'right'}
  contentStyle={{padding: '10px'}}
    className="vertical-timeline-element--work"
    iconStyle={{ background: '#D97706', color: '#fff' }}
  >
    <div className='flex flex-col flex-wrap'>
      <div>Complaint assigned to UATLME</div>
      <div><a href="tel:+919876740214" className='flex items-center space-x-2'><span className='text-[#D97706]'><BsFillTelephoneFill/></span> <span>9876740214</span> </a></div>
    </div>
  </VerticalTimelineElement>

  <VerticalTimelineElement
  position={'right'}
  contentStyle={{padding: '10px'}}
    className="vertical-timeline-element--work"
    iconStyle={{ background: '#D97706', color: '#fff' }}
  >
    <p>Pending for assignment</p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
  position={'right'}
  contentStyle={{padding: '10px'}}
    className="vertical-timeline-element--work"
    iconStyle={{ background: '#D97706', color: '#fff' }}
  >
    <p>Complaint Resolved</p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
  position={'right'}
  contentStyle={{padding: '10px'}}
    className="vertical-timeline-element--work"
    iconStyle={{ background: '#D97706', color: '#fff' }}
  >
    <div className='flex flex-col flex-wrap'>
      <div>Complaint assigned to UATLME</div>
      <div><a href="tel:+919876740214" className='flex items-center space-x-2'><span className='text-[#D97706]'><BsFillTelephoneFill/></span> <span>9876740214</span> </a></div>
    </div>
  </VerticalTimelineElement> </>}

  {props.status ? <VerticalTimelineElement
 position={'right'}
 contentStyle={{padding: '10px'}}
   className="vertical-timeline-element--work"
   iconStyle={{ background: '#D97706', color: '#fff' }}
  > <p>Pending for assignment</p>
  </VerticalTimelineElement>: <VerticalTimelineElement
  contentStyle={{ background: '#D97706dc', color: '#fff', padding: '10px' }}
  contentArrowStyle={{ borderRight: '7px solid #D97706' }}
  position={'right'}
     className="vertical-timeline-element--work"
     iconStyle={{ background: '#D97706', color: '#fff' }}
  ><p>Pending for assignment</p>
  </VerticalTimelineElement>}
    

  <VerticalTimelineElement
 position={'right'}
 contentStyle={{padding: '10px'}}
   className="vertical-timeline-element--work"
   iconStyle={{ background: '#D97706', color: '#fff' }}
  >
      <p>Complaint filed</p>
  </VerticalTimelineElement>

</VerticalTimeline>
</div>

       </div>

      </>
    )
}

export default ComplaintTimeline
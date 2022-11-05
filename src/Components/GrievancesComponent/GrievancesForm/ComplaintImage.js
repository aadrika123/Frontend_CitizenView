//////////////////////////////////////////////////////////////////////////////////////
//    Author - R U Bharti
//    Version - 1.0
//    Date - 3rd November 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - Complaint Image
//    DESCRIPTION - Complaint Image is single input component
//////////////////////////////////////////////////////////////////////////////////////

import {RiArrowDropLeftFill} from 'react-icons/ri'
import {MdCameraEnhance} from 'react-icons/md'
//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from '../../Styles/ThemeStyle'
import {useForm} from 'react-hook-form'

function ComplaintImage(props) {

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("file", data.file[0]);

    // const res = await fetch("http://192.168.0.251:8000/api/upload", {
    //     method: "POST",
    //     body: formData,
    // }).then((res) => {
    //   alert("success")
    //   res.json()
    //   console.log(res)
    // });
    console.log("formData=>",formData)
    // alert(JSON.stringify(`${res.message}, status: ${res.status}`));
};

  //destructuring predefined colors to maintain uniform theme everywhere
  const {bgHeaderColor,titleColor,nextButtonColor,nextBtnHoverColor,backButtonColor,backBtnHoverColor,bgCardColor,bgInfoColor,infoTextColor} = ThemeStyle()
  return (
      <>
         <div className='text-xs font-semibold px-2 mt-4 flex'>
             <div className="flex-1"><span onClick={props.backFun} className='border-b cursor-pointer border-black'><RiArrowDropLeftFill className="inline text-xl"/>Back</span></div>
             <div className="flex-1 text-right"><span className=''>{props?.formIndex} of 7</span></div>
         </div>
          <form className='p-2 md:p-10 flex justify-center items-center  overflow-hidden'>
              <div className={`grid grid-cols-12 ${bgCardColor} shadow-lg w-full md:w-1/3 p-4 py-10 md:p-10`} onSubmit={handleSubmit(onSubmit)}>
                  <div className="col-span-12"> <h1 className={`font-bold ${titleColor} text-2xl`}>Upload Complaint Photos</h1></div>
                  <div className="col-span-12"> <h1 className={` ${titleColor} text-xs opacity-40`}>Click on the icon below to upload the complaint photos as evidence. You can capture photos directly through your camera or upload from your Gallery. If you do not have complaint photo, you can skip and continue for next step.</h1></div>
                  <div className="form-group md:mb-6 col-span-12 mt-6">
                      <div className="flex items-center mb-4">
                      <input id='image' name='image' type="file" {...register("file")} className='absolute w-full h-[10rem] opacity-0 cursor-pointer' />
                          <label htmFor="image" className="ml-2 text-3xl font-medium text-gray-900 cursor-pointer border border-dashed border-zinc-200 bg-zinc-100 w-full h-[10rem] flex justify-center items-center rounded-md"><MdCameraEnhance/></label>
                      </div>
                      
                  </div>

                  <div className="col-span-12 grid grid-cols-12 gap-x-6 mt-2">
                     <div className="col-span-6"> <button onClick={()=>props.backFun()} type="submit" className={`shadow-lg w-full px-6 py-4 ${backButtonColor} text-white font-medium text-xs leading-tight  rounded  ${backBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Back</button></div>
                     <div className="col-span-6"> <button onClick = {() =>{ onSubmit()
                props.nextFun()}} type="submit" className={`shadow-lg w-full px-6 py-4 ${nextButtonColor} text-white font-medium text-xs leading-tight  rounded  ${nextBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Next</button></div>
                     <div className="col-span-12 my-4 text-center">
                {" "}
                <button
                  onClick={() => props.nextFun()}
                  type="submit"
                  className={`text-blue-400 hover:underline hover:text-blue-600`}
                >
                  Skip and Continue
                </button>
              </div>
                  </div>
                  </div>
              </form>
      </>
  )
}

export default ComplaintImage

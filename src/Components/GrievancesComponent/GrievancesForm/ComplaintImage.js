//////////////////////////////////////////////////////////////////////////////////////
//    Author - R U Bharti
//    Version - 1.0
//    Date - 3rd November 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - ComplaintImage
//    DESCRIPTION - Citizen give image as a complaint proof
//////////////////////////////////////////////////////////////////////////////////////

import { useState } from "react";
import { RiArrowDropLeftFill } from "react-icons/ri";
import { MdCameraEnhance } from "react-icons/md";
//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from "../../Styles/ThemeStyle";
import { toast } from "react-toastify";

function ComplaintImage(props) {
  const [baseImage, setBaseImage] = useState("");
  const [image, setImage] = useState();

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    setImage(file);
    console.log("image data => ", file);
    const base64 = await convertBase64(file);
    setBaseImage(base64);
    console.log("image in base64 => ", base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const onSubmit = () => {(image.size > 500000)? toast.warn("Image must be less than 500Kb"): forward()};

  const forward = () => {
    props?.nextFun() 
    props?.postData({ complaintImage: baseImage })
  }

  //destructuring predefined colors to maintain uniform theme everywhere
  const {
    bgHeaderColor,
    titleColor,
    nextButtonColor,
    nextBtnHoverColor,
    backButtonColor,
    backBtnHoverColor,
    bgCardColor,
    bgInfoColor,
    infoTextColor,
  } = ThemeStyle();

  return (
    <>
      {/* Corner */}
      <div className="text-xs font-semibold px-2 mt-4 flex">
        {/* corner back button */}
        <div className="flex-1">
          <span
            onClick={props.backFun}
            className="border-b cursor-pointer border-black"
          >
            <RiArrowDropLeftFill className="inline text-xl" />
            Back
          </span>
        </div>

        {/* corner page count */}
        <div className="flex-1 text-right">
          <span className="">{props?.formIndex} of 6</span>
        </div>
      </div>

      {/* form */}

      <div className="p-2 md:p-10 flex justify-center items-center  overflow-hidden">
        <div
          className={`grid grid-cols-12 ${bgCardColor} shadow-lg w-full md:w-1/3 p-4 py-10 md:p-10`}
        >
          {/* Heading */}
          <div className="col-span-12">
            {" "}
            <h1 className={`font-bold ${titleColor} text-2xl`}>
              Upload Complaint Photos
            </h1>
          </div>

          {/* description */}
          <div className="col-span-12">
            {" "}
            <h1 className={` ${titleColor} text-xs opacity-40`}>
              Click on the icon below to upload the complaint photos as
              evidence. You can capture photos directly through your camera or
              upload from your Gallery. If you do not have complaint photo, you
              can skip and continue for next step.
            </h1>
          </div>

          <div className="form-group md:mb-6 col-span-12 mt-6">
            {/* input image */}
            <div className="flex items-center mb-4">
              <input
                id="image"
                name="image"
                type="file"
                onChange={(e) => uploadImage(e)}
                className="absolute w-full h-[10rem] opacity-0 cursor-pointer z-10"
              />

              <img src={baseImage} alt="" srcset="" />

              {baseImage != "" && (
                <label
                  htmFor="image"
                  className="opacity-50 text-3xl font-medium absolute ml-[9rem] text-gray-900 cursor-pointer w-[2rem] h-[2rem]  flex justify-center items-center rounded-md"
                >
                  <MdCameraEnhance />
                </label>
              )}

              {baseImage == "" && (
                <label
                  htmFor="image"
                  className="z-0 ml-2 text-3xl font-medium text-gray-900 cursor-pointer border border-dashed border-zinc-200 bg-zinc-100 w-full h-[10rem] flex justify-center items-center rounded-md"
                >
                  <MdCameraEnhance />
                </label>
              )}
            </div>
          </div>

          <span className="text-sm text-amber-500 col-span-12">
            Image Size must be less than 500KB
          </span>

          {/* Buttons */}
          <div className="col-span-12 grid grid-cols-12 gap-x-6 mt-2">
            {/* Back button */}
            <div className="col-span-6">
              {" "}
              <button
                onClick={() => props.backFun()}
                className={`shadow-lg w-full px-6 py-4 ${backButtonColor} text-white font-medium text-xs leading-tight  rounded  ${backBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}
              >
                Back
              </button>
            </div>

            {/* Next button */}
            <div className="col-span-6">
              {" "}
              <button
                onClick={() => onSubmit()}
                className={`shadow-lg w-full px-6 py-4 ${nextButtonColor} text-white font-medium text-xs leading-tight  rounded  ${nextBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}
              >
                Next
              </button>
            </div>

            {/* skip and continue button */}
            <div className="col-span-12 my-4 text-center">
              <button
                onClick={() => props.nextFun()}
                className={`text-blue-400 hover:underline hover:text-blue-600`}
              >
                Skip and Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ComplaintImage;

///////////////////////////////////////////////////////
// Export to : GrievancesCitizenEntryForm.js
///////////////////////////////////////////////////////

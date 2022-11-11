//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Kumar Singh
//    Version - 1.0
//    Date - 03 november 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - Screen8
//    DESCRIPTION - Scrren7 is single input component
//////////////////////////////////////////////////////////////////////////////////////

import { AiFillInfoCircle } from 'react-icons/ai'
import { RiArrowDropLeftFill } from 'react-icons/ri'
//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from '../../Styles/ThemeStyle';
import Multiselect from 'multiselect-react-dropdown';
import Info from '../../Common/Info';
import * as yup from 'yup';
import { useFormik } from 'formik'

function Screen11(props) {
    //destructuring predefined colors to maintain uniform theme everywhere
    const { bgHeaderColor, titleColor, nextButtonColor, nextBtnHoverColor, backButtonColor, backBtnHoverColor, bgCardColor, bgInfoColor, infoTextColor } = ThemeStyle();

    const { allFormDataFun } = props.values;

    const options =
        [
            { name: '(198)OTHERS', id: 198 },
            { name: '(197)PRINTING,PRESSING,CLEANSING,CUTTING, PRODUCING AND PURCHASING', id: 197 },
            { name: '(197)PURCHASING,PRODUCING,CLEANSING,CUTTING, PRESSING AND CLEANSING', id: 196 }
        ]
    const selectedValue = [{ name: '(198)OTHERS', id: 198 }]
    const onSelect = (selectedList, selectedItem) => {
        formik.setFieldValue("natureOfBusiness", selectedList);
    }
    const onRemove = (selectedList, removedItem) => {

        formik.setFieldValue("natureOfBusiness", selectedList);
    }

    const initialValues = {
        natureOfBusiness: selectedValue
    }

    const validationSchema = yup.object(
        {
            // businessDescription: yup.string().required("This field is required !"),
        }
    );

    const formik = useFormik({
        initialValues: initialValues,

        onSubmit: (values) => {
            // alert(JSON.stringify(values));
            allFormDataFun("natureOfBusiness", values);
            props.nextFun();
        },
        validationSchema
    });

    const handleOnChange = (e) => {
        let name = e.target.name;
        let vals = e.target.value;

        console.log("name : " + name + "values : " + vals);
        // { name === 'applyWith' && (vals == 1 ? setnoticeToggle(true) : setnoticeToggle(false)) }
    }


    return (
        <>
            <div className='text-xs font-semibold px-2 mt-4 flex'>
                <div className="flex-1"><span onClick={props.backFun} className='border-b border-black'><RiArrowDropLeftFill className="inline text-xl" />Back</span></div>
                <div className="flex-1 text-right"><span className=''>{props?.formIndex} of 10</span></div>
            </div>

            <form onSubmit={formik.handleSubmit} onChange={handleOnChange}>
                <div className='p-2 md:p-10 flex justify-center items-center  overflow-hidden'>
                    <div className={`grid grid-cols-12 ${bgCardColor} shadow-lg w-full md:w-1/3 p-4 py-10 md:p-10`}>
                        <div className="col-span-12"> <h1 className={`font-bold ${titleColor} text-2xl`}>Nature Of Your Business</h1></div>
                        <div className="col-span-12"> <h1 className={` ${titleColor} text-sm mt-2 opacity-40`}>Select the nature of your business from the list below..</h1></div>
                        <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">

                            <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Nature Of Business<span className='text-red-500'>*</span></label>
                            <div className="w-full overflow-auto h-36">
                                <Multiselect
                                    options={options} // Options to display in the dropdown
                                    selectedValues={selectedValue} // Preselected value to persist in dropdown
                                    onSelect={onSelect} // Function will trigger on select event
                                    onRemove={onRemove} // Function will trigger on remove event
                                    displayValue="name" // Property name to display in the dropdown options
                                    style={{}}
                                    selectionLimit={2}
                                    name="natureOfBusiness"
                                />
                            </div>

                        </div>

                        <div className="col-span-12 grid grid-cols-12 gap-x-6 mt-6">
                            <div className="col-span-6"> <button onClick={() => props.backFun()} type="button" className={`shadow-lg w-full px-6 py-4 ${backButtonColor} text-white font-medium text-xs leading-tight  rounded  ${backBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Back</button></div>
                            <div className="col-span-6"> <button type="submit" className={`shadow-lg w-full px-6 py-4 ${nextButtonColor} text-white font-medium text-xs leading-tight  rounded  ${nextBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Next</button></div>
                        </div>
                    </div>

                </div>
            </form>
            <Info infoText="You can select multiple nature of businesses to apply a license for." />

        </>
    )
}

export default Screen11

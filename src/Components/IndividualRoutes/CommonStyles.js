import React from 'react'

export default function CommonStyles() {

    const styles = {
        container: "w-full md:w-2/3 lg:w-2/3 bg-white md:mx-auto h-screen ",
        boxStyle: "bg-white w-11/12 h-48 mx-auto shadow-md mt-4 shadow-gray-600 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-300",

        inputStyle: "form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md  mb-1",

        labelStyle: "form-label inline-block mb-1 text-gray-600 text-sm font-semibold",
        buttonStyle: "px-3 py-1.5 bg-teal-400 border rounded-lg shadow-sm text-stone-50 font-mono text-xs uppercase my-1",
        headerBgColor: "bg-white shadow-md"

    }
    return styles;
}


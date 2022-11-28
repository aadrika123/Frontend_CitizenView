import axios from 'axios';
import { useFormik } from 'formik'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { LOGIN } from '../Features/Login/LoginProvider';

function Login(props) {

    const dispatch = useDispatch();

    // const isLoggedIn = useSelector((state) => state.loggedIn.value)
    const navigate = useNavigate()

    // console.log("inside token", window.localStorage.getItem("token"));

    const validationSchema = yup.object({
        username: yup.string().required('This is a required field !'),
        password: yup.string().required('This is required field !')
    })

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: (values) => {
            handleLogin(values)

            // dispatch(LOGIN({ isLoggedIn: true }));
            // window.localStorage.setItem("token", Math.floor(Math.random() * 1000) + 1);
            // navigate("/home")
            props.showBlock(false);
        },
        validationSchema
    })

    const handleLogin = (data) => {
        console.log("Login data is ", data)

        const payload = {
            "email": data.username,
            "password": data.password
        }

        axios.post('http://192.168.0.16:8000/api/login', payload)
            .then((res) => {
                console.log("Data Before Login ", res)
                if (res.data.status == true) {
                    console.log("Login Success")
                    localStorage.setItem('token', JSON.stringify(res.data.data.token))
                    navigate("/home")
                } else {
                    console.log("Login Failed.")
                }
            })
            .catch((err) => console.log("ERROR : Field to login : ", err))

    }

    return (
        <div className='mx-auto w-full h-screen md:h-auto'>
            <div className="grid  md:mt-12 w-full px-2">

                <div className="w-full md:w-96 bg-white p-12 pt-4 md:shadow-2xl mt-10 border md:animate__animated animate__slideInDown  rounded-lg  mx-auto">
                    <div className="flex mb-6 gap-1"><div className="flex-initial"><img className='w-10' src="https://cdn-icons-png.flaticon.com/512/1646/1646779.png" /></div>
                        <div className="flex-initial grid items-center text-center text-lg font-semibold ">Sign in to your account
                            {/* Ranchi Municipal Corporation */}
                        </div></div>


                    <form onSubmit={formik.handleSubmit}>
                        <div class="mb-6">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Username</label>
                            <input {...formik.getFieldProps('username')} type="text" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" />
                            <span className='text-red-600'>{formik.touched.username && formik.errors.username ? formik.errors.username : null}</span>
                        </div>
                        <div class="mb-6">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                            <input {...formik.getFieldProps('password')} type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" />
                            <span className='text-red-600'>{formik.touched.password && formik.errors.password ? formik.errors.password : null}</span>
                        </div>

                        <div className="flex items-start mb-6">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 " />
                            </div>
                            <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 ">Remember me</label>
                        </div>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-full px-5 py-2.5 text-center ">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
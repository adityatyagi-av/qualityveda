"use client"
import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import toast from 'react-hot-toast';
type Props = {}

const Callback = (props: Props) => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .max(25, "Must be 25 characters or less")
      .required("Required"),
    phone:Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    message: Yup.string().required("Required"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      phone:"",
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => { 
      const toastId = toast.loading('Sending your message');
      toastId;
      try {
       
        axios.post(`${process.env.NEXT_PUBLIC_SERVER_URI}/send-nabl-message`, {
          name: values.name,
          email: values.email,
          phone:values.phone,
          message:values.message,
        }).then((res:any)=>{
          
          toast.success('Sent Call Back Request', {
            id: toastId,
          });
           
        }) .catch(function (error) {
          toast.error(error.message,{
            id: toastId,
          })
        });
        
        
      } catch (error) {
        console.error("An error occurred:", error);
      }
    },
  });


  return (
    <>
   

<section id='callback' className="bg-gray-100 dark:bg-hsl-custom">

  <div className="mx-auto max-w-screen-xl px-4 py-8 my-8 sm:px-6 lg:px-8">
  <h1 className="text-center my-6 font-Poppins text-[25px] leading-[35px] sm:text-3xl lg:text-4xl dark:text-white 800px:!leading-[60px] dark:bg-hsl-custom text-[#000] font-[700] tracking-tight">
        Get a Call Back  <span className="text-[#a6a6a6]  text-gradient"></span>{" "}
          
        </h1>
    <div className="grid  grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div className="lg:col-span-2 lg:py-12">
        <p className="max-w-xl text-lg">
        🎬 Lights, Camera, Action! Your chance to be the star of our show!
          <br />
          <br />
🌟 Ever dreamt of having your own personal assistant? Well, consider us your backstage crew ready to make your dreams a reality! Just drop your details below, and we{`'`}ll roll out the red carpet with a callback that{`'`}s sure to steal the spotlight!🎥

        </p>

        <div className="mt-8">
          <a href="#" className="text-2xl font-bold text-pink-600"> +91 88825 09194 </a>

          <address className="mt-2 not-italic">206, 3rd Floor, Silver Home - 2, opposite 14th Avenue, Greater Noida, Ghaziabad, Uttar Pradesh 201301</address>
        </div>
      </div>

      <div className="rounded-lg bg-white dark:bg-hsl-custom p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form onSubmit={formik.handleSubmit}  className="space-y-4">
          <div>
            <label className="sr-only" htmlFor="name">Name {formik.touched.name && formik.errors.name ? (
                        <span className=" text-xs text-red-500 mb-.5">{`(${formik.errors.name}*)`}</span>
                      ) : null}</label>
            <input
              className="w-full border-2 rounded-lg border-[#C0CDD6] p-3 text-sm"
              placeholder="Name"
              type="text"
              id="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="email">Email {formik.touched.email && formik.errors.email ? (
                        <span className=" text-xs text-red-500 mb-.5">{`(${formik.errors.email}*)`}</span>
                      ) : null}</label>
              <input
                className="w-full border-2 rounded-lg border-[#C0CDD6] p-3 text-sm"
                placeholder="Email address"
                type="email"
                id="email"
                onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="phone">Phone {formik.touched.phone && formik.errors.phone ? (
                        <span className=" text-xs text-red-500 mb-.5">{`(${formik.errors.phone}*)`}</span>
                      ) : null}</label>
              <input
                className="w-full border-2 rounded-lg border-[#C0CDD6] p-3 text-sm"
                placeholder="Phone Number"
                type="tel"
                id="phone"
                onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              />
            </div>
          </div>

        

          <div>
            <label className="sr-only" htmlFor="message">Message {formik.touched.message && formik.errors.message ? (
                        <span className=" text-xs text-red-500 mb-.5">{`(${formik.errors.message}*)`}</span>
                      ) : null}</label>

            <textarea
              className="w-full border-2 rounded-lg border-[#C0CDD6] p-3 text-sm"
              placeholder="Please type your Query"
              rows={6}
              id="message"
              onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.message}
            ></textarea>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
            >
              Recieve Call Back
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section></>
  )
}

export default Callback
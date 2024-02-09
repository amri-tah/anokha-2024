
"use client";
import Link from "next/link"
import { useEffect, useState } from "react";
import Image from 'next/image'
import oneapilogo from '../images/oneAPI-rgb-3000.png'




function IntelHero(){
    const [currentState, setCurrentState] = useState("guest");
    
    useEffect(() => {

    },[])

    const getButtonText = () => {
        switch(currentState) {
            case "guest":
                return "Register";
            case "registered":
                return "View Details";
            default:
                return "Register";
        }
    };

    const handleStateChange = () => {
        setCurrentState(prevState => {
            return prevState === "guest" ? "registered" : "guest";
        });
    };

    return(
        // <div className="hero py-12 bg-gradient-to-t from-blue-500 to-purple-700">
        //     <div className="hero-content md:px-0 px-4 max-w-6xl flex-col lg:flex-row-reverse">
        //         <img src="https://plus.unsplash.com/premium_photo-1681319553238-9860299dfb0f?auto=format&fit=crop&q=80&w=2831&ixlib=rb-4.0.3" className="max-w-sm  h-80 object-cover rounded-lg shadow-2xl" />
        //         <div>
        //             <h1 className="text-5xl text-slate-100 font-bold md:leading-none leading-tight md:mt-0 mt-10">INTEL HACKATHON  <span className="md:block mt-4">ANOKHA 2024</span></h1>
        //             <p className="py-2 text-xl text-slate-100 mt-4 pr-12">Join the most amazing<br /> Hackathon</p>
        //             <div className="flex flex-row items-center mt-16 space-x-4">
        //                 <Link href="/hackathon-register">
        //                     <button className="btn text-lg px-4 py-2 bg-white text-gray-800 hover:bg-gray-200 rounded-lg">
        //                         {getButtonText()}
        //                     </button>
        //                 </Link>
        //                 <button onClick={handleStateChange} className="btn text-lg px-4 py-2 bg-white text-gray-800 hover:bg-gray-200 rounded-lg">
        //                     Toggle State
        //                 </button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className='w-full h-[98vh] bg-[rgb(10,17,58)]'>
        <div className='font-poppins text-black '>
            <div className='bg-blue-700 md:w-[40%] sm:w-[80%] p-8 rounded h-[40%] lg:ml-[200px] sm:mx-auto top-[300px] absolute blur-3xl'></div>
            <div className='bg-white md:w-[40%] sm:w-[80%] p-8 rounded-xl lg:ml-[200px] sm:mx-auto top-[300px] relative'>
                    <Image src={oneapilogo} width={150} className='mt-[-100px]'/>
                    <p className='text-[3rem]  font-bold sm:leading-[100%] mt-2'>Intel AI Hackathon</p>
                    <div className='text-xs  w-fit py-2 bg-blue-600 px-4 mt-2 rounded-full text-white'>
                      Amrita Vishwa Vidyapeetham, Coimbatore</div>
                    {/* <button className='text-base p-3 bg-[#03C7FD] mt-3 rounded'>IDC Materials</button> */}
                    <div className='flex gap-4 flex-wrap mt-2'>
                        <button className='text-[1rem] border border-black p-3 px-8 mt-2 rounded-[15px]'>IDC Materials</button>
                        <button className='text-[1rem]  bg-gradient-to-r from-[#0A113A] to-[#3306B5] text-white p-3 px-8 sm:mt-0 md:mt-2 rounded-[15px]'>Register Now!</button>
                    </div>
                    
            </div>
         
        </div>
        </div>
    )    
}

export default IntelHero;

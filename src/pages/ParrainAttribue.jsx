import React from 'react'
import FieulAttribue from '../components/FieulAttribue'
const ParrainAttribue = () => {
    return (
        <div className="">
            <div>
                <div className="max-w-sm w-full h-72border lg:max-w-full flex">
                    <div class=" flex-1 bg-white overflow-hidden flex flex-col justify-center items-center">
                        <div>
                            <img class="object-center object-cover h-56 w-full" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo"/>
                        </div>
                        
                    </div>
                    <div className=" bg-white p-4 flex flex-col leading-normal">
                        <FieulAttribue/>
                        <FieulAttribue/>
                        <FieulAttribue/>
                    </div> 
                </div>
                <div className="">
                    <p className="font-semibold text-xs md:text-base ">Schuame Alexandre Lionel</p>
                    <p className="md:text-sm text-xs">GLO</p>
                    <p className="md:text-sm text-xs">695254870</p>
                </div>
            </div>
            
        </div>
    )
}

export default ParrainAttribue

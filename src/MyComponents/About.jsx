import React from 'react'
import './Home.css'
const About = (props) => {
    const Data1= props.Abdata;
  return (
    <>
        {/* second part */}
        <div className="bg-black backcolor mt-4">
        <div className="container">
         <h3 className="text-white text-center pt-5">We See</h3>
         <h2 className="text-white text-center ">What Other Don't See.</h2>
        <div className="row text-center">
        {
            Data1.map((a)=>{
                    return(
                    <>
                    <div className=" col-lg-3 col-md-6 mt-4 mb-5">

                        <div className="planborder p-4">
                            <p>{a.icon1}</p>
                            <h4 className="text-white ">{a.title}</h4>
                        </div>
                    </div>   
                    </>
                    )
            })
        }  
    </div>
    </div>
    </div>
    </>
  )
}

export default About

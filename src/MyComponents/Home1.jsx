import React from 'react'
import './Home.css'
const Home1 = (props) => {
    const newOne = props.Newhome1
  return (
    <>
    <div>
        {
            newOne.map((m)=>
                {
                    return(
                        <div className="Mainpart">
                           <div className="text-center studio">
                              <h4 className="p-2 fontname text-white">{m.p}</h4>
                              <h1 className="title fontname text-white">{m.h6}</h1>
                              <div className="button1 d-flex justify-content-evenly mt-4 mt-lg-5">
                                    <p className='btn btn-info btnborder'>{m.Button1}</p>
                                    <p className='btn btnborder btncolor'>{m.Button2}</p>
                              </div>
                           </div>
                             
                         </div>
                    )
                })
        }
    </div>
    </>
  )
}

export default Home1

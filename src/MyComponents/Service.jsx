import React from 'react'

const Service = (props) => {
    const Newservicedata = props.newdata;  
  return (
    <div className="container servicesize ">
        <div className="text-center">
        <h3>Makes Happen</h3>
        <h2>Our Service</h2>
        </div>
        
        <div className="row">
            {
                Newservicedata.map((p)=>{
                    return(
                        <>
                        
                        <div className="col-md-6 col-lg-3  mt-3">
                            <div className="shadow  border p-3">
                                <p >{p.icon}</p> 
                                <h5>{p.Name}</h5>
                                <p>{p.Para}</p>
                            </div>
                        </div>
                        </>
                    )     
                })
            }
        </div>
    </div>
  )
}

export default Service

import React from 'react'

const Testimonial = (props) => {
    const Newtestdata=props.testdata;
  return (
    <div className="container ">
        <div className="text-center mt-5">
            <h3>Testimonial</h3>
            <h2>What Our Clients Says</h2>
        </div>
        <div className="row  justify-content-evenly">
            {
               Newtestdata.map((t)=>{
                    return(
                        <>
                        <div className="col-md-6 ">
                            
                                <div className="d-flex border shadow p-2">
                                    <div>
                                    <img src={t.img} alt="img" width={100} height={100} className="imgborder mt-5"/>
                                    </div>
                                    <div className="mt-lg-4">
                                    <p>{t.description}</p>
                                    <h4>{t.clientname}</h4>
                                    </div>    
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

export default Testimonial

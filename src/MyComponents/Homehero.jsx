import React from 'react'
import './Home.css'
const Homehero = (props) => {
    const Newdata1 =props.Herodata1;
  return (
    <div className="container ">
        <div className="row herosection justify-content-evenly shadow mt-4 ">
        {
            Newdata1.map((x)=>{
                    return(
                    <>
                    
                    <div className="col-lg-3 col-md-6 text-center mt-4 mb-4 shadow">
                        <div>
                        {/* <img src={x.img} alt="ux img" /> */}
                        <p>{x.icon}</p>
                        <h4>{x.title}</h4>
                        <p>{x.description}</p>
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

export default Homehero;

import React from 'react'

const Team = (props) => {
    const Teamnewdata=props.newteam;
  return (
    <div className="container">
        <div className="text-center mt-5">
            <h3>Meet with</h3>
            <h2>Our Angels</h2>
        </div>
       <div className="row ">
         {
            Teamnewdata.map((m)=>{
                return(
                <>
                <div className="col-md-6 col-lg-4 text-center mt-4 p-4">
                    <div className=" border">
                        <img  src={m.img} alt=" photo" width="100%" height="300px" />
                        <h5 className="text-danger fs-6">{m.profile}</h5>
                        <h4 className="fs-4">{m.Name}</h4>
                        <p>{m.Description}</p>
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

export default Team

import React from 'react'
import './Home.css'
const About1 = (props) => {
    const contents = props.Abdetails;
  return (
    <div className="container about mt-5">
         <>
         <div>
            {
            contents.map(function(p){
                return(
                   <>
                   <div className="row">
                    { <div className="col-12 col-md-4">
                        <img src={p.img} alt="img" className="img-fluid border p-2 "width={400}  height={150} />
                    </div> }
                    <div className="col-12 col-md-8 mt-lg-5">
                        <h3>{p.title}</h3>
                        <h2>{p.thead}</h2>
                        <p>{p.para1}</p>
                        <p>{p.para2}</p>
                        <p>{p.para3}</p>
                    </div>

                   </div>
                   </> 
                )
            })
        }
         </div>
         </>
    </div>
  )
}

export default About1

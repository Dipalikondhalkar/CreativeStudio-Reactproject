import React from 'react'

const Component = (props) => {
    const Cdata=props.compdata;
  return (
    <>
    <div >
        {
            Cdata.map((c)=>{
                <div ClassName="row">
                    <div className="col-12 col-lg-4">
                            <p>{c.title1}</p>
                            <img src={c.img} alt="" />
                            <p>{c.tname}</p>
                    </div>
                 </div>
            })
        }
    </div>
    </>
  )
}

export default Component

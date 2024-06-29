import React from 'react'
import './Home.css'
const Home = (props) => {
    const Homenav = props.Navdata;
  return (
    <div className="navposition">
        {
            Homenav.map((r)=>{
                return(
                    <>
                    {/* nav part for 320 */}
                    <div className="d-block d-md-none  p-3 bg-black">
                        <div className="d-flex justify-content-between">
                            <div>
                                <img src="./images/Background//logo.png" alt="logo" width={40}/>
                            </div>
                            <div>
                                {/* <img src="./src/images/menu.png" alt="offcanvas" width={40}/> */}
                                <img src="./images/Background/menu.png"  alt="offcanvas" width={40} data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                                 </img>
                                <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                                    <div className="offcanvas-header">
                                        {/* <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5> */}
                                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div className="offcanvas-body">
                                        <div>
                                            <ul className=' navlist '>
                                            <a href="#" className="text-decoration-none text-black"><li>{r.Home}</li></a>
                                            <a href="#"className="text-decoration-none text-black"><li>{r.about}</li></a>
                                            <a href="#"className="text-decoration-none text-black"><li>{r.service}</li></a>
                                            <a href="#"className="text-decoration-none text-black"><li>{r.team}</li></a>
                                            <a href="#"className="text-decoration-none text-black"><li>{r.testimonial}</li></a>
                                            <a href="#"className="text-decoration-none text-black"><li>{r.about}</li></a>
                                            <a href="#"className="text-decoration-none text-black"><li>{r.component}</li></a>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>   
                        </div>
                        
                    </div>
                    {/* nav part for 768 */}
                    <div className="d-none d-md-block ">
                        <div className="d-flex justify-content-evenly  p-1 bg-black">
                                <div className="mt-1">
                                    <img src="./images/Background//logo.png" alt="logo" width={40}/>
                                </div>
                                <div className=" size mt-2">
                                    <ul className='d-flex justify-content-around navlist '>
                                            <a href="#" className="text-decoration-none text-white fs-5"><li>{r.Home}</li></a>
                                            <a href="#"className="text-decoration-none text-white fs-5"><li>{r.about}</li></a>
                                            <a href="#"className="text-decoration-none text-white fs-5"><li>{r.service}</li></a>
                                            <a href="#"className="text-decoration-none text-white fs-5"><li>{r.team}</li></a>
                                            <a href="#"className="text-decoration-none text-white fs-5"><li>{r.testimonial}</li></a>
                                            <a href="#"className="text-decoration-none text-white fs-5"><li>{r.contact}</li></a>
                                            <a href="#"className="text-decoration-none text-white fs-5"><li>{r.component}</li></a>
                                    </ul>
                                </div>
                        </div>
                     </div>
                    </>
                )
            })
        }
    </div>
  )
}

export default Home

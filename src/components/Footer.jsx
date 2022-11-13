import React from 'react'
import Logo from '../images/Group-1.svg'


const Footer = () => {
  return (
    <div>
        <section style={{background:'#1D1D1E',color:'white'}}>
            <div className="container">
                <div className="py-5">
                    <div className="row">
                        <div className="col-md-6 col-lg-2  text-right" style={{marginTop:"20px"}}>
                            
                                <img src={Logo} alt="" />
                            <div style={{marginTop:"120px",marginBottom:"100px",fontSize:'7px'}}>
                                <span className='mx-2 text-white'><i className="fab fa-facebook fa-3x"></i></span>
                                <span className='mx-2 text-white'><i className="fab fa-instagram fa-3x"></i></span>
                                <span className='mx-2 text-white'><i className="fab fa-twitter fa-3x"></i></span>
                            </div>
                            
                        </div>
                        <div className="col-md-6 col-lg-2  text-right" style={{marginTop:"20px"}}>
                        </div>
                        <div className="col-md-6 col-lg-2  text-right" style={{marginTop:"20px"}}>
                            <p style={{fontWidth:'bolder',fontSize:'18px'}}>Community</p>
                            <p style={{fontWidth:'bolder',fontSize:'14px'}}>NFT</p>
                            <p style={{fontWidth:'bolder',fontSize:'14px'}}>Tokens</p>
                            <p style={{fontWidth:'bolder',fontSize:'14px'}}>Landlords</p>
                            <p style={{fontWidth:'bolder',fontSize:'14px'}}>Discord</p>


                        </div>

                        <div className="col-md-6 col-lg-3  text-right" style={{marginTop:"20px"}}>
                            <p style={{fontWidth:'bolder',fontSize:'18px'}}>Places</p>
                            <p style={{fontWidth:'bolder',fontSize:'14px'}}>Castle</p>
                            <p style={{fontWidth:'bolder',fontSize:'14px'}}>Farms </p>
                            <p style={{fontWidth:'bolder',fontSize:'14px'}}>Beach</p>
                            <p style={{fontWidth:'bolder',fontSize:'14px'}}>Learn more</p>


                        </div>

                        <div className="col-md-6 col-lg-3  text-right" style={{marginTop:"20px"}}>
                            <p style={{fontWidth:'bolder',fontSize:'18px'}}>About us</p>
                            <p style={{fontWidth:'bolder',fontSize:'18px'}}>Road map</p>
                            <p style={{fontWidth:'bolder',fontSize:'18px'}}>Creators</p>
                            <p style={{fontWidth:'bolder',fontSize:'18px'}}>Career</p>
                            <p style={{fontWidth:'bolder',fontSize:'18px'}}>Contact us</p>
                        </div>
                    </div>
                    <div style={{marginTop:"10px"}}>
                        &copy; 2022 Metabnb
                    </div>
                </div>
            </div>
        </section>

        
    </div>
  )
}

export default Footer
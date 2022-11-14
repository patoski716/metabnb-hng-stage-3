import React from 'react'
import '../Place.css'
import { Link } from 'react-router-dom'
import slider from '../images/slider.png'

import Frame1 from '../images/Frame 5.png';
import Frame2 from '../images/Frame 6.png';
import Frame3 from '../images/Frame 7.png';
import Frame4 from '../images/Frame 8.png';
import Frame5 from '../images/Frame 1.png';
import Frame6 from '../images/Frame 2.png';
import Frame7 from '../images/Frame 3.png';
import Frame8 from '../images/Frame 4.png';
import Frame9 from '../images/Frame 9.png';
import Frame10 from '../images/Frame 10.png';
import Frame11 from '../images/Frame 11.png';
import Frame12 from '../images/Frame 12.png';
import Frame13 from '../images/Frame 13.png';
import Frame14 from '../images/Frame 14.png';
import Frame15 from '../images/Frame 15.png';
import Frame16 from '../images/Frame 16.png';

import star from '../images/Star 2.png';


const category = [
    {title : "Resturant"}, 
    {title : "Cottage"}, 
    {title : "Cattle"}, 
    {title : "fantast city"}, 
    {title : "beach"}, 
    {title : "Carbins"}, 
    {title : "Off-grid"},
    {title : "Farm"}  
  ]

  const links = [
    {photo : Frame1}, 
    {photo : Frame2}, 
    {photo : Frame3}, 
    {photo : Frame4}, 
    {photo : Frame5}, 
    {photo : Frame6}, 
    {photo : Frame7},
    {photo : Frame8},
    {photo : Frame9}, 
    {photo : Frame10}, 
    {photo : Frame11}, 
    {photo : Frame12}, 
    {photo : Frame13}, 
    {photo : Frame14}, 
    {photo : Frame15},
    {photo : Frame16}  
  ]


const Place = () => {
  return (
    <div className='mt-5 pt-3'>
        <ul className="nav">
            <div className="container">
            {category.map((post)=>
                    <li key={post.id} className="li mx-1"><Link to="#">{post.title}</Link></li>
      )}
                    
                    <li className="li mt-2"><button className='btn btn-white' style={{border:'1px solid #434343'}} type='button'>Location  <img src={slider} alt="" height="30px" className='mx-2'/></button></li>
            </div>
        </ul>

        <section style={{fontSize:'12px'}}>
    <div className="container py-5">
    <div className="row">
      {/* begin card */}
    {links.map((post)=>
      <div  key={post.id} className="col-sm-12 col-md-6 col-lg-3 mb-5 mx-auto">
        <div className="card text-black " style={{maxHeight: '372px',background: 'linear-gradient(124.4deg, #FFFFFF 10.8%, #FFFFFF 87.34%)',border: '1px solid #D7D7D7',borderRadius:'15px'}}>
          
          <div className="card-body">
          <img
            src={post.photo}
            className="card-img-top"
            alt="Apple Computer"
            style={{maxHeight: '265px',border: '1px solid #D7D7D7',
            borderRadius: '15px'}}
          />
            <div>
              <div className="d-flex justify-content-between">
                <span>Desert king</span><span style={{fontWeight:"bolder"}}>1MBT per night</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>2345km away</span><span>available for 2weeks stay</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>
                <img src={star} alt="" className='me-2'/>
                <img src={star} alt="" className='me-2'/>
                <img src={star} alt="" className='me-2'/>
                <img src={star} alt="" className='me-2'/>
                <img src={star} alt="" className='me-2'/> 
                </span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      )}
      {/* end of card */}

      
    </div>
    </div>
  </section>
    </div>
  )
}

export default Place
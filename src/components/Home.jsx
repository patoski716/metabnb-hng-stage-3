import React from 'react'
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import First from '../images/image1.png';
import Second from '../images/image2.png';
import Third from '../images/image 3.png';
import Fourth from '../images/image 5.png';

import Mbtoken from '../images/Group59537.svg';
import Metamask from '../images/Group4040.svg';
import Opensea from '../images/Frame4041.svg';

import Frame1 from '../images/Frame 1.png';
import Frame2 from '../images/Frame 2.png';
import Frame3 from '../images/Frame 3.png';
import Frame4 from '../images/Frame 4.png';
import Frame5 from '../images/Frame 5.png';
import Frame6 from '../images/Frame 6.png';
import Frame7 from '../images/Frame 7.png';
import Frame8 from '../images/Frame 8.png';
import Frame9 from '../images/Frame 59546-1.png';

import star from '../images/Star 2.png';

const links = [
  {photo : Frame1}, 
  {photo : Frame2}, 
  {photo : Frame3}, 
  {photo : Frame4}, 
  {photo : Frame5}, 
  {photo : Frame6}, 
  {photo : Frame7},
  {photo : Frame8}  
]




const Home = () => {
  return (
    <div>
      <div className="container mt-5 pt-3">
      <div className="row">
        <div className="col-md-6 col-lg-8 center">
        <h1 style={{fontSize: '56px', lineHeight: '140%'}}>Rent a <span style={{color:'#a02279'}}>Place</span> away from <span style={{color:'#a02279'}}>Home</span> in the <span style={{color:'#a02279'}}>Metaverse</span></h1>
        <p style={{fontSize: '24px', lineHeight: '35px'}}>we provide you access to luxury and affordable houses<br/> in the metaverse, get a chance to turn your<br/> imagination to reality at your comfort zone</p>
        <div>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search for location"
            className="pe-2"
            aria-label="Search"
            style={{maxWidth:'380px',borderRadius:'8px 0px 0px 8px',background: 'rgba(247, 247, 247, 0.1)',border: '1px solid #A3A3A3',minHeight:'50px'}}
          />
          <Button className="btn-purple" style={{width:'200px',background: 'linear-gradient(90deg, #A02279 11.45%, #A02279 11.46%)',borderRadius:'0px 8px 8px 0px' }}>Search</Button>
        </Form>
      </div>
      

    </div>
    <div className="col-md-6 col-lg-4">
      <div className="container-flex">
        <div className="column">
          <img className="mt-1 pt-5 column-img" src={First} alt="" style={{marginBottom:'6px'}}/>
          <img src={Second} className="column-img" alt=""/>
        </div>
        <div className="column">
          <img src={Third} alt="" className="column-img " style={{marginBottom:'6px'}}/>
          <img src={Fourth} alt="" className="column-img mb-3"/>
        </div> 
      </div>            
    </div>
  </div>
  </div>
  {/* end of hero */}
  <section className="bg-purple mt-5">
  <div className="container text-center">
      <div className="row">
        <div className="col-md-4 lg-4 sm-12 mb-4 mt-4"><img src={Mbtoken} alt="mbtoken" /></div>
        <div className="col-md-4 lg-4 sm-12 mb-4 mt-4" ><img src={Metamask} alt="metamask"/></div>
        <div className="col-md-4 lg-4 sm-12 mb-4 mt-4"><img src={Opensea} alt="opensea"/></div>
      </div>
      
    </div>
   </section>

   <section className="mt-5 mb-5">
    <h1 className='text-center'>Inspiration for the next adventure</h1>
   </section>

  <section style={{fontSize:'12px'}}>
    <div className="container py-5">
    <div className="row">
      {/* begin card */}
    {links.map((post)=>
      <div  key={post.id} className="col-sm-12 col-md-6 col-lg-3 mb-5 mx-auto">
        <div class="card text-black mx-auto" style={{maxHeight: '372px',background: 'linear-gradient(124.4deg, #FFFFFF 10.8%, #FFFFFF 87.34%)',border: '1px solid #D7D7D7',borderRadius: '15px'}}>
          <div class="card-body">
          <img
            src={post.photo}
            class="card-img-top"
            alt="Apple Computer"
            style={{maxHeight: '265px',border: '1px solid #D7D7D7',
            borderRadius: '15px'}}
          />
            <div>
              <div class="d-flex justify-content-between">
                <span>Desert king</span><span style={{fontWeight:"bolder"}}>1MBT per night</span>
              </div>
              <div class="d-flex justify-content-between">
                <span>2345km away</span><span>available for 2weeks stay</span>
              </div>
              <div class="d-flex justify-content-between">
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

  <section className="mt-3 bg-purple">
    <div className="container">
      <div className="py-5 pb-5">
        <div className="row">

          <div className="col-md-6" style={{marginTop:"160px",marginBottom:"100px"}}>
            <p style={{fontSize:'48px',color:'#fff',marginBottom:"50px",fontWeight:"bolder"}}>Metabnb NFTs</p>
            <p style={{fontSize:'18px',color:'#fff',marginBottom:"50px"}}>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>

            <Link to="#"  className="btn btn-light text-purple" type="button">Learn more</Link>

          </div>

          <div className="col-md-6 medium">
            <img src={Frame9} alt="" style={{maxWidth:'100%'}}/>
          </div>
  
        </div>

      </div>
    </div>

  </section>


</div>
  )
}

export default Home
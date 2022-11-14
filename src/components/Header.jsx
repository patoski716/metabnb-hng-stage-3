import React, { Fragment, useState  } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import Logo from '../images/Vector.png'
import Modal from 'react-bootstrap/Modal';
import Vector1 from '../images/Vector1.png'
import Meta from '../images/meta.png'
import Walet from '../images/wallet.png'



const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Fragment>
      <Navbar collapseOnSelect expand="lg" bg="white"  variant="dark" className='sticky-top'>
        <Container>
          <Navbar.Brand href="/"><span><img src={Logo} alt="" /></span></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="bg-menu"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
            <Nav.Link href="" ><Link to='/' className='text-dark' style={{textDecoration:'none'}}>Home</Link></Nav.Link>
            <Nav.Link href="" ><Link to='/place' className='text-dark' style={{textDecoration:'none'}}>Place to stay</Link></Nav.Link>
            <Nav.Link href="" ><Link to='#' className='text-dark' style={{textDecoration:'none'}}>NFTs</Link></Nav.Link>
            <Nav.Link href="" ><Link to='#' className='text-dark' style={{textDecoration:'none'}}>Community</Link></Nav.Link>
            </Nav>
            <Nav>
            <button onClick={handleShow} className='text-white btn btn-purple rounded' style={{textDecoration:'none'}}>Connect wallet</button>
            </Nav>
            <Nav>
            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* modal box */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> <p style={{fontWeight:'bold', fontSize:'24px'}}>Connect Wallet</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p style={{fontSize:'16px'}}>Choose your preferred wallet:</p>
          <div className="redirect text-black mb-3" style={{fontWeight:'bolder'}}>
          <img src={Meta} alt="" className='px-2'/> Metamask
            <div className='px-5 mx-5'>
              <div className="px-5 mx-5">
                <div className='px-4 mx-1'>
                  <img src={Vector1} alt="" className='px-5'/>
                </div>
              </div>
            </div>
          </div>


          <div className="redirect text-black" style={{fontWeight:'bolder'}}>
          <img src={Walet} alt="" className='px-2' />WalletConnect
            <div className='px-5 mx-5'>
              <div className="px-5 mx-5">
                <div className=''>
                  <img src={Vector1} alt="" className='px-5'/>
                </div>
              </div>
            </div>
          </div>
          </Modal.Body>
        
      </Modal>
    </Fragment>
  )
}

export default Header
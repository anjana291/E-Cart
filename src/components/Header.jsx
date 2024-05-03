import { faCartShopping, faHeart,faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Header() {

  const wishlistarray = useSelector((state)=>state.wishlistReducer)
  console.log(wishlistarray);

  const cartarray = useSelector((state)=>state.cartReducer)
  console.log(cartarray);

  return (
    <>
      <Navbar expand="lg" className="bg-primary w-100" data-bs-theme="dark" style={{position:'fixed',top:'0px',zIndex:'1'}}>
      <Container>
        <Link to={'/'} style={{textDecoration:'none'}}>
          <Navbar.Brand className=''>
            <FontAwesomeIcon icon={faCartShopping} beat className='me-3'/><b>Shop-Cart</b>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link><Link to={'/wishlist'}><button className='btn btn-outline-info border rounded'><FontAwesomeIcon icon={faHeart} style={{color:'red'}} className='me-2'/>Wishlist<Badge bg="secondary" className='ms-2 rounded-circle'>{wishlistarray.length}</Badge></button></Link></Nav.Link>
            <Nav.Link><Link to={'/cart'}><button className='btn btn-outline-info border rounded'><FontAwesomeIcon icon={faCartPlus} className='me-2'/>Cart<Badge bg="secondary"  className='ms-2 rounded-circle'>{cartarray.length}</Badge></button></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header
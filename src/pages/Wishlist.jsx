import React from 'react'
import { faTrash, faCartPlus,faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row,Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { deletewishlistItems} from '../redux/slices/wishlistSlice';
import { addCartItem } from '../redux/slices/cartSlice';


function Wishlist() {

  const dispatch = useDispatch()

  const wishlistArray  = useSelector((state)=>state.wishlistReducer)
  console.log(wishlistArray);

  const handleAdd = (product) =>{
    dispatch(addCartItem(product))
    dispatch(deletewishlistItems(product.id))
  }
  
  return (
    <>
      <Row className='ms-5 me-3' style={{marginTop:'100px'}}>
           {wishlistArray?.length>0?
           wishlistArray.map((product)=>( <Col className='mb-5 p-4' sm={12} md={6} lg={4} xl={3}>
           <Card style={{ width: '16rem',backgroundColor:'white'}} className='rounded-3 w-100'>
             <Card.Img variant="top" src={product.thumbnail} style={{height:'200px'}}
             className='rounded-3' />
             <Card.Body className='text-dark'>
               <Card.Title>{product.title.slice(0,20)}</Card.Title>
               <Card.Text>
                 <p>{product.description.slice(0,50)}</p>
                 <p className='fw-border'>Price : ₹ {product.price}</p>
               </Card.Text>
               <div className='d-flex justify-content-between'>
               <button type='button' onClick={()=>dispatch(deletewishlistItems(product.id))} class="btn btn-outline-danger"><FontAwesomeIcon icon={faTrash} style={{color:'red'}}/></button>
               <button type='button' onClick={()=>handleAdd(product)} class="btn btn-outline-success"><FontAwesomeIcon icon={faCartPlus} style={{color:'green'}}/></button>
               </div>
             </Card.Body>
               </Card>
               </Col>  ))
           
          
              :
          
               <div className='d-flex justify-content-center align-items-center w-100 mb-5'>
                <div className='col-md-4'></div>
                <div className='col-md-4 d-flex justify-content-center align-items-center flex-column'>
                  <img src="https://cdn.dribbble.com/users/146773/screenshots/4228811/dribble_cart.gif" alt="" className='rounded-5'/>
                  <h3 className='text-danger mt-4'>Wishlist is empty</h3>
                  <Link to={'/'}><button className='btn btn-success text-dark mt-3'><FontAwesomeIcon icon={faArrowLeftLong} className='me-2'/>Back to Home</button></Link>
                </div>
                <div className='col-md-4'></div>
            </div> }
      
        </Row>
    </>
  )
}

export default Wishlist
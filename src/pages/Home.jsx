import { faHeart, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Row,Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import useFetch from '../Hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addwishlistItems } from '../redux/slices/wishlistSlice';
import { addCartItem } from '../redux/slices/cartSlice';

function Home() {
  const dispatch = useDispatch()

  const data = useFetch('https://dummyjson.com/products')
  console.log(data);

  return (
    <>
          <Row className='ms-3 me-3' style={{marginTop:'100px'}}>

          {data?.length>0?
          data?.map((product)=>(
            <Col className='mb-5 p-4' sm={12} md={6} lg={4} xl={3}>
          <Card style={{backgroundColor:'white'}} className='rounded-3 w-100'>
            <Card.Img variant="top" src={product.thumbnail} className='rounded-3' style={{height:'200px'}}/>
            <Card.Body className='text-dark'>
              <Card.Title>{product.title.slice(0,20)}</Card.Title>
              <Card.Text>
                <p>{product.description.slice(0,50)}</p>
                <p className='fw-border'>Price : $ {product.price}</p>
              </Card.Text>
              <div className='d-flex justify-content-between'>
              <button onClick={()=>dispatch(addwishlistItems(product))} type='button' class="btn btn-outline-danger"><FontAwesomeIcon icon={faHeart} style={{color:'red'}}/></button>
              <button onClick={()=>dispatch(addCartItem(product))} type='button' class="btn btn-outline-success"><FontAwesomeIcon icon={faCartPlus} style={{color:'green'}}/></button>
              </div>
            </Card.Body>
              </Card>
          </Col>
          ))
          
          :          
            <p>Loading....</p>}
      
        </Row>

        

    </>
  )
}

export default Home
import { faArrowLeftLong, faTrash, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { emptyCart, removeCartItem } from '../redux/slices/cartSlice'

function Cart() {
  const [total,setTotal] = useState(0)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const cartarray = useSelector((state)=>state.cartReducer)
  console.log(cartarray);

  const getTotal = () => {
    if (cartarray.length>0){
      const result = cartarray.map(item => item.price).reduce((price1,price2)=>price1+price2)
      console.log(result);
      setTotal(result)
    }
    else{
      setTotal(0)
    }
  }

  useEffect(()=>{
    getTotal()
  },[cartarray])

  const handleCheckOut = () =>{
    alert('Order Placed Successfully')
    dispatch(emptyCart())
    navigate('/')
  }
  
  return (
    <>
      {cartarray?.length>0 ?
        <div className='row my-5'>
          <div className="col-md-1"></div>
          <div className="col-md-6 mt-5 mb-5" style={{overflowX:'auto'}}>
            <table className='table w-100'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
               { cartarray?.map((product,index)=>(<tr>
                  <td>{index+1}</td>
                  <td>{product.title}</td>
                  <td><img src={product.thumbnail} alt="" style={{width:'150px', height:'150px'}}/></td>
                  <td>$ {product.price}</td>
                  <td><button onClick={()=>dispatch(removeCartItem(product.id))} className='btn btn-danger rounded-3'><FontAwesomeIcon icon={faTrash} /></button></td>
                </tr>))
                }
              </tbody>
            </table>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-3 mt-4">
            <div className='p-4'>
              <h2 className='text-primary mb-3'>Cart Summary</h2>
              <h5>Total Number Of Products : <span className='text-warning'>{cartarray.length}</span></h5>
              <h5>Total Price : <span className='text-warning'>$ {total}</span></h5>
              <button onClick={handleCheckOut} className='btn btn-success rounded-3 mt-4 mb-3 w-100 text-dark'>Check out</button>
            </div>
          </div>
          <div className="col-md-1"></div>
      </div>  
      :

            <div className='d-flex justify-content-center align-items-center w-100 mb-5' style={{marginTop:'100px'}}>
                <div className='col-md-4'></div>
                <div className='col-md-4 d-flex justify-content-center align-items-center flex-column'>
                  <img src="https://cdn.dribbble.com/users/146773/screenshots/4228811/dribble_cart.gif" alt="" className='rounded-5'/>
                  <h3 className='text-danger mt-4'>Cart is empty</h3>
                  <Link to={'/'}><button className='btn btn-success text-dark mt-3'><FontAwesomeIcon icon={faArrowLeftLong} className='me-2'/>Back to Home</button></Link>
                </div>
                <div className='col-md-4'></div>
            </div>      
          }
    </>
  )
}

export default Cart
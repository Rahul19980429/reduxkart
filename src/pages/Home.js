import React, { useEffect } from 'react'
import { fetchProduct } from '../redux/slices/ProductSlice'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../redux/slices/CartSlice'


const Home = () => {

  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.product)

  const addToCartClick=(product)=>{
    dispatch(add(product))
  }

  useEffect(() => {
    dispatch(fetchProduct())
  }, [])


  if (status === 'loading') {
    return (
      <div className='d-flex justify-content-center align-items-center' style={{height:'90vh'}}>
      <h2 >Loading...</h2>
      </div>
    )
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 my-2'>
          <h5 className='text-end'>Total Products : {data.length}</h5>
        </div>
      </div>
    <div className='row'>
      
     
      {data.map((product) => {
        return (
          <div className='col-lg-3 col-6 p-3' key={product.id}>
          <div className="card">
            <img src={product.image} height='250' width='150' className="card-img-top p-4" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text" style={{height:'20vh',overflow:'hidden'}}>{product.description}</p>
                <button onClick={()=>addToCartClick(product)} className="btn btn-primary">Add To Cart</button>
              </div>
          </div>
          </div>
        )
      })}
      </div>
    
    </div>
  )
}

export default Home

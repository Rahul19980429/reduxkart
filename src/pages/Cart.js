import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../redux/slices/CartSlice'
const Cart = () => {

    const cart = useSelector((state) => state.cart)

    const dispatch = useDispatch();

    const removeItemFromCart = (productId) => {
        dispatch(remove(productId))
    }

    if (cart.length === 0) {
        return (
            <div className='d-flex justify-content-center'>
                <h5 className='mt-3'>Cart Is Empty</h5>
            </div>
        )
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 my-2'>
                    <h5 className='text-end'>Total Products In Cart : {cart.length}</h5>
                </div>
            </div>
            <div className='row'>


                {cart.map((product) => {
                    return (
                        <div className='col-lg-12 p-3' key={product.id}>
                            <div className="row border border-4 rounded-2">
                                <div className='col-3'>
                                    <img src={product.image} height="100" alt="..." />
                                </div>
                                <div className="col-6 text-center">
                                    <h5 className="card-title my-4">{product.title}</h5>
                                </div>
                                <div className='col-3'>
                                    <button onClick={() => removeItemFromCart(product.id)} className='btn  my-4 btn-danger'>Remove</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Cart

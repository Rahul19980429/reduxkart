import { createSlice } from"@reduxjs/toolkit";

 
const STATUS = Object.freeze({
    IDEL:'idel',
    LOADING:'loading',
    ERROR:'error'

})

 const ProductSlice = createSlice({
    name:'product',
    initialState:{
        data:[],
        status:STATUS.IDEl
    },
    reducers:{
        setProduct(state,action){
            state.data= action.payload

        },
        setStatus(state,action){
            state.status=action.payload
        }
    }
    
 })

 export const {setProduct,setStatus} = ProductSlice.actions
 export default ProductSlice.reducer;

 export function fetchProduct(){
    return async function fetchProductThunk(dispatch,getState){
        dispatch(setStatus(STATUS.LOADING))
        try {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            dispatch(setProduct(data))
            dispatch(setStatus(STATUS.IDEL))
        } catch (error) {
            dispatch(setStatus(STATUS.ERROR))
        }
    }
 }
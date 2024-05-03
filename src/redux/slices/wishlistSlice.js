import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name : "wishlistSlice",
    initialState:[],
    reducers: {
            //actions
            //1. add items from home to wishlist
            addwishlistItems:(state, actions)=>{
                state.push(actions.payload)
            },
            //2.delete items from wishlist
            deletewishlistItems:(state,actions)=>{
                return state.filter((item)=>item.id!=actions.payload)
            }
    }
})

export const {addwishlistItems,deletewishlistItems}  = wishlistSlice.actions

export default wishlistSlice.reducer
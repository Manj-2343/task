import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:0,
    reducers:{
        addToCart:(state)=>state = state+1

    }
});
export const{addToCart} = cartSlice.actions;
export default cartSlice.reducer

// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//     name:"cart",
//     initialState:[],
//     reducers:{
//         addToCart:(state,action)=>{
//             const isExist = state.find(item=>item.id === action.payload.id)
//             if(isExist){
//                 isExist.quantity += 1;
//             }
//             else{
//                 state.push({...action.payload,quantity:1})
//             }
//         }
//     }
// })
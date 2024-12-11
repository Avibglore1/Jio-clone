import {createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name:'counterSlice',
    initialState:{
        count: 4
    },
    reducers:{
        increment : (state)=>{
            state.count +=1;
        },
        decrement: (state)=>{
            state.count -=1;
        }
    }
})

export default counterSlice
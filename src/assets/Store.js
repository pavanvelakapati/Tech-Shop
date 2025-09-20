import { configureStore} from "@reduxjs/toolkit";
import cartreducer from "./Cartslice"


const store = configureStore({
    reducer:{
    cart:cartreducer 
    }
})
export default store
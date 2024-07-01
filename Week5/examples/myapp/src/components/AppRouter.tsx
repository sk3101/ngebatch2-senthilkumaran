import React from "react"

import {Route, Routes} from 'react-router-dom'
import Home from '...'

export default function() {
    return(
        <Routes>
            <Route path= '/home' element={<Home/>}></Route>
            <Route path= '/aboutus' element={<AboutUs/>}></Route>
            <Route path= '/home' element={<ContactUs/>}></Route>
        </Routes>
    )
}
import React from "react";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Home';

import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

class RouteTest extends React.Component {
    render(){
        return(
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route path="/page1" element={<Page1/>} />
                    <Route path="/page2" element={<Page2/>} />
                    <Route path="/page3" element={<Page3/>} />
                </Routes>
            </BrowserRouter>
        )
    }
}

export default RouteTest;
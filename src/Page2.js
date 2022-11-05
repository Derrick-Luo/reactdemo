import React from 'react';
import {Link} from 'react-router-dom'
import './style.css'
class Page2 extends React.Component {
    render(){
        return(
            <div>
                <div id='mydiv'>
                    This is Page2!
                </div>
                <Link to="/">Back Home</Link><br></br>
            </div>
        );
    }
}
export default Page2;
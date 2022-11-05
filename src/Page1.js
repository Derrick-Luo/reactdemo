import React from 'react';
import {Link} from 'react-router-dom'

class Page1 extends React.Component {
    render(){
        return(
            <div>
                <div>
                    This is Page1!
                </div>
                <Link to="/">Back Home</Link><br></br>
            </div>
        );
    }
}
export default Page1;
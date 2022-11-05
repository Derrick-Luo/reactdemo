import React from 'react';
import {Link} from 'react-router-dom'

class Page3 extends React.Component {
    render(){
        return(
            <div>
                <div>
                    This is Page3!
                </div>
                <Link to="/">Back Home</Link><br></br>
            </div>
        );
    }
}
export default Page3;
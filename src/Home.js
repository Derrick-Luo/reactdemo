import React from 'react';
import {Link} from 'react-router-dom'

class Home extends React.Component {
    render(){
        return(
            <div>
                <div>
                    This is Home!
                </div>
                <div>
                    <Link to="/page1">Page1</Link>
                    <Link to="/page2">Page2</Link>
                    <Link to="/page3">Page3</Link>
                </div>
            </div>
        );
    }
}
export default Home;
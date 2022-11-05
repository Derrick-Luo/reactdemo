import React from 'react';
import {Link} from 'react-router-dom'

class Home extends React.Component {
    render(){
        return(
            <div>
                <div>
                    Home!Home!Home!!!
                    #Test Route and Link ={'>'} This is Home!
                </div>
                <div>
                    <Link to="/page1">Page1</Link><br></br>
                    <Link to="/page2">Page2</Link><br></br>
                    <Link to="/page3">Page3</Link><br></br>
                </div>
            </div>
        );
    }
}
export default Home;
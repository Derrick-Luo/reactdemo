import React from 'react';
import {Link} from 'react-router-dom'

class Page1 extends React.Component {
    render(){
        return(
            <div>
                <div style={{
                        fontSize:'40px', 
                        width:'300px',
                        height:'80px',
                        backgroundColor:'red',             
                        textAlign:'center'
                    }}>
                    This is Page1!
                </div>
                <Link to="/">Back Home</Link><br></br>
            </div>
        );
    }
}
export default Page1;
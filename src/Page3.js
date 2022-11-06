import React from 'react';
import {Link} from 'react-router-dom'

class Page3 extends React.Component {
    constructor(props){ 
    //构造函数   
    super(props);
        this.state = {
            mytext : '',
        }
    }
    getData(){ 
    //请求数据函数       {"name":"LuoCheng","IQ":"65535","date":"2022-11-6"}
        fetch('http://127.0.0.1:8081/json',{method:'GET'})
        .then(res=>res.json())
        .then(
            data=>{this.setState({mytext:data})}
        )
    }  
    componentWillMount(){
      this.getData();
    }
    render(){
        return(
            <div>
                <div>
                    This is Page3!  #test fetch ={'>'}
                    <div>name:{this.state.mytext.name}</div>
                    <div>IQ:{this.state.mytext.IQ}</div>
                    <div>date:{this.state.mytext.date}</div>
                </div>
                <Link to="/">Back Home</Link><br></br>
            </div>
        );
    }
}
export default Page3;
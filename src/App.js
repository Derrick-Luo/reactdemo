import React from "react";
import View from "./View"

class App extends React.Component {
    constructor(props) { 
        //构造函数
        super(props);
        this.state = {
            text:'This is TEXTTT!'
        }
    }
    render(){
        let text = this.state.text;
        return(
            <View text={text}/>
        )
    }
}

export default App;
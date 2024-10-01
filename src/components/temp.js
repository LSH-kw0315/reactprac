import { Component } from "react";
import { useState } from "react";

class Temp extends Component{
    constructor(props){
        super(props);
        this.state={
            title:"sex",
            body:"테스트중",
            number:0
        };
    }
    render(){
        const {title,body,number}=this.state;
        return (
            <div>
                <h1>{title}</h1>
                <p>{body}</p>
                <p>{number}</p>
                {/*
                <button onClick=
            {()=>
                {
                    this.setState
                    (
                    {
                    number:number+1,

                    }
                    )
                }
            }>+1</button>
        */}
        <button onClick={function(){
            this.setState({
                number:number+1
            });
        }.bind(this)}>+1</button>
            </div>
        );
    }
}

/*
const Temp = ()=>{
    const [number,setNumber]=useState(0);
    const [title,setTitle]=useState("sex");
    const [body,setBody]=useState("테스트중");

    return (
        <div>
            <h1>{title}</h1>
            <p>{body}</p>
            <p>{number}</p>
            <button onClick={()=>{
                setNumber(number+1);
                setBody(body.concat(number));
                setTitle(title.concat(number));
            }}>+1</button>
        </div>
    );
};
*/

const Temp2=({title,body,number})=>{
    let this_title=title;
    let this_body=body;
    let this_number=Number(number);
    return(
    <div>
        <h1>{this_title}</h1>
        <p>{this_body}</p>
        <p>{this_number}</p>
        <button onClick={()=>{
            this_number+=1;
            this_title=this_title.concat(String(this_number));
            this_body=this_body.concat(String(this_number));
            console.log(this_number);
            console.log(this_body);
            console.log(this_title);
        }}>+1</button>
    </div>
    );
}
Temp2.defaultProps={
    title:"sex",
    body:"테스트중",
    number:0    
}

export {Temp2};
export default Temp;
import { Component } from "react";
class TOC extends Component{
    shouldComponentUpdate(newProps,newState){
      console.log("new:"+newProps.data+", "+"old:"+this.props.data);
      if(newProps.data===this.props.data){
        return false;
      }else{
        return true;
      }
    }
    render(){
      console.log('TOC render');
        let lists=[];
        let data=this.props.data;
        let i=0;
        while(i <data.length){
            lists.push(
            <li key={data[i].id}>
              <a 
              href={"/contnent/"+data[i].id}
              data-id={data[i].id}
              onClick={function(e){e.preventDefault();this.props.onChangePage(e.target.dataset.id);}.bind(this)}
              >{data[i].title}
              </a>
            </li>);
            i++;
        }
      return (
        <nav>
        <ul>
            {lists}
        </ul>
      </nav>
      );
    }
}
/*
function TOC(){
    return (
        <nav>
        <ul>
            <li><a href="1.html">HTML</a></li>
            <li><a href="2.html">CSS</a></li>
            <li><a href="3.html">JavaScript</a></li>
        </ul>
      </nav>
    );
}
*/
export default TOC;
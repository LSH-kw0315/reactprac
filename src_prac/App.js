import './App.css';
import { Component } from 'react';
import TOC from './components/TOC'
import ReadContent from './components/ReadContent';
import Subject from './components/Subject';
import Temp,{Temp2} from './components/temp';
import Control from './components/Control';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>s
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
class App extends Component{
  constructor(props){
    super(props);
    this.max_content_id=3;
    this.state=
    {
      mode:'welcome',
      selected_content_id:2,
      welcome:{title:'welcome', description:'Hello, react!'},
      subject:
      {
        title:'WEB',
        sub:'World Wide Web'
      },
      content:
      [
        {id:1, title:'DNF', description:'horizontal and vertical scroll mmorpg'},
        {id:2, title:'MAPLE', description:'horizontal scroll mmorpg'},
        {id:3, title:'LOL',description:'AOS'},
      ]
    };
  }
  getReadContent(){
    let i=0;
    while(i<this.state.content.length){
      let data=this.state.content[i];
      if(data.id===this.state.selected_content_id){
        return data;
      }
      i++;
    }
  }
  getContent(){
    let _title,_description,_article=null;
    if(this.state.mode==='welcome'){
      _title=this.state.welcome.title;
      _description=this.state.welcome.description;
      _article=<ReadContent title={_title} description={_description}></ReadContent>
    }else if(this.state.mode==='read'){
      let data=this.getReadContent();
      _article=<ReadContent title={data.title} description={data.description}></ReadContent>
    }else if(this.state.mode==="create"){
      _article=<CreateContent onSubmit={function(title_val,description_val){
        this.max_content_id++;
        let val={id:this.max_content_id,title:title_val,description:description_val};
        this.setState({content:this.state.content.concat(val),mode:'read',selected_content_id:this.max_content_id})
      }.bind(this)}></CreateContent>
    }else if(this.state.mode==="update"){
      let _content=this.getReadContent();
      _article=<UpdateContent data={_content} onSubmit={function(_id,title_val,description_val){
        let copy=Array.from(this.state.content);
        let i;
        for(i=0;i<copy.length;i++){
          if(copy[i].id===_id){
            copy[i]={id:_id,title:title_val,description:description_val};
            break;
          }
        }
        this.setState({content:copy,mode:'read'});
      }.bind(this)}></UpdateContent>
    }
    return _article;
  }
  render(){
    console.log('App render');
    
    return (
      <div className='App'>

      <Subject 
      title={this.state.subject.title} 
      sub={this.state.subject.sub}
      onChangePage={function(){this.setState({mode:'welcome'})}.bind(this)}
      ></Subject>
      {/*혹은 onChangePage={()=>{this.setState({mode:'welcome'})}*/}
      <TOC onChangePage={function(id){this.setState({mode:'read',selected_content_id:Number(Number(id))})}.bind(this)}data={this.state.content}></TOC>
      <Control onChangeMode={function(val){
        if(val==='delete'){
          if(window.confirm(`really delete ${this.state.content[this.state.selected_content_id-1].title}?`)){
            let i=0;
            let _content=Array.from(this.state.content);
            while(i<_content.length){
              if(_content[i].id==this.state.selected_content_id){
                _content.splice(i,1);
                break;
              }
              i++;
            }
            this.setState({content:_content,mode:'welcome'});
            alert("deleted.");
          }
        }else{
          this.setState({mode:val});
        }
      }.bind(this)}></Control>
      {this.getContent()}
      <Temp></Temp>
      </div>

    );
  }
}





export default App;

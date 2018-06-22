import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

// console.log(React ) ;

const root = document.getElementById('root');
const aName = 'Eva';
// const headerOne = <h1>hello {aName} </h1>;
// ReactDOM.render(headerOne, root);


let zero = 0;

class Voxjuyn extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   isOpen: true
    // }
    // this.handleClick = () =>  console.log(zero++);

  }

    state = {
      isOpen: true
    }

    handleClick = () => {
      console.log(zero++);
      this.setState({
        isOpen: !this.state.isOpen
      })

    }
  render() {
    // console.log(this);
    const body = this.state.isOpen && <h2>hello {this.props.name} </h2>
    return (
    <div className="container">
    <button onClick={this.handleClick} className="button success">
    {this.state.isOpen ? 'Close' : 'Open'}
    </button>
    <h1>hello {this.props.name} </h1>
    {body}
     </div> )
  }
}

// let handleClick = () =>  console.log(zero++);



// function Voxjuyn(pro) {
//   console.log(pro);
//   return <div>
//   <h1 style={{color:"red"}}>hello {pro.name} </h1>
//   <span>this is span</span>
//   </div>
// }

ReactDOM.render(<Voxjuyn name="Emma"  demo/>, root);




// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

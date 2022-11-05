// import logo from './logo.svg';
import './App.css';
import Phones from './Components/Phones/Phones';
import Todos from './Components/Todos/Todos';

function App() {
  return (
    <div className="App">
      <Blogs></Blogs>
      {/* <Todos></Todos> */}
      <Phones></Phones>
    </div>
  );
}


function Blogs(props) {
  return (
    <div>
      <small className='header-first'> { props.name}</small>
    </div>
  )
}

export default App;

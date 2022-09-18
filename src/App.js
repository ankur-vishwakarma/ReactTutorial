import Navbar from './Navbar'; // need not to use .js (lets nest this inside App(root) component)
import Home from './Home';

// a component is a function and we always return something (mostly jsx) - just a function which returns a jsx template and exported at the bottom of file
function App() { // this is the root component, and when rendering this is rendered first, we can have a component tree (can keep nesting components)
  // we can write any valid js code inside this function before we return

  let someData = "dataPassedFromProps";

  return (
    <div className="App">
      <Navbar /> 
      <div className="content">
        <Home SomeProp={someData} />
      </div>
    </div>
  );
}

// we always export the component so that we can use in other files
export default App;

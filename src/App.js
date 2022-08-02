import Home from "./Components/Home";
import Login from "./Components/Login";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">

     <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/login"  component={Login}/>
     </Switch>
    </div>
    </Router>
  );
}

export default App;

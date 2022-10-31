import './App.css';
import { Route, Switch } from "react-router-dom";
import RegistrForm from './conponents/registerForm';
import CardPage from './conponents/cardPage';
function App() {
  return (
    <div className="App">
     <Switch>
                <Route path={"/"} exact component={CardPage}/>
                <Route path={"/RegistrForm"} component={RegistrForm}/>
      </Switch>
    </div>
  );
}

export default App;

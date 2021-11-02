
import './App.css';
import Home from './pages/Home'
import Etudiants from './pages/Etudiants';
import AttributParrains from './pages/AttributParrains';
import ParrainsFieuls from './pages/ParrainsFieuls';
import { Link, Route, Switch } from "react-router-dom"

function App() {
  return (
    <div className="">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/etudiants" component={Etudiants} />
        <Route path="/attribution" component={AttributParrains} />
        <Route path="/parrainfieul" component={ParrainsFieuls} />
      </Switch>
    </div>
  );
}

export default App;

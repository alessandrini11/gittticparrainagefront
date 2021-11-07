
import './App.css';
import Home from './pages/Home'
import Etudiants from './pages/Etudiants';
import AttributParrains from './pages/AttributParrains';
import ParrainsFieuls from './pages/ParrainsFieuls';
import Formulaire from './components/Formulaire';
import { Link, Route, Switch } from "react-router-dom"
import Login from './pages/Login';

function App() {
  return (
    <div className="">
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/home" component={Home} />
        <Route exact path="/etudiants" component={Etudiants} />
        <Route path="/attribution" component={AttributParrains} />
        <Route path="/parrainfieul" component={ParrainsFieuls} />
        <Route path="/etudiants/ajoutparrain" component={Formulaire} />
      </Switch>
    </div>
  );
}

export default App;

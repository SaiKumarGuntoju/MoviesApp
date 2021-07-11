import {Route, Switch} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import './App.css'
import Popular from './components/Popular'
import SpecificMovie from './components/SpecificMovie'

const App = () => (
  <Switch>
    <Route exact path="/login/" component={LoginForm} />
    <Route exact path="/" component={Home} />
    <Route exact path="/popular" component={Popular} />
    <Route exact path="/movie/:id" component={SpecificMovie} />
  </Switch>
)
export default App

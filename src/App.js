import Home from "./components/Home"
import Login from "./components/Login"
import {Switch,Route} from "react-router-dom"

const App=()=>{
  return(
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={Login}/>
    </Switch>
  )
}

export default App
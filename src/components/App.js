import React ,{Component} from 'react'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'

import Root from "./Root"
import store from "../store/index"


class App extends Component{
    render(){
       return(
        <Provider store={store}>
           <Router history={hashHistory}>
               <Route path='/' component={Root}/>
           </Router>
        </Provider>
       );
   }
}

export default App;
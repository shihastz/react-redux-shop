import React from "react";
import "./index.css";
import CakeContainer from "./component/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCakeContainer from "./component/HooksCakeContainer";
import IceCreamContainer from "./component/IceCreamContainer";
import NewCakeContainer from "./component/NewCakeContainer";
import UserContainer from "./component/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Shop</h1>
        <CakeContainer />
        <IceCreamContainer/>
        <br/>
        <hr/>
        <HooksCakeContainer/>
        <br/>
        <hr/>
        <NewCakeContainer/>
        
        <UserContainer/>
        
      </div>
    </Provider>
  );
}

export default App;

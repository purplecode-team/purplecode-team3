import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { ApolloProvider } from "@apollo/client";
import { client } from "./lib/graphql";
import { GlobalStyle } from "./components/common/GlobalStyle";
import Main from "./pages/Main";
import Search from "./pages/Search";
import Category from "./pages/Category";
import SignUpPage from "./pages/SignUp";
import Login from "./pages/Login";
import UploadProduct from "./pages/UploadProduct";
import Product from "./pages/Product";
import { loadLocalUser, loadSessionUser } from "./lib/redux/User/UserSlice";

function App() {
  loadLocalUser();
  loadSessionUser();

  return (
    <Router>
      <ApolloProvider client={client}>
        <div className="App">
          <GlobalStyle />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/search" component={Search} />
            <Route path="/category/:id" component={Category}/>
            <Route path="/signup" component={SignUpPage} />
            <Route path="/login" component={Login} />
            <Route path="/uploadProduct" component={UploadProduct} />
            <Route path="/product/:category/:id" component={Product} />

          </Switch>
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;

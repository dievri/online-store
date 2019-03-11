import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

import "./App.css";
import { routes } from "./routes";
import { AdminPage } from "./scenes/admin";
import { products } from "./data/product";

const getProducts = async () => products;

class App extends Component {
  state = {
    products: []
  };

  async componentDidMount() {
    const prods = await getProducts();
    this.setState({
      products: products
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <p>
            <Link to={routes.admin}>Admin</Link>
          </p>
        </header>
        <Route
          exact
          path={routes.admin}
          render={renderProps => (
            <AdminPage productList={this.state.products} {...renderProps} />
          )}
        />
      </div>
    );
  }
}

export default App;

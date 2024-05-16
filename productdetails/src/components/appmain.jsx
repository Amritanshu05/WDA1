import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './ProductList';
import ProductPage from './ProductPage';

const Appmain = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/products/:id" render={({ match }) => {
          const product = products.find(item => item.id === match.params.id);
          return <ProductPage product={product} />;
        }} />
      </Switch>
    </Router>
  );
};

export default Appmain;

import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const ProductPrice = React.lazy(() =>
  import(/* webpackChunkName: "second" */ './Productprice')
);

const SocialLink = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/productprice`} />
      <Route
        path={`${match.url}/productprice`}
        render={(props) => <ProductPrice {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default SocialLink;
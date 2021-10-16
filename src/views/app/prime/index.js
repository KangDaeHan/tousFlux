import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Prime = React.lazy(() =>
  import(/* webpackChunkName: "second" */ './Prime')
);
const Channels = React.lazy(() =>
  import(/* webpackChunkName: "second" */ './Channels')
);

const Product = React.lazy(() =>
  import(/* webpackChunkName: "second" */ './Product')
);

const PrimeLink = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/prime`} />
      <Route
        path={`${match.url}/prime`}
        render={(props) => <Prime {...props} />}
      />
      <Route
        path={`${match.url}/channels`}
        render={(props) => <Channels {...props} />}
      />
      <Route
        path={`${match.url}/product`}
        render={(props) => <Product {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default PrimeLink;
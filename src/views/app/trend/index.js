import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Overview = React.lazy(() =>
  import(/* webpackChunkName: "start" */ './Overview')
);
const OverViewLink = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/overview`} />
      <Route
        path={`${match.url}/overview`}
        render={(props) => <Overview {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default OverViewLink;

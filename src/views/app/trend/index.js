import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

<<<<<<< Updated upstream
const Overview = React.lazy(() =>
  import(/* webpackChunkName: "start" */ './Overview')
);

const GoogleAnalytics = React.lazy(() =>
  import(/* webpackChunkName: "googleAnalytics" */ './googleAnalytics')
);

export const OverViewLink = ({ match }) => (
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

export const TrendMenu = ({ match }) => (
=======
const GoogleAnalytics = React.lazy(() =>
  import(/* webpackChunkName: "googleAnalytics" */ './googleAnalytics')
);
const TrendMenu = ({ match }) => (
>>>>>>> Stashed changes
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/googleAnalytics`} />
      <Route
        path={`${match.url}/googleAnalytics`}
        render={(props) => <GoogleAnalytics {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
<<<<<<< Updated upstream
=======
export default TrendMenu;
>>>>>>> Stashed changes

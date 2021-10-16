import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Search = React.lazy(() =>
  import(/* webpackChunkName: "second" */ './Search')
);

const SearchLink = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/search`} />
      <Route
        path={`${match.url}/search`}
        render={(props) => <Search {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default SearchLink;
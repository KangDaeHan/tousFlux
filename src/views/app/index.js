import React, { Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// [D]모바일 일 경우 AppLayout import 하지 않음 
// import AppLayout from '../../layout/AppLayout';
// [D]모바일 일 경우 AppLayout import 하지 않음

// import { ProtectedRoute, UserRole } from '../../helpers/authHelper';

const Gogo = React.lazy(() =>
  import(/* webpackChunkName: "viwes-gogo" */ './gogo')
);
const SecondMenu = React.lazy(() =>
  import(/* webpackChunkName: "viwes-second-menu" */ './second-menu')
);
const AboutLink = React.lazy(() =>
  import(/* webpackChunkName: "viwes-blank-page" */ './about')
);
const PrimeLink = React.lazy(() =>
  import(/* webpackChunkName: "viwes-blank-page" */ './prime')
);
const OverViewLink = React.lazy(() =>
  import(/* webpackChunkName: "viwes-blank-page" */ './trend')
);
const SocialLink = React.lazy(() =>
  import(/* webpackChunkName: "viwes-blank-page" */ './socialListening')
);
const OnlineLink = React.lazy(() =>
  import(/* webpackChunkName: "viwes-blank-page" */ './onlineRetailer')
);

// 모바일
const SearchLink = React.lazy(() =>
  import(/* webpackChunkName: "viwes-blank-page" */ './search')
);
const BasicLink = React.lazy(() =>
  import(/* webpackChunkName: "viwes-blank-page" */ './basic')
);

const App = ({ match }) => {
  return (
    // [D]모바일 일 경우 AppLayout import 하지 않음
    // <AppLayout>
      <div className="dashboard-wrapper">
        <Suspense fallback={<div className="loading" />}>
          <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/gogo`} />
            <Route
              path={`${match.url}/gogo`}
              render={(props) => <Gogo {...props} />}
            />
            <Route
              path={`${match.url}/second-menu`}
              render={(props) => <SecondMenu {...props} />}
            />
            <Route
              path={`${match.url}/about`}
              render={(props) => <AboutLink {...props} />}
            />
            <Route
              path={`${match.url}/prime`}
              render={(props) => <PrimeLink {...props} />}
            />
            <Route
              path={`${match.url}/trend`}
              render={(props) => <OverViewLink {...props} />}
            />
            <Route
              path={`${match.url}/socialListening`}
              render={(props) => <SocialLink {...props} />}
            />
            <Route
              path={`${match.url}/onlineRetailer`}
              render={(props) => <OnlineLink {...props} />}
            />
            <Route
              path={`${match.url}/basic`}
              render={(props) => <BasicLink {...props} />}
            />
            <Route
              path={`${match.url}/search`}
              render={(props) => <SearchLink {...props} />}
            />
            <Redirect to="/error" />
          </Switch>
        </Suspense>
      </div>
    // </AppLayout>
  );
};

const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(connect(mapStateToProps, {})(App));

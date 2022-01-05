import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Product = React.lazy(() =>
    import(/* webpackChunkName: "second" */ './Product')
);

const GraphInfo = React.lazy(() =>
    import(/* webpackChunkName: "second" */ './GraphInfo')
);

const EditPage = React.lazy(() =>
    import(/* webpackChunkName: "second" */ './EditPage')
);

const Loading = React.lazy(() =>
    import(/* webpackChunkName: "second" */ './Loading')
);

const BasicLink = ({ match }) => (
    <Suspense fallback={<div className="loading" />}>
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/basic`} />
            <Route
                path={`${match.url}/product`}
                render={(props) => <Product {...props} />}
            />
            <Route
                path={`${match.url}/graphinfo`}
                render={(props) => <GraphInfo {...props} />}
            />
            <Route
                path={`${match.url}/editpage`}
                render={(props) => <EditPage {...props} />}
            />
            <Route
                path={`${match.url}/loading`}
                render={(props) => <Loading {...props} />}
            />
            <Redirect to="/error" />
        </Switch>
    </Suspense>
);
export default BasicLink;
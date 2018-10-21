import * as React from "react";
import * as Router from "react-router";
import { Switch, Route, Redirect } from "react-router-dom";

import Loadable from "components/Loadable";
import NotFound from "components/NotFound";
const Changelog = Loadable(() => import("./Changelog"));

const Examples = Loadable(() => import("./Examples"));
const A11yPropTypes = Loadable(() => import("./A11yPropTypes"));
const A11y: React.SFC<Router.RouteComponentProps<void>> = ({ match }) => (
  <Switch>
    <Redirect exact={true} from={match.path} to={`${match.path}/examples`} />
    <Route path={`${match.path}/examples`} component={Examples} />
    <Route path={`${match.path}/proptypes`} component={A11yPropTypes} />
    <Route path={`${match.path}/changelog`} component={Changelog} />
    <Route component={NotFound} />
  </Switch>
);

export default A11y;

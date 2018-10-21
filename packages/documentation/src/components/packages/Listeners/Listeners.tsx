import * as React from "react";
import * as Router from "react-router";
import { Switch, Route, Redirect } from "react-router-dom";

import Loadable from "components/Loadable";
import NotFound from "components/NotFound";

const Examples = Loadable(() => import("./Examples"));
const ListenersPropTypes = Loadable(() => import("./ListenersPropTypes"));
const Changelog = Loadable(() => import("./Changelog"));

const Listeners: React.SFC<Router.RouteComponentProps<void>> = ({ match }) => (
  <Switch>
    <Redirect exact={true} from={match.path} to={`${match.path}/examples`} />
    <Route path={`${match.path}/examples`} component={Examples} />
    <Route path={`${match.path}/proptypes`} component={ListenersPropTypes} />
    <Route path={`${match.path}/changelog`} component={Changelog} />
    <Route component={NotFound} />
  </Switch>
);

export default Listeners;

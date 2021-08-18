import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import InstitutionsMap from "./pages/InstitutionsMap";
import Institution from "./pages/Institution";
import CreateInstitution from "./pages/CreateInstitution";

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/app" component={InstitutionsMap} />
                
                <Route path="/institutions/create" component={CreateInstitution} />
                <Route path="/institutions/:id" component={Institution} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
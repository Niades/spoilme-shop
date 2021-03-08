import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { DefaultLayout } from "./layouts/Default";
import { LoadingSpinner } from "./components/LoadingSpinner";

const Checkout = React.lazy(() => import("./pages/checkout"));
const UserShowcase = React.lazy(() => import("./pages/user-showcase"));

function App() {
  return (
    <Router>
      <DefaultLayout>
        <Suspense fallback={<LoadingSpinner />}>
          <Switch>
            <Route
              path="/loading"
              children={(<LoadingSpinner />)}
            />
            <Route
              path="/:username/gift/:productId"
              children={(<Checkout />)}
            />
            <Route
              path="/:username"
              children={(<UserShowcase />)}
            />
          </Switch>
        </Suspense>
      </DefaultLayout>
    </Router>
  );
}

export default App;

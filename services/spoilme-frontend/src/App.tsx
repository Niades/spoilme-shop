import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { DefaultLayout } from "./layouts/Default";
import { LoadingSpinner } from "./components/LoadingSpinner";

const Home = React.lazy(() => import("./pages/home"));
const UserShowcase = React.lazy(() => import("./pages/user-showcase"));
const ProductDetails = React.lazy(() => import("./pages/details"));
const Checkout = React.lazy(() => import("./pages/checkout"));
const HowItWorks = React.lazy(() => import("./pages/how-it-works"));

function App() {
  return (
    <Router>
      <DefaultLayout>
        <Suspense fallback={<LoadingSpinner />}>
          <Switch>
            <Route
              path="/how-it-works"
              children={(<HowItWorks />)}
            />
            <Route
              path="/:username/gift/:productId/checkout"
              children={(<Checkout />)}
            />
            <Route
              path="/:username/gift/:productId/"
              children={(<ProductDetails />)}
            />
            <Route
              path="/:username"
              children={(<UserShowcase />)}
            />
            <Route
              path="/"
              children={(<Home />)}
            />
          </Switch>
        </Suspense>
      </DefaultLayout>
    </Router>
  );
}

export default App;

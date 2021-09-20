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
const AboutUs = React.lazy(() => import("./pages/about-us"));
const Faq = React.lazy(() => import("./pages/faq"));

function App() {
  return (
    <Router>
      <DefaultLayout>
        <Suspense fallback={<LoadingSpinner />}>
          <Switch>
            <Route
              path="/faq"
              children={(<Faq/>)}
            />
            <Route
              path="/about-us"
              children={(<AboutUs />)}
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

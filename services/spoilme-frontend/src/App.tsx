import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { DefaultLayout } from "./layouts/Default";
import UserShowcase from "./pages/user-showcase";
import Order from "./pages/order";

function App() {
  return (
    <Router>
      <DefaultLayout>
        <Switch>
          <Route
            path="/:username/gift/:productId"
            children={(<Order />)}
          />
          <Route
            path="/:username"
            children={(<UserShowcase />)}
          />
        </Switch>
      </DefaultLayout>
    </Router>
  );
}

export default App;

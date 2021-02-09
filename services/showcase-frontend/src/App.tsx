import './App.css';
import { ShowcaseLayout } from "./layouts/Showcase";
import { ProfileHeader } from "./components/ProfileHeader";
import { ProductList } from "./components/ProductsList";

function App() {
  return (
    <ShowcaseLayout>
      <ProfileHeader />
      <ProductList />
    </ShowcaseLayout>
  );
}

export default App;

import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import List from "./List";
import Conditional from "./Conditional";
import SocialCountButton from "./props/SocialCountButton";
import SelectInput from "./props/SelectInput";
import Container from "./props/Container";
import ClickCounter from "./state/ClickCounter";
import ProductList from "./state/ProductList";

function App() {
  return (
    <Container>
      <List />
      <Conditional />

      <hr />
      <h1>Props</h1>
      <hr />

      <div>
        <SocialCountButton buttonText="Watch" icon="far fa-eye" />
        <SocialCountButton buttonText="Star" icon="far fa-star" />
        <SocialCountButton buttonText="Fork" icon="fas fa-code-branch" />

        <hr />

        <SelectInput options={["Berlim", "São Paulo", "Miami", "Amsterdam"]} />
      </div>

      <hr />
      <h1>State</h1>
      <hr />

      <div>
        <ClickCounter />

        <hr />

        <ProductList />
      </div>
    </Container>
  );
}

export default App;

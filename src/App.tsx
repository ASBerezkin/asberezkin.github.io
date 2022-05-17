import "./normalize.css";
import "./index.css";
import { Grid } from "./components/Grid/Grid";
import { Header } from "./components/Header/Header";
import { AboutTechnologies } from "./components/AboutTechnologies/AboutTechnologies";

function App() {
  return (
    <div className="App theme-light">
      <Grid>
        <Header />
        <AboutTechnologies />
      </Grid>
    </div>
  );
}

export default App;

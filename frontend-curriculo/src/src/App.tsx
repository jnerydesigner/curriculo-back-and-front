import { Home } from "./home";
import { GlobalStyle } from "./styles/globalStyles";
import { BrowserRouter as Router } from "react-router-dom";
import { VariableProvider } from "./context/VariablesContext";

function App() {
  return (
    <>
      <VariableProvider>
        <Router>
          <GlobalStyle />
          <Home />
        </Router>
      </VariableProvider>
    </>
  );
}

export default App;

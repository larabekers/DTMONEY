import "../src/styles/global.css";
import { Dashboard } from "./components/Deshboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}

export default App;

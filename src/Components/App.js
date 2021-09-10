import "../Style/App.css";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Quiz from "./Pages/Quiz";
import Sinup from "./Pages/Sinup";

function App() {
  return (
    <Layout>
      {/* <Home />
      <Sinup />
      <Login /> */}
      <Quiz />
    </Layout>
  );
}

export default App;

import "./App.css";
import Routes from "./routes";
import Login from "./pages/Login";
function App() {
  const code = new URLSearchParams(window.location.search).get(`code`);
  return (
    <div className="container">{code ? <Routes code={code} /> : <Login />}</div>
  );
}

export default App;
